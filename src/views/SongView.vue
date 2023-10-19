<template>
  <div class="flex items-center gap-5 mb-7">
    <div class="mt-2 cursor-pointer">
      <PlayCircle :size="56" />
    </div>
    <h1 class="text-5xl font-bold">Name</h1>
  </div>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <MessagesSquare />
          <p>No comment</p>
        </div>

        <Select default-value="latest">
          <SelectTrigger class="w-32">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>
      </CardTitle>
    </CardHeader>

    <Separator />

    <CardContent class="flex flex-col gap-5 mt-5">
      <Textarea value="{postComment.content}" placeholder="Your comment here..." />
      <Button class="w-fit">Submit</Button>
    </CardContent>

    <Separator />

    <CardContent key="{comment.id}" class="mt-5">
      <h3 class="text-lg font-bold">Commentor name</h3>
      <small>Date Posted</small>

      <p class="mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum id ducimus,
        provident aliquid consectetur atque ipsam harum dolores, dolore quibusdam sapiente quae
        nihil. Dolor unde odio eaque alias id?
      </p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

import { PlayCircle, MessagesSquare } from "lucide-vue-next";
</script>
