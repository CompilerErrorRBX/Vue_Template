<template>
  <div class="popover"
    :class="{ active: settings.opened, right: isRightSide, bottom: isBottomSide }"
    :style="{ top: top, left: left}"
    @click.stop>
    <div class="popover-grow"></div>
    <div class="popover-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['settings'],
    data() {
      return {
        top: '0',
        left: '0',
        isRightSide: false,
        isBottomSide: false
      };
    },
    mounted: function() { 
      $('body').prepend(this.$el);
    },
    watch: {
      settings(val) {
        this.calculatePosition(val.event);
      } 
    },
    methods: {
      calculatePosition(event) {
        if (event === null || !this.settings.opened) return;
        const $window = $('body');
        const $popover = $(this.$el);

        let top = event.pageY;
        let left = event.pageX;

        this.isBottomSide = false;
        this.isRightSide = false;

        if (top + $popover.height() > $window.height()) {
          top -= $popover.height();
          this.isBottomSide = true;
        }
        if (left + $popover.width() > $window.width()) {
          left -= $popover.width();
          this.isRightSide = true;
        }

        top = Math.max(Math.min(top, $window.height() - $popover.height()), 0)
        left = Math.max(Math.min(left, $window.width() - $popover.width()), 0)

        this.top = `${top}px`;
        this.left = `${left}px`;
      }
    },
    computed: {
      colorPalette() {
        return this.$root.colorPalette;
      }
    }
  }
</script>
