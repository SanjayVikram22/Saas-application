import Benifit from "./components/Benifit";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Plan from "./components/Plan";
import Support from "./components/Support";

export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <Support/>
      <Feature/>
      <Benifit/>
      <Plan/>
      <Footer/>
    </>
  );
}
