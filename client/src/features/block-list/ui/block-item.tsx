import { useRemoveBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { Trash } from "lucide-react";

export function BlockItem({
  data,
  id,
  type,
}: {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}) {
  const removeBlockItemMutation = useRemoveBlockItemMutation();
  const handleRemove = () => {
    removeBlockItemMutation.mutate(id);
  };

  return (
    <div className="flex gap-2">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>

      <Button
        variant={"danger"}
        className="ml-auto"
        size={"icon"}
        disabled={removeBlockItemMutation.isPending}
        onClick={handleRemove}
      >
        <Trash className="w-5 h-5" />
      </Button>
    </div>
  );
}
