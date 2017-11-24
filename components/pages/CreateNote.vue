<template>
  <div class="appnotes-create-note-page">
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import NotesList from './../NotesList'
import Editor from './../Editor'

export default {
  components: {
    NotesList,
    Editor
  }
}
</script>

<style lang="scss">
.appnotes-create-note-page {
  height: 100%;
}
</style>
