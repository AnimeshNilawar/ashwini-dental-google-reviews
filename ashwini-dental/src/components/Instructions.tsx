import { ClipboardList, Copy, Send } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Choose Review",
    description: "Pick a review that matches your experience.",
  },
  {
    icon: Copy,
    title: "Copy Review",
    description: "Copy the review with one tap.",
  },
  {
    icon: Send,
    title: "Leave Review",
    description: "Select your rating on Google and paste your review.",
  },
];

export default function Instructions() {
  return (
    <section className="animate-fade-in px-4 py-6" aria-label="How it works">
      <div className="max-w-sm mx-auto space-y-3">
        {steps.map((step, index) => (
          <div key={step.title}>
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-text text-sm">
                  {index + 1}. {step.title}
                </p>
                <p className="text-muted text-xs mt-0.5">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center py-1" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted">
                  <path d="M12 5v14M8 15l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
