import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";

export function Profile() {
  const { data: session } = useSessionQuery();

  if (!session) return null;

  return (
    <>
      {session?.email}
      <SignOutButton />
    </>
  );
}
