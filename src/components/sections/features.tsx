"use client"

import { Code2, Blocks, GitFork } from "lucide-react"

const features = [
  {
    name: "Fast Contextual Retrieval",
    description: "Scan project directories and pull file-level context instantly. SherpaPrompt turns your code and docs into ready-to-use building blocks.",
    icon: Code2,
  },
  {
    name: "Structured Prompt Builder",
    description: "Templates for developers, PMs, designers, and analysts. Refine your objective, apply analysis frameworks, and preview your output in real time.",
    icon: Blocks,
  },
  {
    name: "Production-Ready Foundations",
    description: "Git-aware listener (coming soon), snippet tagging, and auto-embedding upgrades. Designed to grow with your prompt stack.",
    icon: GitFork,
  },
]

export function Features() {
  return (
    <div id="features" className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-10 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-primary text-center max-w-4xl mx-auto">
            Built for Teams Who Depend on Prompt Quality
          </h2>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-xl border border-secondary/20 bg-background shadow-md p-6 transition hover:shadow-lg"
              >
                <dt className="flex items-center gap-x-3 text-xl font-light leading-7 text-primary">
                  <feature.icon className="h-7 w-7 flex-none" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-foreground/80">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
