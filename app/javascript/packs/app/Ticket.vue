<template>
  <div class="card ticket grid-item" v-on-click-outside="blurTicket" :class="{ selected: isFocused }" @dblclick="focusTicket">
    <div class="tool-bar white border">
      <span class="title">Ticket #{{ data.id }}</span>
      <ul class="horizontal right grey-text text-darken-1">
        <collection-btn class="small" icon="more_vert" type="dropdown">
          <ul slot="popover" class="vertical">
            <collection-btn class="small" icon="open_in_new" text="Expand Ticket" @click="focusTicket" />
            <collection-btn class="small" icon="delete" text="Close Ticket" />
          </ul>
        </collection-btn>
        <slot name="menu-bar"></slot>
      </ul>
    </div>
    <div>
      <ul class="vertical grey-text text-darken-1">
        <collection-btn class="small" icon="person" :text="data.user.username" type="dropdown">
          <user-card class="grey-text text-darken-1" slot="popover" :user="data.user" />
        </collection-btn>
        <collection-btn class="small" icon="devices" text="Macbook Pro" />
        <collection-btn class="small" icon="build" text="Technicians" type="dropdown">
          <span class="badge" :class="colorPalette.accent">1</span>
          <ul class="vertical grey-text text-darken-1" slot="popover">
            <collection-btn class="small" icon="person" :text="data.user.username" type="dropdown">
              <user-card class="grey-text text-darken-1" slot="popover" :user="data.user" />
            </collection-btn>
          </ul>
        </collection-btn>
      </ul>
      <slot></slot>
    </div>
    <div class="tool-bar small">
      <ul class="horizontal left grey-text text-darken-1">
        <collection-btn class="small floating" icon="share" />
      </ul>
      <ul class="horizontal">
        <slot name="tool-bar"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        areCommentsShown: false,
        isFocused: false,
      };
    },
    watch: {
      
    },
    methods: {
      toggleComments() {
        this.areCommentsShown = !this.areCommentsShown;
      },
      focusTicket() {
        this.isFocused = true;
      },
      blurTicket() {
        this.isFocused = false;
      }
    },
    computed: {
      colorPalette() {
        return this.$root.colorPalette;
      }
    }
  }
</script>
