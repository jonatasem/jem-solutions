import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Orcamento from "./pages/Orcamento";
import Services from "./pages/Services";
import './styles/App.css';

export default function App(){
  return (
    <>
      <section className="container-app">
        <Header />
        <Home />
        <Services />
        <Orcamento />
        <Footer />
        <BackToTop />
      </section>
    </>
  )
}
