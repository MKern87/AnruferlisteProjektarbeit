<?php
//error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With'); 

include_once('connect.php');

$database = new Database();
$db = $database->connect();

$data = json_decode(file_get_contents("php://input"));

$KundenID = htmlspecialchars($data->ID);
$Kategorie = htmlspecialchars($data->Kategorie_ID);
$Mitarbeiter = htmlspecialchars($data->Mitarbeiter_ID)?htmlspecialchars($data->Mitarbeiter_ID):null;
$Art_ID = htmlspecialchars($data->Art_ID)?htmlspecialchars($data->Art_ID):null;
//$Datum = htmlspecialchars($data->Datum);
$Dauer = htmlspecialchars($data->Dauer);
$Rueckruf = htmlspecialchars($data->Rueckruf);
$text = htmlspecialchars($data->text);
$Erledigt = htmlspecialchars($data->Erledigt);
$KategorieText =htmlspecialchars($data->Kategorie);
//$DatumRueckruf = htmlspecialchars($data->DatumRueckruf);
$RueckrufWer = htmlspecialchars($data->RueckrufWer)?htmlspecialchars($data->RueckrufWer):null;
//$geloescht = htmlspecialchars($data->geloescht);
//$parentID = htmlspecialchars($data->parentID);
//echo json_encode($data);
//die();
//$kattext;
//foreach ($KategorieText as $value){
//     $tsql1 = "SELECT Kategorie FROM Baum
//     WHERE ID = '".$value."'";
//     $stmt1 = sqlsrv_query($db, $tsql1); 
//     
//     while($row=sqlsrv_fetch_array($stmt1, SQLSRV_FETCH_ASSOC)){
//          $kattext.=$row['Kategorie'];
//        }
//} 
//echo json_encode($kattext);
//die();
$tsql1 = "INSERT INTO [Tagesbericht]
               ([Kunden_ID], [Kategorie_ID], [Mitarbeiter_ID], [Art_ID], 
               [Datum], [Dauer], [Rückruf], [text], [Erledigt], [rtfText], 
               [Kategorie], [DatumRückruf], [RückrufWer], [gelöscht], [parentID])
          Values ($KundenID, 
               $Kategorie, 
               $Mitarbeiter, 
               $Art_ID, 
               CONVERT(datetime, '2023-24-08', 103), 
               '$Dauer', 
               $Rueckruf, 
               '$text',
               $Erledigt, 
               '', 
               '$KategorieText', 
               CONVERT(datetime, '2023-24-08', 103), 
               '$RueckrufWer', 
               0, 
               0)";


$stmt1 = sqlsrv_query($db, $tsql1); 

if( $stmt1 === false )  
{  
     echo "Error in execution of INSERT.\n";  
     die( print_r( sqlsrv_errors(), true));  
}else{
     echo json_encode(array('ndata' => true));
}

sqlsrv_free_stmt($stmt1);   
sqlsrv_close($db);
?>