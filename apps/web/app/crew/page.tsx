export default function CrewPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Marco Rossi",
      role: "AI Strategy Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Esperto in trasformazione digitale AI-First con 15+ anni di esperienza.",
    },
    {
      id: 2,
      name: "Sofia Chen",
      role: "Machine Learning Engineer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Specialista in deep learning e implementazioni AI enterprise.",
    },
    {
      id: 3,
      name: "Alessandro Bianchi",
      role: "Data Science Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Data scientist con focus su analytics predittive e business intelligence.",
    },
    {
      id: 4,
      name: "Elena Verdi",
      role: "AI Ethics Consultant",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Esperta in etica AI e governance dei dati per implementazioni responsabili.",
    },
  ];

  return (
    <div className="flex flex-1 justify-center px-40 py-5">
      <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="tracking-light min-w-72 text-[32px] font-bold leading-tight text-[#111418]">
            Il Nostro Crew
          </p>
        </div>

        <div className="p-4">
          <p className="mb-8 text-lg leading-relaxed text-[#60758a]">
            Un team di esperti AI-First che trasforma le aziende in
            Supersapiens. Ogni membro del nostro crew porta competenze uniche
            per guidare la tua trasformazione.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-lg border border-[#f0f2f5] bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="h-16 w-16 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url("${member.image}")` }}
                ></div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-[#111418]">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#0c7ff2]">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-normal text-[#60758a]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4">
          <div className="rounded-lg bg-gradient-to-r from-[#0c7ff2] to-[#1e40af] p-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Pronto a Unirti al Futuro AI-First?
            </h2>
            <p className="mb-6 text-white/90">
              Il nostro crew è pronto a guidare la tua trasformazione. Iniziamo
              insieme il tuo Regenerative Reboot.
            </p>
            <button className="rounded-lg bg-white px-6 py-3 font-bold text-[#0c7ff2] transition-colors hover:bg-gray-50">
              Contatta il Crew
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
