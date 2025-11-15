import {
  Image,
  Fingerprint,
  Paintbrush,
  Type,
  Shapes,
  Sliders,
  GaugeCircle,
  Users,
} from "lucide-react";

// Drop-in component to showcase the Character-Consistent Generation Pipeline (4x2 grid)
// Usage in your site:
// 1) import CharacterPipelineSection from "./CharacterPipelineSection";
// 2) Add <CharacterPipelineSection /> where you'd like it to appear (e.g., after SitcomAgentSection).
// It does NOT depend on your custom Card components; styles mimic your design.

export default function CharacterPipelineSection() {
  return (
    <section id="character-pipeline" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">
        Prototype: Character-Consistent Generation Pipeline
      </h2>

      <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
        Most image models can paint a beautiful moment—but forget it the next second.
        Faces drift, expressions warp, and the soul of a character fades between frames.
        For storytellers, that’s not just a rendering flaw—it’s a broken thread of continuity.
      </p>
      <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
        Our pipeline teaches AI to remember. It transforms static diffusion into a creative
        partner—one that preserves identity, emotion, and style across scenes. The result is
        a visual storytelling engine where consistency and imagination coexist: the AI handles
        repetitive precision; the human drives narrative and feeling.
      </p>

      <h3 className="mt-6 font-semibold text-lg text-slate-800">Project Highlights:</h3>
      <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
        <li>
          <b>Character Generation:</b> Prompt- and variation-based synthesis; input image triggers
          IP-Adapter for identity extraction, followed by synthetic image generation for style and pose variations.
        </li>
        <li>
          <b>Identity-Preserving:</b> LoRA and embedding modules retain each character’s proportions,
          features, and attire across poses and moods.
        </li>
        <li>
          <b>Style-Stable:</b> A dedicated style LoRA anchors line weight, tone, and atmosphere—Sempe-inspired
          or otherwise—ensuring visual coherence.
        </li>
        <li>
          <b>Emotion-Aware:</b> Mood-conditioned prompts modulate facial cues and body language without compromising identity.
        </li>
        <li>
          <b>Composable Control:</b> Pose, depth, and line-art ControlNets guide structure; adaptive weights balance
          spatial fidelity and artistic flow.
        </li>
        <li>
          <b>Human-Centered:</b> The AI maintains consistency; the human remains the storyteller, approving and curating final outputs.
        </li>
      </ul>

      {/* 4×2 grid of modules */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Reference Builder */}
        <Card
          icon={<Image className="h-4 w-4 text-yellow-500" />}
          title="Reference Builder"
          text="Curates 8–25 high-quality images per character—neutral, expressive, multi-angle—to train identity and style anchors."
        />

        {/* Identity Adapter */}
        <Card
          icon={<Fingerprint className="h-4 w-4 text-green-500" />}
          title="Identity Adapter"
          text="Trains lightweight LoRA or Textual-Inversion tokens (e.g., <twinkle_sempe>) and integrates IP-Adapter conditioning for persistent facial memory."
        />

        {/* Style Lock */}
        <Card
          icon={<Paintbrush className="h-4 w-4 text-purple-500" />}
          title="Style Lock"
          text="Applies stylistic adapters or text anchors (“thin lines, airy composition, gentle humor”) with curated negatives to eliminate drift."
        />

        {/* Prompt Composer */}
        <Card
          icon={<Type className="h-4 w-4 text-red-500" />}
          title="Prompt Composer"
          text="Combines identity, mood, scene, and style clauses into structured templates. Enables consistent yet expressive re-composition per frame."
        />

        {/* Control Orchestrator */}
        <Card
          icon={<Shapes className="h-4 w-4 text-orange-500" />}
          title="Control Orchestrator"
          text="Attaches pose, line-art, or depth ControlNets with adjustable weights—maintains spatial coherence while preserving artistic flexibility."
        />

        {/* Sampler & Seed Manager */}
        <Card
          icon={<Sliders className="h-4 w-4 text-pink-500" />}
          title="Sampler & Seed Manager"
          text="Applies deterministic seeds, scheduler, and CFG parameters; supports A/B comparisons and reproducible character sheets."
        />

        {/* Evaluator */}
        <Card
          icon={<GaugeCircle className="h-4 w-4 text-blue-500" />}
          title="Evaluator"
          text="Scores outputs via face-embedding similarity, style-text alignment, and aesthetic predictors. Low-scoring results trigger re-sampling or retraining."
        />

        {/* Human-in-the-Loop */}
        <Card
          icon={<Users className="h-4 w-4 text-pink-500" />}
          title="Human-in-the-Loop"
          text="Artists review consistency, emotion, and appeal. Approved images expand the reference gallery, closing the iterative improvement loop."
        />
      </div>

      {/* Philosophy */}
      <div className="mt-8 border border-slate-200 rounded-2xl p-6 bg-slate-50">
        <h3 className="text-base font-semibold leading-none tracking-tight text-slate-800">
          Core Philosophy
        </h3>
        <p className="mt-3 text-sm text-slate-700">
          The pipeline is built on a simple belief: <b>AI should remember, not replace.</b>{" "}
          Consistency becomes the foundation of creative trust. By combining precision engineering
          with human intuition, we turn continuity from a constraint into a canvas—helping more
          people express their world to the world.
        </p>
      </div>
    </section>
  );
}

// Small reusable card component
function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm h-full">
      <div className="p-6 pb-2">
        <h3 className="text-base font-semibold leading-none tracking-tight flex items-center gap-2">
          {icon} {title}
        </h3>
      </div>
      <div className="p-6 pt-0 text-sm text-slate-600">{text}</div>
    </div>
  );
}
