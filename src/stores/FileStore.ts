import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFileStore = defineStore('file', () => {
  const files = ref([
    {
      createdAt: '04-01-2022',
      name: 'untitled-document.md',
      content: '# This is a markdown file',
    },
  ])
  const newFileName = ref('welcome')

  return {
    files,
    newFileName,
  }
})
