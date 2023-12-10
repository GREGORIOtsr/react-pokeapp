import React, { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { PokeContext } from './context/PokeContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const [pokeList, setPokeList] = useState('');

  const pokeFetch = async (url) => {
    const pokemon = await axios.get(url);
    return pokemon.data;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let pokeArr = [];
        const pokeList = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const urls = pokeList.data.results.map(p => p.url);
        for await (let url of urls) {
          let data = await pokeFetch(url);
          pokeArr = [...pokeArr, data];
        };
        console.log(pokeArr);
        setPokeList(pokeArr);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [])

  const data = { pokeList };

  return (
    <>
      <BrowserRouter>
        <PokeContext.Provider value={data}>
          <Header />
          <Main />
        </PokeContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  )
};

export default App
