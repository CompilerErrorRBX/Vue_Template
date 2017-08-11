<template>
  <div class="popover"
    :class="{ active: opened, right: isRightSide, bottom: isBottomSide }"
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
    props: ['opened'],
    data() {
      return {
        top: '0',
        left: '0',
        isRightSide: false,
        isBottomSide: false
      };
    },
    mounted: function() { 
      document.body.appendChild(this.$el);
    },
    watch: {
      opened: {
        handler: function(val, oldVal) {
            this.calculatePosition();
        },
        deep: true
      } 
    },
    methods: {
      calculatePosition() {
        const $window = $('body');
        const $parent = $(this.$parent.$el);
        const $popover = $(this.$el);

        const position = $parent.offset();

        let top = position.top + $parent.height() / 2;
        let left = position.left + $parent.width() / 2;

        if (top > $window.height() / 2) {
          top = position.top - $popover.height() + $parent.height() / 2;
          this.isBottomSide = true;
        }
        if (left > $window.width() / 2) {
          left = position.left - $popover.width() + $parent.width() / 2;
          this.isRightSide = true;
        }

        this.top = `${top}px`;
        this.left = `${left}px`;
      }
    }
  }
</script>
