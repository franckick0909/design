import Hero from "./hero/page";
import Branding from "./pages/branding/page";
import Projets from "./projets/page";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Branding />
      <Projets />
    </main>
  );
}
