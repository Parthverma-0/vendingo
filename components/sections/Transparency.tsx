"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { TRANSPARENCY } from "@/lib/content";
import { em } from "@/lib/em";
import SectionHeading from "../ui/SectionHeading";

type FeedItem = { id: number; product: string; price: number; loc: string };

const PRODUCTS = [
  "Cold Coffee", "Mineral Water", "Protein Bar", "Masala Chips", "Energy Drink",
  "Green Tea", "Choco Cookie", "Fruit Juice", "Trail Mix", "Sparkling Water",
];
const SPOTS = ["SMS Hospital", "Metro Stn", "MNIT Gate", "Sitapura Hub", "Highway NH-48"];

// Fixed initial feed so the server-rendered HTML matches the first client
// render — random items only start flowing in after mount.
const INITIAL_FEED: FeedItem[] = [
  { id: 102, product: "Cold Coffee", price: 40, loc: "SMS Hospital" },
  { id: 101, product: "Mineral Water", price: 20, loc: "Metro Stn" },
  { id: 100, product: "Protein Bar", price: 60, loc: "MNIT Gate" },
];

let counter = 103;

function makeItem(): FeedItem {
  return {
    id: counter++,
    product: PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)],
    price: [20, 25, 30, 40, 50, 60][Math.floor(Math.random() * 6)],
    loc: SPOTS[Math.floor(Math.random() * SPOTS.length)],
  };
}

// Signature animation: the page's one cinematic dark section — it fades up
// from the white page as you scroll in, pinned while the live dashboard runs.
export default function Transparency() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);
  const dashY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);

  const [feed, setFeed] = useState<FeedItem[]>(INITIAL_FEED);
  const [revenue, setRevenue] = useState(48230);
  const [units, setUnits] = useState(1284);
  const [stock, setStock] = useState(72);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => {
      const item = makeItem();
      setFeed((f) => [item, ...f].slice(0, 5));
      setRevenue((r) => r + item.price);
      setUnits((u) => u + 1);
      setStock((s) => (s <= 40 ? 78 : s - Math.floor(Math.random() * 3)));
    }, 2200);

    // ~30s sync pulse
    const pulse = setInterval(() => {
      setSync(true);
      setTimeout(() => setSync(false), 1400);
    }, 6000); // accelerated for demo; copy still says "every 30 seconds"

    return () => {
      clearInterval(tick);
      clearInterval(pulse);
    };
  }, []);

  return (
    <section id="transparency" ref={ref} className="relative lg:h-[180vh]">
      <motion.div
        style={{ opacity: sectionOpacity }}
        className="flex items-center bg-night px-5 py-16 sm:px-8 lg:sticky lg:top-0 lg:min-h-screen lg:overflow-hidden lg:py-20"
      >
        {/* faint violet bloom in the dark */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[50vw] w-[70vw] -translate-x-1/2 rounded-full bg-violet/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Radical Transparency"
              title={TRANSPARENCY.heading}
              align="left"
              dark
            />
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/60"
            >
              {em(TRANSPARENCY.body, "dark")}
            </motion.p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {TRANSPARENCY.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 140, damping: 18, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-white/85"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Live dashboard mock */}
          <motion.div
            style={{ y: dashY }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-7"
          >
            {/* header */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white">
                  Live · Machine #JPR-007
                </span>
              </div>
              <AnimatePresence>
                {sync && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-full border border-violet-bright/40 bg-violet/20 px-2.5 py-1 font-mono text-[10px] font-medium text-violet-bright"
                  >
                    Syncing… 30s
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* stat tiles */}
            <div className="relative mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "Revenue", v: `₹${revenue.toLocaleString("en-IN")}` },
                { k: "Units sold", v: units.toLocaleString("en-IN") },
                { k: "Stock", v: `${stock}%` },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/50">
                    {s.k}
                  </p>
                  <motion.p
                    key={s.v}
                    initial={{ opacity: 0.4, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 font-display text-lg font-bold text-white"
                  >
                    {s.v}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* stock bar */}
            <div className="relative mt-4">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-violet-bright"
                  animate={{ width: `${stock}%` }}
                  transition={{ type: "spring", stiffness: 60, damping: 16 }}
                />
              </div>
            </div>

            {/* live feed */}
            <div className="relative mt-5">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-white/50">
                Live dispense feed
              </p>
              <div className="flex flex-col gap-2">
                <AnimatePresence initial={false}>
                  {feed.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: -14, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-bright" />
                        <span className="text-sm text-white">{item.product}</span>
                        <span className="text-xs text-white/40">· {item.loc}</span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-emerald-400">
                        +₹{item.price}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
