import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data'

export default function Search() {
  const [params] = useSearchParams()
  const q = (params.get('q') || '').trim().toLowerCase()

  const results = useMemo(() => {
    if (!q) return []
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        p.subcategory?.toLowerCase().includes(q)
    )
  }, [q])

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <span className="mb-3 block text-xs font-medium tracking-[0.18em] text-wood uppercase">
        Wyniki wyszukiwania
      </span>
      <h1 className="mb-10 text-3xl text-wood-dark sm:text-4xl">
        {q ? `„${q}”` : 'Wpisz czego szukasz'}
      </h1>

      {q && results.length === 0 && (
        <div className="rounded-xl bg-white p-12 text-center shadow-[0_10px_30px_-18px_rgba(36,29,25,0.25)]">
          <p className="mb-5 text-lg text-muted">
            Nic nie znaleziono dla „{q}”. Zapytaj &mdash; przygotujemy wycenę na wymiar.
          </p>
          <Link
            to="/kontakt"
            className="inline-block rounded-full border border-wood bg-wood px-8 py-3.5 text-sm font-medium tracking-wide text-white transition hover:bg-wood-dark"
          >
            Zapytaj o wycenę
          </Link>
        </div>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-1 gap-7 text-left sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <ProductCard product={p} key={p.slug} />
          ))}
        </div>
      )}
    </section>
  )
}
