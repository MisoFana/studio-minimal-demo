import { useState } from 'react'
import { useCart } from '../CartContext'
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, CheckIcon } from '../icons'

export default function CartDrawer({ open, onClose }) {
  const { items, remove, changeQty, total } = useCart()
  const [checkoutDemo, setCheckoutDemo] = useState(false)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 flex w-[92vw] max-w-sm flex-col bg-white p-6 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl">Koszyk</h3>
          <button onClick={onClose} aria-label="Zamknij" className="text-ink">
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-sm text-muted">Koszyk jest pusty.</p>
        ) : (
          <>
            <ul className="flex-1 list-none divide-y divide-ink/10 overflow-y-auto p-0">
              {items.map((i) => (
                <li key={i.name} className="flex items-center gap-3 py-3.5">
                  <img src={i.img} alt={i.name} className="h-14 w-14 rounded-md object-cover" />
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="text-sm">{i.name}</span>
                    <span className="text-xs text-wood">{i.price}</span>
                    <div className="mt-0.5 flex items-center gap-2.5">
                      <button
                        onClick={() => changeQty(i.name, -1)}
                        className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-ink/20"
                      >
                        <MinusIcon />
                      </button>
                      <span className="text-sm">{i.qty}</span>
                      <button
                        onClick={() => changeQty(i.name, 1)}
                        className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-ink/20"
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                  <button className="text-muted hover:text-wood" onClick={() => remove(i.name)} aria-label="Usuń">
                    <TrashIcon />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-baseline justify-between pt-5 text-base">
              <span>Razem</span>
              <strong className="font-serif text-2xl text-wood-dark">
                {total.toLocaleString('pl-PL')} zł
              </strong>
            </div>
            <button
              className="mt-5 block w-full rounded-full border border-wood bg-wood px-8 py-3.5 text-center text-sm font-medium tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-wood-dark hover:border-wood-dark"
              onClick={() => setCheckoutDemo(true)}
            >
              Przejdź do płatności
            </button>
            {checkoutDemo && (
              <div className="mt-3 flex items-start gap-2 rounded-lg bg-bg-alt p-3 text-xs leading-relaxed text-muted">
                <CheckIcon className="mt-0.5 shrink-0 text-wood" />
                <span>
                  To wersja demo strony &mdash; płatność online będzie dostępna w finalnej wersji.
                  W razie pytań napisz na{' '}
                  <a href="mailto:kontakt.studiominimal@gmail.com" className="text-wood hover:text-wood-dark">
                    kontakt.studiominimal@gmail.com
                  </a>
                  .
                </span>
              </div>
            )}
          </>
        )}
      </aside>
    </>
  )
}
