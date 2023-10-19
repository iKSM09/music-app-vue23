<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        <p>Songs</p>
        <Headphones />
      </CardTitle>
    </CardHeader>

    <SongsListItem />
    <SongsListItem />
    <SongsListItem />
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import SongsListItem from "@/components/SongsListItem.vue";

import { Headphones } from "lucide-vue-next";
</script>
