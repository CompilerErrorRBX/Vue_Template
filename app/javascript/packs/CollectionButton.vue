<template>
  <li class="collection-btn" :class="{ circle: !text }" @click="onClick" v-on-click-outside="closeDropdown"> 
    <a class="waves-effect waves-light" :href="href">
      <i class="material-icons">{{ icon }}</i>
      <span v-show="text">{{ text }}</span>
      <slot></slot>
    </a>
    <popover class="grey-text text-darken-1" v-if="type === 'dropdown'" :opened="isDropdownOpen">
      <slot name="popover"></slot>
    </popover>
  </li>
</template>

<script>
  import { mixin as onClickOutside } from 'vue-on-click-outside'

  export default {
    mixins: [onClickOutside],
    props: ['href', 'icon', 'text', 'type'],
    data() {
      return {
        isDropdownOpen: false,
      };
    },
    methods: {
      onClick(event) {
        this.$emit('click', event);
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      closeDropdown() {
        this.isDropdownOpen = false;
      }
    }
  }
</script>
