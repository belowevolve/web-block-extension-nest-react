import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { authControllerSignUp } from "@/shared/api/generated";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/ROUTES";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Provide your email",
    })
    .email("This is not a valid email"),
  password: z
    .string()
    .min(4, { message: "Must contain at least 4 characters" }),
});

export function useSignUpForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
    onError() {
      form.setError("email", { message: "Email exists" });
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    signUpMutation.mutate(data);
  }

  return {
    form,
    onSubmit,
    isPending: signUpMutation.isPending,
  };
}
