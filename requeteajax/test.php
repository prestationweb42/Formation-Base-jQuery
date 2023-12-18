<?php

require_once "db.php";

$email = $_POST["email"];
$computer = $_POST["computer"];

$db = new db();
$db = $db->connection();
$q = $db->prepare("INSERT INTO user (email, computer) VALUES (:email, :computer)");
$q->bindParam(":email", $email, PDO::PARAM_STR);
$q->bindParam(":computer", $computer, PDO::PARAM_STR);
$q->execute();
echo "1";

?>