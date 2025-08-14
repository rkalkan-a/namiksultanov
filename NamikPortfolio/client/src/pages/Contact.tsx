import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Youtube } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Implement actual form submission to backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Thank you for your message!",
        description: "We will get back to you soon."
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-24">
      <title>Contact Namik Sultanov - Piano Lessons & Performances | Get in Touch</title>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-bold mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-black">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8">
              {t("contact.form_title")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="block text-lg font-medium mb-2">
                  {t("contact.name_label")}
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t("contact.name_placeholder")}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-lg font-medium mb-2">
                  {t("contact.email_label")}
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t("contact.email_placeholder")}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-lg font-medium mb-2">
                  {t("contact.message_label")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder={t("contact.message_placeholder")}
                  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 text-lg font-medium rounded-lg hover:bg-charcoal transition-colors disabled:opacity-50"
                data-testid="button-send"
              >
                {isSubmitting ? "Sending..." : t("contact.send_button")}
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div>
            <h2 className="text-4xl font-serif font-bold mb-8">
              {t("contact.info_title")}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start" data-testid="contact-location">
                <MapPin className="text-black mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {t("contact.location_title")}
                  </h3>
                  <p className="text-black">
                    {t("contact.location")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start" data-testid="contact-email">
                <Mail className="text-black mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {t("contact.email_title")}
                  </h3>
                  <a 
                    href="mailto:pianosultan48@gmail.com" 
                    className="text-black hover:text-black transition-colors"
                    data-testid="link-email"
                  >
                    pianosultan48@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start" data-testid="contact-youtube">
                <Youtube className="text-black mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {t("contact.youtube_title")}
                  </h3>
                  <a 
                    href="https://www.youtube.com/@namiksultan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black hover:text-black transition-colors"
                    data-testid="link-youtube"
                  >
                    @namiksultan
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative bg-gray-200 rounded-lg overflow-hidden h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101308.97345!2d-121.9554726!3d37.3536484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
                data-testid="iframe-map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
