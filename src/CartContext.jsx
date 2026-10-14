import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const add = (product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === product.name)
      if (existing) {
        return prev.map((i) => (i.name === product.name ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const remove = (name) => setItems((prev) => prev.filter((i) => i.name !== name))

  const changeQty = (name, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.name === name ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    )
  }

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * parseFloat(i.price.replace(/[^\d]/g, '')), 0),
    [items]
  )

  return (
    <CartContext.Provider value={{ items, add, remove, changeQty, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
