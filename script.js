document.addEventListener("DOMContentLoaded", () => {
    // Welcome Message
    console.log("Welcome to the official website of Untitled Parkour Test!");

    // Play Button Click Effect
    const playButton = document.querySelector(".play-button");
    playButton.addEventListener("click", () => {
        alert("Redirecting you to the game on Roblox...");
    });

    // Hover Effect for Play Button
    playButton.addEventListener("mouseover", () => {
        playButton.style.transform = "scale(1.1)";
    });

    playButton.addEventListener("mouseout", () => {
        playButton.style.transform = "scale(1)";
    });

    // About Creator Section Animation
    const aboutCreator = document.querySelector(".about-creator");
    window.addEventListener("scroll", () => {
        let position = aboutCreator.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            aboutCreator.style.opacity = "1";
            aboutCreator.style.transform = "translateY(0)";
        }
    });

    // Initialize About Creator Section Style
    aboutCreator.style.opacity = "0";
    aboutCreator.style.transform = "translateY(30px)";
    aboutCreator.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});
