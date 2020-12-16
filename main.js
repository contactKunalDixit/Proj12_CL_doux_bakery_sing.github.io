/**
 * bar button opens detailed NAV below 640px
 * Instagram API : Carousel
 */


// ? Menu Switch works

const barButton = document.querySelector(".fa-bars");
const NavItemsMob = document.querySelector(".NavItems");
let menuSwitch = 0;
const NavMobStyle = NavItemsMob.style;

let hamburger = (e) => {
    if (!menuSwitch) {
        NavMobStyle.display = "block";
        menuSwitch++;
    } else {
        NavMobStyle.display = "none";
        menuSwitch--;
    }

    console.log(e)
}

barButton.addEventListener("click", hamburger);



// ?    Instagram Carousel

const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");

const left = document.getElementById("left");
const right = document.getElementById("right");

const SLIDES_COUNT = slides.length;

let current_slide = 0;


right.addEventListener("click", () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }
    updateCarousel();
});


left.addEventListener("click", () => {
    current_slide--;
    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }
    updateCarousel();
});



function updateCarousel() {
    carousel.style.transform = `translateX(${-current_slide *slides[0].offsetWidth}px)`;

}