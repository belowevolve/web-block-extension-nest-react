import { UiHeader } from "@/shared/ui/ui-header";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { Profile } from "@/widgets/profile";
import { Typography } from "@/shared/ui/typography";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

export function HomePage() {
  return (
    <>
      <UiHeader right={<Profile />} />
      <main className="pt-8 px-4 xl:px-48 m-auto">
        <div className="flex justify-between">
          <Typography variant={"h3"}>Block list</Typography>
          <ToggleBlockingButton />
        </div>

        <AddBlockItemForm className="pt-8" />
        <BlockList className="pt-4" />
      </main>
    </>
  );
}
