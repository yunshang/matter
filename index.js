import Vue from "vue";
import App from "./components/app.vue";

Vue.config.debug = true;

var vm = new Vue({
  el: document.getElementsByTagName('body')[0],
  components: {
    app: App,
  },
});
