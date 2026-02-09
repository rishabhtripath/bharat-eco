import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const aboutBlocks = [
  {
    title: "Who We Are",
    description:
      "Bharatecovolt is a next-generation EV infrastructure company focused on building smart, reliable, and scalable charging solutions. We bridge technology and sustainability to energize tomorrow's mobility.",
  },
  {
    title: "Our Vision",
    description:
      "To create a connected ecosystem where electric mobility is accessible, efficient, and environmentally responsible for everyone.",
  },
  {
    title: "Our Mission",
    description:
      "We aim to deploy intelligent EV charging networks that empower cities, businesses, and individuals to move toward a cleaner future.",
  },
];

const About = () => {
  return (
    <Layout
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 page-overlay -z-10" />

      {/* About Hero */}
      <section className="pt-44 px-6 md:px-20 max-w-3xl animate-fade-in">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
          About Bharatecovolt
        </h1>
        <p className="text-lg text-foreground/85 leading-relaxed">
          Powering the future of sustainable mobility with intelligent EV
          charging infrastructure.
        </p>
      </section>

      {/* About Content */}
      <section className="mt-20 md:mt-28 px-6 md:px-20 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
          {aboutBlocks.map((block, index) => (
            <div
              key={block.title}
              className="glass-card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h2 className="font-display text-xl md:text-2xl text-primary mb-4">
                {block.title}
              </h2>
              <p className="text-foreground/90 text-sm leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
