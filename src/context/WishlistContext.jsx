import { createContext, useContext, useState } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (destination) => {
    setWishlist((prev) =>
      prev.find((d) => d.id === destination.id)
        ? prev.filter((d) => d.id !== destination.id)
        : [...prev, destination]
    )
  }

  const isWishlisted = (id) => wishlist.some((d) => d.id === id)

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}