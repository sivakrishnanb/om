Template.home.helpers({
  list : function() {
		    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		}
});

UI.registerHelper("formatter", function(amount){
  return null;
});

Template.home.rendered = function () {
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
};
