import { Star } from '@phosphor-icons/react';

export function TestimonialCard({
  photo,
  name,
  occupation,
  testimonial,
}: {
  photo: string;
  name: string;
  occupation: string;
  testimonial: string;
}) {
  return (
    <div className="flex flex-col gap-7 rounded-3xl border-2 border-slate-50 bg-white px-7 py-10 md:flex-row lg:flex-col">
      <div className="flex flex-col items-center md:flex-1">
        <img
          src={photo}
          alt={photo}
          className="top-0 h-14 w-14 rounded-full object-cover"
        />
        <h3 className="text-display mt-4 text-xl font-semibold text-slate-950">
          {name}
        </h3>
        <span className="mt-1 text-sm text-slate-800">{occupation}</span>
      </div>
      <div className="md:flex-1">
        <p className="text-center text-slate-800 md:text-left lg:text-center">
          {testimonial}
        </p>
        <span className="mt-6 flex justify-center gap-1 md:justify-start lg:justify-center">
          {Array(5)
            .fill(null)
            .map((_val, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500" weight="fill" />
            ))}
        </span>
      </div>
    </div>
  );
}
