import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/About';
import OndeEncontrar from './pages/WhereFound';
import Estudos from './pages/Studies';
import Contato from './pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/onde-encontrar" element={<OndeEncontrar />} />
          <Route path="/estudos" element={<Estudos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;