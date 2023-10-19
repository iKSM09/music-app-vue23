<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const fileInputStyles =
  "flex h-10 w-full rounded-md border border-input bg-background pr-3 text-sm ring-offset-background hover:file:cursor-pointer hover:file:bg-muted-foreground hover:file:text-foreground file:border-0 file:mr-3 file:bg-muted file:h-full file:px-4 file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
const inputStyles =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
</script>

<template>
  <input
    v-model="modelValue"
    type="text"
    :class="cn($attrs.type === 'file' ? fileInputStyles : inputStyles, $attrs.class ?? '')"
  />
</template>
