import type { ReactNode } from "react";

// A template remounts on navigation, so the entrance animation replays on every page.
export default function Template({ children }: { children: ReactNode }) {
  return <main className="page-container motion-safe:animate-enter">{children}</main>;
}
