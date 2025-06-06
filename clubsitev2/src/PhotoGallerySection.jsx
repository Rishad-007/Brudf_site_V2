import React, { useState, useEffect } from "react";

const galleryImages = [
  {
    src: "/Rishad Nur (1).jpg",
    title: "Inter-University Championship 2024",
    category: "events",
    height: "h-80",
    featured: true,
    date: "2024-03-15",
    description:
      "Annual championship bringing together the best debaters from across universities",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Annual Debate Festival",
    category: "events",
    height: "h-64",
    featured: false,
    date: "2024-02-20",
    description:
      "A celebration of intellectual discourse and competitive spirit",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Workshop Session",
    category: "workshops",
    height: "h-72",
    featured: false,
    date: "2024-01-10",
    description: "Intensive training session on advanced debate techniques",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Team Building Activity",
    category: "social",
    height: "h-60",
    featured: false,
    date: "2024-01-05",
    description: "Strengthening bonds within our debate community",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Award Ceremony",
    category: "awards",
    height: "h-84",
    featured: true,
    date: "2023-12-15",
    description:
      "Recognizing excellence and achievement in debate competitions",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Guest Speaker Session",
    category: "events",
    height: "h-68",
    featured: false,
    date: "2023-11-30",
    description: "Learning from industry experts and debate champions",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Training Workshop",
    category: "workshops",
    height: "h-76",
    featured: false,
    date: "2023-11-15",
    description: "Developing critical thinking and argumentation skills",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Cultural Exchange",
    category: "social",
    height: "h-64",
    featured: false,
    date: "2023-10-20",
    description: "Fostering international connections through debate",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Victory Celebration",
    category: "awards",
    height: "h-72",
    featured: true,
    date: "2023-09-25",
    description: "Celebrating our team's outstanding performance at nationals",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Research Symposium",
    category: "workshops",
    height: "h-68",
    featured: false,
    date: "2023-08-10",
    description: "Academic excellence and research presentation skills",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "Community Outreach",
    category: "social",
    height: "h-80",
    featured: false,
    date: "2023-07-20",
    description: "Spreading the art of debate to local schools and communities",
  },
  {
    src: "/Rishad Nur (1).jpg",
    title: "International Tournament",
    category: "events",
    height: "h-76",
    featured: true,
    date: "2023-06-15",
    description:
      "Competing on the global stage with international participants",
  },
];

const categories = ["all", "events", "workshops", "social", "awards"];

const categoryIcons = {
  all: "🎯",
  events: "🎪",
  workshops: "🎓",
  social: "🤝",
  awards: "🏆",
};

const PhotoGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("masonry"); // masonry or grid
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, featured

  // Animate category changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Filter and sort images
  const getFilteredAndSortedImages = () => {
    let filtered =
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (img) =>
          img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          img.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "oldest":
        return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "featured":
        return filtered.sort((a, b) => b.featured - a.featured);
      default: // newest
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  };

  const filteredImages = getFilteredAndSortedImages();

  return (
    <section
      className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden"
      id="gallery"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-xl">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of intellectual excellence, community spirit, and
            the passion that drives our debate community forward
          </p>
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-400 transition-all duration-300"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Controls Row */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-amber-200">
              <button
                onClick={() => setViewMode("masonry")}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  viewMode === "masonry"
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-amber-50"
                }`}
              >
                Masonry
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-amber-50"
                }`}
              >
                Grid
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-400 transition-all duration-300"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="featured">Featured First</option>
            </select>
          </div>
        </div>

        {/* Enhanced Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group px-6 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white shadow-2xl"
                  : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 border border-amber-200 shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{categoryIcons[category]}</span>
                <span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </div>
              {activeCategory === category && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">
            {isLoading
              ? "Loading..."
              : `Showing ${filteredImages.length} photo${
                  filteredImages.length !== 1 ? "s" : ""
                }`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Enhanced Gallery with Masonry Layout */}
        <div
          className={`${
            isLoading ? "opacity-50 pointer-events-none" : "opacity-100"
          } transition-opacity duration-300`}
        >
          {viewMode === "masonry" ? (
            // Masonry Layout
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredImages.map((image, idx) => (
                <div
                  key={idx}
                  className="break-inside-avoid group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-3xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-700 cursor-pointer bg-white"
                  onClick={() => setSelectedImage(image)}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    animation: `fadeInUp 0.8s ease-out forwards`,
                  }}
                >
                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Image with dynamic height */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`w-full ${image.height} object-cover group-hover:scale-110 transition-transform duration-700`}
                  />

                  {/* Enhanced Overlay with more info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                            <span className="mr-1">
                              {categoryIcons[image.category]}
                            </span>
                            {image.category}
                          </span>
                          <span className="text-xs opacity-75">
                            {image.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg leading-tight">
                          {image.title}
                        </h3>
                        <p className="text-sm opacity-90 leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced View icon with pulse effect */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          ) : (
            // Grid Layout
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-700 cursor-pointer bg-white"
                  onClick={() => setSelectedImage(image)}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    animation: `fadeInUp 0.8s ease-out forwards`,
                  }}
                >
                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                            <span className="mr-1">
                              {categoryIcons[image.category]}
                            </span>
                            {image.category}
                          </span>
                          <span className="text-xs opacity-75">
                            {image.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg leading-tight">
                          {image.title}
                        </h3>
                        <p className="text-sm opacity-90 leading-relaxed line-clamp-2">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* View icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Featured Photo Showcase */}
        <div className="mt-20 bg-gradient-to-r from-amber-100/80 via-yellow-50/80 to-orange-100/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-xl">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-6">
              Featured Community Member
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating the dedication and achievements of our remarkable
              debate community members who inspire excellence and embody the
              spirit of intellectual discourse.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-30 scale-110 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative">
                  <img
                    src="/Rishad Nur (1).jpg"
                    alt="Featured Community Member"
                    className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium opacity-90">
                        Active Member
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">
                      Community Excellence
                    </h4>
                    <p className="text-sm opacity-90">
                      Leading by example in every debate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div className="text-amber-600 text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                      50+
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800 font-bold text-lg">
                      Debate Sessions
                    </div>
                    <div className="text-gray-600 text-sm">
                      Active participation in club activities
                    </div>
                    <div className="w-full bg-amber-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-yellow-600 text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                      15+
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800 font-bold text-lg">
                      Awards Won
                    </div>
                    <div className="text-gray-600 text-sm">
                      Recognition for excellence
                    </div>
                    <div className="w-full bg-yellow-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-orange-600 text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800 font-bold text-lg">
                      Years Active
                    </div>
                    <div className="text-gray-600 text-sm">
                      Dedicated community member
                    </div>
                    <div className="w-full bg-orange-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="text-red-600 text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                      100+
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-800 font-bold text-lg">
                      Hours Training
                    </div>
                    <div className="text-gray-600 text-sm">
                      Continuous skill development
                    </div>
                    <div className="w-full bg-red-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-pink-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Timeline */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/30">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 text-amber-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Recent Achievements
                </h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Winner - Inter-University Championship 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Best Speaker Award - Annual Debate Festival</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Community Leadership Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Load more section */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <button className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                className="w-6 h-6 mr-3 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="relative z-10">Load More Photos</span>
              <svg
                className="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform duration-300 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <p className="text-gray-600 font-medium">
              Showing {filteredImages.length} of 50+ photos
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full animate-in zoom-in duration-300">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-3xl"
              />

              {/* Enhanced close button */}
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation arrows */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                <svg
                  className="w-6 h-6"
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

            {/* Enhanced image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
              <div className="text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-4 py-2 bg-amber-500/90 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                    <span className="mr-2">
                      {categoryIcons[selectedImage.category]}
                    </span>
                    {selectedImage.category}
                  </span>
                  <span className="text-sm opacity-75">
                    {selectedImage.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed max-w-2xl">
                  {selectedImage.description}
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <button className="flex items-center space-x-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-200">
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-200">
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
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-200">
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fadeInUp 0.5s ease-out;
        }
        .zoom-in {
          animation: zoomIn 0.3s ease-out;
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default PhotoGallerySection;
