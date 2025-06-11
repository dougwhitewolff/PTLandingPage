"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Rocket, User, Mail } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function SignUpDialog() {
  const [open, setOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      
      if (response.ok) {
        setOpen(false)
        form.reset()
        toast(
          <div className="flex items-center">
            <Mail className="mr-2" />
            Your email has been sent successfully!
          </div>,
          {
            duration: 2000,
            className: "bg-primary text-white border-primary",
          }
        )
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white hover:bg-primary-hover">
          Get Access
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-primary flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Get Early Access
          </DialogTitle>
          <DialogDescription className="text-foreground/80">
            Join our early access list to be among the first to try SherpaPrompt.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} className="focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary focus:border-primary border border-secondary/40 shadow-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} className="focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary focus:border-primary border border-secondary/40 shadow-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-primary text-white hover:bg-primary-hover"
              disabled={isLoading}
            >
              {isLoading ? "Requesting Access..." : "I want Access!"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
} 