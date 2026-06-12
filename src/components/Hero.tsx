import { Smile } from "lucide-react";

export default function Hero() {
  return (
    <section className="animate-fade-in text-center px-4 pt-12 pb-6">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
        <Smile className="w-10 h-10 text-primary" aria-hidden="true" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-text mb-2">
        Ashwini Dental Clinic
      </h1>
      <p className="text-lg sm:text-xl text-primary font-medium mb-4">
        Your Smile Matters To Us
      </p>
      
    </section>
  );
}
