"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const page = () => {
  return (
    <AuthForm
      type="signup"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        fullName: "",
        password: "",
        universityCard: "",
        universityId: 0,
      }}
      onSubmit={() => {}}
    />
  );
};

export default page;
