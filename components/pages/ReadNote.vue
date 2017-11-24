<template>
  <div>
    {{ note }}
  </div>
</template>

<script>
import { getNote } from './../../communications/apiClient'
export default {
  created () {
    this.noteId = this.$route.params.id
    this.fetchNote()
  },
  data () {
    return {
      note: ''
    }
  },
  methods: {
    fetchNote() {
      getNote(this.noteId)
        .then((data) => {
          this.note = data[0].Note
        })
    }
  }
}
</script>
