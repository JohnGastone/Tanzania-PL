<?php
define('HOST', 'localhost');
define('USER_NAME', 'root');
define('PASSWORD', '');
define('DB_NAME', 'trial');


class Database{
    private $connection;
//constructor
  public function __construct(){
        $this->open_db_connection();
    }
    //creating connection to db
    public function open_db_connection(){
        $this->connection = mysqli_connect(HOST, USER_NAME,PASSWORD,DB_NAME);
        if(mysqli_connect_error()){
            die('Connection Error:' .mysqli_connect_error());
        }

    }
    public function query($sql){
        $result = $this->connection->query($sql);
        if(!$result){
            die('Query fails :' . $sql);
        }
        return $result;
    }
//fetch list of data from SQL query result
    public function fetch_array($result){
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                $result_array[] = $row;
            }
            return $result_array;
        }
    }
    //fetch single row of data
    public function fetch_row($result){
        if($result->num_rows > 0)
        return $result->fetch_assoc();
    }
//check proper format of data
    public function escape_value($value){
        return $this->connection->real_escape_string($value);
    }
    //closes the connection with database
    public function close_connection(){
        $this->connection->close();
    }
}
//instance of database
$database = new Database();