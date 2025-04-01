<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { PhFile } from '@phosphor-icons/vue'
import AppLogo from '@/components/AppLogo.vue'
import { useFileStore } from '@/stores/FileStore.ts'

const fileStore = useFileStore()
const { newFileName } = storeToRefs(fileStore)
</script>

<template>
  <header class="fixed flex w-full items-center gap-8 bg-slate-800 p-2">
    <AppLogo class="text-slate-100" />
    <!--
    <div class="flex items-center gap-2">
      <PhFile :size="24" class="text-slate-100" />
      <div class="flex flex-col">
        <div class="text-sm text-slate-500">Document Name</div>
        <input v-model="newFileName" class="bg-transparent text-sm text-slate-100 outline-none" />
      </div>
    </div>
    -->
  </header>
</template>
