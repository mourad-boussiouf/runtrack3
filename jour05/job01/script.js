document.addEventListener("DOMContentLoaded", (event) => {

let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let loginmail = document.getElementById('loginmail');
let loginpassword = document.getElementById('loginpassword');
var password = document.getElementById('password');
var passwordconfirm = document.getElementById('passwordconfirm');
let htmlcontent =  document.querySelectorAll("p");
let jiggle = document.getElementById('registerjiggle');
const registerform = document.querySelector('#register-form');
const loginform = document.querySelector('#login-form');
let card = document.querySelector('.screen__content_register');
let bonjour = document.querySelector('h1');
let page = document.querySelector('.container');
let noerror = false;
let noempty = false;
let random1 = Math.floor(Math.random() * 6);
let random2 =Math.floor(Math.random() * 6)
let random3 =Math.floor(Math.random() * 7)

let allform = [nom, prenom, email, password, passwordconfirm];



let regexLowerCase = /[a-z]+/;
let regexUpperCase = /[A-Z]+/;
let regexNum = /[0-9]+/;
let regexEmail = /\S+@\S+\.\S+/;

loginform.classList.add("hiddenclass");
bonjour.classList.add("hiddenclass");

// Si l'uppercase est absente du champs, remplir le paragraphe html par le message d'erreur.
nom.addEventListener('keyup', function () {

  if (regexUpperCase.test(this.value) == false ) {
      if (htmlcontent[0].innerHTML.length == 0) {
          htmlcontent[0].innerHTML = "• Votre nom doit contenir une majuscule."
          noerror = false;
        
      }
    } 
      else {
        htmlcontent[0].innerHTML = ""
        noerror = true;
      }
  
    
})

prenom.addEventListener('keyup', function () {
  if (regexUpperCase.test(this.value) == false ) {
      if (htmlcontent[1].innerHTML.length == 0) {
          htmlcontent[1].innerHTML = "• Votre prénom doit contenir une majuscule."
          noerror = false;
      }
    } else {
      

        htmlcontent[1].innerHTML = ""
        noerror = true;

      
  
    }

})

email.addEventListener('keyup', function () {
  if (regexEmail.test(this.value) == false ) {
      if (htmlcontent[2].innerHTML.length == 0) {
          htmlcontent[2].innerHTML = "• Votre adresse e-mail est incorrecte."
          noerror = false;
      }
    } else {
     
        htmlcontent[2].innerHTML = ""
        noerror = true;
  
    }

})

password.addEventListener('keypress', function () {

  if (regexNum.test(this.value) == false || regexUpperCase.test(this.value) == false || regexLowerCase.test(this.value) == false){

          htmlcontent[3].innerHTML = "• Votre mot de passe doit contenir un chiffre, une minuscule, et une majuscule."
          noerror = false;

  } 

  else {
      htmlcontent[3].innerHTML = ""
      noerror = true;
  }

})

passwordconfirm.addEventListener('keyup', function () {
    if(password.value !== passwordconfirm.value)  
    {   
    if (htmlcontent[4].innerHTML.length == 0 ) {
        htmlcontent[4].innerHTML = "• Le mot de passe et la confirmation ne sont pas identiques.";
        noerror = false;
      }
    } 
    else {  
      htmlcontent[4].innerHTML = ""
      noerror = true;
    }  
})

// Si il y a une erreur, le champs se colorie en rose, sinon il reste blanc

allform.forEach((v,i,list)=>{

  v.addEventListener('blur', (event) => {

    if (htmlcontent[i].innerHTML.length > 0) {
      event.target.style.background = 'pink';
      jiggle.classList.add("registerjiggle");
    }
    if (htmlcontent[i].innerHTML.length == 0) {
      event.target.style.background = '';
      jiggle.classList.remove("registerjiggle");
        }

  }, true);

})

allform.forEach((v,i,list)=>{
 

  v.addEventListener('focus', (event) => {
    if (htmlcontent[i].innerHTML.length == 0) {
    event.target.style.background = '';
    jiggle.classList.remove("registerjiggle");
      }
      
      if (htmlcontent[i].innerHTML.length > 0) {
        event.target.style.background = 'pink';
        jiggle.classList.add("registerjiggle");
 
      }
}, true);

})


allform.forEach((v,i,list)=>{
 
  v.addEventListener('click', (event) => {
    //si dans un champs où il n'y a aucun caractère, noempty == false
    if (event.target.value.length > 1) {
      noempty = true;
      htmlcontent[5].innerHTML = "";
      jiggle.classList.remove("registerjiggle");

    }

    else if (event.target.value.length < 1) {
      noempty = false;
      }
      
}, true);

//si il y a trop de messages d'erreurs, on les cache de manière aléatoire.
 v.addEventListener('keydown', (event) => {
  if (htmlcontent[0].innerHTML.length + htmlcontent[1].innerHTML.length + 
    htmlcontent[2].innerHTML.length + htmlcontent[3].innerHTML.length
     + htmlcontent[4].innerHTML.length + htmlcontent[5].innerHTML.length > 150) {

      htmlcontent[random1].style.display = "none";
      htmlcontent[random2].style.display = "none";
      htmlcontent[random3].style.display = "none";

     } else {
      htmlcontent[random1].style.display = "block";
      htmlcontent[random2].style.display = "block";
      htmlcontent[random3].style.display = "block";
     }
}, true);
 
v.addEventListener('keyup', (event) => {

  //si dans un champs où il n'y a aucun caractère, noempty == false
  if (event.target.innerHTML.length < 1) {
    noempty = false;
    }
    
    if (event.target.value.length > 1) {
      noempty = true;
      htmlcontent[5].innerHTML = "";
      jiggle.classList.remove("registerjiggle");

    }

    if (noerror == true) {
      htmlcontent[6].innerHTML = "";
      jiggle.classList.remove("registerjiggle");
    }
}, true);

})

 registerform.addEventListener('submit', function (e) {

  e.preventDefault();


  if (noempty == false || password.value.length < 1 || passwordconfirm.value.length < 1 || 
    email.value.length < 1 || prenom.value.length < 1 || nom.value.length < 1)
  {
    htmlcontent[5].innerHTML = "• Veuillez remplir tous les champs du formulaire.";
    jiggle.classList.add("registerjiggle");
    noempty == false
  }

  if (noerror == false)
  {
    htmlcontent[6].innerHTML = "• Les informations saisies sont incorrectes.";
    jiggle.classList.add("registerjiggle");
    noerror == false

  }

  else if(noempty == true && noerror == true)  {



    const formData = new FormData(registerform)

    fetch('inscription.php', {

        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => { console.log(data)
          if (data['code'] == 42) {
          htmlcontent[2].innerHTML = "• Votre adresse e-mail est déjâ prise."
          jiggle.classList.add("registerjiggle");
          noerror == false

          } else if (data['code'] == 10) {
            registerform.classList.toggle("hiddenclass");
            loginform.classList.toggle("hiddenclass");
          
          

          noerror == true
          } 
        })
  
    
    



  }
 })

  loginform.addEventListener('submit', function (e) {

    e.preventDefault();

    if (loginpassword.value.length < 1 || 
      loginmail.value.length < 1) {  htmlcontent[5].innerHTML = "• Veuillez remplir tous les champs du formulaire.";
      jiggle.classList.add("registerjiggle");
      } else {
        const formData2 = new FormData(loginform)

        fetch('connexion.php', {
    
            method: 'POST',
            body: formData2
        })
            .then(res => res.json())
            .then(data => { console.log(data)
              if (data['code'] == 50) {
              htmlcontent[2].innerHTML = "• Cet utilisateur n'existe pas."
              jiggle.classList.add("registerjiggle");
              noerror == false
    
              } else if (data['code'] == 10) {
               
                page.classList.add("hiddenclass");
                bonjour.append('Bienvenue ' + '' + data['nom'])
                bonjour.classList.toggle("hiddenclass");

              
    
              noerror == true
              } 
            })

      }


  })

})