export default function CrewPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Marco Rossi",
      role: "AI Strategy Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Esperto in trasformazione digitale AI-First con 15+ anni di esperienza."
    },
    {
      id: 2,
      name: "Sofia Chen",
      role: "Machine Learning Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Specialista in deep learning e implementazioni AI enterprise."
    },
    {
      id: 3,
      name: "Alessandro Bianchi",
      role: "Data Science Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Data scientist con focus su analytics predittive e business intelligence."
    },
    {
      id: 4,
      name: "Elena Verdi",
      role: "AI Ethics Consultant",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Esperta in etica AI e governance dei dati per implementazioni responsabili."
    }
  ];

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Il Nostro Crew
          </p>
        </div>
        
        <div className="p-4">
          <p className="text-[#60758a] text-lg leading-relaxed mb-8">
            Un team di esperti AI-First che trasforma le aziende in Supersapiens. 
            Ogni membro del nostro crew porta competenze uniche per guidare la tua trasformazione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-sm border border-[#f0f2f5] p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 bg-center bg-cover rounded-full"
                  style={{ backgroundImage: `url("${member.image}")` }}
                ></div>
                <div>
                  <h3 className="text-[#111418] text-lg font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#0c7ff2] text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-[#60758a] text-sm leading-normal">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 mt-8">
          <div className="bg-gradient-to-r from-[#0c7ff2] to-[#1e40af] rounded-lg p-6 text-center">
            <h2 className="text-white text-2xl font-bold mb-4">
              Pronto a Unirti al Futuro AI-First?
            </h2>
            <p className="text-white/90 mb-6">
              Il nostro crew è pronto a guidare la tua trasformazione. Iniziamo insieme il tuo Regenerative Reboot.
            </p>
            <button className="bg-white text-[#0c7ff2] px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
              Contatta il Crew
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 