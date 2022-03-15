document.addEventListener("DOMContentLoaded", () => {
    
    let btn = document.getElementById('button')

    let body = document.body

    
    let article = document.createElement("article")

    article.textContent = "L'important n'est pas la chute, mais l'atterrissage."
    body.prepend(article) 
    article.style.display = "none";
    
   

    
    btn.addEventListener("click", function showhide() {

    
        
        if(article.style.display == "none"){
          
           
            article.style.display ="block"
            
        }else{

            article.style.display = "none"
        }
     
        
    })
    


})
    
    

