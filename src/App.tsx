import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import CaseStudies from './pages/CaseStudies';
import WaterSolutions from './pages/WaterSolutions';
import AutomotiveMicrolearning from './pages/AutomotiveMicrolearning';
import NutritionProgram from './pages/NutritionProgram';
import PanAfricanCapacity from './pages/PanAfricanCapacity';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="case-studies/water-solutions" element={<WaterSolutions />} />
          <Route path="case-studies/automotive-microlearning" element={<AutomotiveMicrolearning />} />
          <Route path="case-studies/nutrition-program" element={<NutritionProgram />} />
          <Route path="case-studies/pan-african-capacity" element={<PanAfricanCapacity />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
