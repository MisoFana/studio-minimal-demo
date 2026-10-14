import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../CartContext'
import { products, categories } from '../data'
import { PlusIcon, CheckIcon } from '../icons'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <section className="px-6 py-24 text-center">
        <h1 className="mb-4 text-3xl text-wood-dark">Nie znaleziono produktu</h1>
        <Link to="/" className="text-wood hover:text-wood-dark">Wróć na stronę główną</Link>
      </section>
    )
  }

  const category = categories.find((c) => c.name === product.tag)
  const handleAdd = () => {
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <section className="px-6 py-14 sm:px-10 lg:px-16">
      <nav className="mb-8 text-sm text-muted">
        <Link to="/" className="hover:text-wood">Strona główna</Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link to={`/kategoria/${category.slug}`} className="hover:text-wood">{category.name}</Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <div className="mb-4 aspect-4/3 overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_-18px_rgba(36,29,25,0.25)]">
            <img
              src={product.gallery[activeImg]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          {product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImg(i)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition ${
                    activeImg === i ? 'border-wood' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="mb-3 block text-xs font-medium tracking-[0.18em] text-wood uppercase">
            {product.tag}{product.subcategory ? ` · ${product.subcategory}` : ''}
          </span>
          <h1 className="mb-4 text-3xl text-wood-dark sm:text-4xl">{product.name}</h1>
          <p className="mb-6 font-serif text-2xl text-wood-dark">{product.price}</p>
          <p className="mb-8 text-base leading-loose text-muted">{product.fullDesc || product.desc}</p>

          {product.material && (
            <p className="mb-8 text-sm text-muted">
              <span className="font-medium text-ink">Materiał:</span> {product.material}
            </p>
          )}

          <button
            onClick={handleAdd}
            className={`inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-sm font-medium tracking-wide transition ${
              added
                ? 'border-wood bg-wood text-white'
                : 'border-wood bg-wood text-white hover:-translate-y-0.5 hover:bg-wood-dark hover:border-wood-dark'
            }`}
          >
            {added ? <CheckIcon /> : <PlusIcon />}
            {added ? 'Dodano do koszyka' : 'Dodaj do koszyka'}
          </button>
        </div>
      </div>
    </section>
  )
}
