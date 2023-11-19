// let menu= document.querySelector(".menu");
// let unorderList = document.querySelector('nav ul');
// menu.addEventListener('click',()=>{
//     unorderList.classList.toggle('showmenu')
// })

// const toTop=document.querySelector(".to-top");
// window.addEventListener("scroll",()=>{
//     if(window.pageYOffset > 100){
//         toTop.classList.add("active");
//     }else{
//         toTop.classList.remove("active");
//     }
// })
let menu = document.querySelector(".menu");
let unorderList = document.querySelector('nav ul');
let menuLines = document.querySelectorAll('.menu-line');

menu.addEventListener('click', () => {
  unorderList.classList.toggle('showmenu');

  // Toggle the active class on each menu line
  menuLines.forEach(line => line.classList.toggle('active'));
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
