<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { PhPlus } from '@phosphor-icons/vue'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { useFileStore } from '@/stores/FileStore.ts'

const fileStore = useFileStore()
const { files } = storeToRefs(fileStore)
const router = useRouter()

const formSchema = toTypedSchema(
  z.object({
    fileName: z.string().min(1),
  }),
)

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  files.value.push({
    createdAt: '2025-10-01',
    name: values.fileName,
    content: '',
  })
  router.push({
    name: 'MarkdownCreate',
    params: { fileName: values.fileName },
  })
})
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <Dialog>
      <DialogTrigger as-child>
        <Button class="bg-orange-500 hover:bg-orange-300">
          <PhPlus weight="bold" />
          <span>Create</span>
        </Button>
      </DialogTrigger>
      <DialogContent class="max-w-[378px]">
        <DialogHeader>
          <DialogTitle>Create new file</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
          <FormField v-slot="{ componentField }" name="fileName">
            <FormItem>
              <FormLabel>File name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="shadcn" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button type="submit" class="bg-orange-500 hover:bg-orange-300">Create</Button>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>
