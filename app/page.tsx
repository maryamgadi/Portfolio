import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function Home() {
  const stages = projects.filter(p => p.type === "Stage");
  const hackathons = projects.filter(p => p.type === "Hackathon");
  const mainProjects = projects.filter(p => p.type === "Projet");
  const miniProjects = projects.filter(p => p.type === "Mini-Projet");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff5f7] via-[#f8f9ff] to-white max-w-6xl mx-auto py-20 px-8 font-sans text-slate-800">
      
      {/* --- HERO SECTION : DESCRIPTION ENRICHIE --- */}
      <header className="mb-32 flex flex-col md:flex-row items-center gap-16">
        <div className="shrink-0 relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-pink-200/40 to-violet-200/40 rounded-full blur-3xl opacity-60"></div>
          <img 
            src="/profile.png" 
            alt="Maryam Gadi" 
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-[3rem] object-cover border-8 border-white shadow-[0_20px_50px_rgba(255,182,193,0.2)]"
          />
        </div>

        <div className="space-y-8 text-center md:text-left flex-1">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/60 backdrop-blur-sm border border-pink-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 shadow-sm">
              Ingénierie & Intelligence Artificielle
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Maryam <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Gadi</span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-2xl text-slate-600 max-w-4xl leading-relaxed font-medium">
                Étudiante en **2ème année de cycle ingénieur en Génie Informatique** à l'ENSA de Fès. 
                Je suis passionnée par l'**Intelligence Artificielle**, le **Machine Learning** et le **Développement** de solutions innovantes.
              </p>
              <div className="h-1 w-20 bg-pink-200 rounded-full mx-auto md:mx-0"></div>
              <p className="text-lg text-slate-400 max-w-3xl leading-relaxed italic font-light">
                "Mon expertise se concentre sur la conception de systèmes intelligents et scalables, 
                alliant la puissance des modèles prédictifs à la rigueur du développement Full-stack et DevOps."
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center">
            <a href="mailto:maryam04gadi@gmail.com" 
               className="px-10 py-5 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-pink-500 transition-all duration-500 shadow-xl shadow-pink-100 active:scale-95">
              Me contacter
            </a>
            <div className="flex gap-8 text-xs font-black text-slate-300 tracking-widest uppercase">
              <a href="https://linkedin.com/in/maryam-gadi" target="_blank" className="hover:text-pink-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/maryamgadi" target="_blank" className="hover:text-violet-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </header>

      {/* --- SECTIONS PROJETS --- */}
      <div className="space-y-40">
        
        {/* STAGES */}
        {stages.length > 0 && (
          <section>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-violet-300 whitespace-nowrap">Expériences & Stages</h2>
              <div className="h-[1px] w-full bg-violet-100"></div>
            </div>
            <div className="grid gap-10">
              {stages.map((p) => <ProjectCard key={p.title} project={p} theme="violet" />)}
            </div>
          </section>
        )}

        {/* HACKATHONS */}
        <section>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-pink-300 whitespace-nowrap">Hackathons & Innovation</h2>
            <div className="h-[1px] w-full bg-pink-100"></div>
          </div>
          <div className="grid gap-10">
            {hackathons.map((p) => <ProjectCard key={p.title} project={p} theme="pink" highlight />)}
          </div>
        </section>

        {/* PROJETS D'INGÉNIERIE */}
        <section>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-slate-300 whitespace-nowrap">Projets Majeurs</h2>
            <div className="h-[1px] w-full bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainProjects.map((p) => <ProjectCard key={p.title} project={p} theme="slate" />)}
          </div>
        </section>

        {/* --- SECTION MINI-PROJETS RÉACTIVÉE --- */}
        {miniProjects.length > 0 && (
          <section>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-sm font-black uppercase tracking-[0.5em] text-pink-200 whitespace-nowrap">Mini-Projets & Labs</h2>
              <div className="h-[1px] w-full bg-pink-50"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {miniProjects.map((p) => <ProjectCard key={p.title} project={p} theme="pink" isMini />)}
            </div>
          </section>
        )}

      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-40 border-t border-pink-50 pt-20 pb-10 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-12">Engagement Associatif</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          {["Community Service Club", "Centre Culturel IKLIL", "Jardin Lalla Meryem"].map((club) => (
            <div key={club} className="group">
              <h3 className="font-bold text-slate-800 group-hover:text-pink-400 transition-colors cursor-default">{club}</h3>
              <div className="w-0 group-hover:w-full h-[1px] bg-pink-200 mx-auto transition-all duration-500 mt-2"></div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({ project, theme, highlight = false, isMini = false }: { project: any, theme: 'pink' | 'violet' | 'slate', highlight?: boolean, isMini?: boolean }) {
  const styles = {
    pink: "hover:shadow-[0_20px_50px_rgba(255,182,193,0.15)] ring-pink-100",
    violet: "hover:shadow-[0_20px_50px_rgba(237,233,254,0.3)] ring-violet-100",
    slate: "hover:shadow-[0_20px_50px_rgba(241,245,249,0.5)] ring-slate-100"
  };

  return (
    <Card className={`group relative border-none rounded-[2.5rem] bg-white transition-all duration-700 shadow-[0_10px_40px_rgba(0,0,0,0.02)] ${styles[theme]} hover:-translate-y-2 ${highlight ? 'ring-1' : ''}`}>
      <div className={isMini ? "p-8 space-y-4" : "p-12 space-y-8"}>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} className="bg-[#fcfcfc] text-slate-400 border-none px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          <CardTitle className={`${isMini ? 'text-xl' : 'text-4xl'} font-black text-slate-900 tracking-tighter leading-tight`}>
            {project.title}
          </CardTitle>
          {!isMini && <p className="text-[9px] font-black uppercase tracking-[0.3em] text-pink-400">{project.context || 'Engineering Project'}</p>}
        </div>
        <CardDescription className={`text-slate-500 ${isMini ? 'text-sm' : 'text-lg'} leading-relaxed font-light`}>
          {project.description}
        </CardDescription>
        <div className="pt-2">
          <a href={project.link} target="_blank" className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900">
            Explorer
            <span className="w-8 h-[2px] bg-pink-200 group-hover:w-12 transition-all"></span>
          </a>
        </div>
      </div>
    </Card>
  );
}