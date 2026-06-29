import '../index.css';
import { useState, useRef, useEffect } from 'react';

/*
 * ChatWidget — floating portfolio assistant powered by OpenRouter.
 *
 * Model: google/gemma-3-27b-it:free  (update MODEL constant if needed)
 * Key:   VITE_OPENROUTER_API_KEY in .env
 *
 * NOTE: The key is embedded in the client bundle. For a free-tier
 * portfolio key this is an acceptable tradeoff; do not reuse this
 * key for any paid or production service.
 */

const MODEL = 'google/gemma-4-31b-it:free';

const SYSTEM_PROMPT = `You are a knowledgeable assistant on Kevin Jeff Ouano's portfolio. You have full information from his portfolio and CV. Answer any question a recruiter, collaborator, or visitor might ask.

── IDENTITY ──
Name: Kevin Jeff Ouano
Role: Junior Full-Stack Developer
Education: BS Information Technology, University of Cebu - Banilad Campus, 2nd year
Location: Cebu, Philippines
Status: Open to full-time roles and freelance work
Email: ouanokevinj@gmail.com
GitHub: github.com/ouanokevinj
LinkedIn: linkedin.com/in/kevin-jeff-ouano-2b0894276
Asking salary: within 20k-30k php range

I am hungry for growth

── ABOUT ──
Kevin engineers full-stack systems — REST APIs, web platforms, and IoT deployments that run in real environments. He focuses on writing readable, maintainable code and is currently learning system design and distributed architecture. He has 6 completed projects spanning web, backend, and embedded hardware.

── PROJECTS ──

1. Library Borrow System [Freelance — deployed in a school, actively used]
   Students tap their RFID cards → Arduino Uno reads via ESP8266 WiFi module → syncs to Firebase Realtime Database in real time.
   Stack: Arduino Uno, ESP8266, C++, Firebase
   Repo: github.com/ouanokevinj/Library-Borrow-System

2. SyncFlow CRM [Personal]
   Full CRM with lead pipeline, task automation, analytics dashboard, and role-based access control.
   Stack: Vue.js, TypeScript, Laravel, PostgreSQL, Tailwind CSS

3. Enomy Finance [Academic — Software Engineering module]
   Role-based finance management system where different roles see different data and access levels.
   Stack: Java, Spring Boot, MySQL, Bootstrap

4. Task Manager with Cloud Sync [Web App]
   To-do app with real-time Firebase sync across devices. Flask backend kept minimal by design.
   Stack: Python, Flask, Firebase, HTML/CSS/JS

5. Dobu Martial Arts [Academic]
   Class catalog and enrollment site for a local gym. Mobile-first, client-maintainable.
   Stack: HTML, CSS, JavaScript, jQuery
   Live: dobu-martial-arts-three.vercel.app | Repo: github.com/ouanokevinj/Dobu-Martial-Arts

6. Portfolio [Personal]
   The site you're viewing. Built with React + TypeScript + Tailwind + EmailJS + OpenRouter AI.
   Repo: github.com/ouanokevinj/portfolio

── TECH STACK ──
Languages:   Java, C++, Python, PHP, JavaScript, TypeScript
Frameworks:  Spring Boot, Vue.js, React, Flask, Laravel, Tailwind CSS
Databases:   MySQL, PostgreSQL, Firebase
Tools:       Git, Docker, Ubuntu, Agile
Hardware:    Arduino Uno, ESP8266

── STRENGTHS ──
- Full-spectrum: web frontend → backend API → embedded hardware
- Real deployments: Library Borrow System is used in a live school environment
- Backend depth: Spring Boot, Laravel, REST API design, role-based auth
- Clean code advocate: readability and maintainability over cleverness

── CURRENT FOCUS ──
Learning system design patterns and distributed architectures — how software scales under real load.

── CAREER GOAL ──
A junior developer role or meaningful freelance project where he can contribute to real products and grow as an engineer.

── RESPONSE RULES ──
- Use only the information above — do not invent details.
- Keep replies to 2–4 sentences, concise but complete.
- If asked about contacting Kevin: "Reach Kevin via the Contact section, or directly at ouanokevinj@gmail.com."
- If asked something not covered, say so honestly.
- Be professional and friendly.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME: Message = {
  role: 'assistant',
  content: "Hi! I'm Kevin's portfolio assistant. Ask me about his projects, skills, or experience.",
};

/* ── Icons ─────────────────────────────────────────────────── */
const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

/* ── Component ─────────────────────────────────────────────── */
function ChatWidget() {
  const [isOpen, setIsOpen]     = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const endRef                  = useRef<HTMLDivElement>(null);
  const inputRef                = useRef<HTMLTextAreaElement>(null);

  /* Scroll to latest message */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /* Focus input when panel opens */
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text };
    const history           = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setLoading(true);

    /* Strip the welcome message from API context — it was never
       generated by the model and could confuse the conversation. */
    const apiHistory = history.slice(1).slice(-12);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY as string;
      if (!apiKey) throw new Error('No API key');

      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization':  `Bearer ${apiKey}`,
          'HTTP-Referer':   window.location.origin,
          'X-Title':        "Kevin Ouano's Portfolio",
          'Content-Type':   'application/json',
        },
        body: JSON.stringify({
          model:       MODEL,
          messages:    [{ role: 'system', content: SYSTEM_PROMPT }, ...apiHistory],
          max_tokens:  256,
          temperature: 0.7,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMessages(prev => [...prev, {
        role:    'assistant',
        content: data.choices[0].message.content.trim(),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role:    'assistant',
        content: "I'm having trouble connecting right now. Feel free to reach out via the Contact section.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const canSend = input.trim().length > 0 && !loading;

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>

      {/* ── Chat panel ────────────────────────────────────────── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Portfolio assistant"
          style={{
            width: 360,
            height: 480,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-modal)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chat-slide-in 0.22s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.8rem 1rem',
            borderBottom: '1px solid var(--border)',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
              <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Portfolio Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', padding: '3px', borderRadius: '4px', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
              >
                <div style={{
                  maxWidth: '86%',
                  padding: '0.6rem 0.85rem',
                  borderRadius: msg.role === 'user' ? '14px 14px 3px 14px' : '14px 14px 14px 3px',
                  background: msg.role === 'user' ? 'var(--accent-primary)' : 'var(--bg-chip)',
                  color: msg.role === 'user' ? '#fff' : 'var(--text-primary)',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  fontFamily: 'var(--font-body)',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '0.6rem 0.85rem',
                  borderRadius: '14px 14px 14px 3px',
                  background: 'var(--bg-chip)',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                }}>
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      style={{
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: 'var(--text-muted)',
                        animation: `dot-bounce 1.2s ${i * 0.2}s ease-in-out infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '0.7rem 0.85rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'flex-end',
            flexShrink: 0,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about Kevin…"
              rows={1}
              style={{
                flex: 1,
                resize: 'none',
                background: 'var(--bg-base)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.5rem 0.75rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.5,
                outline: 'none',
                maxHeight: 80,
                overflowY: 'auto',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
            <button
              onClick={send}
              disabled={!canSend}
              aria-label="Send message"
              style={{
                width: 36, height: 36,
                borderRadius: '8px',
                background: canSend ? 'var(--accent-primary)' : 'var(--bg-chip)',
                border: 'none',
                cursor: canSend ? 'pointer' : 'not-allowed',
                color: canSend ? '#fff' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { if (canSend) e.currentTarget.style.transform = 'scale(1.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}

      {/* ── Toggle button ──────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Close assistant' : 'Open portfolio assistant'}
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'var(--accent-primary)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 4px 16px rgba(220, 20, 60, 0.35)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(220,20,60,0.45)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(220,20,60,0.35)';
        }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {/* ── Animations ─────────────────────────────────────────── */}
      <style>{`
        @keyframes chat-slide-in {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes dot-bounce {
          0%, 80%, 100% { transform: scale(0.55); opacity: 0.45; }
          40%            { transform: scale(1);    opacity: 1;    }
        }
      `}</style>
    </div>
  );
}

export default ChatWidget;
