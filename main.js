/**
 * bar button opens detailedNAV beyond 640px
 * Contacts: Facebook, Email, Insta API links
 * Instagram API : Carousel
 */


const barButton = document.querySelector(".fa-bars");
const NavItemsMob = document.querySelector(".NavItems");
let menuSwitch = 0;
const NavMobStyle = NavItemsMob.style;







let hamburger = () => {
    if (!menuSwitch) {
        NavMobStyle.display = "block";
        menuSwitch++;
    } else {
        NavMobStyle.display = "none";
        menuSwitch--;
    }
    console.log("The click worked")
}

barButton.addEventListener("click", hamburger);
