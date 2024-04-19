import { SignUpForm } from "@/features/auth";
import { ROUTES } from "@/shared/constants/ROUTES";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/button";
import { UiAuthFormPageLayout } from "@/shared/ui/layouts/ui-auth-form-layout";
import Link from "next/link";

export function SignUpPage() {
  return (
    <UiAuthFormPageLayout
      title="Create an account"
      subTitle="Enter your email and password below to create your account"
      changeMethod={
        <Link
          href={ROUTES.SIGN_IN}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          Login
        </Link>
      }
      form={<SignUpForm />}
    />
  );
}
