import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Restash",
    description: "Global object storage built for developers",
    href: "https://restash.io",
  },
  {
    title: "Qryptic",
    description: "A complete link management platform",
    href: "https://qryptic.io",
  },
  {
    title: "Pryzma",
    description: "An ecommerce site for mechanical keyboards",
    href: "https://pryzma.io",
  },
];

export default function Home() {
  return (
    <div className="px-6 py-8">
      <div className="mx-auto max-w-screen-sm space-y-16">
        <div className="space-y-6">
          <h3 className="text-base font-medium">Currently</h3>

          <div className="space-y-3">
            <p className="text-muted-foreground sm:text-body text-sm leading-6">
              I&apos;m a software developer at United Wheels, where I help build
              and maintain web applications with a focus on frontend and
              design.{" "}
            </p>
            <p className="text-muted-foreground sm:text-body text-sm leading-6">
              Outside of work, I build my own projects using technologies like
              Next.js, TypeScript, Tailwind CSS, and Postgres, exploring modern
              web development from front to back.{" "}
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-base font-medium">Projects</h3>

          <div className="space-y-1">
            {projects.map((project) => (
              <div key={project.title}>
                <NextLink
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group -ml-2.5 flex items-center justify-between gap-2 rounded-lg px-2.5 py-3 transition-colors sm:hover:bg-neutral-200/50 sm:dark:hover:bg-neutral-900/50">
                    <div className="space-y-0.5">
                      <p className="text-body sm:text-base">{project.title}</p>
                      <p className="text-muted-foreground sm:text-body text-sm">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="text-muted-foreground mr-3 size-4 shrink-0 scale-0 opacity-0 transition-all sm:group-hover:scale-100 sm:group-hover:opacity-100" />
                  </div>
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
