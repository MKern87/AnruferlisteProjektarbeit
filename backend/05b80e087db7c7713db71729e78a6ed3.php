<?php
//////////////////////////////////////////////
class Database {
    private $host = 'db5012284790.hosting-data.io';
    private $db_name = 'dbs10334695';
    private $username = 'dbu2334505';
    private $password = 'Diagnoseneu#Diagnoseneu!';
    private $conn;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //      CONNECT METHOD
    //      CREATE THE PDO INSTANCE TO THE DATABASE
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    public function connect(){
        $this->conn=null;
        try{
            $this->conn= new PDO('mysql:host='.$this->host .';dbname='.$this->db_name,$this->username,$this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
        }catch(PDOException $e){
            echo 'Connection Error:' . $e->getMessage();
        }
        return $this->conn;
    }
}
?>
//////////////////////////////////////



/*
class Database {

  public $server = "SERVER-DS-2016\MSSQLSERVER2016";
  public $user = "bk";
  public $psw = "burgerking";
  public $dbName = "Schafhausentest";
  public $conn;


  public function connect() {
      $connection = array(
        "Database" => $dbName,
        "Uid" => $user,
        "PWD" => $psw
      );
      $conn = sqlsrv_connect($server, $connection);
      if($conn){        
        $this->conn=$conn;
        return $this->conn;
      }

  }
}

<?

HeaderZeilen

include_once()

$DB=new Database()

Query

return json
*/

/**

class Query{

    Filter als public festlegen
    public = "LIKE"

    

}

 */




/*
$server = "SERVER-DS-2016\MSSQLSERVER2016";
$user = "bk";
$psw = "burgerking";
$dbName = "Schafhausentest";

//verbinden mit Datenquelle($server, $user, $psw, $dbName)
//test Verbindung
try {
  $conn = new PDO("sqlsrv:Server = $server; Database = $dbName", $user, $psw);
}catch(PDOException $e){
  echo $e->getMessage();
}

//SQL-Statement
$sql = "select * from Mitarbeiter";

//send SQL-Statement(req.)/empfangen(resive)Data
$result = $conn->query($sql);

//test auf Daten
$rows=$result->fetchAll();
echo count($rows)."<br>";
if (count($rows)>0){
  var_dump($rows);
}

//Verbindung mit Datenquelle beenden
$conn = null;
*/
///////////////////////////////
//Verwendungh
/////////////////////////

class DB
$serverName = "DESKTOP-VMSKIR0";
$database = "Test";
$uid = "";
$pass = "";

$connection = array(
  "Database" => $database,
  "Uid" => $uid,
  "PWD" => $pass
);

$conn = sqlsrv_connect($serverName, $connection);
  if($conn == false)
    die(print_r( sqlsrv_errors(), true));
  else echo 'Connection success';


?>

///////////////////////////////////////////////////////////////////////////////
///                                                                         ///
///                                                                         ///
///////////////////////////////////////////////////////////////////////////////

<?php
// include_once('connect.php');
    

// $database = new Database();
// $db = $database->connect();

// $data = json_decode(file_get_contents("php://input"));

// $query='SELECT * from Mitarbeiter WHERE Aktiv = 1';
// if($stmt=$db->query($query)){
//     $rowCount=$stmt->rowCount();  
    
//     if($rowCount>0){
//         echo json_encode(
//             array('message' => 'true')
//           );
//     }else{
//         echo json_encode(
//             array('message' => 'false')
//           ); 
//     }
// }else{
//     echo json_encode(
//         array('message' => 'false') 
//       );
// }

?>
