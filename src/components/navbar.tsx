import { Button } from './button';
import { Receipt, ArrowRight } from '@phosphor-icons/react';

function smoothScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  target: string,
) {
  const element = document.getElementById(target);
  const headerOffset = 0;
  const elementPosition = element?.getBoundingClientRect().top;
  const offsetPosition = elementPosition ?? 0 + window.scrollY - headerOffset;

  e.preventDefault();

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

export function Navbar() {
  return (
    <nav className="flex justify-between px-14 py-6">
      <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
        <Receipt className="h-6 w-6" weight="bold" />
        UpTech
      </span>
      <span className="hidden items-center md:flex md:gap-12">
        <span className="hidden h-full items-center gap-12 lg:flex">
          <a href="/" onClick={(e) => smoothScroll(e, 'about')}>
            <Button variant="link">Tentang</Button>
          </a>
          <a href="/" onClick={(e) => smoothScroll(e, 'pricing')}>
            <Button variant="link">Harga</Button>
          </a>
          <a href="/" onClick={(e) => smoothScroll(e, 'contact')}>
            <Button variant="link">Kontak</Button>
          </a>
        </span>
        <Button icon={<ArrowRight className="h-5 w-5" weight="bold" />}>
          Masuk
        </Button>
      </span>
    </nav>
  );
}
