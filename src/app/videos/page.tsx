"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";

export default function VideosPage() {
  const validEmail = "yalazzi88@gmail.com";
  const validPassword = "12345";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; url: string } | null>(null);

  const videos = [
    { id: 1, title: "الفيديو الأول", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "/img/video1.jpg" },
    { id: 2, title: "الفيديو الثاني", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ", thumbnail: "/img/video2.jpg" },
    { id: 3, title: "الفيديو الثالث", url: "https://www.youtube.com/embed/tgbNymZ7vqY", thumbnail: "/img/video3.jpg" },
  ];

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const authStatus = localStorage.getItem("isAuthenticated");

    if (storedEmail === validEmail && storedPassword === validPassword && authStatus === "true") {
      setIsAuthenticated(true);
      setEmail(storedEmail);
    }
  }, []);

  const openModal = (video: { title: string; url: string }) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <div className="min-h-screen bg-black py-12">
          <div className="max-w-3xl mx-auto bg-gray-900 shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-orange-500 text-center mb-6">
              مرحبًا بك، {email}
            </h1>
            <p className="text-gray-300 text-center mb-6">
              تم تسجيل الدخول بنجاح.
            </p>
            <h2 className="text-xl font-semibold text-orange-400 mb-4 text-center">
              قائمة الفيديوهات
            </h2>
            <div className="space-y-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer"
                  onClick={() => openModal(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-orange-400 mb-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center p-6 bg-gray-900 border-l-4 border-orange-500 shadow-lg rounded-lg">
            <h2 className="text-orange-500 font-bold text-lg mb-2">تنبيه!</h2>
            <p className="text-gray-300 mb-4">
              ليس لديك صلاحية لعرض هذا المحتوى. يرجى تسجيل الدخول باستخدام بيانات صحيحة.
            </p>
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-2xl mt-5 w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-orange-400 text-2xl font-bold mb-4 text-center">{selectedVideo.title}</h2>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
