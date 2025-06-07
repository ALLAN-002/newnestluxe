import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "As a community leader, I’ve worked with various digital platforms — but this one stands out. It has enabled many families to find decent, affordable housing in record time.",
    author: "Jane Wambui, Founder - WomenRise Initiative",
  },
  {
    quote:
      "When I first moved to Nairobi, house hunting was a nightmare. I wasted so much time traveling to see unsuitable places. This platform helped me browse listings and book viewings easily.",
    author: "David Otieno, Tenant - Nairobi",
  },
  {
    quote:
      "Listing my properties used to be stressful. Now I can manage everything online, reach real tenants, and avoid intermediaries. It's boosted my occupancy rate.",
    author: "Susan Achieng, Landlord - Kiambu",
  },
  {
    quote:
      "The virtual tour feature made things so much easier. I could explore houses online, pick my top choices, and schedule visits. It saved me so much time.",
    author: "Brian Kiptoo, Remote Worker - Eldoret",
  },
];

export default function TestimonialSection() {
  const CARD_WIDTH = 320;
  const GAP = 24;

  const getVisibleCount = () =>
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev >= testimonials.length - visibleCount ? 0 : prev + 1
    );
  };

  return (
    <section className="py-12 bg-gray-100 w-full rounded-lg">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 rounded-lg">
        {/* Left controls */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold">TESTIMONIALS</h1>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            What Other Clients Are Saying
          </h2>
          <div className="flex gap-4 mt-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="bg-white border rounded-full p-3 shadow hover:bg-gray-200 transition w-12 h-12 flex justify-center items-center"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="bg-white border rounded-full p-3 shadow hover:bg-gray-200 transition w-12 h-12 flex justify-center items-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Right testimonial carousel */}
        <div className="md:w-2/3 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${startIndex * (CARD_WIDTH + GAP)}px)`,
            }}
          >
            {testimonials.map(({ quote, author }, i) => (
              <div
                key={i}
                className="bg-blue-950 rounded-lg shadow-md p-6 flex-shrink-0 text-white"
                style={{ width: CARD_WIDTH, minHeight: 320 }}
              >
                <p className="mb-4 text-lg md:text-2xl pt-6">“{quote}”</p>
                <p className="font-semibold text-lg md:text-2xl">{author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
