import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import Shot from "@/components/Shot";
import Split from "@/components/Split";
import { getProject, Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: { absolute: "Weekend Labs – A software studio for founders" },
  description: "Weekend Labs is a full-service software consultancy and investment collective. We design, build, and ship alongside founders.",
};

const featured = ["discount-drug-network", "boston-junior-bruins"]
  .map(getProject) as Project[];

const pillars = [
  { title: "Design", text: "From early flows to polished UI, working alongside the people building it." },
  { title: "Engineering", text: "Web platforms, APIs, and integrations, from the first sketch to production." },
  { title: "Investment", text: "We put our own time and money behind early-stage products, including our own." },
];

function SectionHeading({ title, label }: { title: string; label: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
      <h2 className="text-4xl tracking-[-0.015em]">{title}</h2>
      <span className="eyebrow">{label}</span>
    </div>
  );
}

const labCardClass = "flex min-h-[260px] flex-col gap-3.5 border-r border-b p-8 transition-colors duration-300 hover:bg-card";

export default function Home() {
  return (
    <>
      <section className="max-w-[860px] pt-16 pb-14 sm:pt-28 sm:pb-24">
        <p className="eyebrow mb-7 flex items-center gap-2.5"><span aria-hidden="true" className="size-2 rounded-full bg-brand"></span>Software studio · Since 2021</p>
        <h1>A software studio for founders building the internet companies of tomorrow.</h1>
        <div className="mt-8 flex max-w-[560px] flex-col gap-5">
          <p className="text-lg leading-[1.55] text-muted-foreground">
            Weekend Labs is a full-service software consultancy and investment collective. We design,
            build, and ship alongside the people we work with, as partners rather than vendors.
          </p>
          <Link className="text-link" href="/work">See the work</Link>
        </div>
      </section>

      <section className="border-t pt-24">
        <SectionHeading title="Client work" label="Selected engagements" />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <Link className="group" href={`/work/${project.slug}`} key={project.slug}>
              <Card className="h-full gap-0 overflow-hidden rounded-lg py-0 shadow-none transition-colors duration-300 group-hover:border-muted-foreground/40">
                <Shot src={project.hero} alt={`${project.name} screenshot`} sizes="(max-width: 768px) 100vw, 590px" className="aspect-[21/10] border-b" />
                <CardContent className="flex flex-col gap-2 p-6">
                  <div className="eyebrow flex justify-between gap-3"><span>{project.sector} · {project.category}</span><span className="shrink-0">{project.years}</span></div>
                  <h3 className="text-[28px] tracking-[-0.01em]">{project.name}</h3>
                  <p className="text-muted-foreground">{project.cardSummary}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-24">
        <SectionHeading title="From the lab" label="Things we build for ourselves" />
        <div className="grid border-t border-l md:grid-cols-2">
          <Link className={labCardClass} href="/lab">
            <div className="flex justify-between gap-3 font-mono text-xs">
              <span className="text-brand-text">LAB-01</span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground"><span aria-hidden="true" className="size-1.5 rounded-full bg-brand"></span>Live since 2023</span>
            </div>
            <h3 className="text-[32px] tracking-[-0.015em]">Devgigs</h3>
            <p className="max-w-[440px] flex-1 text-muted-foreground">
              The job board for developers. Search tens of thousands of open engineering roles with filters
              you can actually see and adjust.
            </p>
            <span className="font-mono text-[13px] text-muted-foreground">devgigs.com ↗</span>
          </Link>
          <Link className={labCardClass} href="/lab">
            <div className="flex justify-between gap-3 font-mono text-xs">
              <span className="text-brand-text">LAB-02</span>
              <span className="text-muted-foreground">v1.2.3 · Free</span>
            </div>
            <h3 className="text-[32px] tracking-[-0.015em]">PlaceholderJS</h3>
            <p className="max-w-[440px] flex-1 text-muted-foreground">
              Ridiculously simple, lightweight image placeholders for developers. One URL, or one npm install.
            </p>
            <Badge variant="secondary" className="rounded-md px-2.5 py-1.5 font-mono text-[13px] font-normal">placeholderjs.com/500x500</Badge>
          </Link>
        </div>
      </section>

      <Split label="How we work" className="pt-28">
        <p className="max-w-[760px] font-serif text-[clamp(24px,3vw,30px)] leading-[1.3] tracking-[-0.01em]">
          A small, close-knit team that works in the open and acts like a business partner, not a vendor.
        </p>
        <div className="mt-5 grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div className="flex flex-col gap-2 border-t-2 border-brand pt-4 text-[15px]" key={pillar.title}>
              <h3 className="font-sans text-base font-semibold">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.text}</p>
            </div>
          ))}
        </div>
      </Split>

      <Cta className="mt-32 items-end sm:py-16">
        <div id="contact" className="max-w-[640px]">
          <p className="mb-4 font-mono text-xs tracking-[0.04em] uppercase opacity-70">Start a project</p>
          <h2 className="text-[clamp(32px,4vw,44px)] leading-[1.1] tracking-[-0.02em]">Have something worth building? Tell us about it.</h2>
        </div>
        <Button asChild variant="brand" size="xl">
          <a href="mailto:hello@weekendlabs.net">hello@weekendlabs.net →</a>
        </Button>
      </Cta>
    </>
  );
}
