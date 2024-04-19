import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { ADMIN_URL } from "@/shared/contants";
import { Button } from "@/shared/ui/button";
import { Shield } from "lucide-react";

export function HomePage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2 items-center text-lg font-bold">
        <Shield />
        Easy Block
      </div>
      <ToggleBlockingButton />
      <Button
        onClick={() => {
          chrome.tabs.create({ url: ADMIN_URL });
        }}
      >
        Manage extension
      </Button>
    </div>
  );
}
