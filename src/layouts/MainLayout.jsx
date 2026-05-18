import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function MainLayout() {
  return (
    <div>
      <NavBar />

      {/* conteúdo que muda */}
      <Outlet />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
