import { twMerge } from 'tailwind-merge';

export function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: {
  icon?: React.ReactElement;
  variant?: 'primary' | 'link' | 'outline' | 'secondary' | 'icon' | 'ghost';
  children: React.ReactNode;
  className?: string;
  props?: React.ReactPropTypes;
}) {
  const classVariant = {
    primary:
      'flex gap-2 items-center py-4 px-12 bg-cyan-700 text-white rounded-2xl font-display font-semibold hover:bg-cyan-800 active:bg-cyan-900 cursor-pointer transition',
    link: 'flex gap-2 items-center font-display font-semibold text-cyan-800 hover:border-b-2 hover:border-cyan-800 transition h-6',
    outline:
      'flex gap-2 items-center py-4 px-12 border border-cyan-800 text-cyan-800 rounded-2xl font-display font-semibold hover:bg-cyan-100 active:bg-cyan-200 cursor-pointer transition',
    ghost:
      'flex gap-2 items-center py-4 px-12 text-cyan-800 rounded-2xl font-display font-semibold hover:bg-cyan-100 active:bg-cyan-200 cursor-pointer transition',
    secondary:
      'flex gap-2 items-center py-4 px-12 bg-cyan-50 text-cyan-800 rounded-2xl font-display font-semibold hover:bg-cyan-100 active:bg-cyan-200 cursor-pointer transition',
    icon: 'flex items-center p-4 border border-cyan-800 text-cyan-800 rounded-2xl font-display font-semibold hover:bg-cyan-100 active:bg-cyan-200 cursor-pointer transition',
  };

  return (
    <button className={twMerge(classVariant[variant], className)} {...props}>
      {children}
    </button>
  );
}
