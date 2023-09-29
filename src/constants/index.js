import {snacks, atascada, alemana, hawaiana, herbivora} from '../assets';

const navLinks = [
  {
    id: 'clasicas',
    title: 'Clasicas',
    image: hawaiana,
  },
  {
    id: 'carnivoras',
    title: 'Carnivoras',
    image: atascada,
  },
  {
    id: 'vegetarianas',
    title: 'Vegetarianas',
    image: herbivora,
  },
  {
    id: 'especialidades',
    title: 'Especialidades',
    image: alemana,
  },
  {
    id: 'snacks',
    title: 'Snacks',
    image: snacks,
  },
];

const clasicas = [
  {
    title: 'Clasica',
    price: 169,
    ingredientes:
      'Combinacion de quesos mozarella y gouda, pepperoni y un leve toque de especias italianas',
  },
  {
    title: 'Hawaiana',
    price: 189,
    ingredientes:
      'Combinacion de quesos mozarella y gouda, jamon, pina y un leve toque de especias italianas',
  },
  {
    title: 'Margarita',
    price: 199,
    ingredientes:
      'Combinacion de quesos mozarella y gouda, jamon, pina y un leve toque de especias italianas',
  },
];

const carnivoras = [
  {
    title: 'Atascada',
    price: 249,
    ingredientes: 'Combinacion de quesos mozarella y gouda, jamon de pierna, salami, pepperoni, chorizo, tocino ahumado, salchicha y un leve toque de especias italianas'
  }
  {
    title: 'PepeChamps',
    price: 189,
    ingredientes: 'Combinacion de quesos mozarella y gouda, pepperoni, chorizo, champinon y un leve toque de especias italianas'
  },
  {
    title: 'Mexicana'
    price: '219'
    ingredientes: 'Combinacion de quesos mozarella y gouda, chorizo, jalapeno, cebolla, pimientio morron y un leve toque de especias italianas'
  },
]

const vegetarianas = [
  {
    title: 'Vegetariana',
    price: '199',
    ingredientes: 'Combinacion de quesos mozarella y gouda, pimiento morron, champinones, aceitunas y un leve toque de especias italianas',
  },
  {
    title: 'Del Huerto',
    price: '???',
    ingredientes: 'Combinacion de quesos mozarella y gouda, champinones, jitomate cherry, albahaca y un leve toque de especias italianas',
  },
  {
    title: 'Herbivora',
    price: '229',
    ingredientes: 'Combinacion de quesos mozarella y gouda, champinones, jitomate cherry, pimiento morron, aceituna negra, cebolla, albahaca y un leve toque de especias italianas',
  },
]

const especialidades = [
  {
    title: 'Alemana',
    price: 209,
    ingredientes: 'Combinacion de quesos mozarella y gouda, salchicha rostizada al ajo, hongos portobello y un leve toque de especias italianas',
  },
  {
    title: 'Cabra',
    price: 229,
    ingredientes: 'Combinacion de quesos mozarella y gouda, jitomate cherry, queso de cabra, albahaca y un leve toque de especias italianas',
  },
  {
    title: 'Espanola',
    price: 249,
    ingredientes: 'Combinacion de quesos mozarella y gouda, jamon serrano, queso de cabra, chimichurri y un leve toque de especias italianas',
  },
]

export {navLinks, clasicas, carnivoras, vegetarianas, especialidades};
