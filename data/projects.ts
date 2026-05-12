export const projects = [
  // --- SECTION HACKATHONS ---
  {
    title: "ClaimGuardAI",
    type: "Hackathon",
    context: "Ramadan AI Hackathon (Ministère de la Transition Numérique)",
    description: "Solution d'IA pour automatiser la vérification des dossiers d'assurance. Extraction automatique de données et détection d'erreurs.",
    tags: ["Python", "OCR (Tesseract)", "NLP", "Flask"],
    link: "https://github.com/maryamgadi/ClaimGuardAI" // [cite: 17, 18, 19, 20, 21]
  },

  // --- SECTION PROJETS D'INGÉNIERIE (PFA / MAJEURS) ---
  {
    title: "HCI Comparative Study",
    type: "Projet",
    context: "Stage d'initiation à ENSAF",
    description: "Étude comparative et dimensionnement d'une solution d'infrastructure hyperconvergée (Dell VxRail) pour optimiser le datacenter de l'ENSA.",
    tags: ["HCI", "Dell VxRail", "Infrastructure", "Scalabilité"], // [cite: 12, 13, 15]
  },
  {
    title: "AWS-TerraDeploy-Core",
    type: "Projet",
    context: "Cloud & Infrastructure",
    description: "Automatisation de l'infrastructure AWS via Terraform pour le déploiement conteneurisé d'une application avec Docker.",
    tags: ["Terraform", "AWS", "Docker", "IaaC"],
    link: "https://github.com/maryamgadi/AWS-TerraDeploy-Core" // [cite: 35]
  },
  {
    title: "SNCF Sales BI",
    type: "Projet",
    context: "Business Intelligence",
    description: "Pipeline BI complet pour l'optimisation des performances et de la ponctualité du trafic ferroviaire SNCF.",
    tags: ["Talend", "SQL", "Power BI"],
    link: "https://github.com/maryamgadi/SNCF-Project-BI" // [cite: 29]
  },
  {
    title: "Swappify",
    type: "Projet",
    context: "Peer-Learning Platform",
    description: "Plateforme collaborative avec système de matching intégré pour l'échange de compétences entre pairs.",
    tags: ["Web Dev", "Matching System", "Collaboration"],
    link: "https://github.com/maryamgadi/Swappify" // [cite: 25, 26]
  },
  {
    title: "KubeFlask-Local",
    type: "Mini-Projet",
    context: "Orchestration",
    description: "Déploiement et gestion d'une application Flask conteneurisée au sein d'un cluster Kubernetes local via Minikube.",
    tags: ["Kubernetes", "Minikube", "Docker", "Flask"],
    link: "https://github.com/maryamgadi/KubeFlask-Local" // [cite: 36]
  },

  // --- SECTION MINI-PROJETS & LABS ---
  {
    title: "ImageLab",
    type: "Mini-Projet",
    description: "Application Streamlit de génération d'images (Stable Diffusion & LoRA) avec historique stocké sous SQLite.",
    tags: ["Stable Diffusion", "Python", "SQLite", "Streamlit"],
    link: "https://github.com/maryamgadi/ImageLab" // [cite: 22, 24]
  },
  {
    title: "CI-CD Project",
    type: "Mini-Projet",
    description: "Mise en place d'un pipeline automatisé (build, tests, déploiement) avec GitHub Actions pour une application Dockerisée.",
    tags: ["CI/CD", "GitHub Actions", "Docker"],
    link: "https://github.com/maryamgadi/mini-projet-ci-cd" // [cite: 32, 33]
  },
  {
    title: "Linux System Automation",
    type: "Mini-Projet",
    description: "Scripts Bash et Python pour la création de sauvegardes automatiques et la génération de rapports.",
    tags: ["Bash", "Python", "Linux", "Git"],
    link: "https://github.com/maryamgadi/Linux-System-Automation-Versioning" // [cite: 30, 31]
  },
  {
    title: "Customer Service Chatbot",
    type: "Projet",
    description: "Agent conversationnel scripté avec transfert intelligent vers un conseiller humain.",
    tags: ["NLP", "Automation", "Chatbot"],
    link: "https://github.com/aya-jabbari/technical-support-chatbot" // [cite: 27, 28]
  },
  {
    title: "Commande Fast-Food Café",
    type: "Mini-Projet",
    context: "Gestion de Commandes Desktop",
    description: "Application C# (WinForms) moderne pour la gestion en temps réel des commandes, incluant catalogue, panier dynamique et calcul automatique.",
    tags: ["C#", ".NET Framework", "WinForms", "UI/UX"],
    link: "https://github.com/maryamgadi/CommandeFastFoodCafe"
  },
  {
    title: "Fès Go - Guide AR",
    type: "Mini-Projet",
    context: "Réalité Augmentée & Mobilité",
    description: "Application Android immersive utilisant la Réalité Augmentée pour la localisation de points d'intérêt à Fès via fusion de capteurs (GPS/Azimut).",
    tags: ["Java", "Room SQLite", "AR", "MVVM", "Android SDK 36"],
    link: "https://github.com/maryamgadi/Projet-Fes-Go"
  }
]; 