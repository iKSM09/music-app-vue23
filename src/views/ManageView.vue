<template>
  <div class="flex flex-col gap-5">
    <Card>
      <CardHeader>
        <CardTitle class="flex items-center justify-between">
          <p>Upload</p>
          <Upload />
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent class="flex items-center justify-between mt-5">
        <div
          class="flex items-center justify-center w-full text-sm border-2 border-dashed rounded-md h-60 hover:bg-muted"
        >
          Drop your files here
        </div>
      </CardContent>

      <Separator />

      <CardContent class="flex items-center justify-between mt-5">
        <Input id="song" type="file" multiple accept="audio/mpeg" />
      </CardContent>

      <CardContent class="mt-1">
        <Separator class="mb-2" />

        <ProgressBar />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle class="flex items-center justify-between">
          <p>My Songs</p>
          <Disc3 />
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent class="flex flex-col items-center justify-between gap-5 mt-5">
        <EditSongDetails />
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import ProgressBar from "@/components/ProgressBar.vue";
import EditSongDetails from "@/components/EditSongDetails.vue";

import { Upload, Disc3 } from "lucide-vue-next";
</script>
