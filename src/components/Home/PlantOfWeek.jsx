import { Link } from "react-router-dom";
import { Award } from "lucide-react";

const PlantOfWeek = () => {
  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 font-semibold uppercase tracking-wider text-sm">
                Plant of the Week
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Monstera Deliciosa</h2>
            <p className="text-green-200 leading-relaxed mb-6 max-w-lg">
              This week we're celebrating the iconic Monstera — the ultimate statement plant. With its dramatic split leaves and easy-going nature, it transforms any room into a tropical paradise. Perfect for bright corners and Instagram feeds alike.
            </p>
            <div className="flex gap-4 flex-wrap mb-8">
              <div className="bg-green-800 rounded-xl px-4 py-3 text-center">
                <p className="text-green-300 text-xs">Care Level</p>
                <p className="font-semibold">Moderate</p>
              </div>
              <div className="bg-green-800 rounded-xl px-4 py-3 text-center">
                <p className="text-green-300 text-xs">Price</p>
                <p className="font-semibold">$35</p>
              </div>
              <div className="bg-green-800 rounded-xl px-4 py-3 text-center">
                <p className="text-green-300 text-xs">Rating</p>
                <p className="font-semibold">⭐ 4.9</p>
              </div>
            </div>
            <Link
              to="/plants/2"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-green-900 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              View Details
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=80"
              alt="Monstera Deliciosa"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfWeek;
