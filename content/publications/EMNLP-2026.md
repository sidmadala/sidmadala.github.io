---
title: "ReasoningFlow: Semantic Structures of Complex Reasoning Traces"
date: 2026-04-08
authors:
  [
    ["Jinu Lee", "https://jinulee-v.github.io/"],
    ["Shivam Agarwal", "https://shivamag125.github.io/"],
    ["Amruta Parulekar", "https://amparulekar.github.io/"],
    ["Siddarth Madala", "/"],
    ["Dilek Hakkani-Tür", "https://uiuc-conversational-ai-lab.github.io/"],
    ["Julia Hockenmaier", "https://hmr-lab.github.io/"],
  ]
arxiv: "https://arxiv.org/abs/2606.05402v1"
conference: ["EMNLP 2026 Main", "https://2026.emnlp.org/"]

sitemap_exclude: True
---

Large reasoning models (LRMs) exhibit diverse reasoning behaviors, such as deduction, reflection, verification, and backtracking. Explicitly modeling these behaviors as rhetorical structures enables interpretable and systematic assessment of LRMs' reasoning capabilities. To this end, we introduce ReasoningFlow, a framework for parsing reasoning traces into fine-grained directed acyclic graphs (DAGs) that reveal critical reasoning behaviors. We validate ReasoningFlow with four annotators and automatically annotate 1,260 reasoning traces across three tasks and five models. By analyzing ReasoningFlow graphs, we find: (1) LRMs exhibit highly similar reasoning trace structures, despite their non-reasoning counterparts having distinct reasoning patterns. (2) LRMs generate wider and deeper argument structures than base models, and their self-reflection sentiment correlates with human-perceived argument quality.