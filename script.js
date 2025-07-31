const roles = ["Software Developer", "UI Designer", "AI Engineer"];
let index = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing");
    const text = roles[index];

    element.textContent = isDeleting
        ? text.substring(0, charIndex--)
        : text.substring(0, charIndex++);

    if (!isDeleting && charIndex === text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 200);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Software Developer", "UI Designer", "AI Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        let currentText = texts[textIndex];

        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000); // Pause before deleting
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Move to next text
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 120); // Typing & deleting speed
    }

    setTimeout(typeEffect, 1000); // Start after 1 second
});
