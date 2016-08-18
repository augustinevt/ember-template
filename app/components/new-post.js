import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {

    newFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category')
      };
      this.set('title', '');
      this.set('author', '');
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
