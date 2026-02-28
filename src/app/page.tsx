import Image from "next/image";
import HeroSlider from "@/components/home/HeroSlider";
import HomeSearch from "@/components/home/HomeSearch";
import AboutUs from "@/components/home/AboutUs";
import OurProjects from "@/components/home/OurProjects";
import BoardOfDirectors from "@/components/home/BoardOfDirectors";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import OurBrands from "@/components/home/OurBrands";
import RecentViewedProjects from "@/components/home/RecentViewedProjects";
import FraudAlertModal from "@/components/home/FraudAlertModal";

export default function Home() {
  return (
    <main className="home-page-replica">
      <FraudAlertModal />
      <HeroSlider />
      <HomeSearch />
      <AboutUs />
      <OurProjects />
      <BoardOfDirectors />
      <FeaturedProjects />
      <OurBrands />
      <RecentViewedProjects />
    </main>
  );
}
