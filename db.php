<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "coffee_shop";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Database Connection Failed");
}
?>
