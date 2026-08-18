import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { askButler } from '../../lib/butler'
import type { ButlerMessage } from '../../lib/butler'

type Expression = 'neutral' | 'smile' | 'thinking' | 'happy'

const summonLabel: Record<string, string> = {
  '/': 'Ask the butler',
  '/estate': 'Shall I show you through?',
  '/gallery': 'Ask about his work',
  '/report': 'Questions, sir?',
}

const pageIntros: Record<string, string> = {
  '/estate': 'The house, in order...',
  '/gallery': 'His works, framed for your consideration.',
  '/report': 'The summary, as requested.',
}

function ButlerAvatar({ expression, size = 56 }: { expression: Expression; size?: number }) {
  return (
    <img
      src={`/butler/${expression}.png`}
      alt="Sharvis"
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}

export default function ButlerSummon() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ButlerMessage[]>([])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const [expression, setExpression] = useState<Expression>('neutral')
  const [sessionDepth, setSessionDepth] = useState(0)
  const [contactCard, setContactCard] = useState<string | null>(null)
  const [easterEgg, setEasterEgg] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const label = summonLabel[location.pathname] ?? 'Ask the butler'

  useEffect(() => {
    if (expression === 'happy') {
      const timer = setTimeout(() => setExpression('neutral'), 3000)
      return () => clearTimeout(timer)
    }
  }, [expression])

  const openPanel = () => {
    setOpen(true)
    setExpression('smile')
    const intro = pageIntros[location.pathname]
    if (intro && messages.length === 0) {
      setMessages([{ role: 'assistant', content: intro }])
    }
  }

  const send = async () => {
    if (!input.trim() || thinking) return
    const userMsg: ButlerMessage = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setThinking(true)
    setExpression('thinking')
    setSessionDepth(d => d + 1)

    try {
      const result = await askButler(newMessages, {
        page: location.pathname,
        sessionDepth,
      })
      setMessages([...newMessages, { role: 'assistant', content: result.reply }])
      setExpression('happy')
      if (result.action === 'navigate' && result.to) navigate(result.to)
      if (result.action === 'contact' && result.email) setContactCard(result.email)
    } catch {
      setMessages([...newMessages, {
        role: 'assistant',
        content: "I'm afraid Sharvis is indisposed at the moment, sir.",
      }])
      setExpression('neutral')
    } finally {
      setThinking(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => {
          if (easterEgg) {
            setEasterEgg(false)
            openPanel()
          } else {
            setEasterEgg(true)
            setTimeout(() => setEasterEgg(false), 1500)
          }
        }}
        title={label}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 200,
          backgroundColor: '#0A0908',
          border: `2px solid ${easterEgg ? '#C9A84C' : '#C9A84C55'}`,
          borderRadius: '50%',
          width: 64,
          height: 64,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          overflow: 'hidden',
          boxShadow: easterEgg
            ? '0 0 24px rgba(201,168,76,0.5)'
            : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.2s',
        }}
      >
        <ButlerAvatar
          expression={easterEgg ? 'happy' : expression}
          size={56}
        />
      </button>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 200,
      width: 360,
      maxHeight: 540,
      backgroundColor: '#0F0D0A',
      border: '1px solid #2a2318',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
    }}>

      {/* Header */}
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid #2a2318',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: '#0A0908',
            border: '1px solid #C9A84C33',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ButlerAvatar expression={expression} size={32} />
          </div>
          <span style={{ color: '#C9A84C', fontSize: 13, letterSpacing: 2 }}>
            SHARVIS
          </span>
        </div>
        <button
          onClick={() => { setOpen(false); setExpression('neutral') }}
          style={{ background: 'none', border: 'none', color: '#4a3f2f', cursor: 'pointer', fontSize: 16 }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === 'user' ? 'right' : 'left' }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: m.role === 'user' ? '#1a1610' : '#150f08',
              border: `1px solid ${m.role === 'user' ? '#2a2318' : '#C9A84C33'}`,
              borderRadius: 8,
              padding: '8px 12px',
              color: m.role === 'user' ? '#94A3B8' : '#d4b87a',
              fontSize: 13,
              maxWidth: '85%',
              lineHeight: 1.6,
            }}>
              {m.content}
            </span>
          </div>
        ))}

        {thinking && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ButlerAvatar expression="thinking" size={28} />
            <span style={{ color: '#C9A84C', fontSize: 13 }}>...</span>
          </div>
        )}

        {contactCard && (
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <a
              href={`mailto:${contactCard}`}
              style={{
                color: '#C9A84C',
                border: '1px solid #C9A84C',
                borderRadius: 6,
                padding: '6px 16px',
                fontSize: 13,
              }}
            >
              {contactCard}
            </a>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid #2a2318',
        display: 'flex',
        gap: 8,
      }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Ask Sharvis..."
          style={{
            flex: 1,
            backgroundColor: '#1a1610',
            border: '1px solid #2a2318',
            borderRadius: 6,
            padding: '8px 12px',
            color: '#F1F5F9',
            fontSize: 13,
            outline: 'none',
          }}
        />
        <button
          onClick={send}
          disabled={thinking}
          style={{
            backgroundColor: thinking ? '#2a2318' : '#C9A84C',
            border: 'none',
            borderRadius: 6,
            padding: '8px 14px',
            color: thinking ? '#4a3f2f' : '#0A0908',
            fontSize: 13,
            fontWeight: 600,
            cursor: thinking ? 'default' : 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}