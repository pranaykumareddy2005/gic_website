import { motion } from "framer-motion";

const partners = [
  { name: "Google", logo: "https://h2svision.github.io/publicAssets/vision/client_logos/google.png" },
  { name: "Microsoft", logo: "https://h2svision.github.io/publicAssets/vision/client_logos/microsoft.png" },
  { name: "Adobe", logo: "https://h2svision.github.io/publicAssets/vision/client_logos/adobe.png" },
  { name: "Samsung", logo: "https://h2svision.github.io/publicAssets/vision/client_logos/samsung.png" },
  { name: "GitHub", logo: "https://h2svision.github.io/publicAssets/vision/client_logos/github.png" },
  { name: "UiPath", logo: "https://h2svision.github.io/publicAssets/vision/client_logos/uipath.png" },
  { name: "Google Cloud", logo: "https://h2svision.github.io/publicAssets/h2s/googleCloudLogo.png" },
  { name: "MetLife", logo: "https://h2svision.github.io/publicAssets/h2s/metlifeLogo.png" },
];

const PartnersMarquee = () => {
  return (
    <section className="py-16 bg-gic-dark border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-white/50 text-sm font-medium tracking-wider uppercase">
            Trusted by Industry Leaders
          </p>
          <p className="text-white/70 mt-2">
            Identified <span className="text-primary font-semibold">5000+</span> solutions for over{" "}
            <span className="text-primary font-semibold">200+</span> organisations worldwide
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gic-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gic-dark to-transparent z-10" />

        {/* Marquee */}
        <div className="flex overflow-hidden">
          <div className="marquee flex items-center gap-20 px-10">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 h-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 w-auto object-contain invert"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
