$(document).ready(function() {
	$('a.to-top').click(function(e){
		leafOver(e);
	});
	wow.init();
});
function leafOver(e){
	e.preventDefault();
	var id = $(e.currentTarget).attr('href');
	var top = $(id).offset().top;
	$('body,html').animate({scrollTop:top}, 1500);
}
var wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 40,
	mobile: true,
	live: true,
	callback: function(box){
	},
	scrollContainer: null
	}
);