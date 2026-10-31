import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Split from "@/components/Split";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "Weekend Labs is a software consulting and investment collective, founded in 2021.",
};

const values = [
  { title: "Open", text: "We work in the open with the people we build for. No black boxes, no surprise invoices." },
  { title: "Collaborative", text: "Design and engineering sit at the same table from the first conversation to launch." },
  { title: "Hands-on", text: "We care about the craft and the outcome. We act like owners, because sometimes we are." },
];

const timeline = [
  { year: "2021", text: "Weekend Labs founded" },
  { year: "2022", text: "Discount Drug Network, Boston Junior Bruins, Palmer Pads" },
  { year: "2023", text: "Devgigs launches in the lab. Flosstime engagement begins." },
];

export default function About() {
  return (
    <>
      <section className="max-w-[980px] pt-16 pb-14 sm:pt-28 sm:pb-[72px]">
        <p className="eyebrow mb-6">About</p>
        <h1 className="text-[clamp(40px,6vw,64px)]">A small studio that works like a partner, <em className="text-brand-text">not a vendor</em>.</h1>
      </section>

      <Split label="Our story" className="pt-4 pb-[88px]">
        <p className="max-w-[720px] font-serif text-[26px] leading-[1.4] tracking-[-0.01em]">Weekend Labs is a software consulting and investment collective, founded in 2021.</p>
        <p className="max-w-[720px] text-muted-foreground">
          We're a tight-knit group of industry insiders, analysts, and builders. We combine design and technical
          expertise to help founders turn early ideas into real products, and we take a hands-on approach that
          feels like having a partner on the team.
        </p>
        <p className="max-w-[720px] text-muted-foreground">
          Alongside client work, we invest our own time and money in products of our own, like Devgigs and
          PlaceholderJS. Running them keeps us honest about what it takes to ship and operate software.
        </p>
      </Split>

      <section className="mb-24 grid border-t border-l md:grid-cols-3">
        {values.map((value, index) => (
          <div className="flex flex-col gap-3 border-r border-b p-8 text-[15px]" key={value.title}>
            <span className="font-mono text-xs text-brand-text">0{index + 1}</span>
            <h3 className="text-[28px]">{value.title}</h3>
            <p className="text-muted-foreground">{value.text}</p>
          </div>
        ))}
      </section>

      <Split label="Founder" className="border-t py-[72px]">
        <div className="flex flex-col gap-3">
          <h3 className="text-[32px] tracking-[-0.015em]">Owen Bick</h3>
          <p className="max-w-[720px] text-muted-foreground">
            Engineering leader with 12+ years of experience building products and scaling teams. Owen started
            writing code as a teenager and runs Weekend Labs to help startups go from idea to shipped product.
          </p>
          <a className="text-link" href="https://owenbick.com" target="_blank" rel="noreferrer">owenbick.com ↗</a>
        </div>
      </Split>

      <Split label="Timeline" className="border-t py-[72px]">
        <ol className="border-t">
          {timeline.map((item) => (
            <li className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-b py-4" key={item.year}>
              <span className="font-mono text-[13px] text-muted-foreground">{item.year}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ol>
      </Split>

      <Cta>
        <h2 className="max-w-[620px] text-4xl leading-[1.15] tracking-[-0.015em]">Want to work together?</h2>
        <Button asChild variant="brand" size="xl">
          <a href="mailto:hello@weekendlabs.net">Start a project</a>
        </Button>
      </Cta>
    </>
  );
}
