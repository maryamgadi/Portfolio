import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function Home() {
  // Filtrage des projets par type
  const stages = projects.filter(p => p.type === "Stage");
  const hackathons = projects.filter(p => p.type === "Hackathon");
  const mainProjects = projects.filter(p => p.type === "Projet");
  const miniProjects = projects.filter(p => p.type === "Mini-Projet");

  return (
    <main className="min-h-screen bg-slate-50/50 max-w-5xl mx-auto py-16 px-6 font-sans text-slate-900">
      
      {/* --- HERO SECTION AGRANDIE --- */}
      <header className="mb-28 flex flex-col md:flex-row items-center md:items-center gap-16 min-h-[400px]">
        {/* Photo de profil avec effet de profondeur */}
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur opacity-20"></div>
            <img 
              src="/profile.png" 
              alt="Maryam Gadi" 
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-white shadow-2xl shadow-blue-100/50"
            />
          </div>
        </div>

        <div className="space-y-8 text-center md:text-left flex-1">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold uppercase tracking-wider">
              Élève Ingénieure en Génie Informatique
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight text-slate-800">
              Maryam Gadi
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl leading-relaxed">
              Passionnée par l'intersection entre l'**Intelligence Artificielle** et l'ingénierie logicielle. 
              Mon expertise se concentre sur le développement de **systèmes intelligents** capables de transformer des données brutes en décisions actionnables.
            </p>
            <p className="text-lg text-slate-500 max-w-4xl leading-relaxed italic border-l-4 border-blue-100 pl-6">
              "Mon approche allie la rigueur de l'algorithmique avancée (NLP, Vision par ordinateur) à la flexibilité des architectures modernes **Cloud-Native** et **DevOps**. J'ai développé une capacité à concevoir des solutions scalables, de la preuve de concept au déploiement conteneurisé."
            </p>
          </div>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start items-center">
            <a href="mailto:maryam04gadi@gmail.com" 
               className="text-md font-bold bg-blue-700 text-white px-8 py-4 rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 active:scale-95">
              Me contacter
            </a>
            <div className="flex gap-8 text-md font-semibold text-slate-400">
              <a href="https://linkedin.com/in/maryam-gadi" target="_blank" className="hover:text-blue-700 transition-colors flex items-center gap-2">
                LinkedIn ↗
              </a>
              <a href="https://github.com/maryamgadi" target="_blank" className="hover:text-blue-700 transition-colors flex items-center gap-2">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-2xl text-sm font-black border border-blue-50 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            RECHERCHE DE PFA : JUILLET — AOÛT 2026
          </div>
        </div>
      </header>

      {/* --- SECTION STAGES --- */}
      {stages.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800">
            <span className="bg-blue-700 w-1.5 h-8 rounded-full"></span>
            Expériences & Stages
          </h2>
          <div className="grid gap-8">
            {stages.map((p) => (
              <ProjectCard key={p.title} project={p} accentColor="blue" />
            ))}
          </div>
        </section>
      )}

      {/* --- SECTION HACKATHONS --- */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800">
          <span className="bg-sky-500 w-1.5 h-8 rounded-full"></span>
          Hackathons & Innovation
        </h2>
        <div className="grid gap-8">
          {hackathons.map((p) => (
            <ProjectCard key={p.title} project={p} highlight accentColor="sky" />
          ))}
        </div>
      </section>

      {/* --- SECTION PROJETS --- */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800">
          <span className="bg-indigo-400 w-1.5 h-8 rounded-full"></span>
          Projets d'Ingénierie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainProjects.map((p) => (
            <ProjectCard key={p.title} project={p} accentColor="indigo" />
          ))}
        </div>
      </section>

      {/* --- SECTION MINI-PROJETS --- */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-slate-800">
          <span className="bg-slate-400 w-1.5 h-8 rounded-full"></span>
          Mini-Projets & Labs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((p) => (
            <ProjectCard key={p.title} project={p} isMini accentColor="slate" />
          ))}
        </div>
      </section>

      {/* --- FOOTER / ENGAGEMENT --- */}
      <footer className="border-t border-slate-200 pt-20 pb-10">
        <h2 className="text-2xl font-bold mb-12 text-center text-slate-800">Engagement Associatif</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Community Service Club", desc: "Membre actif au Centre Américain. Initiatives sociales et caritatives." },
            { title: "Centre Culturel IKLIL", desc: "Animatrice bénévole. Gestion de groupes et ateliers culturels." },
            { title: "Jardin Lalla Meryem", desc: "Coordination logistique et sensibilisation environnementale." }
          ].map((item) => (
            <div key={item.title} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <h3 className="font-bold text-lg text-blue-900">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}

// Composant de carte réutilisable
function ProjectCard({ project, highlight = false, isMini = false, accentColor }: { project: any, highlight?: boolean, isMini?: boolean, accentColor: string }) {
  const accentClasses: any = {
    blue: "hover:border-blue-200 border-transparent",
    sky: "hover:border-sky-200 border-transparent",
    indigo: "hover:border-indigo-200 border-transparent",
    slate: "hover:border-slate-200 border-transparent",
  };

  return (
    <Card className={`group overflow-hidden transition-all duration-300 border bg-white rounded-3xl shadow-sm ${accentClasses[accentColor]} ${highlight ? 'bg-gradient-to-br from-white to-blue-50/30 border-blue-100 shadow-md' : ''}`}>
      <CardHeader className={isMini ? 'p-6' : 'p-8'}>
        <div className="flex justify-between items-start mb-4">
          <CardTitle className={`${isMini ? 'text-lg' : 'text-2xl'} font-bold text-slate-800`}>
            {project.title}
          </CardTitle>
          {project.context && (
            <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-medium px-3 py-1 rounded-lg">
              {project.context}
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} className="bg-blue-50 text-blue-700 border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className={`${isMini ? 'p-6 pt-0' : 'p-8 pt-0'}`}>
        <CardDescription className="text-slate-600 text-base leading-relaxed mb-6">
          {project.description}
        </CardDescription>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-bold inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors"
        >
          Voir le projet 
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </CardContent>
    </Card>
  );
}