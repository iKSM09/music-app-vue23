<template>
  <form className="space-y-8" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <div className="flex justify-between">
          <FormLabel>Email:</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input v-bind="componentField" type="text" placeholder="Email Id" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <div className="flex justify-between">
          <FormLabel>Password:</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input v-bind="componentField" type="text" placeholder="Password" />
        </FormControl>
      </FormItem>
    </FormField>

    <Button type="submit" class-name="w-full"> Login </Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import { LoginSchema } from "./AppAuth.vue";
// import type { LoginTypes } from "./AppAuth.vue";

const form = useForm({
  validationSchema: toTypedSchema(LoginSchema),
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>
