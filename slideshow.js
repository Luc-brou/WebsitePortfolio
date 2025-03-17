var slideIndex = 0;

function carousel() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset index when it exceeds the number of slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(carousel, 3000); // Change slide every 2 seconds
}

document.addEventListener("DOMContentLoaded", carousel);
