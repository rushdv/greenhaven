import { Droplets, Sun, Sprout } from "lucide-react";

const tips = [
  {
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    title: "Watering",
    bg: "bg-blue-50",
    points: [
      "Water when the top inch of soil feels dry",
      "Use room-temperature water to avoid shocking roots",
      "Ensure pots have drainage holes to prevent root rot",
      "Reduce watering frequency in winter months",
    ],
  },
  {
    icon: <Sun className="w-8 h-8 text-amber-500" />,
    title: "Sunlight",
    bg: "bg-amber-50",
    points: [
      "Most indoor plants prefer bright, indirect light",
      "Rotate plants every few weeks for even growth",
      "Avoid placing plants in direct harsh afternoon sun",
      "Use grow lights for rooms with minimal windows",
    ],
  },
  {
    icon: <Sprout className="w-8 h-8 text-green-600" />,
    title: "Fertilizing",
    bg: "bg-green-50",
    points: [
      "Fertilize during the growing season (spring–summer)",
      "Use a balanced liquid fertilizer every 2–4 weeks",
      "Never fertilize a dry or stressed plant",
      "Flush soil occasionally to prevent salt buildup",
    ],
  },
];

const CareTips = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Plant Care Tips</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Keep your plants healthy and thriving with these essential care guidelines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip.title} className={`${tip.bg} rounded-2xl p-6`}>
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{tip.title}</h3>
              <ul className="space-y-2">
                {tip.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareTips;
