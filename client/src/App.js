import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './Components/componentes_de_visualización/Landing_page/Landing_page';
import HomePage from './Components/componentes_de_visualización/Home_page/Home_page';
import FormPage from './Components/componentes_de_visualización/Form_page/Form_page';
import DetailPage from './Components/componentes_de_visualización/Detail_page/Detail_page';
import NavBar from './Components/componentes_de_aplicación/Nav_Bar/Nav_Bar';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div>
      {!isLandingPage && <NavBar />}
    

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/countries/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;