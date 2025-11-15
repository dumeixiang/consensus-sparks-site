import { useState } from "react";
import { Check, Sparkles, Rocket, Shield, BarChart3, BookOpen, Github, Linkedin, Cpu, Cog, Boxes, Wand2, Mail } from "lucide-react";
import logo from "./assets/consensus_sparks_logo.png"
import SitcomAgentSection from "./SitcomAgentSection";
import {
  ClipboardList,
  Code2,
  GaugeCircle,
  Presentation,
  Database,
  Sliders,
  Network,
  RefreshCcw
} from "lucide-react"
import CharacterPipelineSection from "./CharacterPipelineSection"


// Button component
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2";
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-300 bg-white hover:bg-slate-50"
  };
  const sizes = {
    default: "px-4 py-2",
    lg: "px-6 py-3"
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Card components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white border border-slate-200 rounded-2xl shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

// Input component
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-4 py-2 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${className}`}
    {...props}
  />
);

// Textarea component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-4 py-2 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${className}`}
    {...props}
  />
);

export default function ConsensusSparksSite() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl">
          <img
  src={logo}
  alt="Consensus Sparks"
  className="h-24 w-24 object-contain shadow-md rounded-lg bg-white"
/>
            <span>Consensus Sparks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#product" className="hover:opacity-70">Product</a>
            <a href="#how" className="hover:opacity-70">How it works</a>
            <a href="#features" className="hover:opacity-70">Features</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact"><Button className="rounded-2xl">Get started</Button></a>
          </div>
        </div>
      </header>

      {/* HERO */}
<section className="relative overflow-hidden">
  <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
    {/* LEFT TEXT BLOCK */}
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Tune AI to your craft and evolve —
        <span className="block mt-2 text-slate-600">from data to deployment.</span>
      </h1>

      <p className="mt-5 text-slate-600 text-lg">
        <strong>Consensus Sparks</strong> combines
        <strong> machine learning, deep learning, large language models,</strong> and
        <strong> reinforcement learning</strong> to help your organization build
        <strong> domain-adapted intelligence</strong> —
        through <strong>data curation, lightweight fine-tuning, and retrieval</strong> —
        fast, measurable, and cost-aware.
      </p>

      <div className="mt-6 flex gap-3">
        <a href="#contact">
          <Button size="lg" className="rounded-2xl">
            <Rocket className="h-4 w-4 mr-2" />
            Request access
          </Button>
        </a>
        <a href="#product">
          <Button size="lg" variant="outline" className="rounded-2xl">
            See the solution
          </Button>
        </a>
      </div>

      <div className="mt-6 text-sm text-slate-500 flex items-center gap-2">
        <Shield className="h-4 w-4" />
        Privacy-first. Your data stays yours.
      </div>
    </div>

    {/* RIGHT PIPELINE PREVIEW */}
    <div className="relative">
      <div className="rounded-2xl p-1 bg-gradient-to-tr from-yellow-200 via-amber-300 to-orange-300 shadow-xl">
        <div className="rounded-2xl bg-white">
          <div className="p-4 border-b text-xs text-slate-500">
            Full-cycle LLM pipeline — from data ingestion to evolution
          </div>

          <div className="p-6 grid gap-4">
            {/* FIRST ROW */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Boxes className="h-4 w-4" /> Data Ingestion
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600">
                  Ingest your task data to build a
                  targeted dataset.
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Data Augmentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600">
                  Generate similar datasets using DL, LLM, and RL to enrich task
                  coverage and diversity.
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Wand2 className="h-4 w-4" /> Fine-Tuning
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600">
                  Apply lightweight SFT and DPO training to align models with
                  your domain and goals.
                </CardContent>
              </Card>
            </div>

            {/* SECOND ROW */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Cog className="h-4 w-4" /> RAG Grounding
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600">
                  Retrieve fresh knowledge and ground the model in your current
                  business context.
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Cpu className="h-4 w-4" /> Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600">
                  Assess model performance with metrics and benchmarks tailored
                  to your operations.
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" /> Evolve & Feedback Loop
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-slate-600">
                  Learn from your results and feedback to iteratively improve
                  accuracy and reasoning.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PRODUCT */}
      <section id="product" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">The Solution</h2>
            <p className="mt-3 text-slate-600">
              A <b>domain specific agent</b> suite that can plug in your domain docs to adapt models quickly, keeping costs transparent and performance measurable.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {[
                "Domain Secific AI roadmap",
                "Data curation and augmentation",
                "LoRA/SFT & DPO adapters tuned to your tasks",
                "RAG implementation",
                "RL framework powered iteration loop",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5"/> {t}</li>
              ))}
            </ul>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Quick facts</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <div className="font-semibold">Deployment</div>
                <div>Docker / Vercel / CPU or GPU</div>
              </div>
              <div>
                <div className="font-semibold">Data</div>
                <div>Bring‑your‑own, privacy‑safe</div>
              </div>
              <div>
                <div className="font-semibold">Latency</div>
                <div>Sub‑second to seconds</div>
              </div>
              <div>
                <div className="font-semibold">Pricing</div>
                <div>Free tier + custom</div>
              </div>
            </CardContent>
            <CardFooter>
              <a href="#contact" className="w-full"><Button className="rounded-2xl w-full">Try the free tier</Button></a>
            </CardFooter>
          </Card>
        </div>
      </section>


