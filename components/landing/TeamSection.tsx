import { SectionHeading } from "@/components/SectionHeading";

const team = [
  { name: "Expert 1", role: "Customer Success" },
  { name: "Expert 2", role: "Operations" },
  { name: "Expert 3", role: "Onboarding" },
  { name: "Expert 4", role: "Community" },
];

export function TeamSection() {
  return (
    <section className="border-t border-black/[0.06] bg-canvas-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            align="left"
            title={
              <>
                <span className="text-brand">Team</span> · Unterstützung
              </>
            }
            subtitle="Ein eingespieltes Team unterstützt dich bei Fragen, Calls und Organisation — Platzhalter-Namen, bis dein echtes Team feststeht."
          />
          <div className="space-y-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-[16px] border border-black/[0.06] bg-white p-4 shadow-sm"
              >
                <div className="h-12 w-12 shrink-0 rounded-full bg-[#d8d8dd] ring-2 ring-white" />
                <div>
                  <p className="text-[16px] font-bold text-ink">{m.name}</p>
                  <p className="text-[13px] text-ink-muted">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
