Template.home.helpers({
  
});

UI.registerHelper("formatter", function(amount){
  return null;
});

Template.home.rendered = function () {
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
};