import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MenuShowcase from "./components/MenuShowcase";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.08),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(244,63,94,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/debut-light.png')] opacity-[0.08]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <MenuShowcase />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
