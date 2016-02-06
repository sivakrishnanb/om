Template.home.helpers({
  
});

UI.registerHelper("formatter", function(amount){
  return null;
});

Template.home.rendered = function () {
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
};

Template.home.list = function() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};