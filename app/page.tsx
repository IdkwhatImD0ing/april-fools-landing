import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, FileText, MousePointer, Slack, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import VideoPlayer from "./video"

const FUNNY_LINK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <span className="text-2xl">😴</span> WeSlackOff
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="#download" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Download
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex text-gray-700 border-gray-300 hover:bg-gray-100">
              <Link href={FUNNY_LINK}>Login</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Link href={FUNNY_LINK}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col gap-6">
              <Badge className="w-fit bg-indigo-100 text-indigo-700 hover:bg-indigo-100 px-3.5 py-1.5 border-none">
                Biggest invisibility update ever <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                F*ck productivity. <span className="text-indigo-600">Slack smarter</span>, not harder.
              </h1>
              <p className="text-xl text-gray-600">
                WeSlackOff is an invisible AI assistant for pretending to work.
                <br />
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Link href={FUNNY_LINK}>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">💻 Download for Mac</Button>
                </Link>
                <Link href={FUNNY_LINK}>
                  <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-100">
                    🪟 Download for Windows
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/lol.png?height=400&width=600"
                width={600}
                height={400}
                alt="Mock UI showing fake Slack conversations and Jira tickets"
                className="rounded-xl"
              />

            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="w-full py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4 mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">How It Works</h2>
            <p className="max-w-[700px] mx-auto text-gray-600 text-lg">
              Our cutting-edge AI tools help you look busy while doing absolutely nothing.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <Slack className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">SlackGPT</h3>
              <p className="text-gray-600">
                Sends realistic-sounding messages like:
                <br />
                <span className="italic">"Looping in @devops, looks like an infra issue."</span>
                <br />
                Trained on 1M+ corporate DMs.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fake Jira Activity</h3>
              <p className="text-gray-600">
                Auto-opens/closes tickets
                <br />
                Comments with fake context like:
                <br />
                <span className="italic">"Blocked on upstream dependency, tracking in #infra"</span>
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Zoom Presence AI</h3>
              <p className="text-gray-600">
                Simulates eye contact, nods, laughs
                <br />
                Now with "confused face" mode for senior dev authenticity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Features */}
      <section className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">More Features</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Everything you need to look productive without lifting a finger.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {/* Feature Card 1 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Code className="h-5 w-5 text-indigo-600" /> VS Code Auto-Typer
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Looks like you're debugging... you're actually rewatching <Link href="https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling" className="text-indigo-600 hover:underline">Solo Leveling</Link>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status: Active</span>
                  <div className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-indigo-600 p-1">
                    <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Feature Card 2 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <MousePointer className="h-5 w-5 text-indigo-600" /> Mouse Wiggle Engine
                </CardTitle>
                <CardDescription className="text-gray-600">Moves just enough to avoid "away" status.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status: Active</span>
                  <div className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-indigo-600 p-1">
                    <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Feature Card 3 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <FileText className="h-5 w-5 text-indigo-600" /> Google Docs Simulator
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Generates filler doc edits every 10 minutes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status: Active</span>
                  <div className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-indigo-600 p-1">
                    <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Feature Card 4 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Zap className="h-5 w-5 text-indigo-600" /> Status Faker
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Changes your Slack status to things like: "Heads down in code" / "Reviewing PRs"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status: Active</span>
                  <div className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-indigo-600 p-1">
                    <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">What Our Users Say</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Join thousands of professionals who've reclaimed their time.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <Image
                  src="/headshot1.png"
                  alt="Sarah K."
                  width={90}
                  height={160}
                  className="rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Sarah K.</p>
                  <p className="text-sm text-gray-500">Senior Developer</p>
                  <p className="text-gray-600 italic mt-2">"This tool is life-changing. I haven't typed real code in weeks."</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <Image
                  src="/headshot2.png"
                  alt="Michael T."
                  width={90}
                  height={160}
                  className="rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Michael T.</p>
                  <p className="text-sm text-gray-500">Product Manager</p>
                  <p className="text-gray-600 italic">"My team thinks I'm a productivity machine. If only they knew..."</p>

                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <Image
                  src="/headshot3.png"
                  alt="May C."
                  width={90}
                  height={160}
                  className="rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">May R.</p>
                  <p className="text-sm text-gray-500">Tech Lead</p>
                  <p className="text-gray-600 italic">"I'm working three jobs simultaneously thanks to WeSlackOff."</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">See Me Using It In Action</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Watch how I use WeSlackOff to survive meetings from anywhere.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <VideoPlayer />

          </div>
        </div>
      </section>

      {/* Undetectability Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Enterprise-Grade Security</h2>
            <p className="max-w-[700px] text-indigo-100 text-lg">
              Our advanced technology keeps your slacking completely hidden.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4 rounded-lg border border-indigo-800 bg-indigo-950/50 p-6 text-center">
              <div className="rounded-full bg-indigo-800/50 p-3">
                <CheckCircle className="h-6 w-6 text-indigo-300" />
              </div>
              <p className="font-medium">Invisible to screen shares</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg border border-indigo-800 bg-indigo-950/50 p-6 text-center">
              <div className="rounded-full bg-indigo-800/50 p-3">
                <CheckCircle className="h-6 w-6 text-indigo-300" />
              </div>
              <p className="font-medium">Bypasses productivity tracking</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg border border-indigo-800 bg-indigo-950/50 p-6 text-center">
              <div className="rounded-full bg-indigo-800/50 p-3">
                <CheckCircle className="h-6 w-6 text-indigo-300" />
              </div>
              <p className="font-medium">Compatible with all major tools</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg border border-indigo-800 bg-indigo-950/50 p-6 text-center">
              <div className="rounded-full bg-indigo-800/50 p-3">
                <CheckCircle className="h-6 w-6 text-indigo-300" />
              </div>
              <p className="font-medium">Undetectable via eye tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Pricing</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">Choose the plan that matches your slacking needs.</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Pricing Card 1 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Monthly</CardTitle>
                <CardDescription className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-gray-900">$69</span>
                  <span className="text-gray-600">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Unlimited fake Slack messages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">100 Jira actions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Basic mouse movement simulation</span>
                  </li>
                </ul>
                <Button asChild className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Link href={FUNNY_LINK}>Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            {/* Pricing Card 2 */}
            <Card className="border-indigo-200 bg-indigo-50 shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <Badge className="w-fit bg-indigo-600 hover:bg-indigo-600 text-white">Best Value</Badge>
                <CardTitle className="text-2xl text-gray-900">Annual</CardTitle>
                <CardDescription className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-gray-900">$420</span>
                  <span className="text-gray-600">/year</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Everything in Monthly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Unlimited Jira actions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Advanced AI presence simulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Free "My Manager Thinks I'm Online" hoodie</span>
                  </li>
                </ul>
                <Button asChild className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Link href={FUNNY_LINK}>Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">FAQ</h2>
            <p className="max-w-[700px] text-gray-600 text-lg">
              Frequently asked questions about our slacking service.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-gray-200">
                <AccordionTrigger className="text-gray-900">Is this legal?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Probably not. But like... who's gonna know?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-gray-200">
                <AccordionTrigger className="text-gray-900">Will it work on Macbooks?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Unless Apple adds an "anti-laziness" kernel, yes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-gray-200">
                <AccordionTrigger className="text-gray-900">Can I use this during layoffs?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Especially then.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-gray-200">
                <AccordionTrigger className="text-gray-900">Will I actually get anything done?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolutely not. That's the point.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="w-full py-20 md:py-28 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Take the short way.</h2>
            <p className="max-w-[700px] text-xl text-indigo-100">
              Join 10,000+ overemployed devs slacking off smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href={FUNNY_LINK}>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Download Now
                </Button>
              </Link>
              <Link href={FUNNY_LINK}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-indigo-200 mt-4">
              Undetectability mode included. Results not guaranteed. Life satisfaction may increase.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-gray-400">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <span className="text-2xl">😴</span> WeSlackOff
              </div>
              <p className="text-sm">The premier AI-powered slacking solution.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-white">Product</p>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Features
              </Link>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Download
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-white">Company</p>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                About
              </Link>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Careers
              </Link>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-white">Legal</p>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Terms
              </Link>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href={FUNNY_LINK} className="text-sm hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-xs">© 2025 WeSlackOff. All rights reserved. This is an April Fools joke.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


