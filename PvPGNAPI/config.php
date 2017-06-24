<?php
header("Access-Control-Allow-Origin: *");
$servername = "192.168.0.21";
$username = "matt";
$password = "getmein";
$dbname = "pvpgn_test";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    die("Connection failed: " . $e->getMessage());
    }
?>