<?php
    require_once "config.php";

    $stmt = $conn->query("SELECT * FROM bnet");

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($results);
?>