import { useSessionQuery } from "@/entities/session";
import { HomePage } from "@/pages/home-page";
import { NotAuthPage } from "@/pages/not-auth-page";
import { ShieldCheck } from "lucide-react";

export function AppRouter() {
  const { isLoading, isSuccess } = useSessionQuery();

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center animate-fadeOut">
        <ShieldCheck className="w-24 h-24 animate-ping" />
      </div>
    );
  }

  if (isSuccess) {
    return <HomePage />;
  }

  return <NotAuthPage />;
}
