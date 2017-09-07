// Color palette from main.scss
let primary_dark = '#252525';
let secondary_dark = '#333333';
let primary_light = '#ffffff';

let grad1 = '#FFF6B7';
let grad2 = '#FDD1A8';
let grad3 = '#FBAD99';
let grad4 = '#F9898A';
let grad5 = '#F7657B';
let grad6 = '#F6416C';

function showDiv(divName, opacity) {
  let currDiv = document.getElementById(divName);
  currDiv.style.visibility = 'visible';
  currDiv.style.opacity = opacity;
}

function hideDiv(divName) {
  let currDiv = document.getElementById(divName);
  currDiv.style.visibility = 'hidden';
  currDiv.style.opacity = '0';
}
