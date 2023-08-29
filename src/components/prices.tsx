import { PricingCard } from './pricing-card';
import { SectionTitle } from './section-title';

const prices = [
  {
    label: 'Basic',
    price: 500,
    description: 'Cocok untuk bisnis kecil rumahan',
    features: [
      'Mencatat barang masuk',
      'Mencatat barang keluar',
      'Mencatat hasil keuntungan',
    ],
    highlighted: false,
  },
  {
    label: 'Bussiness',
    price: 1500,
    description: 'Cocok untuk bisnis menengah keatas',
    features: [
      'Semua fitur Basic',
      'Analisa penjualan dengan Chart',
      'Support 7x24 jam',
    ],
    highlighted: false,
  },
  {
    label: 'Enterprise',
    price: 3500,
    description: 'Cocok untuk memaksimalkan bisnismu.',
    features: [
      'Semua fitur Bussiness',
      'Export data ke Excel',
      'AI prediksi penghasilan',
    ],
    highlighted: true,
  },
];

export function Prices() {
  return (
    <section className="relative px-7 py-14 md:px-8 md:py-24 lg:px-14 lg:py-28">
      <SectionTitle
        title="Pilih Paket Yang Sesuai"
        description="Kami menyediakan paket sesuai dengan kebutuhan yang anda inginkan,"
      />
      <div className="mt-10 grid gap-7 md:mt-10 lg:mt-14 lg:grid-cols-3">
        {prices.map((price) => (
          <PricingCard
            label={price.label}
            key={price.label}
            description={price.description}
            features={price.features}
            price={price.price}
            highlighted={price.highlighted}
          />
        ))}
      </div>
    </section>
  );
}
