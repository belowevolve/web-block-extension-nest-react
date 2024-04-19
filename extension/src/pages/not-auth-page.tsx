import { ADMIN_SIGN_IN_URL } from "@/shared/contants";
import { Button } from "@/shared/ui/button";
import { Typography } from "@/shared/ui/typography";
import { Shield } from "lucide-react";

export function NotAuthPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-2 items-center text-lg font-bold">
        <Shield />
        Easy Block
      </div>
      <Typography className="text-center" variant={"h3"}>
        You not authorized!
      </Typography>
      <Button
        onClick={() => {
          chrome.tabs.create({ url: ADMIN_SIGN_IN_URL });
        }}
      >
        Authorize
      </Button>
    </div>
  );
}
