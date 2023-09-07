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
$Datum = htmlspecialchars($data->Datum);
$Dauer = htmlspecialchars($data->Dauer);
$Rueckruf = htmlspecialchars($data->Rueckruf);
$text = htmlspecialchars($data->text);
$Erledigt = htmlspecialchars($data->Erledigt);
$KategorieText =htmlspecialchars($data->Kategorie);
$DatumRueckruf = htmlspecialchars($data->DatumRueckruf);
$RueckrufWer = htmlspecialchars($data->RueckrufWer)?htmlspecialchars($data->RueckrufWer):null;
//$geloescht = htmlspecialchars($data->geloescht);
//$parentID = htmlspecialchars($data->parentID);
//echo json_encode($data);
//die();
$Darray = explode(" ", $Datum );
$RDarray = explode(" ", $DatumRueckruf );
$DatumD=explode("-",$Darray[0]);
$DatumD=$DatumD[0].'-'.$DatumD[2].'-'.$DatumD[1];
$RDatumD=explode("-",$RDarray[0]);
$RDatumD=$RDatumD[0].'-'.$RDatumD[2].'-'.$RDatumD[1];
//echo json_encode($data);
//die();
$tsql1 = "INSERT INTO [Tagesbericht]
               ([Kunden_ID], [Kategorie_ID], [Mitarbeiter_ID], [Art_ID], 
               [Datum], [Dauer], [Rückruf], [text], [Erledigt], [rtfText], 
               [Kategorie], [DatumRückruf], [RückrufWer], [gelöscht], [parentID])
          Values (".$KundenID.", 
               ".$Kategorie.", 
               ".$Mitarbeiter.", 
               ".$Art_ID.", 
               CONVERT(datetime, '".$DatumD."',105)+CONVERT(datetime, '".$Darray[1]."',103), 
               '".$Dauer."', 
               ".$Rueckruf.", 
               '".$text."',
               ".$Erledigt.", 
               '', 
               '".$KategorieText."', 
               CONVERT(datetime, '".$RDatumD."',105)+CONVERT(datetime, '".$RDarray[1]."',103), 
               '".$RueckrufWer."', 
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