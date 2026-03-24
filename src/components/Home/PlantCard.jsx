import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";

const PlantCard = ({ plant }) => {
  const { plantId, plantName, category, price, rating, image, careLevel } = plant;

  const careLevelColor = {
    Easy: "bg-green-100 text-green-700",
    Moderate: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-gray-100">
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={plantName}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800";
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-1">{plantName}</h3>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="text-sm font-medium text-gray-700">{rating}</span>
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${careLevelColor[careLevel] || "bg-gray-100 text-gray-600"}`}>
            {careLevel}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-green-700 font-bold text-lg">${price}</span>
          <Link
            to={`/plants/${plantId}`}
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
