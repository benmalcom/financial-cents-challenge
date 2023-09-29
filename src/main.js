import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.directive('click-outside', {
  mounted(el, binding) {
    // Define a function to handle clicks outside of the element
    function onClickOutside(event) {
      if (!el.contains(event.target)) {
        // Clicked outside the element, call the specified method
        binding.value();
      }
    }

    // Add a click event listener to the document
    document.addEventListener('click', onClickOutside);

    // Store the event listener on the element's data so we can remove it later
    el._clickOutside = onClickOutside;
  },
  beforeUnmount(el) {
    // Remove the event listener when the directive is unmounted
    document.removeEventListener('click', el._clickOutside);
  }
});

app.mount('#app');
