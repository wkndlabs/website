import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Shot from "@/components/Shot";
import { getProject, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function CaseStudy({ params }: CaseStudyProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <section className="max-w-[900px] pt-16 pb-14 sm:pt-24">
        <p className="eyebrow mb-6"><Link className="link-fade" href="/work">Work</Link> / {project.sector}</p>
        <h1 className="text-[clamp(44px,7vw,72px)] leading-none tracking-[-0.03em]">{project.name}</h1>
        <p className="mt-6 max-w-[680px] text-[21px] leading-normal text-muted-foreground">{project.summary}</p>
      </section>

      <Shot
        src={project.hero}
        alt={`${project.name} screenshot`}
        priority
        sizes="(max-width: 1248px) 100vw, 1200px"
        className="aspect-[16/10] rounded-xl border sm:aspect-[21/9]"
      />

      <div className="flex flex-wrap gap-x-20 gap-y-12 pt-[72px] leading-[1.65]">
        <aside className="flex flex-[1_1_260px] flex-col gap-5">
          <dl className="border-t">
            {project.meta.map((item) => (
              <div className="flex justify-between gap-4 border-b py-3.5" key={item.label}>
                <dt className="eyebrow">{item.label}</dt>
                <dd className="text-right text-[15px]">{item.value}</dd>
              </div>
            ))}
          </dl>
          <Button asChild variant="outline" size="lg" className="h-11 bg-transparent">
            <a href={project.url} target="_blank" rel="noreferrer">Visit site ↗</a>
          </Button>
        </aside>

        <article className="flex max-w-[720px] min-w-0 flex-[999_1_560px] flex-col gap-16">
          <section className="flex flex-col gap-5">
            <h2 className="text-4xl tracking-[-0.015em]">The brief</h2>
            <p>{project.brief}</p>
          </section>

          <section className="flex flex-col gap-5">
            <h2 className="text-4xl tracking-[-0.015em]">How we approached it</h2>
            <p>{project.approach}</p>
            <ol className="grid gap-4 sm:grid-cols-3">
              {project.steps.map((step, index) => (
                <li key={step.title}>
                  <Card className="h-full gap-2 rounded-lg p-5 shadow-none">
                    <span className="font-mono text-xs text-brand-text">0{index + 1}</span>
                    <strong className="font-semibold">{step.title}</strong>
                    <span className="text-[15px] text-muted-foreground">{step.text}</span>
                  </Card>
                </li>
              ))}
            </ol>
          </section>

          <Shot
            src={project.detail}
            alt={`${project.name} full page`}
            sizes="(max-width: 992px) 100vw, 720px"
            className={cn("rounded-lg border", project.detailWide ? "aspect-[2/1]" : "aspect-[4/3]")}
          />

          <section className="flex flex-col gap-5">
            <h2 className="text-4xl tracking-[-0.015em]">Results</h2>
            <ul className="border-t">
              {project.results.map((result) => <li className="border-b py-3.5" key={result}>{result}</li>)}
            </ul>
            <p>{project.outcome}</p>
          </section>

          {project.quote && (
            <blockquote className="border-t-2 border-brand pt-8">
              <p className="font-serif text-[28px] leading-[1.35] tracking-[-0.01em] italic">“{project.quote.text}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">{project.quote.source}</footer>
            </blockquote>
          )}
        </article>
      </div>

      <Link className="group mt-32 mb-24 flex flex-wrap items-center justify-between gap-6 border-y py-10" href={`/work/${next.slug}`}>
        <span className="eyebrow">Next project</span>
        <span className="font-serif text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-[-0.02em]">
          {next.name} <span className="inline-block text-brand-text motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0.5">→</span>
        </span>
      </Link>
    </>
  );
}
