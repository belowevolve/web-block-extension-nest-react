import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/typography";
import { buttonVariants } from "@/shared/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield } from "lucide-react";

export function UiAuthFormPageLayout({
  title,
  subTitle,
  changeMethod,
  form,
}: {
  title: string;
  subTitle?: string;
  changeMethod?: ReactNode;
  form?: ReactNode;
}) {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute right-4 top-4 md:right-8 md:top-8">
        {changeMethod}
      </div>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex gap-2 items-center text-lg font-bold">
          <Shield />
          Easy Block
        </div>
        <div className="relative z-20 mt-auto">
          <Typography variant={"blockquote"} className="text-white">
            Block websites that you don`t want to visit.
          </Typography>
        </div>
        c
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Typography variant={"h1"} className="text-2xl lg:text-3xl">
              {title}
            </Typography>
            <Typography variant={"mutedText"}>{subTitle}</Typography>
          </div>
          {form}
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p> */}
        </div>
      </div>
    </div>
  );
}
