import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment){

      if(confirm("are you sure you want to squash free speech?")){
        this.sendAction('deleteComment', comment);
      }
    }
  }
});
