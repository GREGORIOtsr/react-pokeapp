import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import heightURL from '../../../../assets/height.png';
import weightURL from '../../../../assets/weight.png';

const Info = ({ pokemon }) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 17
          }
        }
      },
      title: {
        display: false,
        text: 'Base Stats',
      },
    },
  };
  
  const labels = [''];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Hit Points',
        data: labels.map(() => pokemon.hp),
        backgroundColor: '#FF000090',
      },
      {
        label: 'Attack',
        data: labels.map(() => pokemon.atk),
        backgroundColor: '#F0803090',
      },
      {
        label: 'Defense',
        data: labels.map(() => pokemon.def),
        backgroundColor: '#F8D03090',
      },
      {
        label: 'Special Attack',
        data: labels.map(() => pokemon.spatk  ),
        backgroundColor: '#6890F090',
      },
      {
        label: 'Special Defense',
        data: labels.map(() => pokemon.spdef),
        backgroundColor: '#78C85090',
      },
      {
        label: 'Speed',
        data: labels.map(() => pokemon.spd),
        backgroundColor: '#F8588890',
      },
    ],
  };

  console.log(data.datasets);

  return (
    <section className={"pokeDetails-" + pokemon.type1}>
      <h1 id="det-name">{pokemon.name}</h1>
      <img src={pokemon.url} alt={pokemon.name + ' oficcial artwork'} id="det-image"/>
      <article id="det-types">
        <h5 id="types-title">Types</h5>
          <div id="det-typesContainter">
            <p>{pokemon.type1}</p>
            {pokemon.type2 != 'none' ? <p>{pokemon.type2}</p> : ''}
          </div>
      </article>
      <article id="det-measures">
        <div id="heightContainer">
          <img src={heightURL} alt="Height ruler icon" />
          <p id="det-height">{pokemon.height / 10} m</p>
        </div>
        <div id="weightContainer">
          <img src={weightURL} alt="Weight icon" />
          <p id="det-weight">{pokemon.weight / 10} kg</p>
        </div>
      </article>
      <h1 id="det-statsTitle">Base Stats</h1>
      <article id="det-statsContainer">
        <Bar options={options} height={350} data={data} id="stats-chart"/>;
      </article>
    </section>
  );
};

export default Info;
