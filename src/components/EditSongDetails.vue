<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        <p class="text-xl font-bold">Song Name</p>

        <div class="flex gap-4">
          <Button>
            <Pencil :size="18" />
          </Button>
          <Button variant="destructive">
            <Trash :size="18" />
          </Button>
        </div>
      </CardTitle>
    </CardHeader>

    <CardContent>
      <SongEditForm />
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

import SongEditForm from "./SongEditForm.vue";

import { Pencil, Trash } from "lucide-vue-next";
</script>
