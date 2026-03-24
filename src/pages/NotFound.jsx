import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Leaf className="w-16 h-16 text-green-300 mb-4" />
      <h1 className="text-6xl font-bold text-green-700 mb-2">404</h1>
      <p className="text-gray-500 text-lg mb-6">Oops! This page got lost in the jungle.</p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
