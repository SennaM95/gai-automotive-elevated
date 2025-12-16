import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Settings, Wrench, Gauge, Search, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import engineImage from '@/assets/engine-detail.jpg';
import mechanicImage from '@/assets/mechanic-work.jpg';
import wheelImage from '@/assets/wheel-detail.jpg';

const services = [
  {
    icon: Settings,
    title: 'Onderhoud & Service',
    description: 'Regulier onderhoud volgens fabrieksspecificaties. APK-keuringen en periodieke controles voor optimale prestaties.',
    features: ['Olie verversen', 'Filtervervanging', 'Remcontrole', 'Vloeistoffen bijvullen'],
    image: mechanicImage,
  },
  {
    icon: Wrench,
    title: 'Reparaties',
    description: 'Deskundige diagnose en reparatie van alle soorten storingen. Van kleine reparaties tot complete revisies.',
    features: ['Motor reparatie', 'Transmissie', 'Elektronica', 'Carrosserie'],
    image: wheelImage,
  },
  {
    icon: Gauge,
    title: 'Tuning & Performance',
    description: 'Haal het maximale uit uw auto. Chiptuning, uitlaatsystemen en performance upgrades op maat.',
    features: ['Chiptuning', 'Uitlaatsystemen', 'Luchtfilters', 'Onderstel'],
    image: engineImage,
  },
];

const additionalServices = [
  { icon: Search, title: 'Diagnose & Storingen', description: 'Uitgebreide computerdiagnose voor alle automerken' },
  { icon: ClipboardCheck, title: 'APK Keuring', description: 'Officiële APK-keuring met directe reparatiemogelijkheid' },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="diensten" className="py-24 lg:py-32 bg-background relative">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Onze Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Diensten
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Van dagelijks onderhoud tot high-performance tuning. Wij leveren vakmanschap zonder compromissen.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="card-automotive bg-card border border-border rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/90 backdrop-blur flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group/btn"
                  onClick={scrollToContact}
                >
                  Meer Info
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-1 uppercase tracking-wide">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
