import { FeatureCard } from './feature-card';
import { SectionTitle } from './section-title';
import { MagicWand, BoundingBox, Package } from '@phosphor-icons/react';

const features = [
  {
    icon: <MagicWand className="h-10 w-10 text-cyan-800" weight="duotone" />,
    title: 'Analisa Mudah',
    description:
      'Lihat hasil penjualan Anda melalui grafik interaktif kami. Analisa bisnis jadi lebih simpel dengan visual yang jelas.',
  },
  {
    icon: <BoundingBox className="h-10 w-10 text-cyan-800" weight="duotone" />,
    title: 'Dukungan 24 Jam',
    description:
      'Tim dukungan kami siap membantu Anda 24/7, memastikan bisnis Anda tetap berjalan lancar tanpa hambatan.',
  },
  {
    icon: <Package className="h-10 w-10 text-cyan-800" weight="duotone" />,
    title: 'Prediksi Cepat AI',
    description:
      'Lihat masa depan keuangan Anda dengan bantuan AI. Prediksi dengan cepat dan akurat',
  },
];

export function Features() {
  return (
    <section
      className="relative px-7 py-14 md:px-8 md:py-24 lg:px-14 lg:py-28"
      id="about"
    >
      <SectionTitle
        title="Tentang UpTech"
        description="UpTech memiliki fitur yang dapat mempermudah manajemen bisnis Anda."
      />
      <div className="mt-7 grid gap-7 md:mt-10 lg:mt-14 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <img
        src="/clouds/cloud-about.svg"
        alt=""
        className="absolute bottom-0 left-0 -z-10"
      />
    </section>
  );
}
