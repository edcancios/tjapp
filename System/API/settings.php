<?php
//CONEXÃO LOCAL COM O BANCO DE DADOS MYSQL
function getConnection() {
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="root";
	$charset = 'utf8';
	$collate = 'utf8_unicode_ci';
	$dbname="fastfeed_tjapp";
	
	$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_PERSISTENT => false,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES $charset COLLATE $collate"];
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname;charset=$charset", $dbuser, $dbpass, $options); 
	return $dbh;
}
?>