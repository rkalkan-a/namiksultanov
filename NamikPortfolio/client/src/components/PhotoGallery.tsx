import { useState, useRef } from "react";
import { Lightbox } from "./Lightbox";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@assets/P1000317_1755204320687.jpg";
import img2 from "@assets/namik3_1755204322301.jpg";
import img3 from "@assets/IMG_3021_1755204326660.jpg";
import img4 from "@assets/IMG_3004_2_1755204326660.jpg";
import img5 from "@assets/IMG_2210_1755206146311.jpg";
import img6 from "@assets/P1000317_1755206149976.jpg";
import img7 from "@assets/IMG-20240723-WA0006(1)_1755207280021.jpg";
import img8 from "@assets/IMG-20240723-WA0007_1755207280021.jpg";
import newImg1 from "@assets/IMG-20250329-WA0005_1755210489082.jpg";
import newImg2 from "@assets/IMG-20241102-WA0028_1755210489082.jpg";
import newImg3 from "@assets/IMG-20250814-WA0013_1755210499035.jpg";
import newImg4 from "@assets/IMG-20250814-WA0014_1755210504033.jpg";

export function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const photos = [
    {
      src: img5,
      alt: "Namik Sultanov performing on Steinway grand piano",
    },
    {
      src: newImg1,
      alt: "Namik Sultanov performance collage with multiple piano moments",
    },
    {
      src: newImg2,
      alt: "Namik Sultanov with flowers after performance in concert hall",
    },
    {
      src: newImg3,
      alt: "Namik Sultanov teaching piano lesson with student",
    },
    {
      src: newImg4,
      alt: "Namik Sultanov teaching at Steinway grand piano",
    },
    {
      src: img1,
      alt: "Namik Sultanov at grand piano in formal setting",
    },
    {
      src: img2,
      alt: "Contemplative portrait of Namik Sultanov",
    },
    {
      src: img3,
      alt: "Namik Sultanov performing at grand piano",
    },
    {
      src: img4,
      alt: "Side view of Namik Sultanov performing",
    },
    {
      src: img6,
      alt: "Namik Sultanov at piano in elegant concert hall",
    },
    {
      src: img7,
      alt: "Namik Sultanov performing in cathedral setting",
    },
    {
      src: img8,
      alt: "Namik Sultanov teaching moment in cathedral",
    },
  ];

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setLightboxOpen(true);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Photo Gallery</h3>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              data-testid="button-scroll-left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              data-testid="button-scroll-right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-6 min-w-max">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="cursor-pointer group flex-shrink-0"
                onClick={() => openLightbox(photo.src, photo.alt)}
                onDragStart={(e) => e.preventDefault()}
                data-testid={`photo-${index}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-80 h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow group-hover:opacity-90 select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-black mt-4 text-sm">
          Use navigation buttons or scroll horizontally to view all photos
        </p>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
