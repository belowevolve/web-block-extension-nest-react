import { useSessionQuery } from "@/entities/session";
import { ROUTES } from "@/shared/constants/ROUTES";
import { ShieldCheck } from "lucide-react";

import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement, useEffect, useState } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isLoading, isError } = useSessionQuery();

    const [showLoading, setShowLoading] = useState(false);
    useEffect(() => {
      setShowLoading(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    if (showLoading || isLoading) {
      return (
        <div className="w-screen h-screen flex justify-center items-center animate-fadeOut">
          <ShieldCheck className="w-48 h-48 animate-ping" />
        </div>
      );
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
