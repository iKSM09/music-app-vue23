<template>
  <div className="min-h-screen">
    <div className="flex flex-col items-center justify-center h-full gap-5 max-w-screen">
      <AppNavigation />
      <div className="w-[calc(100%-6rem)] mx-12 max-w-3xl mb-28">
        <RouterView />
      </div>
    </div>
    <MusicPlayer />
  </div>
</template>

<script setup lang="ts">
import AppNavigation from "./components/AppNavigation.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
</script>
