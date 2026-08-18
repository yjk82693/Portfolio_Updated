import Anthropic from '@anthropic-ai/sdk'
import { butlerFacts } from '../data/butlerFacts'
import { elevatorPitch } from '../data/elevatorPitch'
import { projects } from '../data/projects'
import { phases } from '../data/phases'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const destinations = [
  { id: 'home', path: '/' },
  { id: 'estate', path: '/estate' },
  { id: 'gallery', path: '/gallery' },
  { id: 'report', path: '/report' },
  ...projects.map(p => ({ id: p.slug, path: `/gallery/${p.slug}`, title: p.title })),
  ...phases.map(ph => ({ id: ph.id, path: `/estate/${ph.id}`, name: ph.title })),
]

const tools = [
  {
    name: 'navigate_to',
    description: 'Take the visitor to a page. Use when they ask to see or go to something.',
    input_schema: {
      type: 'object' as const,
      properties: {
        destination: {
          type: 'string',
          enum: destinations.map(d => d.id),
        },
        filter: {
          type: 'string',
          enum: ['frontend', 'fullstack', 'backend', 'game', 'tools'],
        },
      },
      required: ['destination'],
    },
  },
  {
    name: 'show_contact',
    description: 'Surface the contact email when the visitor wishes to reach out.',
    input_schema: {
      type: 'object' as const,
      properties: {},
      required: [],
    },
  },
]

function personaTone(depth: number): string {
  if (depth < 3) return 'cool'
  if (depth < 8) return 'dry'
  return 'deadpan'
}

function buildPrompt(context: { page: string; sessionDepth: number }): string {
  const tone = personaTone(context.sessionDepth)
  return `
You are the butler of ${butlerFacts.name}'s portfolio — a deadpan-courteous concierge in the manner of a film-JARVIS: impeccably polite, dryly witty beneath, gentle and fond, never grumpy, never rude to the visitor. Refer to ${butlerFacts.name} in the third person.

REGISTER (${tone}):
cool — polished, spare, minimal wit (fresh arrival)
dry — a touch more personality, dry asides (they've lingered)
deadpan — peak understatement; wryly suggest they simply contact him (long visit)

YOU DO: guide (navigate_to, real destinations only) · explain (ONLY from facts below) · surface contact (show_contact) · give the short version · suggest a next step · offer a one-line welcome on arrival.

MATTERS OF HONOUR (never violate):
- State only what is written below. NEVER invent a skill, project, or detail.
- Asked about something absent: admit it in character ("I'm afraid that's not among his skills, sir"). Do not guess.
- Attend to his work only. Steer wanderers back courteously.

WHAT YOU KNOW:
Bio: ${butlerFacts.bio}
Skills: ${butlerFacts.skills.join(', ')}
Projects: ${JSON.stringify(butlerFacts.projects)}
Experience: ${JSON.stringify(butlerFacts.experience)}
Phases: ${JSON.stringify(butlerFacts.phases)}

THE SHORT VERSION: ${elevatorPitch}

Current page: ${context.page}
  `.trim()
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).end()

  const { messages, context } = req.body
  const system = buildPrompt(context)

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system,
    tools,
    messages,
  })

  const toolUse = response.content.find((c: any) => c.type === 'tool_use') as any
  const textBlock = response.content.find((c: any) => c.type === 'text') as any
  const reply = textBlock?.text ?? ''

  if (toolUse?.name === 'navigate_to') {
    const dest = destinations.find(d => d.id === toolUse.input.destination)
    return res.status(200).json({
      reply,
      action: 'navigate',
      to: dest?.path,
      filter: toolUse.input.filter,
    })
  }

  if (toolUse?.name === 'show_contact') {
    return res.status(200).json({
      reply,
      action: 'contact',
      email: butlerFacts.email,
    })
  }

  return res.status(200).json({ reply })
}