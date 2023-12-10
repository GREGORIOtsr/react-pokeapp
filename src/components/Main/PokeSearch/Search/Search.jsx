import React from "react";
import TextField from '@mui/material/TextField';

const Search = ({ updateSearch }) => {

  const handleChange = (e) => {
    updateSearch(e.target.value);
  };

  return (
    <article id="searchContainer">
      <TextField id="search-bar" label="Search by name or Pokédex number" variant="outlined" onChange={handleChange}/>
    </article>
  );
};

export default Search;
