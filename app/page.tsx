import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function Home() {
  const stages = projects.filter(p => p.type === "Stage");
  const hackathons = projects.filter(p => p.type === "Hackathon");
  const mainProjects = projects.filter(p => p.type === "Projet");
  const miniProjects = projects.filter(p => p.type === "Mini-Projet");

  return (
    // Fond légèrement teinté en bleu très clair (slate-50) pour un aspect moins agressif que le blanc pur
    <main className="min-h-screen bg-slate-50/50 max-w-5xl mx-auto py-16 px-6 font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <header className="mb-24 flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="shrink-0">
          <img 
            src="/profile.png" 
            alt="Maryam Gadi" 
            className="w-44 h-44 rounded-3xl object-cover border-4 border-white shadow-2xl shadow-blue-100"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-3">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-800">
              Maryam Gadi
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Étudiante en 2ème année de cycle ingénieur en <span className="text-blue-700 font-semibold">Génie Informatique</span> à l'ENSA de Fès. 
              Spécialisée en <span className="text-blue-700 font-semibold">Intelligence Artificielle</span>, 
              conception de systèmes intelligents et architectures Cloud.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
            <a href="mailto:maryam04gadi@gmail.com" 
               className="text-sm font-semibold bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
              Me contacter
            </a>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="https://linkedin.com/in/maryam-gadi" target="_blank" className="hover:text-blue-700 transition-colors">LinkedIn</a>
              <a href="https://github.com/maryamgadi" target="_blank" className="hover:text-blue-700 transition-colors">GitHub</a>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-white text-blue-700 px-5 py-2.5 rounded-2xl text-sm font-bold border border-blue-100 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            Disponible pour PFA : Juillet - Août 2026
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

      {/* --- SECTION ENGAGEMENT --- */}
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

function ProjectCard({ project, highlight = false, isMini = false, accentColor }: { project: any, highlight?: boolean, isMini?: boolean, accentColor: string }) {
  const accentClasses: any = {
    blue: "hover:border-blue-200 border-transparent",
    sky: "hover:border-sky-200 border-transparent",
    indigo: "hover:border-indigo-200 border-transparent",
    slate: "hover:border-slate-200 border-transparent",
  };

  return (
    <Card className={`group overflow-hidden transition-all duration-300 border bg-white rounded-3xl shadow-sm ${accentClasses[accentColor]} ${highlight ? 'bg-gradient-to-br from-white to-blue-50/30 border-blue-100' : ''}`}>
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