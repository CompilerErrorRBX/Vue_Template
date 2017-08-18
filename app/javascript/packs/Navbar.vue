<template>
  <nav :class="{ fixed: isFixed }">
    <div class="nav-wrapper flex flex-row" :class="colorPalette.primary">
      <ul class="horizontal">
        <collection-btn icon="menu" @click.stop="toggleSidebar"/>
      </ul>
      <a class="title" href="#">{{ projectName }}</a>
      <div class="flex flex-md">
        <search-bar class="flex-md hide-on-small-only" placeholder="Search" />
        <ul class="horizontal">
          <slot name="navigation"></slot>
        </ul>
      </div>
      <ul id="profile-options" class="horizontal hide-on-med-and-down">
        <slot name="tool-bar"></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['projectName', 'isFixed'],
    data() {
      return {
      }
    },
    methods: {
      toggleSidebar() {
        this.$parent.toggleSidebar();
      }
    },
    computed: {
      colorPalette() {
        return this.$root.colorPalette;
      }
    }
  }
</script>
