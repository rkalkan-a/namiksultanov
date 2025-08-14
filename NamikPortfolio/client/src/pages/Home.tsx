import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import portraitImg from "@assets/namik3_1755204322301.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="pt-24">
      <title>Namik Sultanov - Distinguished Azerbaijani Pianist & Educator</title>
      
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                {t("home.title")}
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button 
                    className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-charcoal transition-colors"
                    data-testid="button-learn-more"
                  >
                    {t("home.learn_more")}
                  </Button>
                </Link>
                <Link href="/media">
                  <Button 
                    variant="outline"
                    className="border-2 border-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors"
                    data-testid="button-watch-videos"
                  >
                    {t("home.watch_videos")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={portraitImg}
                alt="Namik Sultanov professional portrait" 
                className="rounded-lg shadow-2xl w-full h-auto"
                data-testid="img-hero-portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-bold mb-8">
            {t("home.featured_video")}
          </h2>
          <p className="text-xl text-black mb-12">
            {t("home.video_description")}
          </p>
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/IHU_AIU2vPo?rel=0&modestbranding=1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
              data-testid="iframe-featured-video"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">
            {t("home.cta_title")}
          </h2>
          <p className="text-xl mb-8">
            {t("home.cta_description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/about">
              <Button 
                className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
                data-testid="button-read-biography"
              >
                {t("home.read_biography")}
              </Button>
            </Link>
            <Link href="/media">
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                data-testid="button-view-gallery"
              >
                {t("home.view_gallery")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
