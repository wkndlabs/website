import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import Shot from "@/components/Shot";
import Split from "@/components/Split";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Work",
  description: "Products Weekend Labs has designed, built, and shipped with its partners.",
};

const services = [
  "Product strategy",
  "Product design",
  "Web platforms",
  "APIs & integrations",
  "Fractional engineering leadership",
  "Early-stage investment",
];

export default function Work() {
  return (
    <>
      <section className="flex flex-wrap items-end justify-between gap-10 pt-16 pb-14 sm:pt-28 sm:pb-[72px]">
        <div className="max-w-[760px] min-w-0 flex-[999_1_560px]">
          <p className="eyebrow mb-6">Work</p>
          <h1>Products we've designed, built, and shipped with our partners.</h1>
        </div>
        <p className="max-w-[340px] flex-[1_1_260px] text-muted-foreground">
          Healthcare, sports, manufacturing, and consumer health. Each one built end to end, from the first
          sketch to production.
        </p>
      </section>

      <div className="eyebrow mb-10 flex flex-wrap justify-between gap-4 border-y py-4">
        <span>04 engagements</span>
        <span>2022 – Now</span>
      </div>

      <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((project) => (
          <Link className="group flex flex-col gap-5" href={`/work/${project.slug}`} key={project.slug}>
            <Shot src={project.hero} alt={`${project.name} screenshot`} sizes="(max-width: 768px) 100vw, 590px" className="aspect-[21/10] rounded-lg border" />
            <div className="flex flex-col gap-2">
              <div className="eyebrow flex justify-between gap-3"><span>{project.sector} · {project.category}</span><span className="shrink-0">{project.years}</span></div>
              <h2 className="text-[32px] tracking-[-0.015em]">{project.name}</h2>
              <p className="text-muted-foreground">{project.cardSummary}</p>
            </div>
          </Link>
        ))}
      </div>

      <Split label="What we do" className="mt-32 border-t py-14">
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <li className="border-b py-3.5 font-serif text-[22px]" key={service}>{service}</li>)}
        </ul>
      </Split>

      <Cta>
        <h2 className="max-w-[620px] text-4xl leading-[1.15] tracking-[-0.015em]">Your project could be next.</h2>
        <Button asChild variant="brand" size="xl">
          <a href="mailto:hello@weekendlabs.net">Start a project →</a>
        </Button>
      </Cta>
    </>
  );
}
