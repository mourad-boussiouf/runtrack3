


document.addEventListener("DOMContentLoaded" , () => {


let p = document.getElementById('compteur')

let btn = document.getElementById("button")

console.log(btn)



    function citation (){
         
        count = 0
        btn.addEventListener("click", () => {
        count = count+1

        p.innerHTML= count
        

    

    })

}
citation ()

});



