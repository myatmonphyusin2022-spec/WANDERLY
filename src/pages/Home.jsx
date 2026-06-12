import Hero from "../components/Hero";
import DestinationCards from "../components/DestinationCards";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import RecentlyViewed from "../components/RecentlyViewed";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <RecentlyViewed />
        <DestinationCards />
        <Features />
        <Testimonials />
      </main>
    </PageTransition>
  );
}

export default Home;
