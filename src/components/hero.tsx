import { defaultAnimation } from '../lib/animation';
import { smoothScroll } from '../lib/utils';
import { Button } from './button';
import { LoginModal } from './login-modal';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      className="
			relative flex flex-col items-center gap-8 px-7 py-14 md:px-8 md:py-24 lg:flex-row lg:px-14 lg:py-28"
    >
      <div className="max-w-2xl">
        <motion.h1
          variants={defaultAnimation}
          initial="initial"
          animate="animate"
          className="text-center font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl md:leading-tight lg:text-left lg:text-7xl lg:leading-tight"
        >
          Optimalkan Bisnis Anda dengan UpTech
        </motion.h1>
        <motion.p
          variants={defaultAnimation}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.2,
          }}
          className="mt-5 text-center text-slate-800 md:text-lg lg:text-left"
        >
          Kelola barang, keuangan, dan keuntungan harian bisnis Anda dengan
          mudah menggunakan UpTech.
        </motion.p>
        <motion.div
          variants={defaultAnimation}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.4,
          }}
          className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
        >
          <LoginModal />
          <Button
            variant="outline"
            onClick={(e) => {
              smoothScroll(e, 'contact');
            }}
          >
            Hubungi Kami
          </Button>
        </motion.div>
      </div>
      <motion.img
        initial={{
          bottom: -24,
          opacity: 0,
        }}
        animate={{
          bottom: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
        }}
        src="clouds/cloud-hero.svg"
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
    </section>
  );
}
