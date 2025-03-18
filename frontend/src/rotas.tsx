import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Campeonato from "./pages/campeonato";
import Navbar from "./components/navbar";
import CriacaoCampeonato from "./pages/criacaoCampeonato";
import CadastroUsuario from "./pages/cadastros/cadastro";
//import Estatisticas from "./pages/estatisticas";
import LoginUsuario from "./pages/cadastros/login";
import Perfis from "./pages/perfis";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUsuario />} />
        <Route path="/cadastro" element={<><CadastroUsuario /></>} />
        <Route path="/home" element={<><Navbar /></>} />
        <Route path="/criacao-campeonato" element={<><Navbar /><CriacaoCampeonato /></>} />
        <Route path="/campeonato" element={<><Navbar /><Campeonato /></>} />
        <Route path="/cadastro" element={<><Navbar /><CadastroUsuario /></>} />
        <Route path="/estatisticas" element={<><Navbar/></>} />
        <Route path="/perfis" element={<><Navbar /><Perfis/></>} />
      </Routes>
    </Router>
  );
}
