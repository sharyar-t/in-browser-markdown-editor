<script setup lang="ts">
import { computed } from 'vue'
import { useFocus, useTextareaAutosize } from '@vueuse/core'
import { marked } from 'marked'
import { PhEye } from '@phosphor-icons/vue'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import { Button } from '@/components/ui/button'

const { textarea, input } = useTextareaAutosize()

useFocus(textarea, { initialValue: true })

const output = computed(() => marked(input.value))
</script>

<template>
  <div class="h-screen">
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <div class="flex items-center justify-between bg-slate-200 p-2">
          <div class="text-sm tracking-[2px] text-slate-500">Markdown</div>
        </div>
        <div class="p-2">
          <textarea
            ref="textarea"
            v-model="input"
            rows="5"
            class="box-border w-full resize-none focus:outline-none"
          />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <div class="flex items-center justify-between bg-slate-200 px-2">
          <div class="text-sm tracking-[2px] text-slate-500">Preview</div>
          <Button variant="ghost" size="icon" class="text-slate-500">
            <PhEye weight="bold" />
          </Button>
        </div>
        <div class="preview p-2" v-html="output"></div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>
