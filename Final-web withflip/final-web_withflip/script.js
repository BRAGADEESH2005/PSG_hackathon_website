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
let unorderList = document.querySelector("nav ul");
let menuLines = document.querySelectorAll(".menu-line");

menu.addEventListener("click", () => {
	unorderList.classList.toggle("showmenu");

	// Toggle the active class on each menu line
	menuLines.forEach((line) => line.classList.toggle("active"));
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});

const sections = document.querySelectorAll(".section");

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
			observer.unobserve(entry.target);
		}
	});
}, options);

sections.forEach((section) => {
	observer.observe(section);
});

const movingText = document.querySelector(".moving-text");
const topText = document.querySelector(".logo-text-top");
const bottomText = document.querySelector(".logo-text-bottom");

document.addEventListener("mousemove", (e) => {
	const mouseX = e.clientX;
	const windowWidth = window.innerWidth;
	const moveRange = 100; // Adjust the range of movement

	// Calculate the horizontal movement for both text elements
	const moveTop = (mouseX / windowWidth - 0.5) * moveRange;
	const moveBottom = -moveTop;

	// Apply the horizontal movement to the text elements
	topText.style.transform = `translateX(${moveTop}px)`;
	bottomText.style.transform = `translateX(${moveBottom}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    var typingContainer = document.getElementById("typing-container");
    typingContainer.classList.add("paused");
    console.log("Came here");
  });

const checkbox = document.getElementById("checkbox");
const dropdown = document.querySelector(".dropdown");

checkbox.addEventListener("click", function () {
	dropdown.classList.toggle("active");
});


  
