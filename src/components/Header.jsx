import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../CartContext'
import { CartIcon, SearchIcon, CloseIcon } from '../icons'
import { categories } from '../data'
import logo from '../assets/products/logo.png'

export default function Header({ onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { count } = useCart()
  const navigate = useNavigate()

  const submitSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/szukaj?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-ink/5 bg-bg/90 px-5 py-4 backdrop-blur-md sm:px-8">
      <Link to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Studio Minimal" className="h-9 sm:h-10" />
      </Link>

      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute top-full left-0 right-0 flex-col gap-4 border-b border-ink/5 bg-bg px-6 py-5 sm:static sm:flex sm:flex-row sm:gap-8 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0`}
      >
        {categories.map((c) => (
          <Link
            to={`/kategoria/${c.slug}`}
            key={c.slug}
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-wide text-ink transition hover:text-wood"
          >
            {c.name}
          </Link>
        ))}
        <Link
          to="/kontakt"
          onClick={() => setMenuOpen(false)}
          className="text-sm tracking-wide text-ink transition hover:text-wood"
        >
          Kontakt
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            className={`p-1 text-ink transition-opacity ${searchOpen ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setSearchOpen(true)}
            aria-label="Szukaj"
          >
            <SearchIcon />
          </button>
          {searchOpen && (
            <form
              onSubmit={submitSearch}
              className="absolute top-1/2 right-0 flex w-56 -translate-y-1/2 items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-2 shadow-[0_10px_24px_-8px_rgba(36,29,25,0.25)] sm:w-64"
            >
              <SearchIcon className="shrink-0 text-muted" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Szukaj mebli..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
              <button type="button" onClick={() => setSearchOpen(false)} className="shrink-0 text-ink" aria-label="Zamknij wyszukiwarkę">
                <CloseIcon />
              </button>
            </form>
          )}
        </div>

        <button className="relative p-1 text-ink" onClick={onCartClick} aria-label="Koszyk">
          <CartIcon />
          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-wood text-[10px] text-white">
              {count}
            </span>
          )}
        </button>
        <button
          className="flex flex-col gap-1.5 p-1 sm:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className="h-px w-5.5 bg-ink" />
          <span className="h-px w-5.5 bg-ink" />
          <span className="h-px w-5.5 bg-ink" />
        </button>
      </div>
    </header>
  )
}
