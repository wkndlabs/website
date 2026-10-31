import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaProps {
  className?: string;
  children: ReactNode;
}

export default function Cta({ className, children }: CtaProps) {
  return (
    <section className={cn("mt-8 mb-24 flex flex-wrap items-center justify-between gap-6 rounded-xl bg-inverse px-6 py-8 text-inverse-foreground sm:px-12 sm:py-14", className)}>
      {children}
    </section>
  );
}
