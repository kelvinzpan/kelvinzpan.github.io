// Clicking the main rectangle will open/close menu, first click will show rest of website
function menuClick() {
	var mainMenu = document.getElementById('main-menu');
	if( mainMenu.style.visibility == 'hidden' ) {
		mainMenu.style.visibility = 'visible';
		mainMenu.style.opacity = '1';
	} else {
		mainMenu.style.visibility = 'hidden';
		mainMenu.style.opacity = '0';
	}

	document.getElementById('content').style.display = 'block';
}

// When the user scrolls down from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var h = $(window).height() / 2;
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        document.getElementById("top-button").style.visibility = 'visible';
        document.getElementById("top-button").style.opacity = '1';
    } else {
        document.getElementById("top-button").style.visibility = 'hidden';
        document.getElementById("top-button").style.opacity = '0';
    }

    // Add functionality for showing highlighting code divs when scrolled to
    c1 = document.getElementById("code-1");
    c2 = document.getElementById("code-2");

    if (document.body.scrollTop > c1.scrollTop + h*2 + c1.offsetHeight/2 ||
    	document.documentElement.scrollTop > c1.scrollTop + h*2 + c1.offsetHeight/2 ) {
        c1.style.opacity = '1';
    } else {
        c1.style.opacity = '0.1';
    }
}

// When user hovers a menu item, front background changes
var img_main = document.getElementById('img-main');
var img_abt = document.getElementById('img-abt');
var img_prg = document.getElementById('img-prg');
var img_drw = document.getElementById('img-drw');
var img_ctt = document.getElementById('img-ctt');

function bgMain() {
	img_drw.style.height = $(window).height();
	img_main.style.visibility = 'visible';
    img_main.style.opacity = '.1';
}

function bgAbout() {
	img_drw.style.height = $(window).height();
	img_abt.style.visibility = 'visible';
    img_abt.style.opacity = '.1';
} 

function bgProg() {
	img_drw.style.height = $(window).height();
	img_prg.style.visibility = 'visible';
    img_prg.style.opacity = '.1';
}

function bgDraw() {
	img_drw.style.height = $(window).height();
	img_drw.style.visibility = 'visible';
    img_drw.style.opacity = '.1';
}

function bgContact() {
	img_drw.style.height = $(window).height();
	img_ctt.style.visibility = 'visible';
    img_ctt.style.opacity = '.1';
}

function bgDefault() {
	img_main.style.visibility = 'hidden';
    img_main.style.opacity = '0';
    img_abt.style.visibility = 'hidden';
    img_abt.style.opacity = '0';
    img_prg.style.visibility = 'hidden';
    img_prg.style.opacity = '0';
    img_drw.style.visibility = 'hidden';
    img_drw.style.opacity = '0';
    img_ctt.style.visibility = 'hidden';
    img_ctt.style.opacity = '0';
}