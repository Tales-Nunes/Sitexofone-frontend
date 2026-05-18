import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import RouteTransitionOverlay from "./components/RouteTransitionOverlay";

// páginas
import Home from "./pages/Home";
import Casamento from "./pages/Casamento";
import Corporativo from "./pages/Corporativo";
import EventosSociais from "./pages/EventosSociais";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <RouteTransitionOverlay pathname={location.pathname} />

      <AnimatePresence mode="sync" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/eventos/casamento" element={<Casamento />} />
            <Route path="/eventos/corporativo" element={<Corporativo />} />
            <Route path="/eventos/sociais" element={<EventosSociais />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
