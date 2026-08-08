function openSurprise() {
    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });
}

const noBtn = document.getElementById("noBtn");

const noBtn = document.getElementById("noBtn");

function moveNoButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

/* Computer */
noBtn.addEventListener("mouseover", moveNoButton);

/* Phone */
noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
});
/* Computer */
noBtn.addEventListener("mouseover", moveNoButton);

/* Phone */
noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
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