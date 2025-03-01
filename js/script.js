document.getElementById('check').addEventListener('change', function () {
    const navbar = document.querySelector('.navbar');
    if (this.checked) {
        navbar.style.left = '0';
    } else {
        navbar.style.left = '-200%';
    }
    const checkbtn = document.querySelector('.checkbtn');
    if (this.checked) {
        checkbtn.style.color = '#d0d0d0';
    } else {
        checkbtn.style.color = '#000000';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const blur = document.getElementById("blur");
    const header = document.getElementById('header');

    header.addEventListener("mouseenter", () => {
        blur.style.display = "block"; // Make the blur div visible
        blur.style.animation = "blur 0.5s forwards"; // Trigger the blur animation and retain the final state
    });

    header.addEventListener("mouseleave", () => {
        blur.style.animation = "stopblur 0.5s forwards"; // Trigger the stopblur animation and retain the final state
        setTimeout(() => {
            blur.style.display = "none"; // Hide the blur div after the animation ends
        }, 500); // Match the animation duration
    });
});
