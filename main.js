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

const imgContainer = document.getElementById('imgs');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

const imgArray = document.querySelectorAll('#imgs img');

let imgCount = 0;

let interval = setInterval(run, 3000);

function run() {
  imgCount += 1;
  imgChange();
}

function imgChange() {
  if (imgCount > imgArray.length - 1) {
    imgCount = 0;
  } else if (imgCount < 0) {
    imgCount = imgArray.length - 1;
  }

  imgContainer.style.transform = `translateX(${-imgCount * 300}px)`;
}



function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

prevBtn.addEventListener('click', (e) => {
  console.log(e);
  imgCount -= 1;
  imgChange();
  resetInterval();
});

nextBtn.addEventListener('click', (e) => {
  console.log(e);
  imgCount += 1;
  imgChange();
  resetInterval();
});
