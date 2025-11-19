import { motion } from "framer-motion";
import { Star, Flame, Leaf, Wine } from "lucide-react";

const features = [
  {
    icon: <Flame className="h-6 w-6 text-amber-300" />,
    title: "Wood-fire Kitchen",
    desc: "Smoky, caramelized flavors from our custom hearth."
  },
  {
    icon: <Leaf className="h-6 w-6 text-emerald-300" />,
    title: "Seasonal Produce",
    desc: "Menus that follow the market and your mood."
  },
  {
    icon: <Wine className="h-6 w-6 text-rose-300" />,
    title: "Natural Wines",
    desc: "A playful, thoughtful list from small producers."
  },
  {
    icon: <Star className="h-6 w-6 text-sky-300" />,
    title: "City Favorite",
    desc: "4.8 average rating across 3k+ reviews."
  }
];

export default function Features() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">{f.icon}</div>
                <div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                  <p className="text-slate-300/90 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
