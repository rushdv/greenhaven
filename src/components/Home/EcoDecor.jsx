const ideas = [
  {
    id: 1,
    title: "Shelf Jungle",
    description: "Layer trailing pothos and small succulents on floating shelves for a lush, layered look.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    tag: "Living Room",
  },
  {
    id: 2,
    title: "Bathroom Oasis",
    description: "Place humidity-loving ferns and peace lilies near your shower for a spa-like atmosphere.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    tag: "Bathroom",
  },
  {
    id: 3,
    title: "Desk Companion",
    description: "A small ZZ plant or snake plant on your desk boosts focus and purifies the air around you.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
    tag: "Home Office",
  },
];

const EcoDecor = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Eco Decor Ideas</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Inspire your space with creative ways to style plants in every room.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {idea.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{idea.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{idea.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoDecor;
