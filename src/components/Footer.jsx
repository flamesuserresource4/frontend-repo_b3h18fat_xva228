import { MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-slate-900 font-black">R</div>
              <p className="text-slate-300/90">123 Market St, Riverdale • Open Tue–Sun</p>
            </div>
            <div className="flex items-center gap-4 text-slate-300/90">
              <a href="#" className="inline-flex items-center gap-2 hover:text-white"><MapPin className="h-4 w-4" /> Get directions</a>
              <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">© {new Date().getFullYear()} Rosella. All rights reserved.</p>
      </div>
    </footer>
  );
}
