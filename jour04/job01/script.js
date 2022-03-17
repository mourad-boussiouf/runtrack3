document.addEventListener("DOMContentLoaded" , () => {

let btn = document.getElementById("button")
let pexpression = document.getElementById("para")
btn.addEventListener("click", () => {
  

    console.log("test")
    async function fetchText() {
        let response = await fetch('expression.txt');
        let data = await response.text();
        console.log(data);

        pexpression.textContent = data


    }
    fetchText();


})


});

