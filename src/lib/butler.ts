export type ButlerMessage = {
  role: 'user' | 'assistant'
  content: string
}

export type ButlerContext = {
  page: string
  sessionDepth: number
}

export type ButlerResponse = {
  reply: string
  action?: 'navigate' | 'contact'
  to?: string
  filter?: string
  email?: string
  offer?: { to: string; filter?: string }
}

export async function askButler(
  messages: ButlerMessage[],
  context: ButlerContext
): Promise<ButlerResponse> {
  const res = await fetch('/api/butler', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, context }),
  })

  if (!res.ok) throw new Error('Butler unavailable')

  return res.json()
}