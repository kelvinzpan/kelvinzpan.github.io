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

// Event listeners to show menu pictures
$('.nav-link').on('mouseenter', function(){
	let id = $(this).attr('id');
	if( id == 'navAbout' ) {
		showDiv('imgAbout', 0.2);
	}
	if( id == 'navCode' ) {
		showDiv('imgCode', 0.2);
	}
	if( id == 'navArt' ) {
		showDiv('imgArt', 0.2);
	}
	if( id == 'navContact' ) {
		showDiv('imgContact', 0.1);
	}
	if( id == 'navStore' ) {
		showDiv('imgStore', 0.2);
	}
});
$('.nav-link').on('touchstart', function(){
	let id = $(this).attr('id');
	if( id == 'navAbout' ) {
		showDiv('imgAbout', 0.2);
	}
	if( id == 'navCode' ) {
		showDiv('imgCode', 0.2);
	}
	if( id == 'navArt' ) {
		showDiv('imgArt', 0.2);
	}
	if( id == 'navContact' ) {
		showDiv('imgContact', 0.1);
	}
	if( id == 'navStore' ) {
		showDiv('imgStore', 0.2);
	}
});

// Event listeners to hide menu pictures
$('.nav-link').on('mouseleave', function(){
	let id = $(this).attr('id');
	if( id == 'navAbout' ) {
		hideDiv('imgAbout');
	}
	if( id == 'navCode' ) {
		hideDiv('imgCode');
	}
	if( id == 'navArt' ) {
		hideDiv('imgArt');
	}
	if( id == 'navContact' ) {
		hideDiv('imgContact');
	}
	if( id == 'navStore' ) {
		hideDiv('imgStore');
	}
});
$('.nav-link').on('touchend', function(){
	let id = $(this).attr('id');
	if( id == 'navAbout' ) {
		hideDiv('imgAbout');
	}
	if( id == 'navCode' ) {
		hideDiv('imgCode');
	}
	if( id == 'navArt' ) {
		hideDiv('imgArt');
	}
	if( id == 'navContact' ) {
		hideDiv('imgContact');
	}
	if( id == 'navStore' ) {
		hideDiv('imgStore');
	}
});
$('.nav-link').on('click', function(){
	let id = $(this).attr('id');
	if( id == 'navAbout' ) {
		hideDiv('imgAbout');
	}
	if( id == 'navCode' ) {
		hideDiv('imgCode');
	}
	if( id == 'navArt' ) {
		hideDiv('imgArt');
	}
	if( id == 'navContact' ) {
		hideDiv('imgContact');
	}
	if( id == 'navStore' ) {
		hideDiv('imgStore');
	}
});

// Event listeners to show pictures
$('.art-box').on('mouseenter', function(){
	let id = $(this).attr('id');
	if( id == 'skywardImg' ) {
		showDiv('skyward', 1);
		showDiv('skywardDim', 1);
	}
	if( id == 'kannaImg' ) {
		showDiv('kanna', 1);
		showDiv('kannaDim', 1);
	}
	if( id == 'kanekireImg' ) {
		showDiv('kanekire', 1);
		showDiv('kanekireDim', 1);
	}
});
$('.art-box').on('touchstart', function(){
	let id = $(this).attr('id');
	if( id == 'skywardImg' ) {
		showDiv('skyward', 1);
		showDiv('skywardDim', 1);
	}
	if( id == 'kannaImg' ) {
		showDiv('kanna', 1);
		showDiv('kannaDim', 1);
	}
	if( id == 'kanekireImg' ) {
		showDiv('kanekire', 1);
		showDiv('kanekireDim', 1);
	}
});

// Event listeners to hide pictures
$('.art-box').on('mouseleave', function(){
	let id = $(this).attr('id');
	if( id == 'skywardImg' ) {
		hideDiv('skyward');
		hideDiv('skywardDim');
	}
	if( id == 'kannaImg' ) {
		hideDiv('kanna');
		hideDiv('kannaDim');
	}
	if( id == 'kanekireImg' ) {
		hideDiv('kanekire');
		hideDiv('kanekireDim');
	}
});
$('.art-box').on('touchmove', function(){
	let id = $(this).attr('id');
	if( id == 'skywardImg' ) {
		hideDiv('skyward');
		hideDiv('skywardDim');
	}
	if( id == 'kannaImg' ) {
		hideDiv('kanna');
		hideDiv('kannaDim');
	}
	if( id == 'kanekireImg' ) {
		hideDiv('kanekire');
		hideDiv('kanekireDim');
	}
});
$('.art-box').on('click', function(){
	let id = $(this).attr('id');
	if( id == 'skywardImg' ) {
		hideDiv('skyward');
		hideDiv('skywardDim');
	}
	if( id == 'kannaImg' ) {
		hideDiv('kanna');
		hideDiv('kannaDim');
	}
	if( id == 'kanekireImg' ) {
		hideDiv('kanekire');
		hideDiv('kanekireDim');
	}
});

// Copied jquery to collapse mobile menu on click
$('.navbar-nav>li>a').on('click touchmove', function(){
    $('.navbar-collapse').collapse('hide');
});
