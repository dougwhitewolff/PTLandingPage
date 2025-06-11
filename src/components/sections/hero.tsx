"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { SignUpDialog } from "@/components/modals/signup-dialog"
import darkImage from "@/assets/landingImages/dark.png"
import lightImage from "@/assets/landingImages/light.png"
import { useEffect, useState } from "react"

export function Hero() {
  const { theme } = useTheme()
  const [count, setCount] = useState(1)
  const targetCount = 10
  const duration = 1000 // 1 second total duration
  const interval = duration / targetCount // time between each increment

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= targetCount) {
          clearInterval(timer)
          return targetCount
        }
        return prev + 1
      })
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative isolate pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-xl font-medium tracking-tight text-primary sm:text-3xl lg:text-5xl">
            From Idea to High-Quality Prompt
            <span className="block mt-1 sm:mt-2">
              <span className="inline-block min-w-[2ch] tabular-nums">{count}x</span> Faster.
            </span>
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg font-light leading-relaxed sm:leading-8 text-foreground/80">
            SherpaPrompt helps you craft structured, high-performance prompts with lightning-fast context retrieval and zero coding required.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <SignUpDialog />
            <Button
              variant="outline"
              onClick={scrollToHowItWorks}
              className="border-primary text-primary hover:bg-primary/10"
            >
              See How It Works
            </Button>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-div-bg lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src={theme === "dark" ? darkImage : lightImage}
              alt="App screenshot"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10 dark:shadow-primary/30"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
