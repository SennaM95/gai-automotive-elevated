import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Mark de Vries',
    car: 'BMW M3',
    rating: 5,
    text: 'Uitstekende service! Mijn M3 loopt als een zonnetje na de chiptuning. Professioneel team dat echt verstand van zaken heeft.',
  },
  {
    name: 'Sophie Jansen',
    car: 'Audi A4',
    rating: 5,
    text: 'Eindelijk een garage waar je niet wordt afgezet. Transparante prijzen en eerlijk advies. Kom hier al jaren voor onderhoud.',
  },
  {
    name: 'Peter van den Berg',
    car: 'Mercedes C-Klasse',
    rating: 5,
    text: 'Na een storing die andere garages niet konden vinden, werd het probleem hier binnen een uur opgelost. Top!',
  },
  {
    name: 'Lisa Bakker',
    car: 'Volkswagen Golf GTI',
    rating: 5,
    text: 'De performance upgrades hebben mijn GTI naar een heel nieuw niveau getild. Zeer tevreden met het resultaat.',
  },
];

const brands = [
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 'Volvo', 'Toyota', 'Ford'
];

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-background relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Ervaringen
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Wat Klanten Zeggen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Onze reputatie is gebouwd op tevreden klanten. Lees hun ervaringen.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="relative bg-card border border-border rounded-lg p-8 group hover:border-primary/30 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-copper flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.car}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Ervaring met alle merken
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-lg md:text-xl font-heading font-medium text-muted-foreground/50 hover:text-primary transition-colors duration-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
