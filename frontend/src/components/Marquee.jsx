import { Sprout } from "lucide-react";

const ITEMS = [
  "Behind every good operation",
  "Paddock boundaries",
  "Job planning & tracking",
  "Team visibility",
  "Less paperwork",
  "Western Australia",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item) => (
      <span key={item} className="flex items-center">
        <span className="whitespace-nowrap px-8 font-display text-sm font-bold uppercase tracking-[0.25em] text-cream/90 sm:text-base">
          {item}
        </span>
        <Sprout className="h-4 w-4 shrink-0 text-gold" />
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    className="overflow-hidden border-y border-pineline bg-pine py-4"
  >
    <div className="marquee-track flex w-max">
      <Row />
      <Row />
    </div>
  </div>
);

export default Marquee;
