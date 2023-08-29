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
    <div className="flex flex-col items-center rounded-3xl border-2 border-slate-50 bg-white px-7 py-10">
      <div className="rounded-3xl bg-cyan-50 p-5">{icon}</div>
      <h3 className="mt-7 text-center font-display text-2xl font-semibold text-slate-950">
        {title}
      </h3>
      <p className="mt-6 text-center text-slate-800">{description}</p>
      <Button
        variant="link"
        icon={<ArrowRight className="h-5 w-5 text-cyan-800" />}
        className="mt-7"
      >
        Lebih Lanjut
      </Button>
    </div>
  );
}
