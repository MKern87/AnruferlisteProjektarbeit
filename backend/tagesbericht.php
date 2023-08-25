<?php

error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once('connect.php');

$database = new Database();
$db = $database->connect();

$data = json_decode(file_get_contents("php://input"));

//$skey = md5(htmlspecialchars(strip_tags($data->SK)));
//$skey2 = md5(htmlspecialchars(strip_tags($data->SKA)));
//$skey3 = md5(htmlspecialchars(strip_tags($data->SKB)));

$arr=array();

$query="SELECT Tagesbericht.ID, 
        Tagesbericht.Kunden_ID as kid,
        Baum.Kategorie as Kategorie_ID, 
        Mitarbeiter.Mitarbeiter as Mitarbeiter,
        Tagesbericht.RückrufWer as mID,
        Tagesbericht.Kategorie_ID as kID,
        Tagesbericht.Mitarbeiter_ID as tmID,
        Tagesbericht.Art_ID as aID,
        Art.Art as Art_ID,
        HandelsPartner.Name1 as Kunden_ID, 
        HandelsPartner.Straße, HandelsPartner.Plz, HandelsPartner.Ort, HandelsPartner.Telefon, HandelsPartner.Memo,
        Tagesbericht.Datum, Tagesbericht.Dauer, Tagesbericht.Rückruf, Tagesbericht.text, Tagesbericht.Erledigt, 
        Tagesbericht.Kategorie, Tagesbericht.DatumRückruf, Tagesbericht.RückrufWer, Tagesbericht.Mitarbeiter_ID,
        Tagesbericht.gelöscht, Tagesbericht.parentID, Tagesbericht.Dauer,
                (SELECT Mitarbeiter.Mitarbeiter 
                FROM Mitarbeiter 
                WHERE Mitarbeiter_ID = Tagesbericht.RückrufWer) as Mitarbeitername 
        FROM Tagesbericht
        JOIN Mitarbeiter ON Tagesbericht.Mitarbeiter_ID = Mitarbeiter.Mitarbeiter_ID
        JOIN Art ON Tagesbericht.Art_ID = Art.Art_ID 
        JOIN Baum ON Tagesbericht.Kategorie_ID = Baum.ID
        JOIN HandelsPartner ON Tagesbericht.Kunden_ID = HandelsPartner.ID
        WHERE Tagesbericht.Datum > '2023-01-06 00:00:00'
        ORDER BY Tagesbericht.Datum DESC";


$abruf= sqlsrv_query($db, $query);

if($abruf==false){ //Kein abruf möglich
        die(print("Error"));
}else{
        while($row=sqlsrv_fetch_array($abruf, SQLSRV_FETCH_ASSOC)){
        $id = $row['ID'];
        $kuid = $row['kid'];
        $kid = $row['Kunden_ID'];
        $katid = $row['Kategorie_ID'];
        $mid = $row['Mitarbeiter'];
        $aid = $row['Art_ID'];
        $date = $row['Datum'];
        $duration = $row['Dauer'];
        $callback = $row['Rückruf'];
        $text = $row['text']; 
        $done = $row['Erledigt'];
        //$rtfText = $row['rtfText'];
        $cate = $row['Kategorie'];
        $dateCallback = $row['DatumRückruf'];
        $callbackWer = $row['Mitarbeitername'];
        $delete = $row['gelöscht'];
        $parentId = $row['parentID'];
        $str = $row['Straße'];
        $plz = $row['Plz'];
        $ort = $row['Ort'];
        $tel = $row['Telefon'];
        $hMemo = $row['Memo'];
        $dauer = $row['Dauer'];
          $mID = $row['mID'];
          $kID = $row['kID'];
          $tmID = $row['tmID'];
          $aID = $row['aID'];
        
          array_push($arr,array(
                'ID' => $id,
                'kid' => $kuid,
                'Kunden_ID' => $kid,
                'Kategorie_ID' => $katid,
                'Mitarbeiter' => $mid,
                'Art_ID' => $aid,
                'Datum' =>$date,
                'DatumZeit' => $date,
                'Dauer' => $duration,
                'Rueckruf' => $callback,
                'text' => $text,
                'Erledigt' => $done,
                //'rtfText' => $rtfText,
                'Kategorie' => $cate,
                'DatumRueckruf' => $dateCallback,
                'Mitarbeitername' => $callbackWer,
                'geloescht' => $delete,
                'parentID' => $parentId,
                'Strasse' => $str,
                'Plz' => $plz,
                'Ort' => $ort,
                'Telefon' => $tel,
                'Memo' => $hMemo,
                'Dauer' => $dauer,
                'RückrufWer' => $mID,
                'Kategorie_kID' => $kID,
                'Mitarbeiter_ID' => $tmID,
                'Art_aid' => $aID
          
          ));   
        }
        sqlsrv_free_stmt($abruf); //löst den Abruf auf
        sqlsrv_close($db); //Beendet die Verbindung
        echo json_encode(array(
            'tdata'=>$arr,
        ));
}

?>