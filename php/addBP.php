<?php

require 'connection.php';
$conn    = Connect();
$sys   = $conn->real_escape_string($_POST['sys']);
$dia    = $conn->real_escape_string($_POST['dia']);
$query   = "INSERT into bloodpressure (systolic, diastolic) VALUES('" . $sys . "','" . $dia . "')";
$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);

}

// redirect user after add is successful
header("Location:../bp.html");

$conn->close();

?>
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
</html>
