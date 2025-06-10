"use client";

import Image from "next/image";
import { Link2 } from "lucide-react";

import { Project } from "@/lib/types";
import { Button } from "./button";
import { GithubIcon } from "@/icons";

export function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: Project) {
  return (
    <article className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 right-4 flex translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex gap-2">
            {githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                asChild
                className="rounded-full"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" asChild className="rounded-full">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Link2 className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
