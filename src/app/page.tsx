import Hero from "./components/landing/Hero";
import CoreProducts from "./components/landing/CoreProducts";
import SectorsServed from "./components/landing/SectorsServed";
import HeroProducts from "./components/landing/HeroProducts";
import CallToAction from "./components/landing/CallToAction";
import HeroServices from "./components/landing/HeroServices";
import ValueProposition from "./components/landing/ValueProposition";
import Validity from "./components/landing/Validity";
import Partners from "./components/landing/Partners";
import Statistics from "./components/landing/Statistics";
import ContactCTA from "./components/landing/ContactCTA";



export default function Home() {
  return (
    <main>
      <Hero />
      <CoreProducts />
      <SectorsServed />
      <HeroProducts />
      <CallToAction />
      <HeroServices />
      <ValueProposition />
      <Validity />
      <Partners />
      <Statistics />
      <ContactCTA />
    </main>

  );
}
