alert("Join Yard's discord server and if you have an invite claim it before it expires.");

// Function to show alert when "Yard" button is clicked
function sayHello() {
    alert("Yard is just a cool private thingy.");
}

// Create Floating Yard Text Effect
function createYard() {
    const yard = document.createElement("div");
    yard.classList.add("yard");
    yard.innerText = "YARD";
    document.getElementById("yardContainer").appendChild(yard);

    let startX = Math.random() * window.innerWidth;
    yard.style.left = startX + "px";

    let duration = Math.random() * 5 + 3;

    yard.animate([
        { transform: `translateY(0px)`, opacity: 1 },
        { transform: `translateY(${window.innerHeight}px)`, opacity: 0.2 }
    ], { duration: duration * 1000, easing: "linear" });

    setTimeout(() => yard.remove(), duration * 1000);
}

// Continuously create "YARD" floating text
setInterval(createYard, 500);

// Discord Button Redirect
document.getElementById("discordButton").addEventListener("click", function() {
    window.location.href = "https://discord.gg/yrd";
});

// Background Music & Mute Functionality
const bgMusic = document.getElementById("bgMusic");
const muteButton = document.getElementById("muteButton");

window.onload = function() {
    bgMusic.play().catch(() => console.log("Autoplay blocked"));
};

muteButton.addEventListener("click", function() {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        muteButton.innerText = "🔊 Mute";
    } else {
        bgMusic.muted = true;
        muteButton.innerText = "🔇 Unmute";
    }
});

// Floating PNG Image Effect on Click
document.body.addEventListener("click", function(event) {
    const image = document.createElement("img");
    image.src = "assets/my-image.png"; // Your image path
    image.classList.add("floating-image");

    const randX = Math.random() * 500 - 250; // Adjust random horizontal distance
    const randY = Math.random() * 500 - 250; // Adjust random vertical distance

    image.style.setProperty('--randX', `${randX}px`);
    image.style.setProperty('--randY', `${randY}px`);

    const rect = document.documentElement.getBoundingClientRect();
    const clickX = event.clientX + rect.left;
    const clickY = event.clientY + rect.top;

    image.style.left = `${clickX - 25}px`; // Center image around click position
    image.style.top = `${clickY - 25}px`;

    image.style.width = '50px'; // Fix the size of the image to be consistent

    document.body.appendChild(image);

    setTimeout(() => {
        image.remove();
    }, 7000);
});

// Typewriter Effect
const texts = ["Yard.", "WIP"];
let charIndex1 = 0;
let charIndex2 = 0;
let isDeleting = false;
let typingSpeed = 150;
let deleteSpeed = 100;
let pauseTime = 2000;

function typeText() {
    const titleElement = document.querySelector("h1");
    const subtitleElement = document.querySelector("p");

    if (!isDeleting) {
        if (charIndex1 < texts[0].length) {
            charIndex1++;
        } else if (charIndex2 < texts[1].length) {
            charIndex2++;
        }
    } else {
        if (charIndex2 > 0) {
            charIndex2--;
        } else if (charIndex1 > 0) {
            charIndex1--;
        }
    }

    titleElement.innerText = texts[0].substring(0, charIndex1);
    subtitleElement.innerText = texts[1].substring(0, charIndex2);

    if (!isDeleting && charIndex1 === texts[0].length && charIndex2 === texts[1].length) {
        isDeleting = true;
        setTimeout(typeText, pauseTime);
    } else if (isDeleting && charIndex1 === 0 && charIndex2 === 0) {
        isDeleting = false;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? deleteSpeed : typingSpeed);
    }
}

window.onload = function() {
    typeText();
};

// Background images array
const bgImages = ["background.gif", "background1.png"];
let currentIndex = 0;

// Background Change Button
document.getElementById("bgChangeButton").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % bgImages.length;
    
    // Change background while keeping elements in place
    document.body.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
});
