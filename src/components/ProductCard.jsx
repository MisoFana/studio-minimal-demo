import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'
import { PlusIcon, CheckIcon } from '../icons'

export default function ProductCard({ product }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1000)
  }

  return (
    <div className="group overflow-hidden rounded-xl bg-white text-left shadow-[0_10px_30px_-14px_rgba(36,29,25,0.18)] transition hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-16px_rgba(36,29,25,0.28)]">
      <Link to={`/produkt/${product.slug}`} className="relative block aspect-4/3 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-108"
        />
        <button
          className={`absolute inset-x-0 bottom-0 translate-y-full py-3 text-sm tracking-wide text-white transition duration-300 group-hover:translate-y-0 ${
            added ? 'bg-wood' : 'bg-ink/80'
          }`}
          onClick={(e) => {
            e.preventDefault()
            handleAdd()
          }}
        >
          {added ? 'Dodano ✓' : 'Dodaj do koszyka'}
        </button>
      </Link>
      <div className="p-5 sm:p-6">
        <span className="text-[11px] tracking-widest text-gold uppercase">{product.tag}</span>
        <Link to={`/produkt/${product.slug}`}>
          <h3 className="mt-1.5 mb-2 text-xl transition hover:text-wood sm:text-2xl">{product.name}</h3>
        </Link>
        <p className="mb-4 min-h-11 text-sm leading-relaxed text-muted">{product.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg text-wood-dark">{product.price}</span>
          <button
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
              added
                ? 'scale-110 border-wood bg-wood text-white'
                : 'scale-100 border-wood text-wood hover:bg-wood hover:text-white'
            }`}
            onClick={handleAdd}
            aria-label="Dodaj do koszyka"
          >
            {added ? <CheckIcon /> : <PlusIcon />}
          </button>
        </div>
      </div>
    </div>
  )
}
