"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scan, PenTool, FileCode, Eye } from "lucide-react"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { blogs } from "@/lib/blog-data"

const steps = [
  {
    name: "Scan Your Codebase or Files",
    description: "Use the UI to select a directory or repo.",
    icon: Scan,
  },
  {
    name: "Compose Your Prompt",
    description: "Choose a role template and customize the context.",
    icon: PenTool,
  },
  {
    name: "Attach Relevant Files",
    description: "File-level context retrieval delivers precision.",
    icon: FileCode,
  },
  {
    name: "Preview and Copy",
    description: "Validate output quality before you submit it to your LLM.",
    icon: Eye,
  },
]

export function HowItWorks() {
  return (
    <div id="how-it-works" className="py-8 sm:py-10 bg-div-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-primary text-center max-w-4xl mx-auto">
            From Repository to Response in Four Steps
          </h2>
        </div>

        <div className="mx-auto mt-4 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.name}
                className="flex flex-col items-start rounded-xl border border-secondary/20 bg-background shadow-md p-6 transition hover:shadow-lg"
              >
                <dt className="flex items-center gap-x-3 text-xl font-light leading-7 text-primary">
                  <step.icon className="h-7 w-7 flex-none" aria-hidden="true" />
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-foreground/80">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center text-lg leading-8 text-foreground/80">
            Works locally, in CI pipelines, or hosted as a secure SaaS platform.
          </p>
        </div>

        {/* Blog Preview Section */}
        <div className="mx-auto mt-32 max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-primary text-center max-w-4xl mx-auto">
            Insights from the SherpaPrompt Team
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogs.slice(0, 2).map((blog) => (
              <Card key={blog.id} className="h-full flex flex-col overflow-hidden !py-0">
                <CardContent className="p-0 flex flex-col flex-1">
                  <Image
                    src={blog.cardImage}
                    alt={blog.title}
                    width={400}
                    height={220}
                    className="rounded-t-xl object-cover w-full h-48"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <CardTitle className="text-lg font-semibold mb-2">{blog.title}</CardTitle>
                    <CardDescription className="mb-3 text-foreground/80">{blog.description}</CardDescription>
                    <Link
                      href={`/blog/${blog.id}`}
                      target="_blank"
                      className="mt-auto inline-flex items-center gap-2 text-primary px-3 py-1.5 rounded-md font-medium text-sm transition hover:text-primary-hover"
                    >
                      Read More <ArrowRight className="w-2 h-2" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/blog" target="_blank">
              <Button
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary/10"
              >
                Read all posts
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
