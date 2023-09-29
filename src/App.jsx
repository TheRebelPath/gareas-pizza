import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {
  Navbar,
  Hero,
  Home,
  Clasicas,
  Carnivoras,
  Vegetarianas,
  Especialidades,
  Snacks,
  Footer,
} from './components';

const App = () => {
  return (
    <BrowserRouter basename={`/gareas-pizza/`}>
      <div id="page-wrap">
        <Navbar />
        <Hero />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clasicas" element={<Clasicas />} />
        <Route path="/carnivoras" element={<Carnivoras />} />
        <Route path="/vegetarianas" element={<Vegetarianas />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/snacks" element={<Snacks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
