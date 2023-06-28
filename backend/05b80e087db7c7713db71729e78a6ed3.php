<?php
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


$serverName = "SERVER-DS-2016\MSSQLSERVER2016";
$database = "Schafhausentest";
$uid = "bk";
$pass = "burgerking";

$connection = [
  "Database" => $database,
  "Uid" => $uid,
  "PWD" => $pass
];

$conn = sqlsrv_connect($serverName, $connection);
  if($conn == false)
    die(print_r( sqlsrv_errors(), true));
  else echo 'Connection success';

  

?>