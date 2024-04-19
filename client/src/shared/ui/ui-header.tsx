import clsx from "clsx";
import { Shield } from "lucide-react";
import { ReactNode } from "react";
import { Typography } from "./typography";

export function UiHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <div className="relative z-20 flex gap-2 items-center text-lg font-bold">
        <Shield />
        Easy Block
      </div>

      {right}
    </header>
  );
}
