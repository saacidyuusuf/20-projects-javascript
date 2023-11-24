const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,
    `em ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,
    `orem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,
    `rem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,
    `yaya ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,
    `ture ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,
    `midkle ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,
    `bashal ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus
     tenetur, repellendus esse aliquid voluptates harum assumenda quaerat necessitatibus
    dolores commodi id enim, recusandae dicta eius. Pariatur, aspernatur quia distinctio
    esse harum earum veniam facilis?`,

]

const form = document.querySelector(".form")
const amount = document.querySelector("#number")
const result = document.querySelector(".lorem")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length)
// -1
// empty
// >8
if(isNaN(value) || value > 8 || value <=0){
    result.innerHTML = `${text[random]}`
}else{
    let textdisplay = text.slice(0,value)
    textdisplay = textdisplay.map(function(item){
        return `${item}<br>`
    }).join("")
 result.innerHTML = /* `${textdisplay.join(" ")}` */ 
 textdisplay
 amount.value = ""
}

/* textdisplay = text.map(function(parag){
    return `${parag}`
}).join("")
textdisplay.innerHTML = result */

});

















