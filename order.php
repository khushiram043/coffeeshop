<?php
include "db.php";

$coffee = $_POST['coffee'];
$quantity = $_POST['quantity'];
$address = $_POST['address'];

$sql = "INSERT INTO orders (coffee, quantity, address)
        VALUES ('$coffee','$quantity','$address')";

if (mysqli_query($conn, $sql)) {
    echo "Order Placed Successfully";
} else {
    echo "Order Failed";
}
?>
