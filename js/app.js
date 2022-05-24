
let burger=document.querySelector(".burger");
let btn=document.querySelector(".apply");


burger.addEventListener('click',()=>{
    burger.classList.toggle("toggle");
    btn.classList.toggle("active");
})

