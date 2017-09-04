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

// When user hovers a menu item, front background changes
let imgMain = document.getElementById('imgMain');
let imgAbout = document.getElementById('imgAbout');
let imgCode = document.getElementById('imgCode');
let imgArt = document.getElementById('imgArt');
let imgContact = document.getElementById('imgContact');
let imgStore = document.getElementById('imgStore');

function bgMain() {
	imgMain.style.height = $(window).height();
	imgMain.style.visibility = 'visible';
    imgMain.style.opacity = '.1';
}
function bgAbout() {
	imgAbout.style.height = $(window).height();
	imgAbout.style.visibility = 'visible';
    imgAbout.style.opacity = '.1';
} 
function bgCode() {
	imgCode.style.height = $(window).height();
	imgCode.style.visibility = 'visible';
    imgCode.style.opacity = '.1';
}
function bgArt() {
	imgArt.style.height = $(window).height();
	imgArt.style.visibility = 'visible';
    imgArt.style.opacity = '.1';
}
function bgContact() {
	imgContact.style.height = $(window).height();
	imgContact.style.visibility = 'visible';
    imgContact.style.opacity = '.1';
}
function bgStore() {
	imgStore.style.height = $(window).height();
	imgStore.style.visibility = 'visible';
	imgStore.style.opacity = '.1';
}

function bgDefault() {
	imgMain.style.visibility = 'hidden';
    imgMain.style.opacity = '0';
    imgAbout.style.visibility = 'hidden';
    imgAbout.style.opacity = '0';
    imgCode.style.visibility = 'hidden';
    imgCode.style.opacity = '0';
    imgArt.style.visibility = 'hidden';
    imgArt.style.opacity = '0';
    imgContact.style.visibility = 'hidden';
    imgContact.style.opacity = '0';
    imgStore.style.visibility = 'hidden';
    imgStore.style.opacity = '0';
}