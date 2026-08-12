import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import TrustedLogo from "./TrustedLogo";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import AppStore from "./AppStore"
import FAQ from "./FAQ";

export default function Home() {
  return (
    <>
      <Hero />

      <TrustedLogo />

      <HowItWorks />

      <Benefits />

      <Testimonials />

      <AppStore />

      <FAQ />
    </>
  );
}