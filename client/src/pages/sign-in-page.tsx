import { SignInForm } from "@/features/auth";
import { ROUTES } from "@/shared/constants/ROUTES";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/button";
import { UiAuthFormPageLayout } from "@/shared/ui/layouts/ui-auth-form-layout";
import Link from "next/link";

export function SignInPage() {
  return (
    <UiAuthFormPageLayout
      title="Login"
      changeMethod={
        <Link
          href={ROUTES.SIGN_UP}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          Register
        </Link>
      }
      form={<SignInForm />}
    />
  );
}
