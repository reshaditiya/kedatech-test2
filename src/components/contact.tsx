import { SectionTitle } from './section-title';
import {
  BehanceLogo,
  DribbbleLogo,
  EnvelopeSimple,
  InstagramLogo,
  PhoneCall,
  TwitterLogo,
  User,
} from '@phosphor-icons/react';
import { Button } from './button';
import { motion } from 'framer-motion';
import { defaultAnimation } from '../lib/animation';

export function Contact() {
  return (
    <motion.section
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: '-240px',
      }}
      className="px-7 py-14 md:px-8 md:py-24 lg:px-14 lg:py-28"
      id="contact"
    >
      <div className="rounded-3xl border-2 border-slate-50 bg-white p-10">
        <SectionTitle
          title="Hubungi Kami"
          description="Masih punya pertanyaan tentang layanan kami?, hubungi layanan pelanggan kami!."
        />
        <div className="mt-10 flex flex-col justify-center md:justify-between lg:mt-14 lg:flex-row">
          <div className="flex flex-col justify-center lg:flex-1">
            <span className="flex items-center justify-center gap-3 text-slate-800 lg:justify-start">
              <PhoneCall className="h-6 w-6 text-cyan-700" weight="duotone" />
              +6282123278123
            </span>
            <span className="mt-5 flex items-center justify-center gap-3 text-slate-800 lg:justify-start">
              <EnvelopeSimple
                className="h-6 w-6 text-cyan-700"
                weight="duotone"
              />
              cs@keda-tech.com
            </span>
            <h3 className="mt-10 text-center font-display text-xl font-bold text-slate-950 lg:text-left">
              Sosial Media Kami
            </h3>
            <div className="mt-6 flex justify-center gap-5 lg:justify-start">
              <InstagramLogo className="h-6 w-6 text-slate-800" />
              <DribbbleLogo className="h-6 w-6 text-slate-800" />
              <BehanceLogo className="h-6 w-6 text-slate-800" />
              <TwitterLogo className="h-6 w-6 text-slate-800" />
            </div>
          </div>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col items-center lg:mt-0 lg:flex-1 lg:items-start"
          >
            <label className="relative flex w-full max-w-lg">
              <User
                className="absolute left-6 top-4 h-6 w-6 text-cyan-700"
                weight="duotone"
              />
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full rounded-3xl border-2 border-slate-200 py-4 pl-14 pr-5"
              />
            </label>
            <label className="relative mt-2 w-full max-w-lg">
              <EnvelopeSimple
                className="absolute left-6 top-4 h-6 w-6 text-cyan-700"
                weight="duotone"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-3xl border-2 border-slate-200 py-4 pl-14 pr-5"
              />
            </label>
            <Button variant="primary" className="mt-5">
              Kirim
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
