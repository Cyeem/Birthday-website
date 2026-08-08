function openSurprise() {
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });
}

const noBtn = document.getElementById("noBtn");

let noAttempts = 0;

const noMessages = [
    "NO 😭",
    "Are you sure? 😂",
    "Try again 😭",
    "Nice try 😂",
    "You can't escape ❤️",
    "Just say YES! 💍",
    "Emily pleaseee 🥹❤️",
    "Think again 😂",
    "YES is right there 👉❤️"
];

function moveNoButton(event) {
    if (event) {
        event.preventDefault();
    }

    noAttempts++;

    noBtn.textContent =
        noMessages[Math.min(noAttempts, noMessages.length - 1)];

    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX =
        padding + Math.random() * Math.max(0, maxX - padding);

    const randomY =
        padding + Math.random() * Math.max(0, maxY - padding);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.zIndex = "9999";
}

/* Works on laptop and phone */
noBtn.addEventListener("pointerenter", moveNoButton);

noBtn.addEventListener("pointerdown", function(event) {
    event.preventDefault();
    moveNoButton(event);
});

function sayYes() {

    document.getElementById("answer").innerHTML =
        "I KNEW IT! 😂❤️💍<br>Future Mrs. Mogambi ❤️";

    createHearts();
}

function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize =
            Math.random() * 25 + 20 + "px";

        heart.style.zIndex = "9999";
        heart.style.transition =
            "transform 3s, opacity 3s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                "translateY(-100vh) rotate(360deg)";

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 3200);
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openSurprise");
    const surprise = document.getElementById("surpriseContent");

    if (openButton && surprise) {

        openButton.addEventListener("click", function () {

            surprise.classList.remove("hidden");

            openButton.style.display = "none";

            surprise.scrollIntoView({
                behavior: "smooth"
            });

        });

    }

});