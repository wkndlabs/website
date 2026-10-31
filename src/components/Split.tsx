import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SplitProps {
  label: string;
  className?: string;
  children: ReactNode;
}

export default function Split({ label, className, children }: SplitProps) {
  return (
    <section className={cn("flex flex-wrap gap-x-20 gap-y-8", className)}>
      <h2 className="eyebrow flex-[1_1_240px] pt-2 font-mono font-medium">{label}</h2>
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5">{children}</div>
    </section>
  );
}
