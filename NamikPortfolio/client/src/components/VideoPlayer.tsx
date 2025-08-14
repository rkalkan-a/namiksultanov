import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoPlayerProps {
  isOpen: boolean;
  videoId: string;
  onClose: () => void;
}

export function VideoPlayer({ isOpen, videoId, onClose }: VideoPlayerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div 
      className="video-overlay active fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
      data-testid="video-overlay"
    >
      <div className="relative w-[90%] max-w-4xl aspect-video">
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={onClose}
            className="text-white text-2xl hover:text-gray-300 transition-colors"
            data-testid="video-close"
          >
            <X />
          </button>
        </div>
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
          onClick={(e) => e.stopPropagation()}
          data-testid="video-iframe"
        />
      </div>
    </div>
  );
}