{/* DS AGENT */}
<section id="ds-agent" className="mx-auto max-w-6xl px-4 py-16">
<h2 className="text-2xl md:text-3xl font-bold"> Prototype: DS Agent </h2>
{/* <p className="mt-3 text-slate-600 max-w-3xl">
Data science has always been both science and craft — guided by logic yet refined by intuition. 
That duality makes it the perfect ground to test intelligent collaboration. 
<br /><br />
Our evolving <b>DS Agent</b> prototype plugs directly into your workflow and orchestrates four core functions — 
<i>Plan & Methodology</i>, <i>Coding</i>, <i>Evaluation</i>, and <i>Presentation</i> — 
with budget-aware routing, retrieval grounding, and an iterative feedback loop. 
<br /><br />
<b>Project Highlights:</b><br />
• <b>Human-in-the-Loop Intelligence:</b> Balances automation with expert oversight for reliable outcomes.<br />
• <b>Adaptive Architecture:</b> Modular design scales across data, ML, product, and operations teams.<br />
• <b>Retrieval-Grounded Reasoning:</b> Combines contextual memory with transparent decision traces.<br />
• <b>Cost- and Quality-Aware Execution:</b> Routes tasks dynamically to optimize performance and spend.<br />
• <b>Continuous Learning:</b> Captures insights from each iteration to refine future plans and models.
</p> */}

<p className="mt-3 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
Data science has always been both science and craft — guided by logic yet refined by intuition. 
That duality makes it the perfect ground to test intelligent collaboration.
</p>

<p className="mt-4 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
Our evolving <b>DS Agent</b> prototype plugs directly into your workflow and orchestrates four core functions — 
<i> Plan & Methodology</i>, <i> Coding</i>, <i> Evaluation</i>, and <i> Presentation</i> — 
with budget-aware routing, retrieval grounding, and an iterative feedback loop.
</p>

<h3 className="mt-6 font-semibold text-lg text-slate-800">Project Highlights:</h3>

<ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
  <li><b>Human-in-the-Loop Intelligence:</b> Balances automation with expert oversight for reliable outcomes.</li>
  <li><b>Adaptive Architecture:</b> Modular design scales across data, ML, product, and operations teams.</li>
  <li><b>Retrieval-Grounded Reasoning:</b> Combines contextual memory with transparent decision traces.</li>
  <li><b>Cost- and Quality-Aware Execution:</b> Routes tasks dynamically to optimize performance and spend.</li>
  <li><b>Continuous Learning:</b> Captures insights from each iteration to refine future plans and models.</li>
</ul>


