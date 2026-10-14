import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, products, priceToNumber } from '../data'

export default function Category() {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)
  const [subcategory, setSubcategory] = useState('Wszystkie')
  const [sort, setSort] = useState('domyslnie')

  useEffect(() => {
    setSubcategory('Wszystkie')
    setSort('domyslnie')
  }, [slug])

  const baseProducts = useMemo(
    () => products.filter((p) => p.tag === category?.name),
    [category]
  )

  const categoryProducts = useMemo(() => {
    let list = baseProducts
    if (subcategory !== 'Wszystkie') {
      list = list.filter((p) => p.subcategory === subcategory)
    }
    if (sort === 'cena-rosnaco') {
      list = [...list].sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price))
    } else if (sort === 'cena-malejaco') {
      list = [...list].sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price))
    }
    return list
  }, [baseProducts, subcategory, sort])

  if (!category) {
    return (
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-3xl text-wood-dark">Nie znaleziono kategorii</h1>
        <Link to="/" className="text-wood hover:text-wood-dark">Wróć na stronę główną</Link>
      </section>
    )
  }

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <span className="mb-3 block text-xs font-medium tracking-[0.18em] text-wood uppercase">
        Kategoria
      </span>
      <h1 className="mb-10 text-3xl text-wood-dark sm:text-4xl">{category.name}</h1>

      <div className="mb-10 flex flex-col gap-4">
        {category.subcategories && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="mr-1 text-sm text-muted">Podkategoria:</span>
            {['Wszystkie', ...category.subcategories].map((s) => (
              <button
                key={s}
                onClick={() => setSubcategory(s)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  subcategory === s
                    ? 'border-wood bg-wood text-white'
                    : 'border-ink/15 text-ink hover:border-wood hover:text-wood'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-end gap-3">
          <span className="mr-1 text-sm text-muted">Sortuj:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-ink/15 bg-white px-4 py-1.5 text-sm text-ink outline-none transition hover:border-wood"
          >
            <option value="domyslnie">Domyślnie</option>
            <option value="cena-rosnaco">Cena: rosnąco</option>
            <option value="cena-malejaco">Cena: malejąco</option>
          </select>
        </div>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="rounded-xl bg-white p-12 text-center shadow-[0_10px_30px_-18px_rgba(36,29,25,0.25)]">
          <p className="mb-5 text-lg text-muted">
            Wkrótce nowe realizacje w tej kategorii &mdash; zapytaj, a przygotujemy wycenę na wymiar.
          </p>
          <Link
            to="/kontakt"
            className="inline-block rounded-full border border-wood bg-wood px-8 py-3.5 text-sm font-medium tracking-wide text-white transition hover:bg-wood-dark"
          >
            Zapytaj o wycenę
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-7 text-left sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((p) => (
            <ProductCard product={p} key={p.slug} />
          ))}
        </div>
      )}
    </section>
  )
}
