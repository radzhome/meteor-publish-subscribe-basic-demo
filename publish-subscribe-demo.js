BlogPosts = new Meteor.Collection('blog_posts');

if (Meteor.isClient) {

//    Template.hello.post = function(){
//        return BlogPosts.find();
//    }
  // counter starts at 0
  Meteor.subscribe('theBlogPosts');

  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    },
      post: function (){
          return  BlogPosts.find(); // Returns all that publish will offer
      }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
Meteor.publish('theBlogPosts', function(){
    return BlogPosts.find({ draft: false });
});
  Meteor.startup(function () {
    // code to run on server at startup
  });

}


/*
BlogPosts.insert({title: "How To Make the Default Meteor Application", draft: true});
BlogPosts.insert({title: "How To Make the Default Meteor Application2", draft: true});
BlogPosts.insert({title: "How To Make the Default Meteor Application3", draft: false});
BlogPosts.insert({title: "How To Make the Default Meteor Application4", draft: false});

 */
