"use client";

import { useState } from "react";
import Loading from "./loading";
import Hero from "./hero/page";
import Branding from "./pages/branding/page";
import Projets from "./projets/page";
import Services from "./pages/branding/services/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && <Hero />}
      <Branding />
      <Projets />
      <Services />
    </>
  );
}
