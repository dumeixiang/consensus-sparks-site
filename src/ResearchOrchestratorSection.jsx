// @ts-check
import {
  Search,
  GitBranch,
  Layers,
  Settings,
  FileText,
  Database,
  BookOpenCheck,
  Users,
} from "lucide-react";
import PropTypes from "prop-types";

// Drop-in section for the Domain-Specific Research Assistant (4x2 grid)
export default function ResearchOrchestratorSection() {
  return (
    <section
      id="research-orchestrator"
      className="mx-auto max-w-6xl px-4 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold">
        Prototype: Domain-Specific Research Orchestrator
      </h2>

      <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
        Research questions vary in complexity, sources span multiple formats,
        and quality demands proper attribution, synthesis, and reasoning. A
        basic search-and-summarize tool can’t guide someone from “vague
        research idea” to “publication-ready analysis with verified citations.”
      </p>

      <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
        We aim to specify each process and let the machine handle the rest.
        Through multi-stage RAG orchestration, query decomposition, and
        long-context synthesis, the system turns complex questions into
        comprehensive, multi-source analyses with hierarchical synthesis and
        proper attribution.
      </p>

      <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed md:leading-loose text-justify">
        The result: a domain-specific research pipeline where intent
        classification, hierarchical retrieval, and citation accuracy align.
        The AI handles the heavy analytical reasoning; the human focuses on
        research direction and domain expertise.
      </p>

      <h3 className="mt-6 font-semibold text-lg text-slate-800">
        Highlights:
      </h3>
      <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
        <li>
          <b>Intelligent Query Understanding:</b> Classifies intent
          (exploratory, comparative, synthesis, temporal, causal) and
          decomposes complex queries with dependency tracking.
        </li>
        <li>
          <b>Hierarchical RAG Architecture:</b> Multi-level
          embeddings (paragraph → section → document → cluster) for both
          detailed fact-finding and high-level pattern recognition.
        </li>
        <li>
          <b>Multi-Stage Research Pipeline:</b> Query Analysis → Task Decomposition
          → Multi Aspect Reasoning → Hierachical Retrieval → Long Context Synthesis → Citation Verification.
        </li>
        <li>
          <b>Multi-Source Data Integration:</b> Web search, local documents, datasets (arXiv/HuggingFace), and APIs into a unified
          knowledge base.
        </li>
        <li>
          <b>Strategy-Aware Retrieval:</b> Adapts retrieval depth and granularity
          to query type (document, section, or paragraph focus).
        </li>
        <li>
          <b>Citation-First Architecture:</b> Generates inline citations during
          synthesis with confidence scoring and automated verification.
        </li>
        <li>
          <b>Transparent Reasoning:</b> Outputs execution plans, dependency
          graphs, retrieval strategies, and verification reports.
        </li>
        <li>
          <b>Human-Centered Research:</b> AI ensures coverage and rigor; humans
          provide domain judgment, critique, and direction.
        </li>
      </ul>

      {/* 4×2 grid of pipeline modules */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card
          icon={<Search className="h-4 w-4 text-yellow-500" />}
          title="Query Analyzer"
          text="Transforms questions into structured intent profiles: primary intent, confidence, complexity, keywords, entities, aspects, and temporal scope."
        />
        <Card
          icon={<GitBranch className="h-4 w-4 text-emerald-500" />}
          title="Query Decomposer"
          text='Breaks complex prompts into dependent sub-queries (e.g., “Compare X and Y” → “What is X?”, “What is Y?”, “Compare results”).'
        />
        <Card
          icon={<Layers className="h-4 w-4 text-violet-500" />}
          title="Multi-Aspect Generator"
          text="Produces perspective-specific query variants (technical, economic, historical, practical) to ensure comprehensive coverage."
        />
        <Card
          icon={<Settings className="h-4 w-4 text-orange-500" />}
          title="Search Strategy Optimizer"
          text="Designs search strategies: execution groups, retrieval hierarchy, target results per query, and cost/time estimates."
        />
        <Card
          icon={<FileText className="h-4 w-4 text-rose-500" />}
          title="Data Ingestion Engine"
          text="Unifies web search APIs, local file parsing, and dataset connectors while preserving document structure for hierarchical embedding."
        />
        <Card
          icon={<Database className="h-4 w-4 text-blue-500" />}
          title="Hierarchical RAG System"
          text="RAPTOR-style levels: L0 paragraphs, L1 sections, L2 documents, L3 clusters—retrieves at the right abstraction level for each query."
        />
        <Card
          icon={<BookOpenCheck className="h-4 w-4 text-teal-600" />}
          title="Long Context Synthesizer"
          text="Builds long-context inputs, generates synthesis with inline citations, and manages token budgets for cost-efficient analysis."
        />
        <Card
          icon={<Users className="h-4 w-4 text-fuchsia-600" />}
          title="Human-in-the-Loop Refinement"
          text="Lets experts refine strategies, add domain constraints, and request deeper dives; accepted changes strengthen future runs."
        />
      </div>

      {/* Philosophy */}
      <div className="mt-10 border border-slate-200 rounded-2xl p-6 bg-slate-50">
        <h3 className="text-base font-semibold leading-none tracking-tight text-slate-800">
          Core Philosophy
        </h3>
        <p className="mt-3 text-sm text-slate-700">
          We treat research as a pipeline, not a prompt.{" "}
          <b>Citation-first, strategy-aware orchestration</b> makes retrieval reliable,
          reasoning transparent, and claims verifiable—so domain experts can spend more
          time thinking and less time wrangling sources.
        </p>
      </div>
    </section>
  );
}

/**
 * @typedef {Object} CardProps
 * @property {import('react').ReactNode} icon
 * @property {string} title
 * @property {string} text
 */

/** @param {CardProps} props */
function Card({ icon, title, text }) {
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

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
