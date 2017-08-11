<template>
    <div class="side-bar grey-text text-darken-2" :class="{ active: isOpen }">
      <div class="tool-bar">
        <ul class="horizontal left">
          <collection-btn icon="arrow_back" :clickAction="toggleSidebar" />
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
    props: ['projectName', 'isOpen', 'toggleSidebar'],
    data() {
      return {
      }
    }
  }
</script>
