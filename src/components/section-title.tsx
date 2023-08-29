export function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="text-center font-display text-4xl font-semibold leading-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-5 text-center text-slate-800">{description}</p>
    </>
  );
}
