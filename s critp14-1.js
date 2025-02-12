document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️"; // Puedes cambiarlo por "💖" o "💕"
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duración aleatoria
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Elimina los corazones después de 5s
    }

    setInterval(createHeart, 500); // Crea un corazón cada 0.5 segundos
});
