"use client";

import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "../lib/utils";

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn("mt-8 mb-4 text-3xl font-bold", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn("mt-8 mb-4 text-2xl font-bold", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn("mt-6 mb-3 text-xl font-bold", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn("mt-5 mb-2 text-lg font-bold", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("mb-4 leading-7", className)}
      {...props}
    />
  ),
  a: ({ className, href, ...props }) => {
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
    
    if (isInternalLink) {
      return (
        <Link
          href={href}
          className={cn("font-medium text-accent underline underline-offset-4", className)}
          {...props}
        />
      );
    }
    
    return (
      <a
        href={href}
        className={cn("font-medium text-accent underline underline-offset-4", className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  ul: ({ className, ...props }) => (
    <ul
      className={cn("mb-4 ml-6 list-disc", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn("mb-4 ml-6 list-decimal", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li
      className={cn("mt-1", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn("mt-6 border-l-4 border-accent pl-6 italic text-muted-foreground", className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => (
    <img
      className={cn("rounded-md border", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr
      className={cn("my-6 border-border", className)}
      {...props}
    />
  ),
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table
        className={cn("w-full", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn("m-0 border-t border-border p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn("border border-border px-4 py-2 text-left font-medium", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn("border border-border px-4 py-2 text-left", className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn("mb-4 mt-6 overflow-x-auto rounded-lg bg-muted p-4", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)}
      {...props}
    />
  ),
  Image,
};

export function MDXComponents({ code }) {
  const Component = useMDXComponent(code);
  
  if (!Component) {
    return <div>Error loading MDX content</div>;
  }
  
  return <Component components={components} />;
} 