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

$tsql1 = 'INSERT INTO Tagesbericht
          Values (Kunden_ID, text, Art_ID, Mitarbeiter, Kategorie, now(), Rueckruf, RueckrufWer, now(), Erledigt)';



$stmt1 = sqlsrv_query($db, $tsql1);  
if( $stmt1 === false )  
{  
     echo "Error in execution of INSERT.\n";  
     die( print_r( sqlsrv_errors(), true));  
}else{
     echo json_encode(array('data' => true));
}

sqlsrv_free_stmt($stmt1);   
sqlsrv_close($db);
?>