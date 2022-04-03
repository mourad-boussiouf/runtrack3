<?php 

$bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');


echo($_POST_['prenom']);
echo($prenom);

function insert($nom,$prenom,$email,$password){
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var=$bdd->prepare('INSERT INTO utilisateurs(nom,prenom,email,password) VALUES (?,?,?,?)');
    $var->execute(array($nom,$prenom,$email,$password));

     
}


?>
