import mara from "../assets/mara.jpg";
import ruma from "../assets/Ruma.jpg";
import watamu from "../assets/watamu.jpeg";
import amboseli from "../assets/amboseli.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    id: "gem-1",
    src: mara,
    alt: "Maasai Mara",
    title: "Maasai Mara National Park",
    description:
      "Famous for the Great Migration, Maasai Mara is a vast savannah teeming with wildlife.",
  },
  {
    id: "gem-2",
    src: ruma,
    alt: "Ruma National Park",
    title: "Ruma National Park",
    description:
      "Kenya’s least visited park, home to rare roan antelope and scenic escarpments.",
  },
  {
    id: "gem-3",
    src: watamu,
    alt: "Watamu Beach",
    title: "Watamu Beach",
    description:
      "A coastal paradise with white sands, coral reefs, and vibrant marine life — perfect for snorkeling and relaxing.",
  },
  {
    id: "gem-4",
    src: amboseli,
    alt: "Amboseli Sunset",
    title: "Amboseli Sunset View",
    description:
      "A breathtaking sunset behind Mt. Kilimanjaro, best viewed from Amboseli National Park.",
  },
];

const HiddenGems = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-[rgb(27,38,59)] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">
            Scenic Wonders
          </h1>
          <p className="text-[rgb(27,38,59)] text-lg sm:text-xl md:text-2xl leading-relaxed">
            Discover the untold beauty of Kenya beyond the guidebooks,
          </p>
          <p className="text-[rgb(27,38,59)] text-lg sm:text-xl md:text-2xl leading-relaxed">
            where nature whispers and wonders await
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
          {images.map((item) => (
            <div
              key={item.id}
              className="bg-blue-100 rounded-xl shadow-lg p-6 flex flex-col justify-between"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-[rgb(27,38,59)] text-xl sm:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[rgb(27,38,59)] text-base sm:text-lg mb-4">
                {item.description}
              </p>
              <Link
                to="/contact"
                className="mt-auto inline-block bg-[rgb(27,38,59)] text-white text-base sm:text-lg px-5 py-2 rounded-lg hover:bg-blue-900 transition font-bold"
              >
                Travel
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiddenGems;
