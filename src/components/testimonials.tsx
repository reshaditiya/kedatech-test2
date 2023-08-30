import { TestimonialCard } from './testimonial-card';
import { SectionTitle } from './section-title';
import { motion } from 'framer-motion';
import { defaultAnimation } from '../lib/animation';

const testimonials = [
  {
    photo: 'testimonials/rina.webp',
    name: 'Rina',
    occupation: 'Pemilik Bisnis Kecil',
    testimonial:
      'Terbantu sekali oleh UpTech. Melacak barang dan keuntungan jadi mudah berkat grafik yang jelas. Hemat waktu dan tenaga!.',
  },
  {
    photo: 'testimonials/ahmad.webp',
    name: 'Ahmad',
    occupation: 'Pengusaha Muda',
    testimonial:
      'Pengalaman mengesankan dengan UpTech. Prediksi AI akurat, dukungan 24 jam responsif. Aplikasi yang memberi kepercayaan dalam pengambilan keputusan bisnis.',
  },
  {
    photo: 'testimonials/maya.webp',
    name: 'Maya',
    occupation: 'Pemilik Toko Online',
    testimonial:
      'UpTech membuat bisnis online saya tumbuh. Analisis grafik membantu melihat tren penjualan dan meningkatkan organisasi. Aplikasi mudah yang memberi kontrol penuh.',
  },
];

export function Testimonials() {
  return (
    <motion.section
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: '-240px',
      }}
      className="relative px-7 py-14 md:px-8 md:py-24 lg:px-14 lg:py-28"
    >
      <img
        src="/clouds/cloud-testimonial.svg"
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
      <SectionTitle
        title="Yang Mereka Katakan Tentang UpTech"
        description="UpTech memiliki rating yang tinggi dari pengguna, lihat apa pendapat mereka."
      />
      <div className="mt-10 grid gap-7 md:mt-10 lg:mt-14 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            photo={testimonial.photo}
            occupation={testimonial.occupation}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
    </motion.section>
  );
}
