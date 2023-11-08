let menu= document.querySelector(".menu");
let unorderList = document.querySelector('nav ul');
menu.addEventListener('click',()=>{
    unorderList.classList.toggle('showmenu')
})

const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})