const experts = [
  {
    id: 1,
    name: "Dr. Amelia Green",
    specialization: "Tropical Plant Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    experience: "8 years",
  },
  {
    id: 2,
    name: "Marcus Bloom",
    specialization: "Air Purifying Plants Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    experience: "12 years",
  },
  {
    id: 3,
    name: "Sofia Petal",
    specialization: "Succulent & Cactus Curator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    experience: "6 years",
  },
  {
    id: 4,
    name: "Liam Roots",
    specialization: "Indoor Garden Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    experience: "10 years",
  },
];

const ExpertSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Meet Our Green Experts</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our certified plant specialists are here to guide you on your green journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="text-center bg-green-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-green-200"
              />
              <h3 className="font-semibold text-gray-800 text-lg">{expert.name}</h3>
              <p className="text-green-600 text-sm mt-1">{expert.specialization}</p>
              <p className="text-gray-400 text-xs mt-2">{expert.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
