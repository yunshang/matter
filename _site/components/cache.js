/*jshint unused:false */
// (function (exports) {
//   'use strict';
//
//    // var STORAGE_KEY = 'matter-vuejs';
//    var AV = require('avoscloud-sdk');
//    AV.initialize('SaPcnO4U2rC7vqgFdbRiRNls-gzGzoHsz', 'e4zha3v6Xgp394QKezUYHhYn');
//    var storage = AV.Object.extend('storage');
//    exports.matterStorage = {
// 	 fetch: function () {
// 	   return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
// 	 },
// 	 save: function (todos) {
// 	   localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
// 	 }
//    };
//
// })(window);
//

var AV = require('avoscloud-sdk');
AV.initialize('SaPcnO4U2rC7vqgFdbRiRNls-gzGzoHsz', 'e4zha3v6Xgp394QKezUYHhYn');
export var storage = AV.Object.extend('storage', {
  title: function() {
    return this.get('title');
  },
  answer: function() {
    return this.get('answer');
  },
  set_title: function(tl) {
    var ms = new storage();
    ms.set({ title: tl, answer: '' })
    ms.save().then(function(obj) {
      return obj;
    },function(error) {
      console.dir(4);
    })
    return ms;
  },
  update_answer: function(st) {
    var query = new AV.Query('storage');
    query.equalTo('title', st.title);
    query.first().then(function(data) {
      data.set('answer', st.answer)
      data.save();
    }, function(err){
      console.log('Failed to create new object, with error message: ' + err.message);
    })
  },
  fetchall: function(){
    var results = [];
    var query = new AV.Query('storage');
    query.find().then(function(object){
      for (var i = 0; i < object.length; i++) {
        results.push({ title: object[i].get('title'), answer: object[i].get('answer'), id: object[i].id })
      }
    });
    return results;
  }
})
