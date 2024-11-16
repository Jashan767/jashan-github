<?php

$sever = "localhost";
$username = "root";
$password = "";
$dbname = "hotelbooking";

$con = mysqli_connect($sever, $username, $password, $dbname);

if(!$con)
{
    echo "not connected";
}

//start

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['pass'];

$sql = "INSERT INTO `sign up`(`Name`, `Email`, `Password`) VALUES ('$name','$email','$password')";

$result = mysqli_query($con , $sql);

if($result)
{
    echo "success";
}

else
{
    echo "query failed....!";
}
