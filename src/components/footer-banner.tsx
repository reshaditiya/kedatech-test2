import { SectionTitle } from './section-title';
import { LoginModal } from './login-modal';
import { motion } from 'framer-motion';
import { defaultAnimation } from '../lib/animation';

export function FooterBanner() {
  return (
    <motion.section
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: '-240px',
      }}
      className="relative flex flex-col items-center px-7 pb-40 pt-14 md:px-8 md:pb-52 md:pt-24 lg:px-14 lg:pb-72 lg:pt-0"
    >
      <img
        src="/clouds/cloud-bottom.svg"
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
      <SectionTitle
        title="Dapatkan UpTech Sekarang!"
        description="Langganan layanan manajemen UpTech sekarang dan masuk ke aplikasi."
      />
      <LoginModal className="mt-10" />
    </motion.section>
  );
}
