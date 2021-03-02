import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library, } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook,faBars,faCode, faHome,faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("fa-icon", FontAwesomeIcon);
library.add(faAddressBook,faBars,faCode,faHome,faComment);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
