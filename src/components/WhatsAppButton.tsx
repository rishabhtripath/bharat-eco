import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919652172211"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-200 z-50 animate-glow-pulse"
      aria-label="Contact on WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
};

export default WhatsAppButton;
