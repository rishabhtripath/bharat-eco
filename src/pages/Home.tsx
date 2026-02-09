import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <Layout className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 hero-overlay -z-10" />

      {/* Hero Content */}
      <section className="absolute left-6 md:left-16 bottom-24 md:bottom-32 max-w-xl animate-fade-in-up">
        <h1 className="font-display text-3xl md:text-5xl leading-relaxed font-medium mb-7 text-foreground">
          Working towards Energizing the mobility for future
        </h1>

        <Link
          to="/contact"
          className="inline-flex items-center px-7 py-4 border-2 border-primary rounded-lg text-primary font-medium text-base backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Get in touch
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
