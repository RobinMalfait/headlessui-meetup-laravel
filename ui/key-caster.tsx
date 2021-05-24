import { useEffect, useState } from 'react'

enum KeyDisplayMac {
  ArrowUp = '↑',
  ArrowDown = '↓',
  ArrowLeft = '←',
  ArrowRight = '→',
  Home = '↖',
  End = '↘',
  Alt = '⌥',
  CapsLock = '⇪',
  Meta = '⌘',
  Shift = '⇧',
  Control = '⌃',
  Backspace = '⌫',
  Delete = '⌦',
  Enter = '↵',
  // Escape = '⎋',
  Tab = '↹',
  PageUp = '⇞',
  PageDown = '⇟',
  ' ' = '␣',
}

enum KeyDisplayWindows {
  ArrowUp = '↑',
  ArrowDown = '↓',
  ArrowLeft = '←',
  ArrowRight = '→',
  Meta = 'Win',
  Control = 'Ctrl',
  Backspace = '⌫',
  Delete = 'Del',
  Escape = 'Esc',
  PageUp = 'PgUp',
  PageDown = 'PgDn',
  ' ' = '␣',
}

function tap<T>(value: T, cb: (value: T) => void) {
  cb(value)
  return value
}

function useKeyDisplay() {
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return {}
  let isMac = navigator.userAgent.indexOf('Mac OS X') !== -1
  return isMac ? KeyDisplayMac : KeyDisplayWindows
}

export function KeyCaster() {
  let [keys, setKeys] = useState<string[]>([])
  let KeyDisplay = useKeyDisplay()

  useEffect(() => {
    function handler(event: KeyboardEvent) {
      setKeys((current) => [
        event.shiftKey && event.key !== 'Shift'
          ? KeyDisplay[`Shift${event.key}`] ?? event.key
          : KeyDisplay[event.key] ?? event.key,
        ...current,
      ])

      setTimeout(() => setKeys((current) => tap(current.slice(), (clone) => clone.pop())), 3000)
    }

    window.addEventListener('keydown', handler, true)
    return () => window.removeEventListener('keydown', handler, true)
  }, [KeyDisplay])

  if (keys.length <= 0) return null

  return (
    <div className="fixed z-50 left-4 bottom-20 right-8 flex justify-end">
      <div className="px-4 py-2 overflow-hidden text-4xl tracking-wide text-pink-100 bg-black bg-opacity-40 rounded-lg shadow cursor-default pointer-events-none select-none">
        {keys.slice().reverse().join(' ')}
      </div>
    </div>
  )
}
