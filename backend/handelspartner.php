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

$query='SELECT HandelsPartner.Suchbegriff, HandelsPartner.Name1, HandelsPartner.Name2, HandelsPartner.Straße,
        HandelsPartner.Plz, HandelsPartner.Ort, HandelsPartner.Telefon, HandelsPartner.Typ, HandelsPartner.gelöscht
        FROM HandelsPartner
        WHERE HandelsPartner.Typ = 0 AND (HandelsPartner.gelöscht = 0 OR HandelsPartner.gelöscht is NULL)
        ORDER BY Suchbegriff ASC';

$abruf= sqlsrv_query($db, $query);

if($abruf==false){ //Kein abruf möglich
        die(print("Error"));
}else{
        while($row=sqlsrv_fetch_array($abruf, SQLSRV_FETCH_ASSOC)){
          $sBegriff = $row['Suchbegriff'];
          $n1 = $row['Name1'];
          $n2 = ($row['Name2'] == null || $row['Name2']=="") ? "" : $row['Name2'];
          $str = ($row['Straße'] == null || $row['Straße']=="") ? "" : $row['Straße'];
          $plz = ($row['Plz'] == null || $row['Plz']=="") ? "" : $row['Plz'];
          $ort = ($row['Ort'] == null || $row['Ort']=="") ? "" : $row['Ort'];
          $tel = ($row['Telefon'] == null || $row['Telefon']=="") ? "" : $row['Telefon'];
        
          array_push($arr,array(
          'Suchbegriff' => $sBegriff,
          'Name1' => $n1,
          'Name2' => $n2,
          'Strasse' => $str,
          'Plz' => $plz,
          'Ort' => $ort,
          'Telefon' => $tel
          ));   
        }
        sqlsrv_free_stmt($abruf); //löst den Abruf auf
        sqlsrv_close($db); //Beendet die Verbindung
        echo json_encode(array(
            'HpData'=>$arr,
        ));
}

?>