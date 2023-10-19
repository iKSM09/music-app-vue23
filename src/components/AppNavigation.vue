<template>
  <div class="sticky top-0 w-full p-0 m-0 bg-background">
    <NavigationMenu class="flex items-center justify-between h-16 max-w-full px-6 border-b">
      <NavigationMenuList>
        <NavigationMenuItem>
          <router-link to="/">
            <p class="mr-2 text-2xl font-bold text-primary">Music</p>
          </router-link>
        </NavigationMenuItem>

        <NavigationMenuItem :class="navigationMenuTriggerStyle()">
          <p>Hi, User</p>
        </NavigationMenuItem>

        <NavigationMenuItem :class="navigationMenuTriggerStyle()">
          <router-link to="/manage">Manage</router-link>
        </NavigationMenuItem>

        <NavigationMenuItem :class="navigationMenuTriggerStyle()">
          <router-link :to="{ name: 'song', params: { songId: 'songID' } }">Song</router-link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <Button v-if="loggedIn" variant="ghost"> Logout </Button>
          <Dialog v-else>
            <DialogTrigger :class="navigationMenuTriggerStyle()"> Login / Register </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Your Account.</DialogTitle>
              </DialogHeader>
              <AppAuth />
            </DialogContent>
          </Dialog>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Select default-value="en">
            <SelectTrigger class="w-32">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Toggle pressed>
            <Sun
              v-if="dark"
              class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <Moon
              v-else
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <span class="sr-only">Toggle theme</span>
          </Toggle>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

import AppAuth from "./AppAuth.vue";

import { Sun, Moon } from "lucide-vue-next";

const dark = ref(false);
const loggedIn = ref(false);
</script>
