import React, { useState } from "react";

const videoContent = [
  {
    id: 1,
    title: "BRUDF Championship Highlights 2024",
    type: "youtube",
    embedId: "dQw4w9WgXcQ",
    thumbnail: "/Rishad Nur (1).jpg",
    description: "Experience the best moments from our annual championship",
    views: "15.2K",
    duration: "12:45",
  },
  {
    id: 2,
    title: "Debate Workshop Series - Episode 1",
    type: "youtube",
    embedId: "dQw4w9WgXcQ",
    thumbnail: "/Rishad Nur (1).jpg",
    description: "Learn the fundamentals of effective debating",
    views: "8.7K",
    duration: "25:30",
  },
  {
    id: 3,
    title: "BRUDF Community Moments",
    type: "facebook",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/10153231379946729/",
    thumbnail: "/Rishad Nur (1).jpg",
    description: "Behind the scenes moments with our debate family",
    views: "5.3K",
    duration: "8:20",
  },
  {
    id: 4,
    title: "Student Success Stories",
    type: "facebook",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/10153231379946729/",
    thumbnail: "/Rishad Nur (1).jpg",
    description: "Hear from our successful alumni and current members",
    views: "12.1K",
    duration: "18:15",
  },
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredVideos =
    filter === "all"
      ? videoContent
      : videoContent.filter((video) => video.type === filter);

  const renderVideoEmbed = (video) => {
    if (video.type === "youtube") {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-2xl"
        ></iframe>
      );
    } else {
      return (
        <iframe
          src={video.embedUrl}
          title={video.title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-2xl"
        ></iframe>
      );
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-violet-50 via-purple-50 to-fuchsia-50"
      id="videos"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Video Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our debate highlights, workshops, and community moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "youtube", "facebook"].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === filterType
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-orange-50 border border-orange-200"
              }`}
            >
              {filterType === "all"
                ? "All Videos"
                : filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-gray-100"
            >
              {/* Video thumbnail/player */}
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {activeVideo === video.id ? (
                  renderVideoEmbed(video)
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setActiveVideo(video.id)}
                        className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
                      >
                        <svg
                          className="w-8 h-8 text-orange-600 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>

                    {/* Video info overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                          {video.duration}
                        </span>
                        <span
                          className={`px-3 py-1 text-white text-xs rounded-full ${
                            video.type === "youtube"
                              ? "bg-red-600"
                              : "bg-blue-600"
                          }`}
                        >
                          {video.type === "youtube" ? "YouTube" : "Facebook"}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Video details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {video.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {video.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {video.views} views
                    </span>
                  </div>

                  <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Watch Full Video
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Media Showcase */}
        <div className="mt-16 bg-gradient-to-r from-violet-100 via-purple-50 to-fuchsia-100 rounded-3xl p-8 border border-violet-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Featured Community Moments
              </h3>
              <p className="text-gray-600 mb-6">
                Discover the vibrant moments that define our debate community.
                From intense discussions to celebration victories, every moment
                tells our story.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <span className="text-gray-700">Championship Victories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Workshop Sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-fuchsia-500 rounded-full"></div>
                  <span className="text-gray-700">Community Building</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl blur-xl opacity-30 scale-110"></div>
              <img
                src="/Rishad Nur (1).jpg"
                alt="BRUDF Community Moments"
                className="relative w-full h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold">Our Debate Champions</h4>
                <p className="text-sm opacity-90">
                  Celebrating excellence in debate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured video section */}
        <div className="mt-16 bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl p-8 border border-violet-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Subscribe to Our Channels
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest debates, workshops, and community
              events by subscribing to our YouTube channel and following our
              Facebook page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
              </a>

              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
