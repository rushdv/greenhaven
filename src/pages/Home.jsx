import HeroSlider from "../components/Home/HeroSlider";
import PlantCard from "../components/Home/PlantCard";
import CareTips from "../components/Home/CareTips";
import ExpertSection from "../components/Home/ExpertSection";
import EcoDecor from "../components/Home/EcoDecor";
import PlantOfWeek from "../components/Home/PlantOfWeek";
import usePlants from "../hooks/usePlants";

const Home = () => {
  const { plants, loading } = usePlants();

  // Show top 6 rated plants
  const topRated = [...plants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div>
      <HeroSlider />

      {/* Top Rated Plants */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Top Rated Indoor Plants</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Explore our most loved plants, handpicked for beauty, ease of care, and air-purifying power.
            </p>
          </div>
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRated.map((plant) => (
                <PlantCard key={plant.plantId} plant={plant} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CareTips />
      <ExpertSection />
      <EcoDecor />
      <PlantOfWeek />
    </div>
  );
};

export default Home;
