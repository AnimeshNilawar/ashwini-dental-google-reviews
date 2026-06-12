import { Star } from "lucide-react";

export default function TrustBadge() {
  return (
    <section className="animate-slide-up px-4 pb-2" aria-label="Trust indicator">
      <div className="max-w-sm mx-auto bg-card border border-border rounded-xl px-5 py-3 flex items-center justify-center gap-2 shadow-sm">
        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
        <span className="text-sm font-medium text-text">
          Trusted By Hundreds Of Patients
        </span>
      </div>
    </section>
  );
}
