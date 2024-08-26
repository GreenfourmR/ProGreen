import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Expereince } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
export default function Home() {
  return (
    <div className="flex w-auto h-auto">
      <div className="flex flex-col items-center w-full h-auto">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Expereince />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
