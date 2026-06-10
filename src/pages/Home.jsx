import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import DestinationCards from "../components/DestinationCards";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <DestinationCards />
        <Features />
        <Testimonials />
      </main>
    </PageTransition>
  );
}

export default Home;
