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
