import Ember from 'ember';

export default Ember.Component.extend({
  showNewCommentForm: false,

  actions: {
    showNewForm(){
      this.set('showNewCommentForm', true);
    },

    save1(){
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        post: this.get('post')
      };
      this.set('showNewCommentForm', false);
      this.sendAction('save1', params);
    }
  }
});
