<?php
include "db.php";

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$phone = $_POST['phone'];

$sql = "INSERT INTO users (name, email, password, phone)
        VALUES ('$name','$email','$password','$phone')";

if (mysqli_query($conn, $sql)) {
    echo "Registration Successful";
} else {
    echo "Registration Failed";
}
?>
