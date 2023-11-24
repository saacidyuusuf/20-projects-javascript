const manage = document.querySelector(".manage")
const managebtns = document.querySelectorAll(".manage-btn")
const mnagecontents = document.querySelectorAll(".manage-contents")
const manageimg = document.querySelectorAll(".manage-img")
//const cadi = document.querySelector(".cadi")

manage.addEventListener("click", function(e){
    const id = e.target.dataset.m
    if (id) {
        managebtns.forEach(function (btns) {
            btns.classList.remove("tabte")
            e.target.classList.add("tabte")
        })
    mnagecontents.forEach(function (content) {
        content.classList.remove("cadi")
        content.classList.remove("tabte")
    })
    const kanLaMUjin = document.getElementById(id)
    kanLaMUjin.classList.add("tabte")


    manageimg.forEach(function(img){
        if(img.id === id){
            img.classList.add("tabte")
        }else{
            img.classList.remove("tabte")
        }
    })
    
}
})



