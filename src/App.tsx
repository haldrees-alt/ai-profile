import {
  ArrowRight, Bot, Workflow, Globe, Headset, LineChart, Mail, MapPin, Sparkles, ExternalLink, CheckCircle2,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { categories, process, profile, projects, toolkit, type Category, type Project } from "@/data/profile"

const icons: Record<Category, typeof Bot> = {
  websites: Globe, automations: Bot, support: Headset, workflows: Workflow, insights: LineChart,
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <Sparkles className="size-5 text-primary" /> {profile.name}
        </a>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#process" className="hover:text-foreground">Process</a>
          <a href="#toolkit" className="hover:text-foreground">Toolkit</a>
        </nav>
        <Button asChild size="sm"><a href="#contact">Let's talk</a></Button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.45_0.15_260/0.35),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:pt-28">
        <div className="flex items-center gap-4">
          <Avatar className="size-14 border border-primary/40">
            <AvatarFallback className="bg-primary/15 text-lg font-semibold text-primary">{profile.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{profile.title}</p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-3.5" /> {profile.location}</p>
          </div>
        </div>
        <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Building AI that does <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">real work</span> for real companies.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#work">See the work <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="outline"><a href="#services">What I build</a></Button>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {profile.stats.map((s) => (
            <Card key={s.label} className="gap-1 py-5">
              <CardContent>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-muted-foreground">{text}</p>}
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <SectionTitle eyebrow="Services" title="Where AI creates value" text="Five areas companies ask for most — each backed by delivered solutions." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const Icon = icons[c.id]
          const count = projects.filter((p) => p.category === c.id).length
          return (
            <Card key={c.id} className="transition hover:border-primary/50">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary"><Icon className="size-5" /></div>
                <CardTitle>{c.label}</CardTitle>
                <CardDescription>{c.description}</CardDescription>
              </CardHeader>
              <CardFooter><Badge variant="secondary">{count} case studies</Badge></CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: Project }) {
  const Icon = icons[p.category]
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="gap-1"><Icon className="size-3" /> {categories.find((c) => c.id === p.category)?.label}</Badge>
          <span className="text-xs text-muted-foreground">{p.client}</span>
        </div>
        <CardTitle className="mt-2 text-xl">{p.title}</CardTitle>
        <CardDescription>{p.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div><p className="font-medium">Challenge</p><p className="text-muted-foreground">{p.problem}</p></div>
        <div><p className="font-medium">Solution</p><p className="text-muted-foreground">{p.solution}</p></div>
        <div className="grid grid-cols-2 gap-3">
          {p.metrics.map((m) => (
            <div key={m.label} className="rounded-lg bg-secondary p-3">
              <p className="text-lg font-bold text-primary">{m.value}</p>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex flex-wrap gap-1.5">
        {p.stack.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
      </CardFooter>
    </Card>
  )
}

function Work() {
  return (
    <section id="work" className="border-y bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle eyebrow="Selected work" title="AI case studies" text="Problems, solutions and measurable outcomes." />
        <Tabs defaultValue="all">
          <div className="-mx-4 overflow-x-auto px-4">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((c) => <TabsTrigger key={c.id} value={c.id}>{c.label}</TabsTrigger>)}
            </TabsList>
          </div>
          {["all", ...categories.map((c) => c.id)].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="grid gap-5 md:grid-cols-2">
                {projects.filter((p) => tab === "all" || p.category === tab).map((p) => <ProjectCard key={p.title} p={p} />)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-20">
      <SectionTitle eyebrow="How I work" title="From idea to production" />
      <div className="grid gap-4 md:grid-cols-4">
        {process.map((s) => (
          <Card key={s.step}>
            <CardHeader>
              <p className="text-sm font-bold text-primary">{s.step}</p>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription>{s.text}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-6xl px-4 pb-20">
      <SectionTitle eyebrow="Toolkit" title="Platforms & technologies" />
      <div className="flex flex-wrap gap-2">
        {toolkit.map((t) => (
          <Badge key={t} variant="outline" className="gap-1.5 px-3 py-1.5 text-sm"><CheckCircle2 className="size-3.5 text-primary" />{t}</Badge>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
      <Card className="bg-gradient-to-br from-primary/20 via-card to-card">
        <CardHeader className="md:p-4">
          <CardTitle className="text-3xl">Have a process that should run itself?</CardTitle>
          <CardDescription className="text-base">Let's find the highest-value AI use case in your company and ship a working prototype fast.</CardDescription>
        </CardHeader>
        {(profile.email || profile.linkedin) && (
          <CardFooter className="flex flex-wrap gap-3 md:px-10">
            {profile.email && <Button asChild size="lg"><a href={`mailto:${profile.email}`}><Mail /> Email me</a></Button>}
            {profile.linkedin && <Button asChild size="lg" variant="outline"><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink /> LinkedIn</a></Button>}
          </CardFooter>
        )}
      </Card>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Toolkit />
        <Contact />
      </main>
      <Separator />
      <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · Built with React, shadcn/ui & Netlify
      </footer>
    </div>
  )
}
