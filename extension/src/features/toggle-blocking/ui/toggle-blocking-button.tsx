import { Button } from "@/shared/ui/button";
import { useToggleBlocking } from "../model/use-toggle-blocking";
import { Shield, ShieldBan } from "lucide-react";

export function ToggleBlockingButton() {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <Button
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "default" : "destructive"}
    >
      {isBlockingEnabled ? (
        <>
          <ShieldBan className="mr-2" />
          Disable Blocking
        </>
      ) : (
        <>
          <Shield className="mr-2" />
          Enable Blocking
        </>
      )}
    </Button>
  );
}
