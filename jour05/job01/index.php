<?php
session_start();

if(isset($_SESSION['id'])){
echo'<h1></h1>';
}
 ?>


<?php if(0 == 1){ ?>

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



<div id = registerjiggle>

<!-- INSCRIPTION-->
<div class="container">
	<div class="screen">
		
		<div class="screen__content_register">

			<form  id = "register-form" method = "POST">

				<div class="register__field">	
					<input type="text" id = "nom" class="login__input" name = "nom" placeholder="Nom" required>
				</div>

                <div class="register__field">	
					<input type="text" id = "prenom" class="login__input" name = "prenom" placeholder="Prénom" required>
				</div>

                <div class="register__field">
					
					<input type="text" id = "email" class="login__input" name = "email" placeholder="Email" required>
                    
				</div>

				<div class="register__field">
					
					<input type="password"  id = "password" class="login__input" name = "password" placeholder="Mot de passe" required>
				</div>

                <div class="register__field">
					
					<input type="password" id = "passwordconfirm" class="login__input" name = "password2" placeholder="Confirmer mot de passe" required>
				</div>


				<button class="button login__submit" type="submit" id = "buttonregister">
                     <span class="button__text">S'inscrire</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>

            <form class="login" id = "login-form">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Email" required>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Mot de passe" required>
				</div>
				<button class="button login__submit">
					<span class="button__text">Se connecter</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div></form>

            <p class="red"></p> 
			<p class="red"></p> 
			<p class="red"></p> 
			<p class="red"></p>
			<p class="red"></p>
			<p class="red"></p>
			<p class="red"></p>

		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	
<!-- CONNEXION -->


</div>













</body>
</html>