import Hero from "./components/Hero";
import Link from "./components/Link";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="mx-auto px-10 font-sans">
      <Navbar />
      <Hero />
      <Link />
      <Stats />
    </div>
  );
}
