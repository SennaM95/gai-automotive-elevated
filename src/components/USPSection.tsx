import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, Shield, Gauge, Users } from 'lucide-react';

const usps = [
  {
    icon: Wrench,
    title: 'Ervaren Monteurs',
    description: 'Ons team heeft jarenlange ervaring met alle automerken en -typen.',
  },
  {
    icon: Shield,
    title: 'Transparante Prijzen',
    description: 'Vooraf duidelijke prijsafspraken. Geen verrassingen achteraf.',
  },
  {
    icon: Gauge,
    title: 'Performance Specialist',
    description: 'Van chiptuning tot complete motoroptimalisatie voor maximale prestaties.',
  },
  {
    icon: Users,
    title: 'Persoonlijke Service',
    description: 'Direct contact met de monteur. Wij nemen de tijd voor uw auto.',
  },
];

export function USPSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="usp" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="section-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="card-automotive bg-card border border-border rounded-lg p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <usp.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3 uppercase tracking-wide">
                {usp.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
