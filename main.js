/**
 * bar button opens detailedNAV beyond 640px
 * Contacts: Facebook, Email, Insta API links
 * Instagram API : Carousel
 */


const barButton = document.querySelector(".fa-bars");
const NavItemsMob = document.querySelector(".NavItems");
let switchOff = 0;
const NavMobStyle = NavItemsMob.style;







let hamburger = () => {


    if (!switchOff) {
        NavMobStyle.display = "inline-block";
        
        // NavMobStyle.textalign = "center";
        // NavItemsMob.display = "flex";
        // NavItemsMob.flexdirection = "column";
        // NavMobStyle.flexDirection = "column";
        switchOff++;
    } else {
        NavMobStyle.display = "none";
        switchOff--;

    }

    // switchOff++;



}
/**Test */
barButton.addEventListener("click", hamburger);
barButton.addEventListener("click", () => console.log("Clicked"));