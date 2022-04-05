<?php
session_start();


if (isset($_POST['email'])) {
	$email = $_POST['email'];
	$password = $_POST['password'];
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var = $bdd->prepare("SELECT * FROM utilisateurs WHERE email='$email' AND password='$password' ");
    $var->execute();
    $result = $var->fetch();
    if (!empty($result)) {

        echo json_encode([
            "code"=>10,
		]);
		
	}
	 else { echo json_encode([
		"code"=>50,
		"erreur" =>'aucun utilisateur existant avec ces identifiants'
	]); }
}
?>