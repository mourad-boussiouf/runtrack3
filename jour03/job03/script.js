$(document).ready(function (){

    let btn = $("#button")
    let img1 = $("#img1")
    let img2 = $("#img2")
    let img3 = $("#img3")
    let img4 = $("#img4")
    let img5 = $("#img5")
    let img6 = $("#img6")
    const resultat = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6']
    const game = []

    btn.click(function(){
        $(function () {
            var parent = $("#melangees");
            var divs = parent.children();
            while (divs.length) {
                parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
            }
        });
        jQuery("#img1").detach().appendTo('#melangees')
        jQuery("#img2").detach().appendTo('#melangees')
        jQuery("#img3").detach().appendTo('#melangees')
        jQuery("#img4").detach().appendTo('#melangees')
        jQuery("#img5").detach().appendTo('#melangees')
        jQuery("#img6").detach().appendTo('#melangees')
    })
    img1.click(function(){
        jQuery("#img1").detach().appendTo('#rangees')
        game.push("img1")
        if(game.length === 6){
            compareArray(game, resultat)
        }
    })
    img2.click(function(){
        jQuery("#img2").detach().appendTo('#rangees')
        game.push("img2")
        if(game.length === 6){
            compareArray(game, resultat)
        }
    })
    img3.click(function(){
        jQuery("#img3").detach().appendTo('#rangees')
        game.push("img3")
        if(game.length === 6){
            compareArray(game, resultat)
        }
    })
    img4.click(function(){
        jQuery("#img4").detach().appendTo('#rangees')
        game.push("img4")
        if(game.length === 6){
            compareArray(game, resultat)
        }
    })
    img5.click(function(){
        jQuery("#img5").detach().appendTo('#rangees')
        game.push("img5")
        if(game.length === 6){
            compareArray(game, resultat)
        }
    })
    img6.click(function(){
        jQuery("#img6").detach().appendTo('#rangees')
        game.push("img6")
        if(game.length === 6){
            compareArray(game, resultat)
        }
    })
})

function compareArray(position, result){
    const comparing = []
    for(var i=0;i<position.length;){
        for(var j=0;j<result.length;j++){
            if(position[i] != result[j]){
                comparing.push(i)
            }
            i++
        }
    }
    if(comparing.length != 0){
        console.log('Tu as perdu')
    }
    else{
        console.log('Tu as gagné')
    }
}