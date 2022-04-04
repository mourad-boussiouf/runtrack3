<?php

$takenmail = true;

if (isset($_POST['email'])) {
	$email = $_POST['email'];
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var = $bdd->prepare("SELECT * FROM utilisateurs WHERE email='$email'");
    $var->execute();
    $result = $var->fetch();
    if (!empty($result)) {

        echo json_encode([
            "code"=>42,
            "erreur" =>'mail deja pris'
		]);
		$takenmail = true;
        
	} 


	
}

if (isset($_POST['nom']) && $takenmail == false) {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var = $bdd->prepare('INSERT INTO utilisateurs(nom,prenom,email,password) VALUES (?,?,?,?)');
    $var->execute(array($nom, $prenom, $email, $password));
    echo json_encode([
        "code"=>10
    ]);


}

?>