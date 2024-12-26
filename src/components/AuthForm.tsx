"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import { Form } from "@/src/components/ui/form";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { authFormSchema } from "../lib/utils";
import { signIn, signUp } from "../lib/actions/user.actions";
import { useRouter } from "next/navigation";
import PlaidLink from "./PlaidLink";

interface Props {
  type: string;
}

const AuthForm = ({ type }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = authFormSchema(type);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      address1: "",
      city: "",
      dateOfBirth: "",
      firstName: "",
      lastName: "",
      postalCode: "",
      ssn: "",
      state: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        };
        const newUser = await signUp(userData);
        setUser(newUser);
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });

        if (response) router.replace("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1 px -4">
          <Image
            src="/icons/logo.svg"
            alt="Horizon logo"
            width={34}
            height={34}
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}

            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <React.Fragment>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <React.Fragment>
                  <div className="flex gap-4">
                    <CustomInput
                      label="First name"
                      name="firstName"
                      placeholder="Enter your first name"
                      form={form}
                    />

                    <CustomInput
                      label="Last name"
                      name="lastName"
                      placeholder="Enter your last name"
                      form={form}
                    />
                  </div>

                  <CustomInput
                    label="Address"
                    name="address1"
                    placeholder="Enter your specific address"
                    form={form}
                  />

                  <CustomInput
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                    form={form}
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      label="State"
                      name="state"
                      placeholder="Example: NY"
                      form={form}
                    />

                    <CustomInput
                      label="Postal Code"
                      name="postalCode"
                      placeholder="Example: 11101"
                      form={form}
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomInput
                      label="Date of Birth"
                      name="dateOfBirth"
                      placeholder="Example: YYYY-MM-DD"
                      form={form}
                    />

                    <CustomInput
                      label="SSN"
                      name="ssn"
                      placeholder="Example: 1234"
                      form={form}
                    />
                  </div>
                </React.Fragment>
              )}

              <CustomInput
                label="Email"
                name="email"
                placeholder="Enter your email"
                form={form}
              />

              <CustomInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                form={form}
                type="password"
              />

              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <React.Fragment>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </React.Fragment>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>

            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </React.Fragment>
      )}
    </section>
  );
};

export default AuthForm;
