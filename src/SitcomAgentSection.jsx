import { Lightbulb, ClipboardList, Database, PenTool, GaugeCircle, Users } from "lucide-react";

// Drop-in component to showcase the Sitcom Writer Agent (3x2 grid, no step numbers)
// Usage in your site:
// 1) import SitcomAgentSection from "./SitcomAgentSection";
// 2) Add <SitcomAgentSection /> right after your DS Agent section.
// It does NOT depend on your custom Card components; styles mimic your design.

export default function SitcomAgentSection() {
  return (
    <section id="sitcom-agent" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Prototype: Sitcom Writer Agent </h2>
      <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
A good sitcom isn’t written line-by-line; it’s engineered beat-by-beat. Writers sit in a room surrounded by whiteboards, notepads, and decades of collective memory. They start not with dialogue, but with intent: “Chandler finally admits he’s jealous—but can’t stop making jokes about it.” The process that follows is part search engine, part simulator, part jazz improv.
</p>
<p className="mt-4 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
Our Comedy Agent models that creative process computationally—turning the hidden logic of a writer’s room into a modular retrieval-generation pipeline.
</p>

<h3 className="mt-6 font-semibold text-lg text-slate-800">Highlights:</h3>
<ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
<li><b>Respects Comedy Craft:</b> Combines AI capability with deep understanding of comedic principles.</li>
<li><b>Character-Aware:</b> Maintains authentic voices through structured retrieval and fine-tuning.</li>
<li><b>Adaptive Architecture:</b> Scales from limited to abundant data scenarios.</li>
<li><b>Human-Centered:</b> Recognizes the irreplaceable role of human comedy judgment.</li>
<li><b>Data-Driven Iteration:</b> Systematic failure analysis improves prompts and models.</li>
<li><b>Production-Ready:</b> Designed for real-world comedy writing workflows.</li>
</ul>

      {/* 3×2 grid of cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Idea Card Generation */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
          <div className="p-6 pb-2">
            <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" /> Idea Card Generation
            </h3>
          </div>
          <div className="p-6 pt-0 text-sm text-slate-600">
            Targeted web search + classic comedy datasets → normalized <b>idea cards</b>
            with premise, devices, beats, tone tags, and callback refs.
          </div>
        </div>

        {/* Planner */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
          <div className="p-6 pb-2">
            <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-green-500" /> Planner
            </h3>
          </div>
          <div className="p-6 pt-0 text-sm text-slate-600">
            Produces beat map: <i>setup → escalation → twist → button</i> with required
            devices and callback placement.
          </div>
        </div>

        {/* RAG Memory */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
          <div className="p-6 pb-2">
            <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
              <Database className="h-4 w-4 text-purple-500" /> RAG Memory
            </h3>
          </div>
          <div className="p-6 pt-0 text-sm text-slate-600">
            Retrieves <b>high-signal</b> snippets (tone exemplars, running gags, relationship state)
            to ground the scene without prompt bloat.
          </div>
        </div>

        {/* Writer */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
          <div className="p-6 pb-2">
            <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
              <PenTool className="h-4 w-4 text-red-500" /> Writer
            </h3>
          </div>
          <div className="p-6 pt-0 text-sm text-slate-600">
            Generates in-voice scripts from the plan + 3–6 retrieved snippets. Use LoRA/SFT when
            dataset is abundant; prompt-only + RAG when scarce.
          </div>
        </div>

        {/* Critic */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
          <div className="p-6 pb-2">
            <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
              <GaugeCircle className="h-4 w-4 text-orange-500" /> Critic
            </h3>
          </div>
          <div className="p-6 pt-0 text-sm text-slate-600">
            Scores voice adherence, callback coverage, beat fidelity, novelty, and pacing. Flags weak
            lines for selective rewrite.
          </div>
        </div>

        {/* Human-in-the-Loop */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
          <div className="p-6 pb-2">
            <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
              <Users className="h-4 w-4 text-pink-500" /> Human-in-the-Loop
            </h3>
          </div>
          <div className="p-6 pt-0 text-sm text-slate-600">
            Expert review of funniness, tone, originality. Accepted scenes feed DPO/LoRA updates,
            closing the <b>continuous improvement loop</b>.
          </div>
        </div>
      </div>
    </section>
  );
}
