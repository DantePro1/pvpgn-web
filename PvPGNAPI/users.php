<?php
    require_once "config.php";

    $stmt = $conn->query("SELECT * FROM bnet");

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $results = array_splice($results, 1);

    echo json_encode($results);
?>