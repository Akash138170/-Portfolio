import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  User,
  AtSign,
  Briefcase,
  MessageSquare,
  Clock3,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
await emailjs.send(
  "service_2c0w8rj",
  "template_ccevzoj",
  {
    from_name: values.name,
    from_email: values.email,
    subject: values.subject,
    message: values.message,
    to_name: "Akash Kumar",
  },
  "_jLqEgm3HECeP2MOn"
);

      setIsSubmitted(true);
      form.reset();

      toast({
        title: "Message sent successfully!",
        description:
          "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast({
        title: "Failed to send message",
        description:
          "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akashkumar8298098@gmail.com",
      description: "Best way to reach me",
      href: "mailto:akashkumar8298098@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8298098405",
      description: "Available for a quick call",
      href: "tel:+918298098405",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Akash138170",
      description: "Explore my projects",
      href: "https://github.com/Akash138170",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      description: "Let's grow our network",
      href: "https://www.linkedin.com/in/akash-kumar-553062373/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-background" />

      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Let's Work Together
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Have a project in mind?
            <span className="mt-2 block bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Let's build something great.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I'm always open to discussing new projects, creative ideas,
            freelance opportunities, and full-time roles. Feel free to
            reach out.
          </p>

          {/* Availability */}
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </div>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ================= FORM ================= */}
          <Card className="overflow-hidden border-border/50 bg-card/60 shadow-2xl shadow-primary/5 backdrop-blur-xl">

            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-purple-500 to-accent" />

            <CardContent className="p-6 sm:p-8 lg:p-10">

              {isSubmitted ? (

                /* ================= SUCCESS STATE ================= */
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                  <div className="relative mb-7">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-500/20 blur-2xl" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                      <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold">
                    Message Sent!
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                    Thanks for reaching out. Your message has been
                    delivered successfully. I'll get back to you as
                    soon as possible.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>

              ) : (

                /* ================= FORM STATE ================= */
                <Form {...form}>

                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >

                    <div className="mb-8">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <MessageSquare className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold">
                            Start a conversation
                          </h3>

                          <p className="text-sm text-muted-foreground">
                            Tell me a little about your idea.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">

                      {/* Name */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Your Name
                            </FormLabel>

                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                  {...field}
                                  placeholder="John Doe"
                                  className="h-12 border-border/60 bg-background/50 pl-10 transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </div>
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Email Address
                            </FormLabel>

                            <FormControl>
                              <div className="relative">
                                <AtSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="john@example.com"
                                  className="h-12 border-border/60 bg-background/50 pl-10 transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                              </div>
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                    </div>

                    {/* Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            Subject
                          </FormLabel>

                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                              <Input
                                {...field}
                                placeholder="Project Discussion"
                                className="h-12 border-border/60 bg-background/50 pl-10 transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                              />
                            </div>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            Message
                          </FormLabel>

                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell me about your project, timeline, requirements, or anything you'd like to discuss..."
                              className="min-h-[150px] resize-none border-border/60 bg-background/50 transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group h-12 w-full bg-gradient-to-r from-primary via-purple-600 to-accent font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      I'll usually respond within 24–48 hours.
                    </p>

                  </form>
                </Form>
              )}

            </CardContent>
          </Card>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6">

            {/* Intro Card */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-xl">
              <CardContent className="p-7">

                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-primary">
                      Get in touch
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      Let's connect
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <p className="leading-7 text-muted-foreground">
                  Whether you have a project idea, an exciting opportunity,
                  or simply want to talk about technology, I'd love to hear
                  from you.
                </p>

              </CardContent>
            </Card>

            {/* Contact Cards */}
            <div className="grid gap-3">

              {contactInfo.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block"
                  >
                    <Card className="border-border/50 bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/5">

                      <CardContent className="flex items-center gap-4 p-5">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between gap-3">
                            <h4 className="font-semibold">
                              {contact.label}
                            </h4>

                            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
                          </div>

                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {contact.description}
                          </p>

                          <p className="mt-1 truncate text-sm font-medium text-foreground/90">
                            {contact.value}
                          </p>

                        </div>

                      </CardContent>
                    </Card>
                  </a>
                );
              })}

            </div>

            {/* Availability / Location */}
            <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-primary/5 via-card/50 to-accent/5 backdrop-blur-xl">

              <CardContent className="p-6">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">
                        Based in India
                      </h4>

                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-500">
                        Remote
                      </span>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Open to remote collaboration and opportunities
                      worldwide.
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
                      <Clock3 className="h-3.5 w-3.5" />
                      Flexible for global time zones
                    </div>

                  </div>

                </div>

              </CardContent>
            </Card>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-muted-foreground">
            Have an idea? Don't hesitate to reach out.
          </p>

          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to opportunities
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;