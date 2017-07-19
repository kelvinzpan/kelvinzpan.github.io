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
}