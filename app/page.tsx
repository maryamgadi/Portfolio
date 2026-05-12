import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export default function Home() {
  // Filtrage des projets par type pour une meilleure organisation
  const hackathons = projects.filter(p => p.type === "Hackathon");
  const mainProjects = projects.filter(p => p.type === "Projet");
  const miniProjects = projects.filter(p => p.type === "Mini-Projet");

  return (
    <main className="max-w-5xl mx-auto py-16 px-6 font-sans">
      {/* --- HERO SECTION --- */}
      <header className="mb-20 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Photo de profil */}
        <div className="shrink-0">
          <img 
            src="/profile.png" 
            alt="Maryam Gadi" 
            className="w-40 h-40 rounded-2xl object-cover border-4 border-muted shadow-xl"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tighter">Maryam Gadi</h1>
            <p className="text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Étudiante en 2ème année de cycle ingénieur en **Génie Informatique** à l'ENSA de Fès. 
              Je me spécialise dans l'**Intelligence Artificielle** et le **Machine Learning**, 
              avec une expertise solide en conception de **systèmes intelligents**, **DevOps** et **Full-stack**.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
            <a href="mailto:maryam04gadi@gmail.com" className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Me contacter
            </a>
            <div className="flex gap-4 text-sm font-medium text-muted-foreground">
              <a href="https://linkedin.com/in/maryam-gadi" target="_blank" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://github.com/maryamgadi" target="_blank" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponible pour un stage technique (PFA) : Juillet - Août 2026
          </div>
        </div>
      </header>

      {/* --- SECTION HACKATHONS --- */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="bg-yellow-400 w-1 h-8 rounded-full"></span>
          Hackathons & Compétitions [cite: 16]
        </h2>
        <div className="grid gap-6">
          {hackathons.map((p) => (
            <ProjectCard key={p.title} project={p} highlight />
          ))}
        </div>
      </section>

      {/* --- SECTION PROJETS D'INGÉNIERIE --- */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="bg-blue-500 w-1 h-8 rounded-full"></span>
          Projets Majeurs [cite: 23]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* --- SECTION MINI-PROJETS --- */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="bg-green-500 w-1 h-8 rounded-full"></span>
          Mini-Projets & Labs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {miniProjects.map((p) => (
            <ProjectCard key={p.title} project={p} isMini />
          ))}
        </div>
      </section>

      {/* --- SECTION ENGAGEMENT --- */}
      <section className="border-t pt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Engagement Associatif & Bénévolat [cite: 63]</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-muted/30 rounded-xl space-y-2">
            <h3 className="font-bold">Community Service Club</h3>
            <p className="text-sm text-muted-foreground">Membre actif au Centre Américain[cite: 69]. Collaboration sur des initiatives sociales[cite: 70].</p>
          </div>
          <div className="p-6 bg-muted/30 rounded-xl space-y-2">
            <h3 className="font-bold">Centre Culturel IKLIL</h3>
            <p className="text-sm text-muted-foreground">Animatrice bénévole[cite: 64]. Gestion de groupes et ateliers culturels[cite: 65].</p>
          </div>
          <div className="p-6 bg-muted/30 rounded-xl space-y-2">
            <h3 className="font-bold">Jardin Lalla Meryem</h3>
            <p className="text-sm text-muted-foreground">Coordination logistique [cite: 68] et sensibilisation environnementale[cite: 67].</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// Composant réutilisable pour les cartes de projets
function ProjectCard({ project, highlight = false, isMini = false }: { project: any, highlight?: boolean, isMini?: boolean }) {
  return (
    <Card className={`group overflow-hidden transition-all hover:ring-2 hover:ring-primary/20 ${highlight ? 'border-yellow-200 bg-yellow-50/20' : ''}`}>
      <CardHeader className={isMini ? 'p-4' : 'p-6'}>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className={isMini ? 'text-lg font-bold' : 'text-xl font-bold'}>
            {project.title}
          </CardTitle>
          {project.context && <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{project.context}</Badge>}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className={isMini ? 'p-4 pt-0' : 'p-6 pt-0'}>
        <CardDescription className="text-foreground/80 leading-relaxed mb-4">
          {project.description}
        </CardDescription>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all text-primary"
        >
          Découvrir le projet <span>→</span>
        </a>
      </CardContent>
    </Card>
  );
}