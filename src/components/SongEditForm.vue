<template>
  <form className="space-y-8" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="modified_name">
      <FormItem>
        <div>
          <FormLabel>Title:</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input v-bind="componentField" type="text" placeholder="Song Title" />
        </FormControl>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="genre">
      <FormItem>
        <div>
          <FormLabel>Genre:</FormLabel>
          <FormMessage />
        </div>
        <FormControl>
          <Input v-bind="componentField" type="text" placeholder="Song Genre" />
        </FormControl>
      </FormItem>
    </FormField>

    <div className="flex gap-3">
      <Button type="submit">Submit</Button>
      <Button type="button" variant="secondary" on-click="{closeForm}"> Go Back </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  modified_name: z.string(),
  genre: z.string(),
});

type songDetailTypes = z.infer<typeof schema>;

const form = useForm({
  validationSchema: toTypedSchema(schema),
});

const onSubmit = form.handleSubmit((values: songDetailTypes) =>
  console.log("Form subitted!", values),
);
</script>
