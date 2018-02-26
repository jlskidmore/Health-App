<?php


function Connect()
{
 $dbhost = "localhost";
 $dbuser = "logan";
 $dbpass = "Jack31521";
 $dbname = "exercise";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}

?>
