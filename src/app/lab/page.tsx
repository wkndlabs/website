import type { Metadata } from "next";
import Shot from "@/components/Shot";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Lab",
  description: "Products Weekend Labs builds and runs itself, including Devgigs and PlaceholderJS.",
};

const stats = [
  { label: "Open roles", value: "24k+" },
  { label: "Companies hiring", value: "5,200+" },
  { label: "Remote-friendly", value: "6,300+" },
];

const features = ["Any size", "Custom text", "Text color", "Background color"];

export default function Lab() {
  return (
    <>
      <section className="flex flex-wrap items-end justify-between gap-10 pt-16 pb-14 sm:pt-28 sm:pb-[72px]">
        <div className="max-w-[760px] min-w-0 flex-[999_1_560px]">
          <p className="eyebrow mb-6 flex items-center gap-2.5"><span aria-hidden="true" className="size-2 rounded-xs bg-brand"></span>The Lab</p>
          <h1>Products we build and run ourselves.</h1>
        </div>
        <p className="max-w-[340px] flex-[1_1_260px] text-muted-foreground">
          Client work teaches us what to build. The lab is where we put it to the test with our own money, our
          own users, and our own uptime.
        </p>
      </section>

      <article className="flex flex-wrap gap-12 border-t py-14">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <div className="eyebrow flex flex-wrap gap-4">
            <span className="text-brand-text">LAB-01</span>
            <span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="size-1.5 rounded-full bg-brand"></span>Live since 2023</span>
          </div>
          <h2 className="text-[clamp(40px,5vw,52px)] leading-[1.05] tracking-[-0.02em]">Devgigs</h2>
          <p className="text-[19px] leading-normal">The job board for developers. Find your next role at companies that value great engineering.</p>
          <p className="text-muted-foreground">
            Describe the job you want, then take the filters apart. Every filter becomes a visible token you can
            see and adjust, across technology, category, work mode, job type, and seniority.
          </p>
          <dl className="mt-2 grid grid-cols-3 border-t">
            {stats.map((stat) => (
              <div className="flex flex-col gap-1 pt-4 pr-3" key={stat.label}>
                <dt className="order-2 text-[13px] text-muted-foreground">{stat.label}</dt>
                <dd className="font-serif text-[32px] leading-none">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <Button asChild size="lg" className="h-11 self-start">
            <a href="https://devgigs.com" target="_blank" rel="noreferrer">Visit devgigs.com ↗</a>
          </Button>
        </div>
        <Shot
          src="/static/work/devgigs.webp"
          alt="Devgigs search and filters"
          sizes="(max-width: 992px) 100vw, 600px"
          className="min-h-60 flex-[1_1_480px] rounded-xl border sm:min-h-[420px]"
          imageClassName="object-left-top"
        />
      </article>

      <article className="flex flex-wrap-reverse gap-12 border-t py-14">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6 rounded-xl bg-inverse p-8 font-mono text-sm leading-[1.7] text-inverse-foreground">
          <div className="flex gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full border border-current opacity-40"></span>
            <span className="size-2.5 rounded-full border border-current opacity-40"></span>
            <span className="size-2.5 rounded-full border border-current opacity-40"></span>
          </div>
          <div className="flex flex-col gap-1"><span className="opacity-60"># CDN</span><span>https://placeholderjs.com/500x500</span></div>
          <div className="flex flex-col gap-1"><span className="opacity-60"># With text and colors</span><span className="break-all">https://placeholderjs.com/500x500&amp;text=Hello+World!&amp;color=_FFFFFF&amp;background=_C2410C</span></div>
          <div className="flex flex-col gap-1"><span className="opacity-60"># npm</span><span>$ npm install placeholder</span></div>
          <div aria-hidden="true" className="flex h-[120px] w-[200px] items-center justify-center self-start rounded-md bg-brand font-sans text-[15px] font-medium text-brand-foreground">Hello World!</div>
        </div>
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <div className="eyebrow flex flex-wrap gap-4">
            <span className="text-brand-text">LAB-02</span>
            <span>v1.2.3 · Free · Open to all</span>
          </div>
          <h2 className="text-[clamp(40px,5vw,52px)] leading-[1.05] tracking-[-0.02em]">PlaceholderJS</h2>
          <p className="text-[19px] leading-normal">Ridiculously simple and lightweight placeholders.</p>
          <p className="text-muted-foreground">
            A free placeholder image service for developers. Drop a URL in any tool, or install the package for
            first-class React and Next.js support.
          </p>
          <ul className="grid grid-cols-2 border-t">
            {features.map((feature) => <li className="border-b py-3" key={feature}>{feature}</li>)}
          </ul>
          <Button asChild size="lg" className="mt-3 h-11 self-start">
            <a href="https://placeholderjs.com" target="_blank" rel="noreferrer">Read the docs ↗</a>
          </Button>
        </div>
      </article>

      <section className="mt-16 mb-24 flex flex-wrap items-baseline justify-between gap-x-16 gap-y-6 border-t pt-12">
        <p className="max-w-[640px] font-serif text-[clamp(24px,3vw,30px)] leading-[1.3] tracking-[-0.01em]">Building something in the same space? We'd like to hear about it.</p>
        <a className="text-link" href="mailto:hello@weekendlabs.net">hello@weekendlabs.net</a>
      </section>
    </>
  );
}
