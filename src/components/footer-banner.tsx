import { SectionTitle } from './section-title';
import { Button } from './button';
import { ArrowRight } from '@phosphor-icons/react';

export function FooterBanner() {
  return (
    <section className="relative flex flex-col items-center px-7 pb-40 pt-14 md:px-8 md:pb-52 md:pt-24 lg:px-14 lg:pb-72 lg:pt-0">
      <img
        src="/clouds/cloud-bottom.svg"
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
      <SectionTitle
        title="Dapatkan UpTech Sekarang!"
        description="Langganan layanan manajemen UpTech sekarang dan masuk ke aplikasi."
      />
      <Button className="mt-10">
        Masuk
        <ArrowRight className="h-5 w-5" weight="bold" />
      </Button>
    </section>
  );
}
