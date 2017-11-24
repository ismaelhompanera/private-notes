<template>
  <div class="appnotes-core-button-container"
    :class="[
      {'uppercase': textUppercase},
      'appnotes-' + template
    ]"
    @click="onClickButton">
    <span class="appnotes-core-button-text">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    textUppercase: {
      type: Boolean,
      default () {
        return true
      }
    },
    template: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: false,
      default () {
        return null
      }
    },
    iconPosition: {
      type: String,
      default () {
        return 'left'
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  methods: {
    onClickButton (e) {
      this.$emit('onClickButton', e)
    }
  }
}
</script>

<style lang="scss">
.appnotes-core-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 7px 15px 7px 15px;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
  color: #fff;

  &.appnotes-main {
    background: #30414D;
  }

  &.appnotes-cancel {
    background: red;
  }

  &:hover {
    &.appnotes-main {
      background: lighten(#30414D, 20%);
    }
    &.appnotes-cancel {
      background: lighten(red, 20%);;
    }
  }

  &.uppercase {
    text-transform: uppercase;
  }
}
</style>
