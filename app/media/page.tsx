"use client";

import { useState } from "react";
import { Play, X, Camera, Video, Calendar, MapPin } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn } from "../../components/Animations";

export default function Media() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"all" | "photos" | "videos">(
    "all",
  );

  // Ministry media data with Cloudinary public IDs
  const mediaItems = [
    {
      id: 1,
      type: "photo",
      title: "Sunday Worship Service",
      description: "Community gathering for Sunday worship at Pawel Branch",
      date: "2025-12-15",
      location: "Pawel Branch, Adak Village",
      thumbnail: "FB_IMG_1770043270970_egq4lf",
      fullImage: "FB_IMG_1770043270970_egq4lf",
    },
    // {
    //   id: 2,
    //   type: "video",
    //   title: "Beacon of Hope Junior School Activities",
    //   description: "Students participating in daily activities and learning",
    //   date: "2024-01-10",
    //   location: "Beacon of Hope Junior School",
    //   thumbnail: "your-school-activities-public-id",
    //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // },
    {
      id: 3,
      type: "photo",
      title: "Agricultural Outreach Program",
      description: "Community members working in the ministry gardens",
      date: "2024-01-08",
      location: "Ministry Gardens, Adak Village",
      thumbnail: "FB_IMG_1770032905674_qmjwer",
      fullImage: "FB_IMG_1770032905674_qmjwer",
    },
    {
      id: 4,
      type: "photo",
      title: "Adult Literacy Program",
      description: "Adults participating in literacy and life skills training",
      date: "2024-01-05",
      location: "Ministry Center",
      thumbnail: "FB_IMG_1770033273318_mojjty",
      fullImage: "FB_IMG_1770033273318_mojjty",
    },
    // {
    //   id: 5,
    //   type: "video",
    //   title: "Arapai Branch Fellowship",
    //   description: "Weekly fellowship and Bible study at Arapai Branch",
    //   date: "2024-01-03",
    //   location: "Arapai Branch",
    //   thumbnail: "your-arapai-fellowship-public-id",
    //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // },
    {
      id: 6,
      type: "photo",
      title: "Children's Ministry",
      description: "Children participating in Sunday school activities",
      date: "2024-01-01",
      location: "Pawel Branch",
      thumbnail: "FB_IMG_1770042328626_yszo5s",
      fullImage: "FB_IMG_1770042328626_yszo5s",
    },
  ];

  const filteredMedia = mediaItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "photos") return item.type === "photo";
    if (activeTab === "videos") return item.type === "video";
    return true;
  });

  const openModal = (item: any) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center bg-gradient-to-br from-primary-600 to-primary-800 pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Media Gallery
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-4 sm:mb-6">
              Explore photos and videos from our ministry activities, worship
              services, community outreach programs, and special events.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-3 sm:p-4 md:p-6 rounded-lg max-w-3xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg italic mb-2">
                "Let everything that has breath praise the LORD."
              </p>
              <p className="text-gray-200 font-semibold text-xs sm:text-sm md:text-base">Psalm 150:6 (NKJV)</p>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "all"
                    ? "bg-primary-600 text-white"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                All Media
              </button>
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "photos"
                    ? "bg-primary-600 text-white"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                <Camera className="h-4 w-4 inline mr-2" />
                Photos
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "videos"
                    ? "bg-primary-600 text-white"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                <Video className="h-4 w-4 inline mr-2" />
                Videos
              </button>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
                onClick={() => openModal(item)}
              >
                <div className="relative">
                  <CloudinaryImage
                    src={item.thumbnail}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    {item.type === "photo" ? (
                      <Camera className="h-5 w-5 text-white bg-black bg-opacity-50 p-1 rounded" />
                    ) : (
                      <Video className="h-5 w-5 text-white bg-black bg-opacity-50 p-1 rounded" />
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                {activeTab === "photos" ? (
                  <Camera className="h-16 w-16 mx-auto" />
                ) : (
                  <Video className="h-16 w-16 mx-auto" />
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No {activeTab === "all" ? "media" : activeTab} found
              </h3>
              <p className="text-gray-600">Check back later for new content.</p>
            </div>
          )}

          {/* Modal */}
          {selectedMedia && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-4 border-b">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedMedia.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-4">
                  {selectedMedia.type === "photo" ? (
                    <CloudinaryImage
                      src={selectedMedia.fullImage}
                      alt={selectedMedia.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <div className="aspect-video">
                      <iframe
                        src={selectedMedia.videoUrl}
                        title={selectedMedia.title}
                        className="w-full h-full rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">
                      {selectedMedia.description}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(selectedMedia.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {selectedMedia.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </FadeIn>
    </div>
  );
}
