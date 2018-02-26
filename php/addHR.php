<?php

require 'connection.php';
$conn    = Connect();
$hr    = $conn->real_escape_string($_POST['heart']);
$query   = "INSERT into heartrate (hr) VALUES('" . $hr . "')";
$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);

}

// redirect user after add is successful
header("Location:../hr.html");

$conn->close();

?>
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
</html>
