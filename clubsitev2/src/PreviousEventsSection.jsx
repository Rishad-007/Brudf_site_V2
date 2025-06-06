import React from "react";

const events = [
  {
    title: "Inter-University Debate Championship 2024",
    date: "March 15, 2024",
    venue: "BRU Campus Auditorium",
    description:
      "A prestigious national-level debate tournament featuring 25+ universities from across the country.",
    participants: "150+ debaters",
    image: "/Rishad Nur (1).jpg",
  },
  {
    title: "BRUDF Annual Debate Festival",
    date: "December 10, 2023",
    venue: "University Main Hall",
    description:
      "Our signature annual event celebrating the art of debate with workshops and competitions.",
    participants: "200+ participants",
    image: "/Rishad Nur (1).jpg",
  },
  {
    title: "Parliamentary Debate Workshop",
    date: "September 22, 2023",
    venue: "Conference Room A",
    description:
      "Intensive training session on parliamentary debate format conducted by expert moderators.",
    participants: "80+ attendees",
    image: "/Rishad Nur (1).jpg",
  },
  {
    title: "Freshman Debate Orientation",
    date: "August 5, 2023",
    venue: "Student Center",
    description:
      "Welcome event for new students interested in joining our debate community.",
    participants: "120+ freshmen",
    image: "/Rishad Nur (1).jpg",
  },
];

const PreviousEventsSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-cyan-50 via-sky-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Previous Events
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Discover the memorable moments and achievements from our past events
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Events grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 lg:p-8 border border-cyan-100 transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Event image */}
            <div className="relative mb-4 lg:mb-6 overflow-hidden rounded-xl">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Event details */}
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                {event.title}
              </h3>

              <div className="flex flex-wrap gap-2 lg:gap-4 text-xs sm:text-sm">
                <span className="inline-flex items-center px-2 lg:px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-medium">
                  📅 {event.date}
                </span>
                <span className="inline-flex items-center px-2 lg:px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                  📍 {event.venue}
                </span>
                <span className="inline-flex items-center px-2 lg:px-3 py-1 rounded-full bg-sky-100 text-sky-700 font-medium">
                  👥 {event.participants}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {event.description}
              </p>

              <div className="pt-3 lg:pt-4 border-t border-gray-100">
                <button className="text-cyan-600 hover:text-cyan-700 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  View Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View all events button */}
      <div className="text-center mt-8 lg:mt-12">
        <button className="inline-flex items-center px-6 sm:px-8 py-3 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
          View All Events
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default PreviousEventsSection;
