import { Button } from "@/shared/ui/button";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {
  const { isPending, signOut } = useSignOut();
  return (
    <Button
      variant={"outline"}
      disabled={isPending}
      onClick={() => signOut({})}
    >
      Sign out
    </Button>
  );
}
