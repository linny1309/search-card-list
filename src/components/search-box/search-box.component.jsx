import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    type='search' 
    classNam="search"
    placeholder={placeholder} 
    //The second callback function is called after because setState is async 
    onChange={handleChange}
  />
)
