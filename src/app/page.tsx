
import Hero from "./hero/page";
import Branding from "./data/branding/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Branding />
    </main>
  );
}
