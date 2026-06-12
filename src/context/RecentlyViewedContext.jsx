import { createContext, useContext, useState } from 'react'

const RecentlyViewedContext = createContext()

export function RecentlyViewedProvider({ children }) {
  const [recentlyViewed, setRecentlyViewed] = useState([])

  const addToRecentlyViewed = (destination) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((d) => d.id !== destination.id)
      return [destination, ...filtered].slice(0, 4)
    })
  }

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  )
}

export function useRecentlyViewed() {
  return useContext(RecentlyViewedContext)
}