<template>
  <li class="collection-btn waves-effect" :class="{ circle: !text }" @click="onClick" v-on-click-outside="closeDropdown"> 
    <a :href="href">
      <i class="material-icons">{{ icon }}</i>
      <span v-if="text">{{ text }}</span>
      <slot></slot>
    </a>
    <popover v-if="type === 'dropdown'" :settings="dropDownSettings">
      <slot name="popover"></slot>
    </popover>
  </li>
</template>

<script>
  export default {
    props: ['href', 'icon', 'text', 'type'],
    data() {
      return {
        dropDownSettings: { opened: false, event: null },
      };
    },
    methods: {
      onClick(event) {
        this.$emit('click', event);
        this.dropDownSettings = { opened: !this.dropDownSettings.opened, event: event };
      },
      closeDropdown() {
        this.dropDownSettings = { opened: false, event: null };
      }
    },
    computed: {
      colorPalette() {
        return this.$root.colorPalette;
      }
    }
  }
</script>
