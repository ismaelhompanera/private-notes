<template>
  <div class="appnotes-editor-wrapper" id="note-editor">
    <div class="appnotes-editor-text-area">
      <textarea
        :value="valueTextArea"
        placeholder="Write a note here..."
        @input="editNote"
        rows="8"
        class="form-control appnotes-text-area"
        maxlength="255">
      </textarea>
    </div>
    <div class="appnotes-create-note-button">
      <ActionButton
        label="Create Note" template="main"
        @onClickButton="onClickCreate">
      </ActionButton>
    </div>
    <Modal v-if="showModal" :headerLeft="headerRight" :footerRight="footerRight" @onClickButton="onClickButton">
      <div slot="body">
        {{ modalContent }}
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from 'components/Modal'
import ActionButton from 'components/ActionButton'
import { saveNote, deleteNote } from './../communications/apiClient'

const URL_BASE = 'http://privatenotes.cunef.edu/#/'

export default {
  created () {
    this.headerRight = [
      { label: 'Note link ready' }
    ]
    this.footerRight = [
      { label: 'Email', template: 'main', onClickButton: this.onSend },
      { label: 'Delete', template: 'cancel', onClickButton: this.onCancel }
    ]
  },
  data () {
    return {
      footerRight: [],
      headerRight: [],
      showModal: false,
      valueTextArea: '',
      noteId: '',
      modalContent: ''
    }
  },
  methods: {
    editNote (e) {
      this.valueTextArea = e.target.value
    },
    onClickButton (func) {
      func()
    },
    onSend () {
      window.location.href = 'mailto:?subject=&body=' + URL_BASE + this.noteId;
    },
    onCancel () {
      deleteNote(this.noteId)
        .then(() => {
          console.log('nota eliminada')
        })
      this.showModal = false
      this.valueTextArea = ''
    },
    onClickCreate () {
      this.makeId()
      if (this.valueTextArea !== '') {
        this.modalContent = URL_BASE + this.noteId
        saveNote(this.noteId, this.valueTextArea)
          .then(() => {
            console.log('nota añadida')
          })
        this.showModal = true
      } else {
        this.$notify({
          group: 'notifications',
          type: 'warning',
          title: 'Help',
          text: 'The note can´t be empty!'
        });
      }
    },
    makeId() {
      let text = ""
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

      for (var i = 0; i < 7; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      this.noteId = text
    }
  },
  components: {
    Modal: Modal,
    ActionButton: ActionButton
  }
}
</script>

<style lang="scss">
.appnotes-editor-wrapper {
  padding: 10px;
}
.appnotes-text-area {
  margin-bottom: 30px;
  background: #f7f7d5;
}
.appnotes-create-note-button {
  width: 200px;
  height: 30px;
}
</style>
