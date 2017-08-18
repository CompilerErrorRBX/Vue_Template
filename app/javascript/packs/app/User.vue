<template>
  <div class="card">
    <div class="card-image">
      <div class="thumbnail" :style="{ backgroundImage: 'url(' + user.profilePicture + ')'}"></div>
    </div>
    <div class="card-body">
      <span class="subtitle">
        {{ user.username }}
        <small class="subtitle">{{ user.type }}</small>
      </span>
      <div class="border"></div>
      <ul class="vertical">
        <collection-btn v-if="user.phoneNumber" class="small" icon="phone" :text="user.phoneNumber" /> <!-- Phone number not required -->
        <collection-btn class="small" icon="email" :text="user.email" />
      </ul>
    </div>
    <div class="tool-bar">
      <ul class="horizontal right">
        <collection-btn class="small" icon="open_in_new" />
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['user'],
    data() {
      return {

      };
    },
    watch: {
      
    },
    methods: {
      
    },
    computed: {
      colorPalette() {
        return this.$root.colorPalette;
      }
    }
  }
</script>
