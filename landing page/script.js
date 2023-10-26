
const movingText = document.querySelector('.moving-text');
const topText = document.querySelector('.logo-text-top');
const bottomText = document.querySelector('.logo-text-bottom');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const windowWidth = window.innerWidth;
    const moveRange = 100; // Adjust the range of movement

    // Calculate the horizontal movement for both text elements
    const moveTop = ((mouseX / windowWidth) - 0.5) * moveRange;
    const moveBottom = -moveTop;

    // Apply the horizontal movement to the text elements
    topText.style.transform = `translateX(${moveTop}px)`;
    bottomText.style.transform = `translateX(${moveBottom}px)`;
});

const checkbox = document.getElementById("checkbox");
        const dropdown = document.querySelector(".dropdown");

        checkbox.addEventListener("click", function () {
            dropdown.classList.toggle("active");
        });
