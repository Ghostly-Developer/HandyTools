import { useEffect, useRef, useState } from 'react'
import {
  ChevronDown,
  AlignLeft,
  Braces,
  Command,
  FileText,
  GitCompareArrows,
  Image,
  Moon,
  Search,
  Settings,
  Sun,
  Sunset,
  Ticket,
  WandSparkles,
  Wrench,
} from 'lucide-react'
import About from './About.tsx'
import BuyMeCoffee from './BuyMeCoffee.tsx'

const themes = ['theme-light', 'theme-blue', 'theme-black'] as const
const themeLabels = {
  'theme-light': 'Light theme',
  'theme-blue': 'Blue theme',
  'theme-black': 'Dark theme',
}
const categories = [
  { label: 'Text', icon: AlignLeft, items: ['Text tool 1', 'Text tool 2', 'Text tool 3'] },
  { label: 'Coding', icon: Braces, items: ['Coding tool 1', 'Coding tool 2', 'Coding tool 3'] },
  { label: 'PDF', icon: FileText, items: ['PDF tool 1', 'PDF tool 2', 'PDF tool 3'] },
  { label: 'Image', icon: Image, items: ['Image tool 1', 'Image tool 2', 'Image tool 3'] },
]
export default function Header() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCoffeeOpen, setIsCoffeeOpen] = useState(false)
  const navigationRef = useRef<HTMLElement>(null)
  const [theme, setTheme] = useState<typeof themes[number]>(
    (document.documentElement.className as typeof themes[number]) || 'theme-light',
  )

  const cycleTheme = () => {
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]
    setTheme(nextTheme)
    document.documentElement.className = nextTheme
  }

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) setOpenCategory(null)
    }

    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#" aria-label="Handy Tools home">
          <span className="brand-mark" aria-hidden="true"><Wrench size={19} strokeWidth={1.8} /></span>
          <span>Handy Tools</span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation" ref={navigationRef}>
          {categories.map((category) => (
            <div className="nav-menu" key={category.label} onMouseEnter={() => setOpenCategory(category.label)} onMouseLeave={() => setOpenCategory(null)}>
              <button className="nav-link" type="button" onClick={() => setOpenCategory(openCategory === category.label ? null : category.label)} aria-expanded={openCategory === category.label}>
                <category.icon size={15} aria-hidden="true" />{category.label}<ChevronDown size={14} aria-hidden="true" />
              </button>
              {openCategory === category.label && <div className="dropdown-menu">
                {category.items.map((item) => <a href="#placeholder" key={item} onClick={() => setOpenCategory(null)}>{item}</a>)}
              </div>
              }
            </div>
          ))}
          <div className="nav-menu" onMouseEnter={() => setOpenCategory('Miscellaneous')} onMouseLeave={() => setOpenCategory(null)}>
            <button className="nav-link" type="button" onClick={() => setOpenCategory(openCategory === 'Miscellaneous' ? null : 'Miscellaneous')} aria-expanded={openCategory === 'Miscellaneous'}>
              <WandSparkles size={15} aria-hidden="true" />Miscellaneous<ChevronDown size={14} aria-hidden="true" />
            </button>
            {openCategory === 'Miscellaneous' && <div className="dropdown-menu">
              <a href="#transform-json" onClick={() => setOpenCategory(null)}>JSON Transform</a>
              <a href="#transform-text" onClick={() => setOpenCategory(null)}>Text Transform</a>
            </div>}
          </div>
          <a className="nav-link nav-direct-link" href="#compare" onClick={() => setOpenCategory(null)}>
            <GitCompareArrows size={15} aria-hidden="true" />Compare
          </a>
        </nav>

        <div className="header-actions">
          <button className="search-button" type="button" aria-label="Search tools">
            <Search size={15} aria-hidden="true" />
            <span>Search tools...</span>
            <kbd><Command size={11} aria-hidden="true" />K</kbd>
          </button>
          <button className="coffee-button" type="button" onClick={() => setIsCoffeeOpen(true)} aria-haspopup="dialog" aria-expanded={isCoffeeOpen}><Ticket size={14} aria-hidden="true" /> Buy coffee</button>
          <button className="header-button" type="button" onClick={() => setIsAboutOpen(true)}>About</button>
          <button className="icon-button" type="button" aria-label="Settings"><Settings size={17} /></button>
          <button className="icon-button theme-toggle" type="button" onClick={cycleTheme} aria-label={`Switch to ${themeLabels[themes[(themes.indexOf(theme) + 1) % themes.length]]}`} title={themeLabels[theme]}>
            {theme === 'theme-light' && <Sun size={17} />}
            {theme === 'theme-blue' && <Sunset size={17} />}
            {theme === 'theme-black' && <Moon size={17} />}
          </button>
        </div>
      </div>
      <About isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <BuyMeCoffee isOpen={isCoffeeOpen} onClose={() => setIsCoffeeOpen(false)} />
    </header>
  )
}