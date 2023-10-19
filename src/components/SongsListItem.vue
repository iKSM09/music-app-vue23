<template>
  <Separator />

  <CardContent class="flex items-center justify-between mt-5">
    <div class="flex items-start gap-3">
      <div class="my-[3px]">
        <PauseCircle />
        <PlayCircle />
      </div>
      <div>
        <router-link to="/song/songID" class="text-lg font-bold"> Song Name </router-link>
        <p>Song Uploader Name</p>
      </div>
    </div>
    <div class="flex gap-6">
      <div class="flex gap-1 cursor-pointer">
        <Heart color="#ff5e5e" />
        <p>0 likes</p>
      </div>
      <div class="flex gap-1">
        <MessagesSquare />
        <p>No Comments</p>
      </div>
    </div>
  </CardContent>
</template>

<script setup lang="ts">
import { CardContent } from "@/components/ui/card";
import { Heart, MessagesSquare, PauseCircle, PlayCircle } from "lucide-vue-next";
</script>
