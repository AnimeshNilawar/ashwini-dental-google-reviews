import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center px-4 pt-10 pb-6"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
        <GraduationCap className="w-8 h-8 text-primary" aria-hidden="true" />
      </div>
      <h1 className="text-xl sm:text-2xl font-heading font-bold text-text mb-1.5">
        Shri Sambhaji College of Management & Technology
      </h1>
      <p className="text-base sm:text-lg text-primary font-heading font-semibold mb-3">
        Share Your Experience
      </p>
      <p className="text-sm text-muted max-w-[460px] mx-auto leading-relaxed">
        Help future students make informed decisions by sharing your honest experience at Shri Sambhaji College of Management & Technology.
        Whether you are a student, alumni, parent, faculty member, or visitor, your feedback helps
        others make informed decisions.
      </p>
    </motion.section>
  );
}
