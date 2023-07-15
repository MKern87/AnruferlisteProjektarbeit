<?php

error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
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

$query='SELECT * FROM Tagesbericht WHERE ID = 4';

$abruf= sqlsrv_query($db, $query);

if($abruf==false){ //Kein abruf möglich
        die(print("Error"));
}else{
        while($row=sqlsrv_fetch_array($abruf, SQLSRV_FETCH_ASSOC)){
          $id = $row['ID'];
          $kid = $row['Kunden_ID'];
          $katid = $row['Kategorie_ID'];
          $mid = $row['Mitarbeiter_ID'];
          $aid = $row['Art_ID'];
          $date = $row['Datum'];
          $duration = $row['Dauer'];
          $callback = $row['Rückruf'];
          $text = $row['text'];
          $done = $row['Erledigt'];
          $rtfText = $row['rtfText'];
          $cate = $row['Kategorie'];
          $dateCallback = $row['DatumRückruf'];
          $callbackWer = $row['RückrufWer'];
          $delete = $row['gelöscht'];
          $parentId = $row['parentID'];
        
          array_push($arr,array(
          'ID' => $id,
          'Kunden_ID' => $kid,
          'Kategorie_ID' => $katid,
          'Mitarbeiter_ID' => $mid,
          'Art_ID' => $aid,
          'Datum' => $date,
          'Dauer' => $duration,
          'Rückruf' => $callback,
          'text' => $text,
          'Erledigt' => $done,
          'rtfText' => $rtfText,
          'Kategorie' => $cate,
          'DatumRückruf' => $dateCallback,
          'RückrufWer' => $callbackWer,
          'gelöscht' => $delete,
          'parentID' => $parentId
          ));   
        }
        sqlsrv_free_stmt($abruf); //löst den Abruf auf
        sqlsrv_close($db); //Beendet die Verbindung
        echo json_encode(array(
            'tdata'=>$arr,
        ));
}

?>