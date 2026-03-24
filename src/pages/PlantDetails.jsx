import { useParams } from "react-router-dom";
import { useState } from "react";
import { Star, Package, Leaf, User } from "lucide-react";
import usePlants from "../hooks/usePlants";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const PlantDetails = () => {
  const { id } = useParams();
  const { plants, loading } = usePlants();
  const { user } = useAuth();

  const [form, setForm] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });
  const [submitting, setSubmitting] = useState(false);

  const plant = plants.find((p) => p.plantId === parseInt(id));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async booking
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Consultation booked successfully!");
    setForm({ name: user?.displayName || "", email: user?.email || "" });
    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Plant not found.
      </div>
    );
  }

  const careLevelColor = {
    Easy: "bg-green-100 text-green-700",
    Moderate: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-auto">
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3 w-fit">
              {plant.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{plant.plantName}</h1>
            <p className="text-gray-500 leading-relaxed mb-6">{plant.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Price</p>
                <p className="text-green-700 font-bold text-xl">${plant.price}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Rating</p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-800">{plant.rating}</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Stock</p>
                <div className="flex items-center gap-1">
                  <Package className="w-4 h-4 text-gray-500" />
                  <span className="font-semibold text-gray-700">{plant.availableStock} left</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Care Level</p>
                <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${careLevelColor[plant.careLevel] || "bg-gray-100 text-gray-600"}`}>
                  {plant.careLevel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <User className="w-4 h-4" />
              <span>Provided by <span className="font-medium text-gray-700">{plant.providerName}</span></span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-lg mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-bold text-gray-800">Book a Consultation</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {submitting ? "Booking..." : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
