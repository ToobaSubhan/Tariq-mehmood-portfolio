export function Marquee() {
  const items = [
    "KNITS",
    "·",
    "WOVEN",
    "·",
    "DENIM",
    "·",
    "PATTERN MAKING",
    "·",
    "FIT",
    "·",
    "QUALITY",
    "·",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-foreground/15 bg-film text-film-foreground py-4">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-mono text-sm md:text-base tracking-[0.2em] uppercase"
            style={{ color: t === "·" ? "var(--gold)" : undefined }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}