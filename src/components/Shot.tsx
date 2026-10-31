import Image from "next/image";
import { cn } from "@/lib/utils";

interface ShotProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

// A cropped screenshot. Inside a `group` link, it drifts up slightly on hover.
export default function Shot({ src, alt, sizes, priority, className, imageClassName }: ShotProps) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover object-top motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.01]", imageClassName)}
      />
    </div>
  );
}
