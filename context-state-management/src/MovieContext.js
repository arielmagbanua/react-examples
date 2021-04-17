import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'John Wick',
      price: '$10',
      id: 23124
    },
    {
      name: 'Saving Private Ryan',
      price: '$10',
      id: 8823
    },
    {
      name: 'Inception',
      price: '10$',
      id: 11223344
    }
  ]);


  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
