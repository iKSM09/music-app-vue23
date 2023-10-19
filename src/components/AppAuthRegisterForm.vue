<template>
  <form className="space-y-8" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="displayName">
      <FormItem>
        <div className="flex justify-between">
          <FormLabel>Full Name:</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input placeholder="Fullname" type="text" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <div className="flex justify-between">
          <FormLabel>Email:</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input placeholder="Email Id" type="email" v-bind="componentField" />
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
          <Input placeholder="Password" type="password" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="confirmPassword">
      <FormItem>
        <div className="flex justify-between">
          <FormLabel>Confirm Password:</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input placeholder="Confirm Password" type="password" v-bind="componentField" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField v-slot="{ value, handleChange }" name="tos">
      <FormItem>
        <div className="flex items-center space-x-2">
          <FormControl>
            <Checkbox :checked="value" @update:checked="handleChange" />
          </FormControl>
          <FormLabel>Accept terms and conditions</FormLabel>
        </div>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit" class-name="w-full"> Register </Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { RegisterationSchema } from "./AppAuth.vue";

const form = useForm({
  validationSchema: toTypedSchema(RegisterationSchema),
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>
