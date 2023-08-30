import { smoothScroll } from '../lib/utils';
import { Button } from './button';
import { LoginModal } from './login-modal';

export function Hero() {
  return (
    <section
      className="
			relative flex flex-col items-center gap-8 px-7 py-14 md:px-8 md:py-24 lg:flex-row lg:px-14 lg:py-28"
    >
      <div className="max-w-2xl">
        <h1 className="text-center font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl md:leading-tight lg:text-left lg:text-7xl lg:leading-tight">
          Optimalkan Bisnis Anda dengan UpTech
        </h1>
        <p className="mt-5 text-center text-slate-800 md:text-lg lg:text-left">
          Kelola barang, keuangan, dan keuntungan harian bisnis Anda dengan
          mudah menggunakan UpTech.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <LoginModal />
          <Button
            variant="outline"
            onClick={(e) => {
              smoothScroll(e, 'contact');
            }}
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
      <img
        src="clouds/cloud-hero.svg"
        alt=""
        className="absolute bottom-0 right-0 -z-10"
      />
    </section>
  );
}
