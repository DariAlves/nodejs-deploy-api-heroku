const series = [
  {
    id: Math.floor(Math.random() * 100),
    titulo: 'O Mandaloriano',
    ano: 2019,
    temporadas: 2,
    estaFinalizada: false,
  },
];

// Função para adicionar novas séries
const adicionarSeries = (series, novaSerie) => {
  series.push(novaSerie);
};

const rickEMorty = {
  id: Math.floor(Math.random() * 100),
  titulo: 'Rick e Morty',
  ano: 2013,
  temporadas: 5,
  estaFinalizada: false,
};

adicionarSeries(series, rickEMorty);

// console.table(series);

// Função para alterar a quantidade de temporadas

const alterarDadosSeries = (arraySeries, titulo, novoValor, estaFinalizada) => {
  const findSerie = arraySeries.find(serie => serie.titulo === titulo);

  findSerie.temporadas = novoValor;
  findSerie.estaFinalizada = estaFinalizada;

  return findSerie;
};

alterarDadosSeries(series, 'Rick e Morty', 6, true);

console.table(series);
