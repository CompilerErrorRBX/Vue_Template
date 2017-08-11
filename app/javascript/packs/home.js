/* eslint no-console: 0 */

import Vue from 'vue';
import App from './App.vue';
import Sidenav from './Sidenav.vue';
import Navbar from './Navbar.vue';
import CollectionButton from './CollectionButton.vue';
import SearchBar from './SearchBar.vue';

Vue.component('side-nav', Sidenav);
Vue.component('nav-bar', Navbar);
Vue.component('collection-btn', CollectionButton);
Vue.component('search-bar', SearchBar);

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'));
  const app = new Vue(App).$mount('hello');
})
