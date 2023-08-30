export function formatNumberTothousand(number: number) {
  const formatter = new Intl.NumberFormat('id-ID');

  return formatter.format(number);
}

export function smoothScroll(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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
