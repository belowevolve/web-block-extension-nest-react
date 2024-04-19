import { useBlockItems } from "../model/use-block-items";
import { BlockItem } from "./block-item";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { Loader2 } from "lucide-react";
import { Typography } from "@/shared/ui/typography";

export function BlockList({ className }: { className?: string }) {
  const { isLoading, items, q, setQ } = useBlockItems();

  const isLoader = isLoading;
  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={className}>
      <Label htmlFor="search">Search</Label>
      <Input
        id="search"
        className="mt-1 mb-2"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div className="rounded-xl  bg-slate-100/50 px-8 py-4 flex flex-col gap-3">
        {isLoader && <Loader2 className="animate-spin w-10 h-10 mx-auto" />}
        {isEmptyText && (
          <Typography variant={"h4"} className="text-center">
            List is empty...
          </Typography>
        )}
        {isItems && items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
