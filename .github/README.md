# GitHub Copilot Configuration

This directory contains GitHub Copilot-specific configuration files.

## Contents

- **`agentconfig.yaml`** - GitHub Copilot agent definitions (references `.ai/` content)
- **`prompts/`** - Slash command definitions for GitHub Copilot Chat

## Agent Definitions and Skills

All agent definitions, skills, and workflows are stored in the **`.ai/`** directory at the repository root. This allows Product Foundry to work with multiple AI tools (GitHub Copilot, Claude, Kiro, etc.) without duplicating content.

To view or modify agents, skills, or workflows, see:
- **`.ai/agents/`** - All agent instruction files
- **`.ai/skills/`** - Reusable workflow skills
- **`.ai/workflows/`** - Stage-specific workflows
- **`.ai/system-prompt.md`** - Core system instructions

## For GitHub Copilot Users

GitHub Copilot will automatically discover and use the configuration in this directory. The `agentconfig.yaml` file references the agent definitions in `.ai/agents/`, so everything works seamlessly.
