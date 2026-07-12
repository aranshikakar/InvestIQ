import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Navbar />

      <HeroSection />

      <SearchBar />

      <Footer />

    </main>
  );
}