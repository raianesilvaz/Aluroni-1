import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

export default function Router() {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
          <Route path="cardapio/:id/*" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}