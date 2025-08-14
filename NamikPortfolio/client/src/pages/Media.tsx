import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Media() {
  const { t } = useTranslation();
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");

  const videos = [
    {
      id: "IHU_AIU2vPo",
      title: t("media.video_1_title"),
      thumbnail: "https://img.youtube.com/vi/IHU_AIU2vPo/maxresdefault.jpg"
    },
    {
      id: "5x8-pjznmaw",
      title: t("media.video_2_title"),
      thumbnail: "https://img.youtube.com/vi/5x8-pjznmaw/maxresdefault.jpg"
    }
  ];

  const openVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
    setVideoPlayerOpen(true);
  };

  return (
    <div className="pt-24">
      <title>Media Gallery - Namik Sultanov Photos & Videos | Classical Piano</title>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-bold mb-6">
            {t("media.title")}
          </h1>
          <p className="text-xl text-black">
            {t("media.subtitle")}
          </p>
        </div>

        {/* Photo Gallery Section */}
        <section className="mb-20">
          <h2 className="text-5xl font-serif font-bold mb-8">
            {t("media.photos_title")}
          </h2>
          <PhotoGallery />
        </section>

        {/* Video Gallery Section */}
        <section>
          <h2 className="text-5xl font-serif font-bold mb-8">
            {t("media.videos_title")}
          </h2>
          <p className="text-lg text-black mb-8">
            {t("media.videos_subtitle")}
          </p>
          
          {/* YouTube Channel Link */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t("media.youtube_channel")}
                </h3>
                <p className="text-black">
                  {t("media.youtube_description")}
                </p>
              </div>
              <a 
                href="https://www.youtube.com/@namiksultan" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-youtube-channel"
              >
                <Button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                  <i className="fab fa-youtube mr-2"></i>
                  {t("media.visit_channel")}
                </Button>
              </a>
            </div>
          </div>

          {/* Video Thumbnails Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => openVideo(video.id)}
                  data-testid={`video-${index}`}
                >
                  <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                      <Play className="text-white" size={48} />
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold" data-testid={`video-title-${index}`}>
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <VideoPlayer
        isOpen={videoPlayerOpen}
        videoId={selectedVideoId}
        onClose={() => setVideoPlayerOpen(false)}
      />
    </div>
  );
}
