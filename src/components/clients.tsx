import { motion } from 'framer-motion';
import { defaultAnimation } from '../lib/animation';

export function Clients() {
  return (
    <motion.section
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: '-240px',
      }}
      className="mx-7 my-7 flex flex-wrap items-center justify-center gap-12 border-y-2 border-slate-50 py-7 md:mx-8 md:my-10 md:py-10 lg:mx-14 lg:my-14 lg:gap-28 lg:py-14"
    >
      <img src="/clients-logo/airbnb.svg" alt="airbnb" />
      <img src="/clients-logo/google.svg" alt="google" />
      <img src="/clients-logo/amazon.svg" alt="amazon" />
      <img src="/clients-logo/microsoft.svg" alt="microsoft" />
      <img src="/clients-logo/fedex.svg" alt="fedex" />
      <img src="/clients-logo/hubspot.svg" alt="hubspot" />
    </motion.section>
  );
}
