import { useState } from "react";
import PlantCard from "../components/Home/PlantCard";
import usePlants from "../hooks/usePlants";
import { Search } from "lucide-react";

const Plants = () => {
  const { plants, loading } = usePlants();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(plants.map((p) => p.category))];

  const filtered = plants.filter((p) => {
    const matchSearch = p.plantName.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === "All" || p.category === filter;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Our Plant Collection</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Browse our full range of indoor plants — from air purifiers to tropical statement pieces.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-green-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No plants found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((plant) => (
              <PlantCard key={plant.plantId} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plants;
