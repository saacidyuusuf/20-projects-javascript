/* const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

question.addEventListener("click", () =>{
    answer.classList.toggle("active")
}); */
// sidu u sameyay hoos
const container = document.querySelectorAll(".container-yar");
/* for(i = 0; i < accordion.length; i++){
//hdi i ayka yarthy acord dhirirkeda means wayba ka yrthy ee hal ku dar

    accordion[i].addEventListener("click", function(){
    // madama an clasyada dhan doranayno in onclick an u samaynyo 
    // midwalba wa in uu lahada event so u wac loop magacisa
    this.classList.toggle("active");
    //referncing the object that is calling the fuction that is accordion
    })
}
 */
container.forEach(function(item) {
    item.addEventListener("click",() =>{
     if(item.classList.contains){
        container.forEach(function(question){
            if(question !== item){
                question.classList.remove("active")
            }
        })
        item.classList.toggle("active")
     }
    
    })
})

// meshan arrow function ba u usticmalay wu iga diiday 
// wana isku mid baala lahaaa what the fuck is going on.









