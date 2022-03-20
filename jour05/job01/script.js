document.addEventListener("DOMContentLoaded", (event) => {

let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
var password = document.getElementById('password');
var passwordconfirm = document.getElementById('passwordconfirm');
let htmlcontent =  document.querySelector("p");

let allform = [nom, prenom, email, password, passwordconfirm];

console.log(htmlcontent.innerHTML);


let regexLowerCase = /[a-z]+/;
let regexUpperCase = /[A-Z]+/;
let regexNum = /[0-9]+/;
let regexEmail = /\S+@\S+\.\S+/;


// Si l'uppercase est absente du champs, remplir le paragraphe html par le message d'erreur.
nom.addEventListener('keyup', function () {
  if (regexUpperCase.test(this.value) == false) {
      if (htmlcontent.innerHTML.length == 0) {
          htmlcontent.innerHTML = "Votre nom doit contenir une majuscule."
      }
  } else {
      htmlcontent.innerHTML = ""
  }

})


prenom.addEventListener('keyup', function () {
  if (regexUpperCase.test(this.value) == false) {
      if (htmlcontent.innerHTML.length == 0) {
          htmlcontent.innerHTML = "Votre prénom doit contenir une majuscule."
      }
  } else {
      htmlcontent.innerHTML = ""
  }

})


email.addEventListener('keyup', function () {
  if (regexEmail.test(this.value) == false) {
      if (htmlcontent.innerHTML.length == 0) {
          htmlcontent.innerHTML = "Votre adresse e-mail est incorrecte."
      }
  } else {
      htmlcontent.innerHTML = ""
  }

})

password.addEventListener('keyup', function () {
  if (regexNum.test(this.value) == false || regexUpperCase.test(this.value) == false || regexLowerCase.test(this.value) == false) {
      if (htmlcontent.innerHTML.length == 0) {
          htmlcontent.innerHTML = "Votre mot de passe doit contenir un chiffre, une minuscule et une majuscule."
      }
  } else {
      htmlcontent.innerHTML = ""
  }

})

passwordconfirm.addEventListener('keyup', function () {
    if(password.value != passwordconfirm.value)  
    {   
      if (htmlcontent.innerHTML.length == 0) {
        htmlcontent.innerHTML = "Le mot de passe et la confirmation ne sont pas identiques.";
      }
    } else {  
      htmlcontent.innerHTML = "" ;
    }  
})



// Si il y a une erreur, le champs se colorie en rose, sinon il reste blanc

allform.forEach((v,i,list)=>{

  v.addEventListener('blur', (event) => {

    if (htmlcontent.innerHTML.length > 0) {
      event.target.style.background = 'pink';
    }

  }, true);

})

allform.forEach((v,i,list)=>{

  v.addEventListener('focus', (event) => {
    event.target.style.background = '';
}, true);

})







})