<template>
  <form class="search">
    <div class="input-field">
      <input id="#search" class="z-depth-2" type="search" v-model="query" @input="onInput" :placeholder="placeholder" />
      <label class="label-icon" for="search">
        <i class="material-icons">search</i>
      </label>
      <i class="material-icons" @click="query = ''">close</i>
    </div>
  </form>
</template>

<script>
  export default {
    props: ['placeholder', 'search'],
    data() {
      return {
        query: ''
      }
    },
    methods: {
      onInput() {
        if (this.search) {
          this.search();
        }
      }
    }
  }
</script>
