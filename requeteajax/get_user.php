<?php
require_once 'db.php';

$db = new db();
$db = $db->connection();
$query = $db->prepare("SELECT * FROM user");
$query->execute();
foreach ($query as $row) {
    echo $row["id"] . " , " . $row["email"] . " , " . $row["computer"] . "<br>";
}