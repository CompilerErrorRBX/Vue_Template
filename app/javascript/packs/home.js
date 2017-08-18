/* eslint no-console: 0 */

import Vue from 'vue';
import App from './App.vue';
import Sidenav from './Sidenav.vue';
import Navbar from './Navbar.vue';
import CollectionButton from './CollectionButton.vue';
import SearchBar from './SearchBar.vue';
import Popover from './Popover.vue';
import Ticket from './app/Ticket.vue';
import Device from './app/Device.vue';
import Comment from './app/Comment.vue';
import User from './app/User.vue';
import { mixin as onClickOutside } from 'vue-on-click-outside'

Vue.component('side-nav', Sidenav);
Vue.component('nav-bar', Navbar);
Vue.component('collection-btn', CollectionButton);
Vue.component('search-bar', SearchBar);
Vue.component('popover', Popover);
Vue.component('ticket', Ticket);
Vue.component('device', Device);
Vue.component('comment', Comment);
Vue.component('user-card', User);

Vue.mixin(onClickOutside);

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'));
  const app = new Vue(App).$mount('hello');

  var msnry = new Masonry( '.grid', {
    // options...
  });
})
