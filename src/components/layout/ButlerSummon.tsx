import { useState, useEffect, useRef } from 'react'
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

const YES_WORDS = ['yes', 'yeah', 'yep', 'yup', 'sure', 'ok', 'okay', 'please', 'yes please', 'go ahead', 'y']
const NO_WORDS = ['no', 'nope', 'nah', 'no thanks', 'no thank you', 'not now', 'n']

const suggestions = [
  'Show me his projects',
  'What is his experience?',
  'What are his skills?',
  'How do I contact him?',
  'Take me through his life story',
]

const fieldStyle: React.CSSProperties = {
  backgroundColor: '#1a1610',
  border: '1px solid #2a2318',
  borderRadius: 6,
  padding: '8px 12px',
  color: '#F1F5F9',
  fontSize: 13,
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
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
  const [pendingOffer, setPendingOffer] = useState<{ to: string; filter?: string } | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [contactEmail, setContactEmail] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactSubject, setContactSubject] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const endRef = useRef<HTMLDivElement>(null)

  const label = summonLabel[location.pathname] ?? 'Ask the butler'

  useEffect(() => {
    if (expression === 'happy') {
      const timer = setTimeout(() => setExpression('neutral'), 3000)
      return () => clearTimeout(timer)
    }
  }, [expression])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, thinking])

  const openPanel = () => {
    setOpen(true)
    setExpression('smile')
    if (messages.length === 0) {
      const intro = pageIntros[location.pathname] ?? 'Good day, sir.'
      setMessages([{ role: 'assistant', content: intro + ' Where shall we begin?' }])
    }
  }

  const acceptOffer = (userText: string) => {
    if (!pendingOffer) return
    const target = pendingOffer.to
    setPendingOffer(null)
    setInput('')
    setMessages(m => [...m,
      { role: 'user', content: userText },
      { role: 'assistant', content: 'Very good, sir.' },
    ])
    setExpression('happy')
    navigate(target)
  }

  const declineOffer = (userText: string) => {
    setPendingOffer(null)
    setInput('')
    setMessages(m => [...m,
      { role: 'user', content: userText },
      { role: 'assistant', content: 'As you wish, sir. Is there anything else I may do?' },
    ])
  }

  const send = async (override?: string) => {
    const text = (override ?? input).trim()
    if (!text || thinking) return
    if (pendingOffer) {
      const ans = text.toLowerCase().replace(/[^a-z ]/g, '').trim()
      if (YES_WORDS.includes(ans)) { acceptOffer(text); return }
      if (NO_WORDS.includes(ans)) { declineOffer(text); return }
    }
    const userMsg: ButlerMessage = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setPendingOffer(null)
    setThinking(true)
    setExpression('thinking')
    setSessionDepth(d => d + 1)

    try {
      const result = await askButler(newMessages, {
        page: location.pathname,
        sessionDepth,
      })
      setMessages([...newMessages, { role: 'assistant', content: result.reply }])
      setPendingOffer(result.offer ?? null)
      setExpression('happy')
      if (result.action === 'navigate' && result.to) navigate(result.to)
      if (result.action === 'contact' && result.email) {
        setContactCard(result.email)
        setContactEmail(result.email)
        setContactOpen(true)
      }
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

  const submitContact = () => {
    if (!contactEmail || !contactMessage.trim()) return
    const subject = contactSubject.trim() || 'Hello from your portfolio'
    const sig = contactName.trim() ? '\n\n' + contactName.trim() : ''
    const body = contactMessage.trim() + sig
    window.location.href = 'mailto:' + contactEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
    setContactOpen(false)
    setMessages(m => [...m, {
      role: 'assistant',
      content: 'Your mail app should open shortly, sir. Should it not, the address is ' + contactEmail + '.',
    }])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const n = parseInt(e.key, 10)
    if (input === '' && n >= 1 && n <= suggestions.length) {
      e.preventDefault()
      send(suggestions[n - 1])
      return
    }
    if (e.key === 'Enter') {
      const typed = input.trim()
      if (/^[1-9]$/.test(typed) && Number(typed) <= suggestions.length) {
        send(suggestions[Number(typed) - 1])
      } else {
        send()
      }
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
      maxHeight: 560,
      minHeight: contactOpen ? 400 : undefined,
      backgroundColor: '#0F0D0A',
      border: '1px solid #2a2318',
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
    }}>

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
              whiteSpace: 'pre-line',
              textAlign: 'left',
            }}>
              {m.content}
            </span>
          </div>
        ))}

        {pendingOffer && !thinking && (
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => acceptOffer('Yes')}
              style={{
                backgroundColor: '#C9A84C',
                border: 'none',
                borderRadius: 14,
                padding: '5px 18px',
                color: '#0A0908',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Yes
            </button>
            <button
              onClick={() => declineOffer('No')}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #C9A84C55',
                borderRadius: 14,
                padding: '5px 18px',
                color: '#C9A84C',
                fontSize: 12,
                cursor: 'pointer',
              }}
            >
              No
            </button>
          </div>
        )}

        {thinking && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ButlerAvatar expression="thinking" size={28} />
            <span style={{ color: '#C9A84C', fontSize: 13 }}>...</span>
          </div>
        )}

        {contactCard && (
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <a href={`mailto:${contactCard}`} style={{ color: '#C9A84C', border: '1px solid #C9A84C', borderRadius: 6, padding: '6px 16px', fontSize: 13 }}>
              {contactCard}
            </a>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {contactOpen && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          backgroundColor: 'rgba(10,9,8,0.97)',
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          overflowY: 'auto',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#C9A84C', fontSize: 13, letterSpacing: 2 }}>SEND A NOTE</span>
            <button onClick={() => setContactOpen(false)} style={{ background: 'none', border: 'none', color: '#4a3f2f', cursor: 'pointer', fontSize: 16 }}>✕</button>
          </div>
          <input value={contactName} onChange={e => setContactName(e.target.value)} placeholder="Your name" style={fieldStyle} />
          <input value={contactSubject} onChange={e => setContactSubject(e.target.value)} placeholder="Subject" style={fieldStyle} />
          <textarea value={contactMessage} onChange={e => setContactMessage(e.target.value)} placeholder="Your message" rows={5} style={{ ...fieldStyle, resize: 'none', fontFamily: 'inherit' }} />
          <button
            onClick={submitContact}
            disabled={!contactMessage.trim()}
            style={{
              backgroundColor: contactMessage.trim() ? '#C9A84C' : '#2a2318',
              border: 'none',
              borderRadius: 6,
              padding: '8px 14px',
              color: contactMessage.trim() ? '#0A0908' : '#4a3f2f',
              fontSize: 13,
              fontWeight: 600,
              cursor: contactMessage.trim() ? 'pointer' : 'default',
            }}
          >
            Open in mail app
          </button>
          <span style={{ color: '#4a3f2f', fontSize: 11, lineHeight: 1.5 }}>
            This opens your mail app with the note filled in. Nothing is sent until you press send there.
          </span>
        </div>
      )}

      <div style={{
        padding: '8px 16px 0',
        borderTop: '1px solid #2a2318',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
      }}>
        {suggestions.map((s, i) => (
          <button
            key={s}
            onClick={() => send(s)}
            disabled={thinking}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #C9A84C55',
              borderRadius: 14,
              padding: '4px 10px',
              color: '#C9A84C',
              fontSize: 11,
              cursor: thinking ? 'default' : 'pointer',
              opacity: thinking ? 0.5 : 1,
            }}
          >
            <span style={{ opacity: 0.6, marginRight: 5 }}>{i + 1}</span>{s}
          </button>
        ))}
      </div>

      <div style={{
        padding: '8px 16px 12px',
        display: 'flex',
        gap: 8,
      }}>
        <input
          autoFocus
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask, or press a number..."
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
          onClick={() => send()}
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
