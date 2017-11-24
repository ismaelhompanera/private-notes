<template>
  <transition name="fade" mode="out-in">
    <div class="modal-container">
      <div class="modal-mask"></div>
      <div class="modal-wrapper" role="document">
        <div class="modal-content">
          <slot name="header">
            <div v-if="headerLeft.length > 0" class="modal-header-left">
              <div class="modal-header-icon">
                <i class="glyphicons glyphicons-note"></i>
              </div>
              <div class="modal-header-label">
                {{ headerLeft[0].label }}
              </div>
            </div>
          </slot>
          <div class="modal-body">
            <transition name="modal-content">
              <slot name="body"></slot>
            </transition>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div v-if="footerRight.length > 0" class="modal-footer-right">
                <ActionButton v-for="button in footerRight"
                  :label="button.label" :template="button.template"
                  @onClickButton="onClickButton(button.onClickButton)">
                </ActionButton>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ActionButton from 'components/ActionButton'
export default {
  props: {
    footerRight: {
      type: Array,
      default () {
        return []
      }
    },
    headerLeft: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onClickButton (func) {
      this.$emit('onClickButton', func)
    }
  },
  components: {
    ActionButton: ActionButton
  }
}
</script>

<style lang="scss">
.modal-content-enter-active {
  opacity: 0;
  transform: translateY(150px);
  transform-style: preserve-3d;
}
.modal-content-enter-to {
  opacity: 1;
  transform: translateY(0px);
  transition: transform 1s, opacity .75s .25s;
}
.modal-loading {
  height: 40px;
  width: 40px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
.modal-container {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-mask {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, .5);
  perspective: 1300px;
}

.modal-wrapper {
  width: 900px;
  max-width: 900px;
}

.modal-header-left {
  padding: 10px;
  font-size: 18px;
  display: flex;
  color: #fff;
  background: #30414D;

  .modal-header-icon {
    margin-right: 10px;
  }
}

.modal-body {
  min-height: 200px;
  max-height: calc(100vh - 212px);
  overflow: scroll;
  padding: 0px!important;
  margin: 15px;
  max-height: 500px;
}

.modal-footer-right {
  display: flex;
  justify-content: flex-end;
  .appnotes-core-button-container {
    width: 100px;
  }
  .appnotes-core-button-container + .appnotes-core-button-container {
    margin-left: 15px;
  }
}

.modal-footer-left {
  display: flex;
  justify-content: flex-start;
  .appnotes-core-button-container {
    width: 100px;
  }
  .appnotes-core-button-container + .appnotes-core-button-container {
    margin-left: 15px;
  }
}
</style>
