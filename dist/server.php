<?php
$_POST = json_encode(file_get_contents("php://input"), true);
echo var_dump($_POST);