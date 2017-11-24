<template>
  <div id="toolbar">
    <i @click="createNote" class="glyphicon glyphicon-plus"></i>
  </div>
</template>

<script>
export default {
  methods: {
    createNote () {
      this.addNote()
    }
  }
}
</script>
