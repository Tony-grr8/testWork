<?php
$message = $_POST["message"];
date_default_timezone_set("Europe/Moscow");
$time = date("H:i:s");
echo "<div id='server-response'> " .$time ." Сервер: <b>" .$message ." </b>" ."<br> </div>";
?>