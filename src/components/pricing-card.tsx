import { twMerge } from 'tailwind-merge';
import { Button } from './button';
import { Check } from '@phosphor-icons/react';
import { formatNumberTothousand } from '../lib/utils';

export function PricingCard({
  highlighted = false,
  label,
  price,
  description,
  features,
}: {
  label: string;
  price: number;
  description: string;
  features: string[];
  highlighted: boolean;
}) {
  return (
    <div
      className={twMerge(
        'flex flex-col justify-between rounded-3xl border-2 border-slate-50 px-7 py-10',
        highlighted && 'border-none bg-cyan-700',
      )}
    >
      <div>
        <span
          className={twMerge(
            'text-xl text-slate-800',
            highlighted && 'text-slate-50',
          )}
        >
          {label}
        </span>
        <div
          className={twMerge(
            'mt-1 flex items-end gap-3 font-bold text-slate-950',
            highlighted && 'text-white',
          )}
        >
          <span className="font-display text-5xl">
            {formatNumberTothousand(price)}rb
          </span>
          / bulan
        </div>
        <p className={twMerge('mt-1 text-slate-800', 'text-slate-50')}>
          {description}
        </p>
        <ul className="mt-6 flex flex-col gap-4">
          {features?.map((feature) => (
            <li
              className={twMerge(
                'flex items-center gap-3 font-bold text-slate-950',
                highlighted && 'text-white',
              )}
              key={feature}
            >
              <Check
                className={twMerge(
                  'h-4 w-4 text-cyan-700',
                  highlighted && 'text-white',
                )}
                weight="bold"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Button
        variant="secondary"
        className={twMerge(
          'mt-7 flex w-full justify-center',
          highlighted && 'bg-white',
        )}
      >
        Langganan
      </Button>
    </div>
  );
}
