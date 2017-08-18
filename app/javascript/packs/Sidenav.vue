<template>
    <div class="side-bar grey-text text-darken-2" :class="{ active: isClosed, closed: isClosedLargeScreen }">
      <div class="tool-bar">
        <ul class="horizontal left">
          <collection-btn icon="arrow_back" @click.stop="closeSidebar" />
        </ul>
        <ul class="horizontal right">
          <slot name="tool-bar"></slot>
        </ul>
      </div>
      <div class="body">
        <span class="title" v-once> {{ projectName }} </span>
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['projectName', 'isClosed', 'isClosedLargeScreen'],
    data() {
      return {
        colorPalette: {},
      }
    },
    methods: {
      closeSidebar() {
        this.$parent.closeSidebar();
      }
    },
    watch: {
      colorPalette() {
        return this.$root.colorPalette;
      }
    }
  }
</script>
