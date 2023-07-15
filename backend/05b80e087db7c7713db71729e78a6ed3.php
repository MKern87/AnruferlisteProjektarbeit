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
<?php
class Database{
  private     $Servername ='SERVER-DS-2016\MSSQLSERVER2016';
  private     $connection= array(
                      'Database' => 'Schafhausentest',
                      'UID' => 'bk',
                      'PWD' => 'burgerking'
                  );    
  public $conn;

  public function connect(){
      if($this->conn!=null){

      }else{
          $check=sqlsrv_connect($this->Servername, $this->connection);
          if($check){
              $this->conn=$check;
              return $this->conn;
          }else{
              die(print_r(sqlsrv_errors(), true));
          }

      }
  }
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
art.php
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

$query='SELECT * FROM Art WHERE Aktiv = 1';

$abruf= sqlsrv_query($db, $query);

if($abruf==false){ //Kein abruf möglich
        die(print("Error"));
}else{
        while($row=sqlsrv_fetch_array($abruf, SQLSRV_FETCH_ASSOC)){
          $Art = $row['Art'];
          $id = $row['Art_ID'];
          $aktiv = $row['Aktiv'];
        
          array_push($arr,array(
          'Art' => $Art,
          'Mitarbeiter_ID' => $id,
          'Aktiv' => $aktiv
          ));   
        }
        sqlsrv_free_stmt($abruf); //löst den Abruf auf
        sqlsrv_close($db); //Beendet die Verbindung
        echo json_encode(array(
            'ArtData'=>$arr,
        ));
}

?>
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/////////////////////////////////////
tagesbericht.php
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
