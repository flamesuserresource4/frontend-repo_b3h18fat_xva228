import { Menu, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-amber-400/40 blur opacity-0 group-hover:opacity-100 transition" />
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-slate-900 font-black shadow-inner">
                  R
                </div>
              </div>
              <span className="text-white/90 font-semibold tracking-wide text-lg">Rosella</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-slate-300/90">
              <a href="#menu" className="hover:text-white transition">Menu</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#reserve" className="hover:text-white transition">Reservations</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:+1234567890" className="hidden sm:flex items-center gap-2 text-amber-300 hover:text-amber-200 transition">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">(123) 456-7890</span>
              </a>
              <button className="md:hidden p-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
