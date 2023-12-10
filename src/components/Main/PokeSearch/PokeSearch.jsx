import React, { useState, useContext, useEffect } from "react";
import { Blocks } from 'react-loader-spinner';
import { PokeContext } from "../../../context/PokeContext";
import List from './List';
import Search from './Search';

const PokeSearch = () => {

  const { pokeList } = useContext(PokeContext);
  const [ list, setList ] = useState('');
  const [ search, setSearch ] = useState('');

  const updateSearch = (pokemon) => {
    setSearch(pokemon);
  };

  useEffect(() => {
    if (pokeList) {
      if (search.length === 0) {
        setList([]);
      } else {
        const regex = new RegExp('^(' + search + ').*$', 'gi');
        const results = pokeList.filter(p => regex.test(p.name) || p.id == Number(search));
        setList(results);
      };
    };
  }, [search]);

  return (
    <section id="pokeSearch">
      <Search updateSearch={updateSearch}/>
      {pokeList
        ? list ? <List list={list}/> : ''
        : <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        />
      }
    </section>
  );
};

export default PokeSearch;
