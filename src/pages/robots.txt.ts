import type { APIRoute } from 'astro'

const SITE = new URL(import.meta.env.SITE)

// Explicitly welcome AI agents: this portfolio wants to be discoverable,
// quotable and answerable by assistants, search engines and job-matching AI.
const aiAgents = [
  'GPTBot', // OpenAI training
  'OAI-SearchBot', // OpenAI search index
  'ChatGPT-User', // OpenAI live user fetches
  'ClaudeBot', // Anthropic
  'Claude-User', // Anthropic live user fetches
  'Claude-SearchBot', // Anthropic search
  'anthropic-ai',
  'PerplexityBot', // Perplexity index
  'Perplexity-User', // Perplexity live user fetches
  'Google-Extended', // Gemini / Vertex grounding
  'Applebot-Extended', // Apple Intelligence
  'CCBot', // Common Crawl corpus
  'Bytespider', // ByteDance
  'meta-externalagent', // Meta AI
  'Amazonbot', // Amazon (Alexa/Kendra)
  'YouBot', // You.com
  'DuckAssistBot', // DuckDuckGo AI
  'MistralAI-User', // Mistral live fetches
  'cohere-ai',
]

const agentRules = [
  ...aiAgents.map(agent => `User-agent: ${agent}\nAllow: /`),
].join('\n\n')

const robotsTxt = `
# Ayoub Abidi — personal portfolio. AI agents are welcome.
# Content signals (https://github.com/improved-initiative/content-signals):
#   search=yes, ai-input=yes, ai-train=yes

User-agent: *
Allow: /

${agentRules}

Sitemap: ${new URL('sitemap-index.xml', SITE).href}
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
