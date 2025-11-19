import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-[28rem] w-[28rem] rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.12),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(244,63,94,0.12),transparent_30%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white"
            >
              Modern dining with a soulful twist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 text-lg text-slate-300/90 max-w-xl"
            >
              Seasonal ingredients, wood-fire flair, and a wine list curated to make every night unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300 transition shadow-lg shadow-amber-400/20"
              >
                Book a table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 transition"
              >
                Explore menu
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((n) => (
                  <img key={n} src={`https://i.pravatar.cc/60?img=${n}`} className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                ))}
              </div>
              <p><span className="text-white font-semibold">2,000+</span> happy diners this month</p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-3"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541542684-4a6316cf3fb6?q=80&w=1200&auto=format&fit=crop"
                  alt="Chef plating food"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 rounded-2xl border border-amber-300/30 bg-amber-400/10 backdrop-blur p-3 shadow-xl">
                <p className="text-amber-200 text-sm">Michelin-inspired tasting menu</p>
              </div>
              <div className="absolute -top-6 -right-6 w-40 rounded-2xl border border-rose-300/30 bg-rose-400/10 backdrop-blur p-3 shadow-xl">
                <p className="text-rose-200 text-sm">Handmade pastas daily</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
