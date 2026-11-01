"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
    { href: "/work", label: "Work" },
    { href: "/lab", label: "Lab" },
    { href: "/about", label: "About" },
];

const toggleTheme = () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
        localStorage.setItem("theme", theme);
    } catch (e) {}
};

function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
            <motion.span
                className="block h-[2px] w-5 rounded-full bg-foreground"
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
            />
            <motion.span
                className="block h-[2px] w-5 rounded-full bg-foreground"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
            />
            <motion.span
                className="block h-[2px] w-5 rounded-full bg-foreground"
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
            />
        </div>
    );
}

export default function Header() {
    const currentRoute = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [currentRoute]);

    return (
        <div className="border-b">
            <header className="page-container flex items-center justify-between gap-4 py-5">
                <Link href="/" className="inline-flex min-h-9 items-center" aria-label="Weekend Labs home">
                    <svg aria-hidden="true" className="h-[15px] w-[200px] fill-current" viewBox="0 0 1930 144" xmlns="http://www.w3.org/2000/svg" > <path d="M201.125 106.575L166.3 14H108.55L73.725 106.575L44.85 14H0.75L41.35 140H104.35L137.425 49.875L170.5 140H233.5L274.1 14H230L201.125 106.575Z" /> <path d="M348.433 113.75C327.258 113.75 314.133 109.375 311.333 94.15H420.008C420.008 51.45 390.258 31.5 345.283 31.5C301.533 31.5 270.558 50.4 270.558 87.5C270.558 124.6 299.608 143.5 346.858 143.5C390.958 143.5 412.133 128.45 419.133 102.375H379.758C376.258 109.2 368.208 113.75 348.433 113.75ZM345.283 57.75C362.608 57.75 373.808 62.125 378.358 74.2H312.733C317.108 62.125 328.308 57.75 345.283 57.75Z" /> <path d="M511.812 113.75C490.637 113.75 477.512 109.375 474.712 94.15H583.387C583.387 51.45 553.637 31.5 508.662 31.5C464.912 31.5 433.937 50.4 433.937 87.5C433.937 124.6 462.987 143.5 510.237 143.5C554.337 143.5 575.512 128.45 582.512 102.375H543.137C539.637 109.2 531.587 113.75 511.812 113.75ZM508.662 57.75C525.987 57.75 537.187 62.125 541.737 74.2H476.112C480.487 62.125 491.687 57.75 508.662 57.75Z" /> <path d="M692.515 35L641.065 73.5V-1.90735e-06H600.815V140H641.065V116.725L665.39 99.05L703.365 140H753.415L693.565 78.575L753.415 35H692.515Z" /> <path d="M828.657 113.75C807.482 113.75 794.357 109.375 791.557 94.15H900.232C900.232 51.45 870.482 31.5 825.507 31.5C781.757 31.5 750.782 50.4 750.782 87.5C750.782 124.6 779.832 143.5 827.082 143.5C871.182 143.5 892.357 128.45 899.357 102.375H859.982C856.482 109.2 848.432 113.75 828.657 113.75ZM825.507 57.75C842.832 57.75 854.032 62.125 858.582 74.2H792.957C797.332 62.125 808.532 57.75 825.507 57.75Z" /> <path d="M956.202 140V98.875C956.202 75.95 970.902 64.75 996.627 64.75C1021.65 64.75 1029.53 75.95 1029.53 98.875V140H1069.78V83.825C1069.78 45.325 1048.25 31.5 1016.4 31.5C987.002 31.5 969.152 43.05 956.202 59.5V35H915.952V140H956.202Z" /> <path d="M1191.62 53.725C1180.95 37.45 1162.05 31.5 1142.97 31.5C1115.85 31.5 1085.57 45.15 1085.57 87.5C1085.57 129.85 1115.85 143.5 1142.97 143.5C1162.05 143.5 1180.95 137.55 1191.62 121.275V140H1231.87V-1.90735e-06H1191.62V53.725ZM1159.6 110.25C1138.25 110.25 1127.57 102.9 1127.57 87.5C1127.57 72.1 1138.25 64.75 1159.6 64.75C1180.95 64.75 1191.62 72.1 1191.62 87.5C1191.62 102.9 1180.95 110.25 1159.6 110.25Z" /> <path d="M1320.98 14V140H1446.98V103.25H1364.73V14H1320.98Z" /> <path d="M1544.16 31.5C1516.86 31.5 1492.36 35.35 1469.61 40.425L1475.21 67.9C1500.06 62.125 1517.91 59.5 1536.64 59.5C1555.01 59.5 1568.14 63.175 1569.19 77.7C1555.54 74.9 1539.26 72.45 1521.41 72.45C1492.54 72.45 1461.04 79.625 1461.04 108.325C1461.04 133.175 1482.04 141.75 1509.51 141.75C1527.36 141.75 1550.46 137.55 1569.19 126V140H1609.44V86.275C1609.09 46.2 1588.09 31.5 1544.16 31.5ZM1523.34 113.75C1508.29 113.75 1503.04 111.475 1503.04 105.525C1503.04 99.225 1509.69 96.95 1527.36 96.95C1540.84 96.95 1555.71 98.525 1569.19 100.45V108.5C1557.64 110.425 1535.94 113.75 1523.34 113.75Z" /> <path d="M1717.67 31.5C1698.59 31.5 1679.69 37.45 1669.02 53.725V-1.90735e-06H1628.77V140H1669.02V121.275C1679.69 137.55 1698.59 143.5 1717.67 143.5C1744.79 143.5 1775.07 129.85 1775.07 87.5C1775.07 45.15 1744.79 31.5 1717.67 31.5ZM1701.04 110.25C1679.69 110.25 1669.02 102.9 1669.02 87.5C1669.02 72.1 1679.69 64.75 1701.04 64.75C1722.39 64.75 1733.07 72.1 1733.07 87.5C1733.07 102.9 1722.39 110.25 1701.04 110.25Z" /> <path d="M1787.28 104.825C1787.28 134.225 1817.03 143.5 1862.01 143.5C1901.73 143.5 1929.73 136.675 1929.73 106.05C1929.73 78.225 1905.06 76.3 1863.76 72.8C1836.28 70.525 1831.91 69.65 1831.91 63.875C1831.91 58.8 1838.03 56 1857.11 56C1875.48 56 1884.23 58.8 1884.23 66.85H1926.23C1924.48 40.075 1894.73 31.5 1857.98 31.5C1821.41 31.5 1789.91 38.325 1789.91 66.675C1789.91 91.175 1811.08 95.025 1855.01 98.175C1881.96 100.1 1887.73 100.45 1887.73 107.975C1887.73 114.45 1883.71 117.25 1860.26 117.25C1834.88 117.25 1829.28 113.225 1829.28 104.825H1787.28Z" /> </svg>
                </Link>
                <nav className="hidden flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[13px] md:flex" aria-label="Primary">
                    {links.map((link) => (
                        <Link
                            className={cn("transition-colors duration-200 hover:text-foreground", currentRoute.startsWith(link.href) ? "text-foreground" : "text-muted-foreground")}
                            href={link.href}
                            key={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="outline" size="sm" className="font-mono text-[13px] font-normal text-muted-foreground" onClick={toggleTheme} aria-label="Switch color theme">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"></path></svg>
                        <span className="dark:hidden">Dark</span>
                        <span className="hidden dark:inline">Light</span>
                    </Button>
                    <Button asChild size="sm" className="h-9 px-3.5 font-mono text-[13px]">
                        <Link href="/#contact">Start a project</Link>
                    </Button>
                </nav>

                {/* Mobile controls */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Switch color theme"
                        className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"></path></svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="relative flex h-9 w-9 items-center justify-center"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        <HamburgerIcon open={mobileOpen} />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="overflow-hidden md:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="page-container pb-5 pt-1">
                            <nav className="flex flex-col gap-1" aria-label="Mobile">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={cn(
                                            "-mx-3 rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-foreground/5 hover:text-foreground",
                                            currentRoute.startsWith(link.href) ? "text-foreground" : "text-foreground/80"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-4 flex items-center justify-between">
                                <Button asChild className="h-10 px-5 font-mono text-[13px]">
                                    <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                                        Start a project
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
