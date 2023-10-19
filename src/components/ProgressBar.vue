<template>
  <div class="w-full my-7">
    <!-- File Name -->
    <div class="flex items-center gap-1 mb-1 text-sm font-bold">
      <X :size="18" />
      <Check :size="18" />

      <!-- <PuffLoader
            color={"#60A5FA"}
            size={16}
            aria-label="Puff Loader"
            data-testid="loader"
          /> -->

      Song Name
    </div>
    <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
      <!-- Inner Progress Bar -->
      <div class="transition-all bg-blue-400 progress-bar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, X } from "lucide-vue-next";
</script>
