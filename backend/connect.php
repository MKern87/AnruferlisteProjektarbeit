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

?>