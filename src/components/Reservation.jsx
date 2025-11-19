import { motion } from "framer-motion";
import { CalendarDays, Users, Clock } from "lucide-react";

export default function Reservation() {
  return (
    <section id="reserve" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-white">Reserve a table</h3>
              <p className="mt-2 text-slate-300/90">We hold reservations for 15 minutes. Walk-ins always welcome.</p>

              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-200">
                  <CalendarDays className="h-5 w-5 text-amber-300" />
                  <input type="date" className="bg-transparent outline-none w-full placeholder:text-slate-400" />
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-200">
                  <Clock className="h-5 w-5 text-amber-300" />
                  <input type="time" className="bg-transparent outline-none w-full placeholder:text-slate-400" />
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-200 sm:col-span-2">
                  <Users className="h-5 w-5 text-amber-300" />
                  <input type="number" placeholder="Guests" className="bg-transparent outline-none w-full placeholder:text-slate-400" />
                </label>
                <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300 transition shadow-lg shadow-amber-400/20">Request booking</button>
              </form>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {[1,2,3,4].map((n) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: n * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <img
                    src={`https://images.unsplash.com/photo-15${n}41268943-restaurant?auto=format&fit=crop&w=800&q=80`}
                    onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/dish${n}/600/400`; }}
                    className="h-32 w-full object-cover rounded-xl"
                  />
                  <p className="mt-3 text-sm text-slate-300/90">Cozy corners, warm lighting, and the buzz of good company.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
