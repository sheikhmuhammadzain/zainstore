import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  searchQuery: string;
  searchResults: any[];
  isSearching: boolean;
  setSearchQuery: (query: string) => void;
  setSearchResults: (results: any[]) => void;
  setIsSearching: (isSearching: boolean) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchResults,
        isSearching,
        setSearchQuery,
        setSearchResults,
        setIsSearching,
        clearSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
