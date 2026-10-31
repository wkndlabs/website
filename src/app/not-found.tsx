import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "404 Not Found - Weekend Labs",
};

export default function NotFound() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col items-start pt-16 pb-14 sm:pt-28 sm:pb-[72px]">
        <p className="eyebrow mb-6">404</p>
        <h1>This page doesn't exist.</h1>
        <Link className="text-link mt-8" href="/">Back to home</Link>
      </section>
    </>
  );
}
