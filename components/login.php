<?php  include 'config.php';

    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $email = $obj['email'];

    $password = $obj['password'];

    if($obj['email']! = ""){

        $result = $mysqli ->query("SELECT * FROM referees 
        where email='$email' and password='$password'");

            if($result->num_rows==0){
                echo json_encode('Wrong Details');                
            }
            else{
                echo json_encode('Successfully logged in');
            }

    }
else{
    echo json_encode('Try again by re-entering your correct login credentials')
}



?> 