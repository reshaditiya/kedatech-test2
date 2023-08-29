import { ArrowRight } from '@phosphor-icons/react';
import { Button } from './button';

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-3xl px-7 py-10 shadow-lg shadow-slate-200">
      <div className="rounded-3xl bg-red-100 p-5">{icon}</div>
      <h3 className="mt-7 text-center font-display text-2xl font-semibold text-slate-950">
        {title}
      </h3>
      <p className="mt-6 text-center text-slate-800">{description}</p>
      <Button
        variant="link"
        icon={<ArrowRight className="h-5 w-5 text-red-900" />}
        className="mt-7"
      >
        Lebih Lanjut
      </Button>
    </div>
  );
}
