//slide toggle
const menuToggle = document.querySelector('.menu-toggle input');
const navul = document.querySelector('nav ul');

// sticky header
let nav = document.querySelector("nav");
let sticky = nav.offsetTop;

//slide toggle
menuToggle.addEventListener('click', function () {
    navul.classList.toggle('slide');
});

// sticky header
window.onscroll = () => {
    if (window.pageXOffset >= sticky){
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

//darkmode switching
//create a variable to monitor the input checkbox
const colorSwitch = document.getElementById("input-color-switch");

//when the input is clicked verify the state of the checkbox
colorSwitch.addEventListener("click", checkMode);

//1. see which state the checkbox is in
//2. if it is checked enable the dark mode by adding the class
//3. if it is not checked remove dark mode by removing the class
function checkMode() {
  console.log("checking...");
  if (colorSwitch.checked) {
    console.log("dark on");
    darkModeOn();
  } else {
    console.log("dark off");
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark-mode");
}

function darkModeOff() {
  document.body.classList.remove("dark-mode");
}
