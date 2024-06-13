<?php
class Database{
                private     $Servername ='';
                private     $connection= array(
                      'Database' => '',
                      'UID' => '',
                      'PWD' => '',
                      'CharacterSet' => 'UTF-8'
                  );
/*
                private  $Servername = '';
                private  $connection = array (
                    'Database' => '',
                    'UID' => '',
                    'PWD' => '',
                    "CharacterSet" => "UTF-8"
                  );
*/
  public $conn;

  public function connect(){
      if($this->conn!=null){

      }else{
          $check=sqlsrv_connect($this->Servername, $this->connection);
          if($check){
            // echo("Verbindung steht ");
            // exit();
              $this->conn=$check;
              return $this->conn;
          }else{
              die(print_r(sqlsrv_errors(), true));
            //   echo("Verbindung falsch ");
            // exit();
          }

      }
  }
}

?>
