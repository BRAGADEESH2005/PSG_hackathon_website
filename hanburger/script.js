let menu= document.querySelector(".menu");
let unorderList = document.querySelector('nav ul');
menu.addEventListener('click',()=>{
    unorderList.classList.toggle('showmenu')
})