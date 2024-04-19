import { useResetSession } from "@/entities/session";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/ROUTES";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
  const router = useRouter();
  const resetSession = useResetSession();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    isPending: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
