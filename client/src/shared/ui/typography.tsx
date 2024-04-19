import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("text-primary", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl lg:text-2xl font-bold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl  leading-none font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold -tracking-2",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]",
      blockquote: "border-l-2 pl-2 italic",
      ul: "ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      largeText:
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl",
      smallText: "text-sm font-medium leading-none",
      mutedText: "text-sm text-muted-foreground",
      cardInfo:
        "rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm w-min whitespace-nowrap font-semibold",
      link: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  blockquote: "blockquote",
  inlineCode: "code",
  largeText: "h1",
  smallText: "small",
  lead: "p",
  mutedText: "p",
  ul: "ul",
  cardInfo: "p",
  link: "a",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, asChild, ...props }, ref) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
