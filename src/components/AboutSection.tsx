import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Heart, Target } from 'lucide-react';
import mechanicImage from '@/assets/mechanic-work.jpg';

const stats = [
  { value: '15+', label: 'Jaar Ervaring' },
  { value: '2500+', label: "Auto's Geholpen" },
  { value: '98%', label: 'Tevreden Klanten' },
  { value: '24u', label: 'Snelle Service' },
];

const values = [
  {
    icon: Award,
    title: 'Vakmanschap',
    description: 'Jarenlange ervaring gecombineerd met continue bijscholing.',
  },
  {
    icon: Target,
    title: 'Precisie',
    description: 'Elk detail telt. Wij werken nauwkeurig en grondig.',
  },
  {
    icon: Heart,
    title: 'Passie',
    description: "Auto's zijn onze passie. Dat proeft u in elk resultaat.",
  },
  {
    icon: Clock,
    title: 'Betrouwbaar',
    description: 'Afspraak is afspraak. Transparant en eerlijk.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="over-ons" className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      <div ref={ref} className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Over Ons
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Passie voor{' '}
              <span className="text-gradient-copper">Performance</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Gai Automotive is ontstaan uit een pure passie voor auto's en techniek. 
                Wat begon als een hobby in de garage, groeide uit tot een gerenommeerd 
                autobedrijf waar vakmanschap en klantgerichtheid centraal staan.
              </p>
              <p>
                Ons team van ervaren monteurs combineert traditioneel ambacht met moderne 
                technologie. Of het nu gaat om regulier onderhoud of een complete 
                performance upgrade – wij behandelen elke auto met dezelfde toewijding 
                en precisie.
              </p>
              <p>
                Bij Gai Automotive krijgt u geen anonieme service, maar persoonlijk 
                contact met de mensen die aan uw auto werken. Dat is waar wij voor staan.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wide">
                      {value.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={mechanicImage}
                alt="Vakmanschap bij Gai Automotive"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 left-4 right-4 lg:-bottom-12 lg:left-8 lg:right-8"
            >
              <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg p-6 shadow-elevated">
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-heading font-bold text-2xl md:text-3xl text-primary">
                        {stat.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
