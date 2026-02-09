import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service id",
        "template_id",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Publics Key",
      );

      console.log(result);

      if (result.status === 200) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you soon.",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message", {
        description: "Please try again or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      showFooter
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 page-overlay -z-10" />

      {/* Contact Hero */}
      <section className="pt-44 px-6 md:px-20 max-w-3xl animate-fade-in">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
          Contact Us
        </h1>
        <p className="text-lg text-foreground/85 leading-relaxed">
          Let's talk about powering the future of electric mobility together.
        </p>
      </section>

      {/* Contact Content */}
      <section className="mt-20 md:mt-24 px-6 md:px-20 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="font-display text-2xl text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-8">
              Have questions about our EV charging solutions or want to
              collaborate with us? Reach out anytime.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <span className="block text-sm text-foreground/70 mb-1">
                  Email
                </span>
                <a
                  href="mailto:bharatecovolt@gmail.com"
                  className="text-primary hover:underline"
                >
                  bharatecovolt@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-sm text-foreground/70 mb-1">
                  Phone
                </span>
                <a
                  href="tel:+919652172211"
                  className="text-primary hover:underline"
                >
                  +91 96521 72211
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <Input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-input border-white/15 rounded-xl py-4 px-4 text-foreground placeholder:text-foreground/60 focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-input border-white/15 rounded-xl py-4 px-4 text-foreground placeholder:text-foreground/60 focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-input border-white/15 rounded-xl py-4 px-4 text-foreground placeholder:text-foreground/60 focus:border-primary resize-none"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:bg-primary/90 transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
