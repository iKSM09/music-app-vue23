<template>
  <div class="fixed bottom-0 left-0 z-10 w-full h-20 p-0 m-0 border bg-muted text-muted-foreground">
    <div class="w-full h-1 bg-primary">
      <Slider :default-value="[33]" :max="100" :step="1" />
    </div>
    <div class="flex items-center justify-between h-full px-6">
      <div class="flex items-center gap-2">
        <span class="w-12 h-12 rounded-md bg-primary"></span>
        <div class="">
          <h2 class="font-bold text-foreground">{{ "Play Song" }}</h2>
          <p class="text-sm">00:00 / 00:00</p>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div><Repeat1 v-if="repeat" /> <Repeat v-else /></div>
        <SkipBack />
        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-background">
          <Pause v-if="playing" :size="28" />
          <div v-else class="w-[32px] flex justify-end">
            <Play :size="28" />
          </div>
        </div>
        <SkipForward />
        <Shuffle />
        <div class="w-[1px] h-12 bg-background"></div>
        <MoreHorizontal />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Slider } from "@/components/ui/slider";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  MoreHorizontal,
} from "lucide-vue-next";

const playing = ref(false);
const repeat = ref(false);
</script>
