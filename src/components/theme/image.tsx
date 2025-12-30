import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import NextImage from "next/image";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof NextImage> & {
  caption?: string;
  sourceUrl?: string;
  className?: string;
};

export const Image = ({ caption, sourceUrl, className, ...props }: Props) => {
  return (
    <figure className={cn("relative border bg-white", className)}>
      <NextImage {...props} />
      {caption && <figcaption>{caption}</figcaption>}
      {sourceUrl && (
        <a
          href={sourceUrl}
          className="text-muted-foreground hover:bg-background absolute right-0 bottom-0 block border-t border-l p-2"
          target="_blank"
          rel="noopener noreferrer"
          title="view the source"
        >
          <ExternalLink size={12} />
        </a>
      )}
    </figure>
  );
};
