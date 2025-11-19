import { motion } from "framer-motion";

const items = [
  {
    name: "Charred Octopus",
    price: "$22",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    tag: "Signature"
  },
  {
    name: "Burrata & Stone Fruit",
    price: "$18",
    img: "https://images.unsplash.com/photo-1604909052743-88e65db67a63?q=80&w=1200&auto=format&fit=crop",
    tag: "Summer"
  },
  {
    name: "Truffle Tagliatelle",
    price: "$29",
    img: "https://images.unsplash.com/photo-1526312426976-593c64a68a9b?q=80&w=1200&auto=format&fit=crop",
    tag: "Fresh Pasta"
  }
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured dishes</h2>
          <a href="#" className="text-amber-300 hover:text-amber-200">View full menu →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <span className="text-amber-300 font-medium">{item.price}</span>
                </div>
                <span className="mt-3 inline-block text-xs text-rose-200/80 border border-rose-200/30 rounded-full px-2 py-1">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
