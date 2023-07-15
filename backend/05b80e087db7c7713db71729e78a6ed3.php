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


$mArbeiter;
$id;
$aktiv;
$arr=array();

$query='SELECT * FROM Mitarbeiter WHERE Aktiv = 1';

$abruf= sqlsrv_query($db, $query);

if($abruf==false){ //Kein abruf möglich
        die(print("Error"));
}else{
        while($row=sqlsrv_fetch_array($abruf, SQLSRV_FETCH_ASSOC)){
          $mArbeiter = $row['Mitarbeiter'];
          $id = $row['Mitarbeiter_ID'];
          $aktiv = $row['Aktiv'];
        
          array_push($arr,array(
          'Mitarbeiter' => $mArbeiter,
          'Mitarbeiter_ID' => $id,
          'Aktiv' => $aktiv
          ));   
        }
        sqlsrv_free_stmt($abruf); //löst den Abruf auf
        sqlsrv_close($db); //Beendet die Verbindung
        echo json_encode(array(
            'data'=>$arr,
        ));
}
?>
