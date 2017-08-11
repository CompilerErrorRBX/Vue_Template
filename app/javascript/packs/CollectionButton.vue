<template>
  <li class="collection-btn" :class="{ circle: !text }" @click.stop="onClick"> 
    <a class="waves-effect waves-light" :href="href">
      <i class="material-icons">{{ icon }}</i>
      <span v-show="text">{{ text }}</span>
    </a>
  </li>
</template>

<script>
  export default {
    props: ['href', 'icon', 'clickAction', 'text'],
    methods: {
      onClick() {
        if (this.clickAction) {
          this.clickAction();
        }
      }
    }
  }
</script>
