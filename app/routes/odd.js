import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.query('post', { orderBy: 'category', equalTo: 'odd'});
  },
  actions: {
    save3(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('odd');
    },
    delete(post){
      post.destroyRecord();
      this.transitionTo('odd');
    },
    update(post, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('odd');
    }
  }
});
