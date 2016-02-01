Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route("/", {
  name : "home"
});
Router.route("/about", {
  name : "about"
});
Router.route("/contact", {
  name : "contact"
});
Router.route("/loading", {
  name : "loading"
});
/*Router.route("/vendors/:slug", {
  name : "vendorsShow",
  waitOn : function(){
    return Meteor.subscribe("products-by-vendor", this.params.slug);
  },
  data : function(){
    return Vendors.findOne({slug : this.params.slug});
  }
});
Router.route("/cart", {
  name : "cartShow"
});

Router.route("/checkout",{
  name: "checkoutShow"
});

Router.route("/receipt/:id", {
  name : "receiptShow",
  data : function(){
    return {id : this.params.id};
  }
});*/
