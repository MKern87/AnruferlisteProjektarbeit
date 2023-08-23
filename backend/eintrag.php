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

$KundenID = htmlspecialchars(strip_tags($data->KundenID));
$Kunde = htmlspecialchars(strip_tags($data->Kunde));
$Strasse = htmlspecialchars(strip_tags($data->Strasse));
$Plz = htmlspecialchars(strip_tags($data->Plz));
$Ort = htmlspecialchars(strip_tags($data->Ort));
$Tel = htmlspecialchars(strip_tags($data->Tel));
$Memo = htmlspecialchars(strip_tags($data->Memo));
$Kategorie = htmlspecialchars(strip_tags($data->Kategorie));
$KategorieText = htmlspecialchars(strip_tags($data->KategorieText));
$Mitarbeiter = htmlspecialchars(strip_tags($data->Mitarbeiter));
$Art_ID = htmlspecialchars(strip_tags($data->Art_ID));
$Erledigt = htmlspecialchars(strip_tags($data->Erledigt));
$Datum = htmlspecialchars(strip_tags($data->Datum));
$Dauer = htmlspecialchars(strip_tags($data->Dauer));
$Rueckruf = htmlspecialchars(strip_tags($data->Rueckruf));
$RueckrufWer = htmlspecialchars(strip_tags($data->RueckrufWer));
$DatumRueckruf = htmlspecialchars(strip_tags($data->DatumRueckruf));
$text = htmlspecialchars(strip_tags($data->text));
$geloescht = htmlspecialchars(strip_tags($data->geloescht));
$parentID = htmlspecialchars(strip_tags($data->parentID));

$Erledigt = ($Erledigt == 'true') ? 1 : 0;
$Rueckruf = ($Rueckruf == 'true') ? 1 : 0;

$arr=array();
    
$tsql1 = 'UPDATE Tagesbericht SET
          Kategorie_ID = "'.$Kategorie.'", Mitarbeiter_ID = "'.$Mitarbeiter.'", Art_ID = "'.$Art_ID.'", Datum = "now()",
        Dauer = "'.$Dauer.'", Rückruf = "'.$Rueckruf.'", text = "'.$text.'", Erledigt = "'.$Erledigt.'", rtfText = "'.$rtfText.'", Kategorie = "'.$KategorieText.'",
        DatumRückruf = "now()", RückrufWer = "'.$RueckrufWer.'", gelöscht = "'.$geloescht.'", parentID = "'.intval($parentID).'" WHERE ID = "'.$KundenID.'"';
    
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