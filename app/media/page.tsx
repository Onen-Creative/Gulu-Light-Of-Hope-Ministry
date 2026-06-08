"use client";

import { useState } from "react";
import { Play, X, Camera, Video, Calendar, MapPin } from "lucide-react";

export default function Media() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"all" | "photos" | "videos">("all");

  const mediaItems = [
    {
      id: 1,
      type: "photo",
      title: "Sunday Worship Service",
      description: "Community Gathering for Sunday Worship at Arapai Branch",
      date: "2025-12-15",
      location: "Arapai Branch, Amuru District",
      thumbnail: "IMG-20260216-WA0037_fqhpic",
    },
    {
      id: 2,
      type: "photo",
      title: "Boys' Dormitory",
      description: "Boys' Dormitory at Beacon of Hope Junior School",
      date: "2025-12-15",
      location: "Pawel Branch, Adak Village",
      thumbnail: "IMG-20260209-WA0033_j80qp5",
    },
    {
      id: 3,
      type: "video",
      title: "Sunday Preaching by Pastor Dr. Michael Turner",
      description: "Sunday Preaching by Pastor Dr. Michael Turner from Arizon, USA",
      date: "2025-09-21",
      location: "Pawel Branch, Adak Village",
      youtubeId: "x_lKI2Xp2r0",
    },
    {
      id: 4,
      type: "photo",
      title: "Elderly Support Program",
      description: "The ministry Supporting the Elders from the Communities of Pawel Village, Gulu District",
      date: "2024-01-08",
      location: "Ministry Gardens, Adak Village",
      thumbnail: "IMG-20260209-WA0001_coy0io",
    },
    {
      id: 5,
      type: "photo",
      title: "Adult Literacy Program",
      description: "Adults Participating in Literacy and Life Skills Training",
      date: "2024-01-05",
      location: "Ministry Center",
      thumbnail: "IMG-20260209-WA0004_cmg3eh",
    },
    {
      id: 6,
      type: "video",
      title: "Pastor Dr. Michael Turner's visit",
      description: "Pastor Dr. Michael Turner's visit to the site where the main church will be constructed",
      date: "2025-09-20",
      location: "Pawel Branch, Adak Village",
      youtubeId: "bNbXIrRxFb8",
    },
    {
      id: 7,
      type: "photo",
      title: "Children's Ministry",
      description: "Children Participating in Sunday School Activities",
      date: "2024-04-05",
      location: "Pawel Branch, Gulu District",
      thumbnail: "IMG-20260209-WA0012_vlwqux",
    },
    {
      id: 8,
      type: "video",
      title: "Construction of Girls' Dormitory",
      description: "Construction of Girls' Dormitory at Beacon of Hope Junior School",
      date: "2025-05-28",
      location: "Adak Village, Gulu District",
      youtubeId: "0sXn44r5vQQ",
    },
    {
      id: 9,
      type: "video",
      title: "Classroom block",
      description: "A Classroom Block at Beacon of Hope Junior School",
      date: "2025-05-28",
      location: "Adak village, Gulu District",
      youtubeId: "WQonc4wCAis",
    },
    {
      id: 10,
      type: "photo",
      title: "Staff of Beacon of Hope Junior School",
      description: "Staff of Beacon of Hope Junior School",
      date: "2025-12-15",
      location: "Adak Village, Gulu District",
      thumbnail: "IMG-20260209-WA0021_crqw78",
    },
    {
      id: 11,
      type: "photo",
      title: "Sunflower garden",
      description: "Ministry's sunflower garden",
      date: "2025-07-30",
      location: "Adak Village, Gulu District",
      thumbnail: "IMG-20260209-WA0013_xs0tkd",
    },
    {
      id: 12,
      type: "photo",
      title: "Sunday Service",
      description: "Sunday Service led by Pastor Dr. Michael Turner from Light of Hope Bible Church, Arizona, USA",
      date: "2025-08-29",
      location: "Adak Village, Gulu District",
      thumbnail: "IMG-20260209-WA0003_qosdxt",
    },
    {
      id: 13,
      type: "photo",
      title: "Women leaders",
      description: "Women leaders together with Pastor Dr. Michael Turner from Light of Hope Bible Church, Arizona, USA",
      date: "2025-08-29",
      location: "Adak Village, Gulu District",
      thumbnail: "IMG-20260209-WA0008_ghwmf3",
    },
    {
      id: 14,
      type: "photo",
      title: "Pastoral and Leadership Training",
      description: "Ministry's leaders together with Pastor Dr. Michael Turner from Light of Hope Bible Church, Arizona, USA",
      date: "2025-08-29",
      location: "Adak Village, Gulu District",
      thumbnail: "IMG-20260209-WA0006_yywtft",
    },
    {
      id: 15,
      type: "video",
      title: "Rice from the farm",
      description: "Rice harvested from the farm",
      date: "2025-09-21",
      location: "Pawel Branch, Adak Village",
      youtubeId: "473KbGU29gc",
    },
    {
      id: 16,
      type: "video",
      title: "Praise and Worship",
      description: "Sunday Service praise and worship session",
      date: "2025-09-21",
      location: "Pawel Branch, Adak Village",
      youtubeId: "m1mVUr_ysGs",
    },
    {
      id: 17,
      type: "photo",
      title: "Joy and Celebration after a Baptism Ceremony",
      description: "Joy and Happines after a Baptism Ceremony as Many Believers Recieved Jesus Christ as their Saviour",
      date: "2025-10-29",
      location: "Adak Village, Gulu District",
      thumbnail: "IMG-20260216-WA0038_q8v2ww",
    },
    {
      id: 18,
      type: "photo",
      title: "Baptism Ceremony",
      description: "Pastor James Ekanya and Church Leaders Baptising Believers",
      date: "2025-10-29",
      location: "Adak Village, Gulu District",
      thumbnail: "IMG-20260216-WA0009_zhnhbc",
    },
    {
      id: 19,
      type: "photo",
      title: "Sunday Service",
      description: "Pastor Andrew Ouma Preaching Words of God to Believers on a Sunday Service at Our Arapai Branch",
      date: "2026-01-25",
      location: "Arapai Village, Amuru District",
      thumbnail: "IMG-20260216-WA0030_th6qzm",
    },
    {
      id: 20,
      type: "video",
      title: "Testimony About God's Work and Blessings",
      description: "Rice garden for the first season of 2026",
      date: "2026-06-06",
      location: "Seven corner, Lwalakwar Village",
      youtubeId: "oHFgaH6I5x4",
    },
    {
      id: 21,
      type: "photo",
      title: "Rice Garden",
      description: "The ministry's rice garden for the first season of 2026",
      date: "2026-06-06",
      location: "Seven corner, Lwalakwar Village",
      thumbnail: "IMG-20260606-WA0003_wosaei",
    },
    {
      id: 22,
      type: "video",
      title: "Our New Piece of Land",
      description: "Clearing the new piece of land for farming",
      date: "2026-006-06",
      location: "Pawe Langeta, Opok Village",
      youtubeId: "QRNkcpq9d44",
    },
  ];

  const filteredMedia = mediaItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "photos") return item.type === "photo";
    if (activeTab === "videos") return item.type === "video";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            Moments of Faith
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Media Gallery
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto mb-6">
            Explore photos and videos from our ministry activities, worship services, and community programs
          </p>
          <div className="bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-lg italic mb-2">"Let everything that has breath praise the LORD."</p>
            <p className="text-sm text-white/90">Psalm 150:6 (NKJV)</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 inline-flex gap-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium text-sm transition-colors ${
                  activeTab === "all"
                    ? "bg-primary-600 text-white"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                All Media
              </button>
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === "photos"
                    ? "bg-primary-600 text-white"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                <Camera className="h-4 w-4" />
                <span className="hidden sm:inline">Photos</span>
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === "videos"
                    ? "bg-primary-600 text-white"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Videos</span>
              </button>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Thumbnail */}
                <div className="relative w-full h-64 bg-gray-200">
                  {item.type === "video" ? (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4">
                          <Play className="h-8 w-8 text-primary-600" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={`https://res.cloudinary.com/dhzo74l5w/image/upload/w_800,h_600,c_fill,g_auto,q_auto/${item.thumbnail}`}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = `https://res.cloudinary.com/dhzo74l5w/image/upload/w_800,h_600,c_fit/${item.thumbnail}`;
                      }}
                    />
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-lg">
                    {item.type === "photo" ? (
                      <Camera className="h-4 w-4 text-primary-600" />
                    ) : (
                      <Video className="h-4 w-4 text-primary-600" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-col gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 flex-shrink-0" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMedia.length === 0 && (
            <div className="text-center py-16">
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
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
              <h3 className="text-xl font-semibold text-gray-900 pr-8">
                {selectedMedia.title}
              </h3>
              <button
                onClick={() => setSelectedMedia(null)}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              {selectedMedia.type === "video" ? (
                <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMedia.youtubeId}?autoplay=1`}
                    title={selectedMedia.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="w-full bg-gray-100">
                  <img
                    src={`https://res.cloudinary.com/dhzo74l5w/image/upload/w_1400,q_auto,f_auto/${selectedMedia.thumbnail}`}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `https://res.cloudinary.com/dhzo74l5w/image/upload/${selectedMedia.thumbnail}`;
                    }}
                  />
                </div>
              )}

              <div className="mt-6">
                <p className="text-gray-700 mb-4">{selectedMedia.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(selectedMedia.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {selectedMedia.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
