import { useAddBlockItemMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  data: z.string().min(1, {
    message: "Provide data",
  }),
  type: z.nativeEnum(AddBlockItemDtoType),
});

export function useAddBlockItemForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      data: "",
      type: AddBlockItemDtoType.Website,
    },
  });

  const type = form.watch("type");
  const addBlockItemMutation = useAddBlockItemMutation();

  function onSubmit(data: z.infer<typeof formSchema>) {
    addBlockItemMutation.mutate(data, {
      onSuccess() {
        form.reset();
      },
    });
  }

  return { form, onSubmit, isPending: addBlockItemMutation.isPending, type };
}
