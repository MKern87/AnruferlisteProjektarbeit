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
//$Kategorie = htmlspecialchars($data->Kategorie_ID);
$Mitarbeiter = htmlspecialchars($data->Mitarbeiter_ID)?htmlspecialchars($data->Mitarbeiter_ID):null;
$Art_ID = htmlspecialchars($data->Art_ID)?htmlspecialchars($data->Art_ID):null;
//$Datum = htmlspecialchars($data->Datum);
$Dauer = htmlspecialchars($data->Dauer);
$Rueckruf = htmlspecialchars($data->Rueckruf);
$text = htmlspecialchars($data->text);
$Erledigt = htmlspecialchars($data->Erledigt);
$KategorieText = htmlspecialchars($data->Kategorie);
//$DatumRueckruf = htmlspecialchars($data->DatumRueckruf);
$RueckrufWer = htmlspecialchars($data->RueckrufWer)?htmlspecialchars($data->RueckrufWer):null;
//$geloescht = htmlspecialchars($data->geloescht);
//$parentID = htmlspecialchars($data->parentID);
//echo json_encode($data);
//die();

$tsql1 = "INSERT INTO [Tagesbericht]
               ([Kunden_ID], [Kategorie_ID], [Mitarbeiter_ID], [Art_ID], 
               [Datum], [Dauer], [Rückruf], [text], [Erledigt], [rtfText], 
               [Kategorie], [DatumRückruf], [RückrufWer], [gelöscht], [parentID])
          Values ($KundenID, 
               3, 
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
/*
INSERT INTO Tagesbericht   
(Kunden_ID, Kategorie_ID, Mitarbeiter_ID, Art_ID, Datum, Dauer, Rückruf, text, Erledigt, rtfText, Kategorie, DatumRückruf, RückrufWer, gelöscht, parentID)  
SELECT Kunden_ID, Kategorie_ID, Mitarbeiter_ID, Art_ID, Datum, Dauer, Rückruf, text, Erledigt, rtfText, Kategorie, DatumRückruf, RückrufWer, gelöscht, parentID
 FROM  (SELECT  Kunden_ID AS ID, Kategorie_ID AS KatID, Mitarbeiter_ID AS Mitarbeiter, Art_ID AS Art, Datum AS Datum,
     Dauer AS Dauer, Rückruf AS RR, text AS text, Erledigt AS Erledigt, rtfText AS rtf, Kategorie AS Kat, DatumRückruf AS DRückruf,
     RückrufWer AS RRWer, gelöscht AS gelöscht, parentID AS parentID) AS derivedtbl_1
WHERE('' IN (Select COUNT(*) AS Ausdruck1 FROM Tagesbericht AS Tagesbericht_1 WHERE (ID = AbfrageID)))
*/
/*
INSERT INTO Rechte   
(ID,Name, Komponente, Typename,Beschreibung,Bereich)  
SELECT      ID,Name, Komponente, Typename,Beschreibung ,BEreich  
 FROM  (SELECT  @ID AS ID,    @Name AS Name,@Komponente AS Komponente, @Typename  AS Typename,@Beschreibung  
 AS Beschreibung,@Bereich  AS Bereich) 
 AS derivedtbl_1  
 WHERE('' IN  (SELECT     COUNT(*) 
 AS Expr1  
 FROM          Rechte AS Rechte_1  
 WHERE      (ID = @AbfrageID)))
*/


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