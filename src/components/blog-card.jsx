"use client";

import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../lib/utils";

export default function BlogCard({ post }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-1 flex-col p-4 md:p-6">
        <div className="space-x-2 mb-2">
          {post.categories?.map((category) => (
            <span
              key={category}
              className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="mb-2 line-clamp-2 text-xl font-semibold tracking-tight">
          <Link href={`/blog/${post.slug}`}>
            <span className="hover:underline">{post.title}</span>
          </Link>
        </h3>
        
        <p className="line-clamp-3 flex-1 text-muted-foreground">
          {post.excerpt}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {post.date && formatDate(post.date)}
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-accent hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
} 