{/* 4 Core Functions */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
  {[
    {
      title: "Plan & Methodology",
      icon: <ClipboardList className="h-4 w-4 text-blue-500" />,
      desc: "Problem framing, methodology search, experiment design."
    },
    {
      title: "Coding",
      icon: <Code2 className="h-4 w-4 text-green-500" />,
      desc: "Model-powered Python/SQL generation with human-in-the-loop verification before execution."
    },
    {
      title: "Evaluation",
      icon: <GaugeCircle className="h-4 w-4 text-orange-500" />,
      desc: "Task-relevant metrics, expert review, and LLM-as-judge for quality and consistency."
    },
    {
      title: "Presentation",
      icon: <Presentation className="h-4 w-4 text-purple-500" />,
      desc: "Auto-summaries of model results, agent-powered visuals, reports, and briefings."
    },
  ].map((b, i) => (
    <div key={i} className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
      <div className="p-6 pb-2">
        <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
          {b.icon} {b.title}
        </h3>
      </div>
      <div className="p-6 pt-0 text-sm text-slate-600">{b.desc}</div>
    </div>
  ))}
</div>

{/* Policies & Loop */}
<div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
  {[
    {
      title: "Data Curation",
      icon: <Database className="h-4 w-4 text-cyan-500" />,
      desc: "Identify operational or product data and domain-expertise datasets; augment them with advanced LLMs and data synthesis."
    },
    {
      title: "Fine Tuning",
      icon: <Sliders className="h-4 w-4 text-rose-500" />,
      desc: "Apply SFT/DPO to adapt the world model into the DS/ML domain; prefer adapters and retrieval over full fine-tunes."
    },
    {
      title: "RAG Integration",
      icon: <Network className="h-4 w-4 text-emerald-500" />,
      desc: "Structure-aware chunking of task-specific data keeps the model grounded and current; triggered by model uncertainty."
    },
    {
      title: "Feedback Loop",
      icon: <RefreshCcw className="h-4 w-4 text-indigo-500" />,
      desc: "Leverage a ReAct framework with memory to learn from outcomes and auto-curate new exemplars for continuous improvement."
    },
  ].map((b, i) => (
    <div key={i} className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
      <div className="p-6 pb-2">
        <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
          {b.icon} {b.title}
        </h3>
      </div>
      <div className="p-6 pt-0 text-sm text-slate-600">{b.desc}</div>
    </div>
  ))}
</div>

{/* SITCOM WRITER AGENT (Example) */}
<SitcomAgentSection />
{/* Character PIPLELINE SELECTION */}
<CharacterPipelineSection />

</section>
      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {[{
            title: "Connect", desc: "Identify task relevant data; curate and enrich.", icon: Boxes },
            { title: "Adapt", desc: "Lightweight SFT/DPO with eval harness.", icon: Wand2 },
            { title: "Retrieve", desc: "Structure‑aware chunking and knowledge fresh and grounded", icon: BookOpen },
            { title: "Deploy", desc: "Serve via API, UI, or notebook.", icon: Rocket }].map((s, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><s.icon className="h-4 w-4"/> {s.title}</CardTitle></CardHeader>
              <CardContent className="text-sm text-slate-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Why teams pick us</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[{
            title: "Tailored to you",
            text: "We design 1-on-1 custom solutions that adapt world models to your exact domain — not generic prompts. Every model learns your workflow, language, and priorities.",
          },{
            title: "Budget-aware",
            text: "You pay once for what you truly need — not to train a model on the entire internet. Lightweight fine-tuning, RAG, and routing deliver precision at a fraction of the cost.",
          },{
            title: "Own your data and evolve",
            text: "Your business data stays safe and local. Our iterative feedback framework helps your model continuously improve as it learns from real-world use.",
          }].map((f,i)=> (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-lg">{f.title}</CardTitle></CardHeader>
              <CardContent className="text-slate-600">{f.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[{
            name: "Data Curation and Augmentation",
            price: "Custom",
            items: ["Priority support","10k queries/mo","API access","SSO (coming)"] ,
            cta: "Schedule consultation",
          },{
            name: "SFT/DPO fine tuning",
            price: "Custom",
            items: ["Custom dataset curation","SFT & DPO training","Adapter optimization","Evaluation harness"],
            cta: "Schedule consultation",
          },{
            name: "RAG implementation",
            price: "Custom",
            items: ["Structure-aware chunking","Vector database setup","Real-time knowledge retrieval","Custom embedding models"],
            cta: "Schedule consultation",
          }].map((tier, i)=> (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{tier.name}</span>
                  <span className="text-2xl font-extrabold">{tier.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                <ul className="space-y-2">{tier.items.map((it, j)=> (
                  <li key={j} className="flex gap-2"><Check className="h-4 w-4 mt-0.5"/>{it}</li>
                ))}</ul>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="w-full"><Button className="w-full rounded-2xl">{tier.cta}</Button></a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
  <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
  <p className="mt-3 text-slate-600">
    Tell us about your use case. We'll reach out with next steps and a sandbox.
  </p>

  <form
    action="https://formspree.io/f/mzzypqab"  // ← replace
    method="POST"
    className="mt-6 grid gap-4"
  >
    <div className="grid md:grid-cols-2 gap-4">
      <Input name="name" placeholder="Your name" required />
      <Input name="email" type="email" placeholder="Work email" required />
    </div>

    <Input name="company" placeholder="Company / Team" />

    <Textarea
      name="message"
      placeholder="What problem are you solving?"
      rows={5}
      required
    />

    {/* Optional extras */}
    {/* <input type="hidden" name="_subject" value="DS Agent demo request" /> */}
    {/* <input type="hidden" name="_redirect" value="https://www.consensussparks.com/thank-you" /> */}

    <Button type="submit" className="rounded-2xl">Request demo</Button>

    <p className="text-xs text-slate-500">
      Delivered securely to hello@consensussparks.com via Formspree.
    </p>
  </form>
</section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-4 items-center">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Consensus Sparks LLC. All rights reserved.</div>
          <div className="flex gap-4 justify-start md:justify-end">
            <a className="inline-flex items-center gap-1 text-sm hover:opacity-70" href="https://github.com" target="_blank" rel="noreferrer"><Github className="h-4 w-4"/> GitHub</a>
            <a className="inline-flex items-center gap-1 text-sm hover:opacity-70" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4"/> LinkedIn</a>
            <a className="inline-flex items-center gap-1 text-sm hover:opacity-70" href="mailto:hello@consensussparks.com"><Mail className="h-4 w-4"/> Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}