import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-10 pb-4 px-4">
      <div className="max-w-[520px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <p className="text-[15px] font-bold text-text font-heading mb-1">
            Shri Sambhaji College of Pharmacy
          </p>
          <h1 className="text-lg font-semibold text-primary font-heading mb-2">
            Share Your Experience
          </h1>
          <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed">
            Help future pharmacy students by sharing your honest experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
