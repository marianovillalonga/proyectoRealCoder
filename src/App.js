import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainLayout } from "./components/layout/MainLayout";
import { ContactoScreen } from "./components/layout/ContactoScreen";
import { HomeScreen } from "./components/layout/HomeScreen";
import { CursosScreen } from "./components/layout/CursosScreen";
import { TestimonialesScreen } from "./components/layout/TestimonialesCreen";
import { Nosotros } from "./components/Home/Nosotros";



function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Cursos" element={<CursosScreen />} />
          <Route path="/Form" element={<ContactoScreen />} />
          <Route path="/Testimoniales" element={<TestimonialesScreen />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
