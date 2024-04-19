import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Loader2, Plus } from "lucide-react";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function AddBlockItemForm({ className }: { className?: string }) {
  const { form, onSubmit, isPending, type } = useAddBlockItemForm();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex items-end gap-4", className)}
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="grow max-w-[200px]">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(AddBlockItemDtoType).map(([key, value]) => (
                    <SelectItem
                      key={`add-block-item-select ${key}`}
                      value={key}
                    >
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="data"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input
                  placeholder={
                    type == "KeyWord" ? "Enter Key Word" : "Enter Website"
                  }
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          Add Block Item
        </Button>
        {form.formState.errors.root && (
          <FormMessage className="absolute">
            {form.formState.errors.root.message}
          </FormMessage>
        )}
      </form>
    </Form>
  );
}
