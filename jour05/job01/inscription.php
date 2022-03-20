
<?php

function insert($nom,$prenom,$email,$password){
    $bdd = new PDO("mysql:host = localhost ; dbname=utilisateurs", 'root', '');
    $var=$bdd->prepare('INSERT INTO utilisateurs(nom,prenom,email,password) VALUES (?,?,?,?)');
    $var->execute(array($nom,$prenom,$email,$password));
}

?>

<!DOCTYPE html>
<html lang="fr" >
<head>
  <script src="script.js"></script>
  <meta charset="UTF-8">
  <title>Connexion</title>
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.2.0/css/all.css'>
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css'><link rel="stylesheet" href="./style.css">
</head>
<body>
<!-- partial:index.partial.html -->
<div class="container">
	<div class="screen">
		<div class="screen__content_register">

			<form class="register" action = "" method = "POST">

				<div class="register__field">	
					<input type="text" id = "nom" class="login__input" placeholder="Nom" required>
				</div>

                <div class="register__field">	
					<input type="text" id = "prenom" class="login__input" placeholder="Prénom" required>
				</div>

                <div class="register__field">
					
					<input type="text" id = "email" class="login__input" placeholder="Email" required>
                    
				</div>

				<div class="register__field">
					
					<input type="password"  id = "password" class="login__input" placeholder="Mot de passe" required>
				</div>

                <div class="register__field">
					
					<input type="password" id = "passwordconfirm" class="login__input" placeholder="Confirmer mot de passe" required>
				</div>


				<button class="button login__submit">
                     <span class="button__text">S'inscrire<input type="submit" name="valider" value=""></span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
            <p class="red"></p>

		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
<!-- partial -->
  
</body>
</html>
