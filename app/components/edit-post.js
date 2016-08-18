import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    showEdit(){
      this.set('editFormShow', true);
    },

    update(post){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category')
      };
      this.set('editFormShow', false);
      this.sendAction('update', post, params);
    },

    delete(post){
      if(confirm('are you sure?')){
        this.sendAction('delete', post);
      }
    }
  }
});
