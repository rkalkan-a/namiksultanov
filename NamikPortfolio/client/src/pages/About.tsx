import { useTranslation } from "@/hooks/useTranslation";
import contemplativeImg from "@assets/namik3_1755204322301.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-24">
      <title>About Namik Sultanov - Biography & Career | Distinguished Pianist</title>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-bold mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl text-black">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="text-lg leading-relaxed" data-testid="text-biography">
          <img 
            src={contemplativeImg}
            alt="Namik Sultanov contemplative portrait" 
            className="float-left mr-8 mb-6 w-80 h-auto rounded-lg shadow-lg"
            data-testid="img-about-portrait"
          />
          <div className="space-y-6">
            {t("about.biography").split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-justify font-sans">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
