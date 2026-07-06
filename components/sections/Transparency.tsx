"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { TRANSPARENCY } from "@/lib/content";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

type FeedItem = { id: number; product: string; price: number; loc: string };

const PRODUCTS = [
  "Cold Coffee", "Mineral Water", "Protein Bar", "Masala Chips", "Energy Drink",
  "Green Tea", "Choco Cookie", "Fruit Juice", "Trail Mix", "Sparkling Water",
];
const SPOTS = ["SMS Hospital", "Metro Stn", "MNIT Gate", "Sitapura Hub", "Highway NH-48"];

let counter = 100;

function makeItem(): FeedItem {
  return {
    id: counter++,
    product: PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)],
    price: [20, 25, 30, 40, 50, 60][Math.floor(Math.random() * 6)],
    loc: SPOTS[Math.floor(Math.random() * SPOTS.length)],
  };
}

export default function Transparency() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const dashScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.97]);

  const [feed, setFeed] = useState<FeedItem[]>(() => [makeItem(), makeItem(), makeItem()]);
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
    <section id="transparency" ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden px-5 py-20 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Radical Transparency"
              title={TRANSPARENCY.heading}
              align="left"
            />
            <Reveal className="mt-6 max-w-lg text-lg text-lavender">
              {TRANSPARENCY.body}
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {TRANSPARENCY.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 140, damping: 18, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-white/90"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full iris-gradient text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Live dashboard mock */}
          <motion.div style={{ scale: dashScale }} className="glass-strong relative overflow-hidden rounded-3xl p-5 sm:p-7">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full iris-gradient opacity-20 blur-3xl" />

            {/* header */}
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-cyan opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-iris-cyan" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Live · Machine #JPR-007
                </span>
              </div>
              <AnimatePresence>
                {sync && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-full border border-iris-cyan/40 bg-iris-cyan/10 px-2.5 py-1 text-[10px] font-medium text-iris-cyan"
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
                <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                  <p className="text-[10px] uppercase tracking-wider text-lavender">{s.k}</p>
                  <motion.p
                    key={s.v}
                    initial={{ opacity: 0.4, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-lg font-semibold text-white"
                  >
                    {s.v}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* stock bar */}
            <div className="relative mt-4">
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full iris-gradient"
                  animate={{ width: `${stock}%` }}
                  transition={{ type: "spring", stiffness: 60, damping: 16 }}
                />
              </div>
            </div>

            {/* live feed */}
            <div className="relative mt-5">
              <p className="mb-2 text-[10px] uppercase tracking-wider text-lavender">
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
                      className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-iris-cyan" />
                        <span className="text-sm text-white">{item.product}</span>
                        <span className="text-xs text-lavender/70">· {item.loc}</span>
                      </div>
                      <span className="text-sm font-semibold text-iris-cyan">
                        +₹{item.price}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
