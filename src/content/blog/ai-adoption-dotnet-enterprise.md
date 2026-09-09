---
title: Lessons from 18 Months of Production LLM Integration
description: "Between late 2023 and mid-2025 I helped four different organizations integrate large language models into their core business processes. Here are the patterns that actually mattered."
category: AI
accent: text-teal-700
pubDate: 2025-12-12
readTime: 14 min read
cta: Talk about your AI initiative
---

## Start with the workflow, not the model

The teams that struggled the most were the ones that began by asking “which model should we use?” The teams that succeeded started by mapping the actual human workflow they wanted to improve.

One manufacturing client reduced documentation time by 52% not because they picked the “best” model, but because they spent three weeks deeply understanding how engineers currently write maintenance reports.

## Retrieval is 80% of the battle

Most valuable use cases in enterprises are retrieval-augmented. The quality of your retrieval system dominates model choice.

Key lessons on retrieval:

- Chunking strategy matters enormously — naive fixed-size chunks lose critical context
- Hybrid search (vector + keyword) consistently beats pure vector search
- Metadata filtering is more important than people expect
- You will spend more time on data quality and ingestion pipelines than on prompt engineering

## .NET has become an excellent platform for this

Tools like Semantic Kernel and the official Azure OpenAI SDK have matured rapidly. We now have first-class support for function calling, structured outputs, and reliable streaming in C#.

One of the most underrated advantages: strong typing. When you can model your tool schemas as proper C# records with attributes, the whole integration becomes dramatically safer and more maintainable.

## Governance is not optional

Every production deployment now includes:

- Full request/response logging with PII redaction
- Human-in-the-loop approval gates for high-risk actions
- Clear escalation paths when the model produces bad output
- Regular evaluation against a golden dataset

## What didn't work

A few expensive mistakes I saw repeated:

- Building general-purpose chatbots instead of focused tools
- Ignoring latency — users will reject anything slower than 3 seconds for interactive use
- Underestimating the cost of context window bloat
- Skipping proper evaluation until after launch

The most successful implementations treated the LLM as a very smart but unreliable junior colleague that needs supervision and clear guardrails.
