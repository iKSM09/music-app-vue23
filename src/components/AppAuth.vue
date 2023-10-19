<template>
  <Tabs default-value="login">
    <TabsList class="grid w-full grid-cols-2 mt-3 mb-5">
      <TabsTrigger value="login">Login</TabsTrigger>
      <TabsTrigger value="register">Register</TabsTrigger>
    </TabsList>
    <TabsContent value="login">
      <AppAuthLoginForm />
    </TabsContent>
    <TabsContent value="register">
      <AppAuthRegisterForm />
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import * as z from "zod";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AppAuthLoginForm from "./AppAuthLoginForm.vue";
import AppAuthRegisterForm from "./AppAuthRegisterForm.vue";
</script>

<script lang="ts">
const schema = z.object({
  displayName: z.string({
    required_error: "Name is required.",
  }),
  // username: z.string().nonempty("Username is required."),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email("Not a valid Email id."),
  // age: z.number().min(18, "Not a valid age.").max(99, "Not a valid age."),
  // country: z.string(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be greater than 6 characters.")
    .max(30, "Password must be lesser than 30 characters."),
  confirmPassword: z.string({
    required_error: "Password is required.",
  }),
  // tos: z.boolean({
  //   required_error: "Please accept Terms of Service to proceed.",
  //   invalid_type_error: "Value must be a boolean",
  // }),
  tos: z.literal<boolean>(true, {
    required_error: "Please accept Terms of Service to proceed.",
    invalid_type_error: "Please accept Terms of Service to proceed.",
  }),
});

export const RegisterationSchema = schema.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords does not match.",
  path: ["confirmPassword"],
});

export const LoginSchema = schema.pick({
  email: true,
  password: true,
});

export type RegisterTypes = z.infer<typeof RegisterationSchema>;
export type LoginTypes = z.infer<typeof LoginSchema>;
</script>
