// SortingContext.js
import { createContext, useContext, useState } from 'react';

const SortingContext = createContext();

export function useSorting() {
  return useContext(SortingContext);
}

export function SortingProvider({ children }) {
  const [sortBy, setSortBy] = useState('year'); // Default sorting criteria
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

  return (
    <SortingContext.Provider value={{ sortBy, setSortBy, sortOrder, setSortOrder }}>
      {children}
    </SortingContext.Provider>
  );
}
