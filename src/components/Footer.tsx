import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="border-t text-[15px]">
            <div className="page-container flex flex-col gap-14 pt-16 pb-10">
                <div className="flex flex-wrap justify-between gap-10">
                    <p className="max-w-[360px] font-serif text-2xl leading-[1.3] tracking-[-0.01em]">A software studio for founders. Building since 2021.</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-14">
                        <div className="flex flex-col items-start gap-2.5">
                            <span className="eyebrow">Studio</span>
                            <Link className="link-fade" href="/work">Work</Link>
                            <Link className="link-fade" href="/lab">Lab</Link>
                            <Link className="link-fade" href="/about">About</Link>
                        </div>
                        <div className="flex flex-col items-start gap-2.5">
                            <span className="eyebrow">Lab</span>
                            <a className="link-fade" href="https://devgigs.com" target="_blank" rel="noreferrer">Devgigs</a>
                            <a className="link-fade" href="https://placeholderjs.com" target="_blank" rel="noreferrer">PlaceholderJS</a>
                        </div>
                        <div className="flex flex-col items-start gap-2.5">
                            <span className="eyebrow">Elsewhere</span>
                            <a className="link-fade" href="https://twitter.com/weekendlabsllc" target="_blank" rel="noreferrer">X</a>
                            <a className="link-fade" href="https://linkedin.com/company/weekend-labs" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a className="link-fade" href="https://github.com/weekendlabsllc" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div>
                    <Separator />
                    <div className="flex flex-wrap justify-between gap-4 pt-6 font-mono text-xs tracking-[0.02em] text-muted-foreground">
                        <span>&copy; {new Date().getFullYear()} Weekend Labs LLC</span>
                        <a className="link-fade underline" href="mailto:hello@weekendlabs.net">hello@weekendlabs.net</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
