<template>
  <li class="comment">
    <a class="avatar blue small">
      <img v-if="data.user.thumbnail" :src="data.user.thumbnail" />
      <i class="material-icons">person</i>
    </a>
    <span class="timestamp">{{ data.timestamp | dateFromNow }}</span>
    <span class="title">{{ data.user.username }}</span>
    <p class="body">
      {{ data.body }}
    </p>
  </li>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        
      };
    },
    watch: {
      
    },
    methods: {

    },
    filters: {
      dateFromNow(date) {
        return moment(date).fromNow();
      }
    },
    computed: {
      colorPalette() {
        return this.$root.colorPalette;
      }
    }
  }
</script>
