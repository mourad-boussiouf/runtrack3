<?php
session_start();
if(isset($_SESSION['id'])){
echo'<h1></h1>';
}
 ?>

<?php if(!isset($_SESSION['id'])){ ?>

<div class = 'link_container'>

    <div class = 'login_link'>
    <a href="connexion.php">Connexion</a>
    </div>

    <div class = 'register_link'>
    <a href="inscription.php">Inscription</a>
    </div>

</div>

<?php } ?>



<!DOCTYPE html>

<html lang="en">
<head>
<script src="script.js"></script>
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.2.0/css/all.css'>
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css'><link rel="stylesheet" href="./style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>






</body>
</html>