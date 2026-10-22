/**
 * Portfolio Nayrouz Gasmi - Script Dynamique & Multilingue (FR / EN)
 * Fonctionnalités : Traduction instantanée FR/EN, Filtrage projets, Modales détaillées,
 * Mode Sombre/Clair, Compteurs animés, Copie rapide et Formulaire de contact.
 */

// --- DICTIONNAIRE MULTILINGUE COMPLET (FR / EN) ---
const I18N_DICTIONARY = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_skills: "Compétences",
    nav_education: "Formation",
    nav_contact: "Contact",
    nav_cv_btn: "CV",
    nav_cv_fr_title: "CV Français",
    nav_cv_fr_sub: "Version FR (PDF)",
    nav_cv_en_title: "Resume English",
    nav_cv_en_sub: "Version EN (PDF)",

    // Hero
    hero_status: "Disponible pour opportunités • Full Stack & DevOps",
    hero_role_title: "Ingénieure Informatique",
    hero_role_sub: "Full Stack Developer & DevOps",
    hero_desc: "Spécialisée dans la conception d'applications web scalables, l'architecture d'APIs REST résilientes et l'automatisation de pipelines CI/CD dans le cloud. Passionnée par l'écosystème Go, React, Angular, Spring Boot et la conteneurisation Docker / Kubernetes.",
    hero_btn_projects: "Explorer mes Projets",
    hero_btn_cv: "Télécharger mon CV",
    hero_pill_1: "🚀 Microservices Go & Télémétrie",
    hero_pill_2: "⚡ CI/CD Jenkins & Kubernetes",
    hero_profile_role: "Ingénieure Informatique • Full Stack & DevOps",
    hero_stat_1_label: "Années d'Ingénierie & Projets",
    hero_stat_2_label: "Projets Majeurs Déployés",
    hero_stat_3_label: "Interventions manuelles réduites (ETL)",
    hero_stat_4_label: "Conteneurisé & Automatisation CI/CD",

    // Projects Section
    projects_badge: "Portfolio Technique",
    projects_title: "Mes Projets Réalisés",
    projects_subtitle: "Une sélection complète de projets industriels, IoT, e-commerce et cloud conçus et déployés, classés par ordre chronologique (2026 ➔ 2024).",
    filter_all: "Tous les Projets",
    filter_fullstack: "Full Stack & Web",
    filter_iot: "IoT & Télémétrie",
    filter_devops: "DevOps & Cloud",
    filter_erp: "ERP & Automatisation",
    btn_detail_features: "Voir les détails & 12 fonctionnalités",
    btn_detail_standard: "Voir les détails & architecture",
    features_preview_title: "⚡ 12 Modules & Capacités Clés :",
    features_preview_more: "+7 autres (Replay, Satellites, Geofencing...)",

    // Experience Section
    exp_badge: "Parcours Professionnel",
    exp_title: "Expériences en Entreprise",
    exp_subtitle: "Interventions sur des projets à forte valeur ajoutée, de l'ingénierie logicielle au déploiement en production.",
    exp_job1_role: "Software Engineer / Full Stack Developer",
    exp_job1_date: "01/2026 – Aujourd'hui",
    exp_job1_task1: "Conception et développement de la plateforme de télémétrie <strong>VMDTrac V2</strong> (React.js, TypeScript, Go) : cartographie multi-fournisseurs (Google, Mapbox 3D, OSM), module de Replay avancé et sécurisation multi-tenant avec <strong>Zitadel IAM</strong> (OAuth2 / OIDC, RBAC).",
    exp_job1_task2: "Développement de la <strong>Plateforme de Gestion Commerciale & Calcul des Commissions</strong> : moteur de tranches progressives, Traefik, Go Gin, React TS, PostgreSQL et exports PDF.",
    exp_job1_task3: "Conception, développement et sécurisation d'APIs REST connectées aux protocoles satellites (Garmin InReach, Iridium, terminaux SPOT).",
    exp_job1_task4: "Développement, personnalisation et intégration de modules métier sous <strong>Odoo 17</strong> pour la gestion d'actifs et d'abonnements.",
    exp_job1_task5: "Administration d'environnements Odoo : installation, configuration, rapports personnalisés et conteneurisation Docker.",
    exp_job1_task6: "Participation à l'amélioration continue des processus d'ingénierie et de la qualité du code (tests, revues de code, CI).",

    exp_job2_role: "Ingénieur Informatique Full Stack",
    exp_job2_date: "01/2025 – 12/2025",
    exp_job2_task1: "Conception et développement du système de gestion des étrangers et titres de séjour (<strong>تطبيقية التصرف في الأجانب</strong>) avec <strong>Spring Boot</strong> et <strong>Angular</strong>.",
    exp_job2_task2: "Intégration de SDKs et APIs REST pour la numérisation de documents ICAO et la <strong>lecture optique / parsing automatique de la zone MRZ</strong> des passeports.",
    exp_job2_task3: "Intégration d'équipements biométriques pour la <strong>capture et validation d'empreintes digitales</strong> lors de l'enrôlement.",
    exp_job2_task4: "Déploiement et sécurisation des applications sur des serveurs VPS sous environnement Linux.",
    exp_job2_task5: "Mise en place de pipelines CI/CD afin d'automatiser et fiabiliser les déploiements continus.",

    exp_job3_role: "Stagiaire Développeur Full Stack",
    exp_job3_date: "02/2024 – 09/2024",
    exp_job3_task1: "Développement d'une plateforme de traçabilité des activités Data de bout en bout avec <strong>Spring Boot</strong> et <strong>Angular</strong>.",
    exp_job3_task2: "Mise en place de flux <strong>Spring Batch</strong> pour automatiser l'import quotidien de gros volumes de fichiers, réduisant de <strong>90 %</strong> les interventions humaines.",
    exp_job3_task3: "Conception et intégration d'un tableau de bord décisionnel <strong>Power BI</strong> pour l'analyse des indicateurs clés en temps réel.",
    exp_job3_task4: "Mise en place d'un pipeline CI/CD avec <strong>Jenkins</strong> pour automatiser l'exécution des tests et le déploiement continu.",

    // Skills Section
    skills_badge: "Expertise & Outils",
    skills_title: "Compétences Techniques",
    skills_subtitle: "Une maîtrise transverse couvrant le développement logiciel, les architectures modernes et l'infrastructure Cloud.",
    skills_cat_backend: "Backend & Architecture",
    skills_cat_frontend: "Frontend & UI/UX",
    skills_cat_devops: "DevOps, Cloud & CI/CD",
    skills_cat_data: "Données, ERP & IAM",
    skills_cat_monitoring: "Monitoring & Outils",
    skills_cat_languages: "Langues & Communication",
    skill_fr: "Français (C1 - Courant)",
    skill_en: "Anglais (B2 - Professionnel)",
    skill_de: "Allemand (A2 - Notions)",
    skill_ar: "Arabe (Langue Maternelle)",

    // Education Section
    edu_badge: "Cursus Académique",
    edu_title: "Diplômes & Formations",
    edu_subtitle: "Un cursus d'excellence en ingénierie logicielle et technologies numériques.",
    edu_deg1_title: "Diplôme National d'Ingénieur en Informatique",
    edu_deg1_school: "ESPRIT (École supérieure privée d'ingénierie et de technologie)",
    edu_deg2_title: "Licence en Génie Logiciel et Systèmes d'Informations",
    edu_deg2_school: "ISSATM (Institut Supérieur des Sciences Appliquées et Technologiques de Mateur)",
    edu_deg3_title: "Baccalauréat en Informatique",
    edu_deg3_school: "Lycée Secondaire Route de Tabarka",

    // Contact Section
    contact_badge: "Contactez-Moi",
    contact_title: "Discutons de Votre Projet",
    contact_subtitle: "Vous avez un projet innovant, un besoin d'expertise Full Stack ou DevOps ? N'hésitez pas à me contacter.",
    contact_stay_connected: "Restons Connectés",
    contact_intro: "Je réponds avec réactivité pour toute proposition de mission, opportunité d'emploi ou collaboration technique.",
    contact_email_label: "Email Professionnel",
    contact_whatsapp_label: "WhatsApp & Téléphone",
    contact_whatsapp_badge: "WhatsApp 💬",
    contact_loc_label: "Localisation",
    contact_loc_val: "Ariana, Tunisie",
    contact_linkedin_label: "Réseau Professionnel",
    contact_copy_btn: "Copier",
    contact_copied_btn: "Copié !",
    contact_form_name_label: "Votre Nom & Prénom",
    contact_form_name_placeholder: "Ex: Jean Dupont",
    contact_form_email_label: "Votre Adresse Email",
    contact_form_email_placeholder: "Ex: jean.dupont@entreprise.com",
    contact_form_msg_label: "Votre Message",
    contact_form_msg_placeholder: "Décrivez votre besoin, opportunité ou projet...",
    contact_form_submit: "Envoyer le Message",

    // Modal
    modal_features_title: "🚀 Fonctionnalités Avancées de la Plateforme",
    modal_challenge_title: "🎯 Défi & Problématique",
    modal_solution_title: "💡 Solution Technique & Architecture",
    modal_results_title: "📈 Résultats & Valeur Ajoutée",
    modal_techs_title: "🛠️ Technologies Utilisées",

    // Footer
    footer_role: "Ingénieure Informatique • Full Stack Developer & DevOps",
    footer_home: "Accueil",
    footer_projects: "Projets",
    footer_experience: "Expérience",
    footer_skills: "Compétences",
    footer_contact: "Contact",
    footer_cv_fr: "🇫🇷 CV (FR)",
    footer_cv_en: "🇬🇧 Resume (EN)",
    footer_copyright: "© 2026 Nayrouz Gasmi. Tous droits réservés.",
    footer_tagline: "Conçu avec excellence & passion pour le web moderne.",

    // Toasts
    toast_theme_dark: "Mode Sombre activé",
    toast_theme_light: "Mode Clair activé",
    toast_lang_switched: "Langue basculée en Français 🇫🇷",
    toast_copied: "Copié dans le presse-papier !",
    toast_contact_success: "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
    toast_contact_error: "Veuillez remplir tous les champs du formulaire."
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_cv_btn: "Resume",
    nav_cv_fr_title: "French Resume",
    nav_cv_fr_sub: "FR Version (PDF)",
    nav_cv_en_title: "English Resume",
    nav_cv_en_sub: "EN Version (PDF)",

    // Hero
    hero_status: "Available for opportunities • Full Stack & DevOps",
    hero_role_title: "Software Engineer",
    hero_role_sub: "Full Stack Developer & DevOps",
    hero_desc: "Specialized in designing scalable web applications, resilient REST API architectures, and automated cloud CI/CD pipelines. Passionate about Go, React, Angular, Spring Boot, and Docker / Kubernetes containerization.",
    hero_btn_projects: "Explore My Projects",
    hero_btn_cv: "Download My Resume",
    hero_pill_1: "🚀 Go Microservices & Telemetry",
    hero_pill_2: "⚡ Jenkins CI/CD & Kubernetes",
    hero_profile_role: "Software Engineer • Full Stack & DevOps",
    hero_stat_1_label: "Years of Engineering & Projects",
    hero_stat_2_label: "Major Projects Deployed",
    hero_stat_3_label: "Manual ETL Work Reduced",
    hero_stat_4_label: "Containerized & CI/CD Automated",

    // Projects Section
    projects_badge: "Technical Portfolio",
    projects_title: "Featured Projects",
    projects_subtitle: "A comprehensive selection of industrial, IoT, e-commerce, and cloud projects designed and deployed, ordered chronologically (2026 ➔ 2024).",
    filter_all: "All Projects",
    filter_fullstack: "Full Stack & Web",
    filter_iot: "IoT & Telemetry",
    filter_devops: "DevOps & Cloud",
    filter_erp: "ERP & Automation",
    btn_detail_features: "View Details & 12 Key Features",
    btn_detail_standard: "View Details & Architecture",
    features_preview_title: "⚡ 12 Key Modules & Capabilities:",
    features_preview_more: "+7 more (Replay, Satellites, Geofencing...)",

    // Experience Section
    exp_badge: "Professional Journey",
    exp_title: "Work Experience",
    exp_subtitle: "High-impact contributions on mission-critical projects, from software engineering to production deployment.",
    exp_job1_role: "Software Engineer / Full Stack Developer",
    exp_job1_date: "01/2026 – Present",
    exp_job1_task1: "Architecture and development of the <strong>VMDTrac V2</strong> telemetry platform (React.js, TypeScript, Go): multi-provider mapping (Google, Mapbox 3D, OSM), advanced Replay module, and multi-tenant security with <strong>Zitadel IAM</strong> (OAuth2 / OIDC, RBAC).",
    exp_job1_task2: "Development of the <strong>Sales Management & Progressive Commission Platform</strong>: progressive tier calculation engine, Traefik, Go Gin, React TS, PostgreSQL, and PDF exports.",
    exp_job1_task3: "Design, development, and security of REST APIs integrated with satellite protocols (Garmin InReach, Iridium, SPOT devices).",
    exp_job1_task4: "Development, customization, and integration of custom business modules in <strong>Odoo 17</strong> for asset and telematic subscription management.",
    exp_job1_task5: "Administration of Odoo environments: installation, setup, custom reports, and Docker containerization.",
    exp_job1_task6: "Continuous improvement of software engineering processes and code quality (testing, code reviews, CI).",

    exp_job2_role: "Full Stack Software Engineer",
    exp_job2_date: "01/2025 – 12/2025",
    exp_job2_task1: "Design and development of the Foreign Nationals and Residence Permits Management System (<strong>تطبيقية التصرف في الأجانب</strong>) using <strong>Spring Boot</strong> and <strong>Angular</strong>.",
    exp_job2_task2: "Integration of SDKs and REST APIs for ICAO document scanning and <strong>optical character recognition / automatic parsing of passport MRZ lines</strong>.",
    exp_job2_task3: "Integration of biometric hardware for <strong>fingerprint capture and validation</strong> during enrollment.",
    exp_job2_task4: "Deployment and hardening of applications on Linux VPS servers.",
    exp_job2_task5: "Implementation of automated CI/CD pipelines for reliable continuous deployment.",

    exp_job3_role: "Full Stack Developer Intern",
    exp_job3_date: "02/2024 – 09/2024",
    exp_job3_task1: "End-to-end development of an internal Data activity traceability and audit platform with <strong>Spring Boot</strong> and <strong>Angular</strong>.",
    exp_job3_task2: "Implemented <strong>Spring Batch</strong> jobs for automated daily ingestion of large data files, reducing manual intervention by <strong>90%</strong>.",
    exp_job3_task3: "Designed and integrated interactive <strong>Power BI</strong> business intelligence dashboards for real-time KPI tracking.",
    exp_job3_task4: "Setup CI/CD pipelines with <strong>Jenkins</strong> to automate test execution and continuous deployment.",

    // Skills Section
    skills_badge: "Expertise & Tools",
    skills_title: "Technical Skills",
    skills_subtitle: "Cross-functional expertise covering full-stack software development, modern architectures, and Cloud infrastructure.",
    skills_cat_backend: "Backend & Architecture",
    skills_cat_frontend: "Frontend & UI/UX",
    skills_cat_devops: "DevOps, Cloud & CI/CD",
    skills_cat_data: "Data, ERP & IAM",
    skills_cat_monitoring: "Monitoring & Tools",
    skills_cat_languages: "Languages & Communication",
    skill_fr: "French (C1 - Fluent)",
    skill_en: "English (B2 - Professional)",
    skill_de: "German (A2 - Elementary)",
    skill_ar: "Arabic (Native)",

    // Education Section
    edu_badge: "Academic Background",
    edu_title: "Education & Degrees",
    edu_subtitle: "Rigorous academic training in software engineering and digital technologies.",
    edu_deg1_title: "National Engineering Diploma in Computer Science",
    edu_deg1_school: "ESPRIT (Private Higher School of Engineering and Technology)",
    edu_deg2_title: "Bachelor's Degree in Software Engineering & Information Systems",
    edu_deg2_school: "ISSATM (Higher Institute of Applied Sciences and Technology of Mateur)",
    edu_deg3_title: "High School Diploma in Computer Science",
    edu_deg3_school: "Route de Tabarka High School",

    // Contact Section
    contact_badge: "Get In Touch",
    contact_title: "Let's Discuss Your Project",
    contact_subtitle: "Have an innovative project or looking for Full Stack & DevOps expertise? Feel free to reach out.",
    contact_stay_connected: "Let's Connect",
    contact_intro: "I respond promptly to freelance inquiries, job opportunities, or technical collaborations.",
    contact_email_label: "Professional Email",
    contact_whatsapp_label: "WhatsApp & Phone",
    contact_whatsapp_badge: "WhatsApp 💬",
    contact_loc_label: "Location",
    contact_loc_val: "Ariana, Tunisia",
    contact_linkedin_label: "Professional Network",
    contact_copy_btn: "Copy",
    contact_copied_btn: "Copied!",
    contact_form_name_label: "Your Full Name",
    contact_form_name_placeholder: "e.g. John Doe",
    contact_form_email_label: "Your Email Address",
    contact_form_email_placeholder: "e.g. john.doe@company.com",
    contact_form_msg_label: "Your Message",
    contact_form_msg_placeholder: "Describe your needs, opportunity, or project...",
    contact_form_submit: "Send Message",

    // Modal
    modal_features_title: "🚀 Advanced Platform Features",
    modal_challenge_title: "🎯 Challenge & Requirements",
    modal_solution_title: "💡 Technical Solution & Architecture",
    modal_results_title: "📈 Results & Impact",
    modal_techs_title: "🛠️ Technologies Used",

    // Footer
    footer_role: "Software Engineer • Full Stack Developer & DevOps",
    footer_home: "Home",
    footer_projects: "Projects",
    footer_experience: "Experience",
    footer_skills: "Skills",
    footer_contact: "Contact",
    footer_cv_fr: "🇫🇷 Resume (FR)",
    footer_cv_en: "🇬🇧 Resume (EN)",
    footer_copyright: "© 2026 Nayrouz Gasmi. All rights reserved.",
    footer_tagline: "Crafted with excellence & passion for modern web engineering.",

    // Toasts
    toast_theme_dark: "Dark mode enabled",
    toast_theme_light: "Light mode enabled",
    toast_lang_switched: "Language switched to English 🇬🇧",
    toast_copied: "Copied to clipboard!",
    toast_contact_success: "Thank you for your message! I will get back to you shortly.",
    toast_contact_error: "Please fill out all fields in the form."
  }
};

// --- BASE DE DONNÉES COMPLÈTE DES PROJETS (BILINGUE FR / EN) ---
const PROJECTS_DATA = [
  {
    id: "vmdtrac-v2",
    title: "VMDTrac V2 – Plateforme IoT & Télémétrie Satellite",
    title_en: "VMDTrac V2 – IoT & Satellite Telemetry Fleet Platform",
    category: "iot",
    categoryLabel: "IoT & Télémétrie",
    categoryLabel_en: "IoT & Telemetry",
    contextBadge: "VMD Solutions (2026)",
    contextBadge_en: "VMD Solutions (2026)",
    year: "2026",
    dateOrder: 202603,
    role: "Software Engineer / Full Stack Developer",
    role_en: "Software Engineer / Full Stack Developer",
    icon: "🛰️",
    image: "assets/vmdtrac_live_map.png",
    gallery: [
      { label: "🗺️ Carte en direct", src: "assets/vmdtrac_live_map.png" },
      { label: "⏪ Replay (865 km)", src: "assets/vmdtrac_replay.png" },
      { label: "📥 Rapports (PDF & XLSX)", src: "assets/vmdtrac_history_reports.png" },
      { label: "🚨 Alertes & Survitesse", src: "assets/vmdtrac_alerts.png" },
      { label: "📍 Géofences & Checkpoints", src: "assets/vmdtrac_geofences.png" },
      { label: "📊 Statistiques & KPIs", src: "assets/vmdtrac_statistics.png" },
      { label: "🚛 Gestion des Actifs", src: "assets/vmdtrac_create_asset.png" },
      { label: "🔐 Zitadel IAM & Accès", src: "assets/vmdtrac_interface.png" }
    ],
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    shortDesc: "Supervision cartographique temps réel et géolocalisation multi-fournisseurs (Google Maps, Mapbox 3D, OSM) de flottes critiques avec ingestion de flux satellites (Garmin InReach / Iridium & SPOT), microservices Go et React.js.",
    shortDesc_en: "Real-time fleet tracking and multi-provider mapping (Google Maps, Mapbox 3D, OSM) with satellite data ingestion (Garmin InReach / Iridium & SPOT), Go microservices, and React.js.",
    highlights: [
      "Cartographie temps réel interactive : Google Terrain, Mapbox 3D, OSM, Esri, multi-vues (Split-screen) et géofencing",
      "Module Replay avancé : parcours historique (24h, 7j, 30j), profils de vitesse, arrêts et lecture pas-à-pas",
      "Architecture microservices en Go : Ingestion haute fréquence, Feed Relay satellite et Aggregation Service",
      "Ingestion des protocoles Garmin InReach, balises Iridium SBD, terminaux SPOT et passerelle SFTP",
      "Sécurité et contrôle d'accès multi-tenant centralisés avec Zitadel IAM (OAuth2 / OIDC) et alertes SMS / Email"
    ],
    highlights_en: [
      "Real-time interactive mapping: Google Terrain, Mapbox 3D, OSM, Esri, split-screen views and geofencing",
      "Advanced Replay module: historical route playback (24h, 7d, 30d), speed profiles, stops, and step-by-step scrubber",
      "High-performance Go microservices: high-frequency ingestion, satellite feed relay, and aggregation service",
      "Ingestion of Garmin InReach, Iridium SBD beacons, SPOT devices, and SFTP gateway",
      "Centralized multi-tenant IAM security with Zitadel (OAuth2 / OIDC) and multi-channel SMS / Email alerts"
    ],
    techStack: ["Go (Golang)", "React.js", "TypeScript", "TimescaleDB", "Google Maps API", "Mapbox", "Docker", "Zitadel IAM", "Traccar", "Odoo 17", "SFTP", "PostgreSQL"],
    metrics: {
      "Cartographie": "Google, Mapbox 3D, OSM",
      "Disponibilité": "99.9% Uptime temps réel",
      "Architecture": "Microservices Go",
      "Télémétrie": "Garmin, Iridium, SPOT"
    },
    metrics_en: {
      "Mapping": "Google, Mapbox 3D, OSM",
      "Uptime": "99.9% Real-time availability",
      "Architecture": "Go Microservices",
      "Telemetry": "Garmin, Iridium, SPOT"
    },
    platformFeatures: [
      {
        icon: "🗺️",
        title: "Carte en Direct (Real-time Asset & Fleet Tracking)",
        desc: "Supervision continue et dynamique de l'ensemble de la flotte avec actualisation sous la seconde des coordonnées GPS, des indicateurs d'état et du cap des véhicules."
      },
      {
        icon: "🌐",
        title: "Cartographie Multi-Fournisseurs (Enhanced Mapping & Geolocation)",
        desc: "Bascule instantanée entre Google Maps (Terrain, Satellite, Routier), 3D Mapbox, OpenStreetMap (OSM), Stadia et Esri sans rechargement de page."
      },
      {
        icon: "⏪",
        title: "Replay & Trajectoires Historiques (Route Playback & Telemetry)",
        desc: "Rejouer l'historique complet des déplacements avec sélecteur de période, résolution temporelle, distance totale et barre de contrôle interactive."
      },
      {
        icon: "🚩",
        title: "Gestion des Missions & Checkpoints (Missions & Checkpoints)",
        desc: "Définition, affectation et suivi d'itinéraires opérationnels avec validation automatique des points de passage obligatoires et horodatage certifié."
      },
      {
        icon: "📍",
        title: "Géofencing & Surveillance Spatiale (Geofencing Monitoring)",
        desc: "Délimitation de zones géographiques polygonales ou circulaires, alertes en temps réel sur entrée/sortie de périmètre et limitations de vitesse."
      },
      {
        icon: "🔔",
        title: "Système d'Alertes Multi-Canaux (SMS, Email & Push)",
        desc: "Détection immédiate d'anomalies critiques (bouton panique SOS, dépassement de vitesse, sortie de zone) avec diffusion instantanée par SMS et courriels."
      },
      {
        icon: "🔐",
        title: "Sécurité & IAM Centralisé Zitadel (Secure User & Access Management)",
        desc: "Gestion multi-tenant stricte et gouvernance des identités propulsées par Zitadel IAM : authentification OAuth2 / OIDC, rôles RBAC et tokens JWT vérifiés."
      },
      {
        icon: "🚛",
        title: "Gestion des Actifs & Unités (Asset & Unit Management)",
        desc: "Gestion centralisée du parc de véhicules, engins et bateaux avec association dynamique des boîtiers GPS, numéros IMEI et caractéristiques."
      },
      {
        icon: "📊",
        title: "Tableaux de Bord Avancés & Reporting (Advanced Dashboards)",
        desc: "Indicateurs de performance opérationnelle en temps réel : synthèses d'activité, taux d'utilisation de la flotte et kilométrages cumulés."
      },
      {
        icon: "📥",
        title: "Export de Données Multi-Formats (Data Export in PDF & XLSX)",
        desc: "Génération et téléchargement en un clic de rapports d'activité et bilans de missions aux formats normalisés PDF et feuilles de calcul Excel."
      },
      {
        icon: "🛰️",
        title: "Technologies Satellitaires (Satellite Communication Integration)",
        desc: "Intégration native des flux satellitaires Garmin InReach, Iridium SBD et terminaux SPOT pour une couverture mondiale hors réseau cellulaire."
      },
      {
        icon: "💻",
        title: "Interface Ergonomique & Responsive (Modern Responsive UI)",
        desc: "Interface moderne développée avec React.js et TypeScript : mode Sombre / Clair, multi-vues et compatibilité totale mobile et tablette."
      }
    ],
    deepDive: {
      challenge: "Développer une plateforme cartographique unifiée et ultra-réactive capable de superviser des flottes critiques réparties sur tout le territoire, d'absorber simultanément des flux de données satellites hétérogènes (Garmin, Iridium, SPOT) et de proposer des outils d'analyse rétrospective (Replay) précis sans latence.",
      solution: "Conception d'une architecture microservices résiliente en Go (Feed-Relay haute performance pour l'ingestion satellite, service d'agrégation, passerelle SFTP) couplée à un frontend moderne en React.js et TypeScript avec bascule multi-fournisseurs (Google Maps, Mapbox 3D), lecteur de replay temporel, IAM Zitadel et interconnexion avec Odoo 17.",
      results: [
        "Supervision temps réel sous la seconde et visualisation cartographique fluide de flottes sur Google Maps, Mapbox 3D et OSM",
        "Module de replay interactif avec reconstitution exacte des trajectoires (ex: 865.4 km parcourus à travers la Tunisie avec profils de vitesse et arrêts)",
        "Couverture satellitaire mondiale ininterrompue pour les zones isolées (désert du Sahara, offshore, transfrontalier) via Garmin InReach, Iridium SBD et SPOT",
        "Authentification centralisée & sécurité Zero Trust avec Zitadel IAM : gestion multi-tenant étanche, OAuth2 / OIDC, rôles RBAC et tokens JWT signés",
        "Réactivité opérationnelle immédiate grâce aux alertes multi-canaux (SMS, email, push) sur franchissement de géofence, survitesse et bouton panique SOS",
        "Pipeline d'ingestion haute performance en Go garantissant zéro perte de trames télémétriques avec disponibilité continue (99.9% uptime)",
        "Synchronisation bidirectionnelle avec Odoo 17 pour la facturation automatisée des abonnements télématiques et la gestion du parc d'actifs"
      ]
    },
    deepDive_en: {
      challenge: "Develop a unified, ultra-responsive mapping platform capable of monitoring critical fleets nationwide, ingesting heterogeneous satellite feeds (Garmin, Iridium, SPOT) with zero loss, and providing historical route replay without latency.",
      solution: "Built a resilient Go microservices architecture (high-throughput satellite feed relay, aggregation service, SFTP gateway) paired with a modern React.js + TypeScript frontend featuring multi-provider map switching, temporal route scrubber, Zitadel IAM, and Odoo 17 ERP integration.",
      results: [
        "Sub-second real-time fleet supervision with fluid map rendering on Google Maps, Mapbox 3D, and OSM",
        "Interactive replay module reconstructing exact trajectories across Tunisia with speed profiles and stops",
        "Uninterrupted global satellite coverage for off-grid areas (Sahara desert, offshore, cross-border) via Garmin InReach, Iridium SBD, and SPOT",
        "Centralized Zero-Trust authentication with Zitadel IAM: strict multi-tenancy, OAuth2 / OIDC, RBAC roles, and signed JWTs",
        "Immediate operational responsiveness with multi-channel alerts (SMS, email, push) on geofence breaches, speeding, and SOS panic buttons",
        "High-performance Go ingestion pipeline guaranteeing zero packet loss with continuous 99.9% uptime",
        "Bidirectional synchronization with Odoo 17 for automated telematic billing and asset fleet management"
      ]
    }
  },
  {
    id: "vmd-commission",
    title: "VMD Gestion Commerciale & Calcul des Commissions",
    title_en: "VMD Sales Management & Progressive Commission Engine",
    category: "fullstack",
    categoryLabel: "Full Stack & FinTech",
    categoryLabel_en: "Full Stack & FinTech",
    contextBadge: "VMD Solutions (2026)",
    contextBadge_en: "VMD Solutions (2026)",
    year: "2026",
    dateOrder: 202602,
    role: "Software Engineer / Full Stack Developer",
    role_en: "Software Engineer / Full Stack Developer",
    icon: "📈",
    image: "assets/vmd_commission_dashboard.png",
    gradient: "linear-gradient(135deg, #f97316, #fb923c)",
    shortDesc: "Plateforme web de pilotage des ventes, de gestion de la relation client et de calcul automatisé des commissions progressives par paliers (Go Gin, React TS, PostgreSQL, Traefik, Docker).",
    shortDesc_en: "Web platform for sales performance tracking, CRM pipeline management, and automated progressive commission calculation by quota tiers (Go Gin, React TS, PostgreSQL, Traefik, Docker).",
    highlights: [
      "Moteur de calcul automatisé des commissions progressives par tranches (0-70%, 70-90%, 90-100%, 100-120%, >120%)",
      "Tableaux de bord de direction : Vue globale Direction, KPIs en direct, objectifs annuels et suivi par commercial",
      "Workflow de validation des ventes à double niveau : Commercial ➔ BackOffice ➔ Validation Direction",
      "Planification hebdomadaire des commerciaux, rapports d'activité et export dynamique PDF / Image",
      "Module d'extraction automatique de devis et factures par analyse optique et règles heuristiques"
    ],
    highlights_en: [
      "Automated progressive tier commission engine (0-70%, 70-90%, 90-100%, 100-120%, >120%)",
      "Executive dashboards: Global leadership view, live KPIs, annual revenue targets, and sales rep performance",
      "Two-stage sale validation workflow: Sales Rep ➔ BackOffice ➔ Executive Approval",
      "Weekly planning for sales reps, activity reports, and dynamic PDF/Image exports",
      "Automatic invoice and quote extraction module with optical parsing and heuristic rules"
    ],
    techStack: ["Go (Golang)", "Gin Gonic", "React (TS)", "Vite", "GORM", "PostgreSQL 16", "Traefik v3.1", "Docker", "Tailwind CSS", "Recharts", "jsPDF"],
    metrics: {
      "Objectif Global": "8.5M+ TND supervisés",
      "Architecture": "Go Gin + React TS",
      "Calcul Commissions": "Tranches progressives auto",
      "Sécurité": "RBAC & Traefik Proxy"
    },
    metrics_en: {
      "Tracked Volume": "8.5M+ TND supervised",
      "Architecture": "Go Gin + React TS",
      "Commissions": "Automated progressive tiers",
      "Security": "RBAC & Traefik Proxy"
    },
    deepDive: {
      challenge: "L'équipe commerciale utilisait des processus manuels fastidieux pour consolider les ventes et calculer des commissions progressives complexes avec règles de bonus d'entreprise et multi-devises (TND / EUR / USD), générant des retards et des risques d'erreurs.",
      solution: "Développement d'une suite applicative conteneurisée avec Traefik. Backend haute performance en Go (Gin) intégrant un moteur de calcul par paliers d'objectifs, schéma PostgreSQL géré par GORM, interface React avec Tailwind CSS, graphiques Recharts, export PDF et module d'extraction automatique de devis.",
      results: [
        "Automatisation intégrale du calcul des commissions personnelles, bonus collectifs et primes managériales",
        "Visibilité immédiate de la direction sur le CA validé, en attente et l'atteinte des objectifs de l'équipe",
        "Gain de temps considérable pour les commerciaux grâce au planning hebdomadaire et aux rapports instantanés"
      ]
    },
    deepDive_en: {
      challenge: "Sales teams relied on tedious manual spreadsheets to consolidate sales and compute complex tiered commission structures with company bonus rules across multiple currencies (TND / EUR / USD), leading to delays and human error.",
      solution: "Engineered a containerized microservices application behind Traefik. High-performance Go (Gin) backend with a quota-tier math engine, GORM-managed PostgreSQL schema, responsive React frontend with Tailwind CSS, Recharts visualizations, and automated quote parsing.",
      results: [
        "Full automation of personal commissions, collective team bonuses, and managerial incentives",
        "Instant executive visibility into approved revenue, pending sales, and team quota achievements",
        "Significant time savings for sales reps with automated weekly scheduling and one-click reporting"
      ]
    }
  },
  {
    id: "odoo-erp-suite",
    title: "Modules Métier & Personnalisation Odoo 17",
    title_en: "Odoo 17 Custom Business Modules & Automation",
    category: "erp",
    categoryLabel: "ERP & Automatisation",
    categoryLabel_en: "ERP & Automation",
    contextBadge: "VMD Solutions (2026)",
    contextBadge_en: "VMD Solutions (2026)",
    year: "2026",
    dateOrder: 202601,
    role: "Développeur & Admin Odoo",
    role_en: "Odoo Developer & Administrator",
    icon: "💼",
    gradient: "linear-gradient(135deg, #8b5cf6, #c084fc)",
    shortDesc: "Développement sur-mesure de modules métier Odoo 17, interconnexion avec les flux de géolocalisation et automatisation de processus d'entreprise.",
    shortDesc_en: "Custom Odoo 17 module development, seamless REST API integration with real-time tracking pipelines, and automated enterprise workflows.",
    highlights: [
      "Conception de modules Odoo 17 pour la gestion d'actifs et d'abonnements télématiques",
      "Interfaçage API REST entre Odoo et les microservices de tracking VMDTrac",
      "Génération automatisée de rapports, factures et tableaux de bord financiers",
      "Administration système, déploiement Docker et sécurisation des bases de données Odoo"
    ],
    highlights_en: [
      "Custom Odoo 17 modules for asset inventory and recurring telematic subscription management",
      "Bi-directional REST API interface connecting Odoo with VMDTrac telemetry services",
      "Automated generation of monthly customer billing, accounting reports, and financial dashboards",
      "System administration, Dockerized deployments, and database security for Odoo environments"
    ],
    techStack: ["Python", "Odoo 17", "PostgreSQL", "XML", "API REST", "Docker", "Linux"],
    metrics: {
      "ERP Version": "Odoo 17 Enterprise",
      "Modules": "Sur-mesure",
      "Interconnexion": "API REST Temps Réel",
      "Données": "PostgreSQL Dédié"
    },
    metrics_en: {
      "ERP Version": "Odoo 17 Enterprise",
      "Modules": "Custom Tailored",
      "Integration": "Real-time REST API",
      "Database": "Dedicated PostgreSQL"
    },
    deepDive: {
      challenge: "Éliminer la double saisie entre la plateforme de télémétrie VMDTrac et le logiciel de gestion de facturation et d'actifs de l'entreprise.",
      solution: "Développement d'un module Odoo dédié qui interroge et reçoit les événements de VMDTrac via API REST, synchronise les numéros IMEI des boîtiers, met à jour les statuts de compte et automatise la facturation.",
      results: [
        "Suppression totale des redondances de données et des erreurs de saisie",
        "Génération en un clic des rapports mensuels pour les clients abonnés",
        "Mise à niveau sereine vers Odoo 17 avec une base de code documentée et maintenable"
      ]
    },
    deepDive_en: {
      challenge: "Eliminate double-entry between the VMDTrac telemetry tracking system and company ERP billing and customer management tools.",
      solution: "Developed a custom Odoo module that listens to VMDTrac webhooks and REST endpoints, automatically syncs GPS IMEI identifiers, updates customer subscription statuses, and generates recurring invoices.",
      results: [
        "Complete elimination of data redundancies and manual data-entry errors",
        "One-click monthly billing and automated account statement generation for subscribed clients",
        "Smooth upgrade to Odoo 17 with clean, documented, and maintainable codebase"
      ]
    }
  },
  {
    id: "smltp-foreigners",
    title: "Gestion des Étrangers & Enrôlement Biométrique",
    title_en: "Foreign Nationals Management & Biometric Enrollment",
    category: "fullstack",
    categoryLabel: "Biométrie & Documents Officiels",
    categoryLabel_en: "Biometrics & Official Documents",
    contextBadge: "SMLTP (2025)",
    contextBadge_en: "SMLTP (2025)",
    year: "2025",
    dateOrder: 202511,
    role: "Ingénieur Informatique Full Stack",
    role_en: "Full Stack Software Engineer",
    icon: "🛂",
    image: "assets/smltp_foreigners_management.png",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    shortDesc: "Système officiel (تطبيقية التصرف في الأجانب) d'identification sécurisée : numérisation de passeports ICAO, reconnaissance automatique de zone MRZ, capture d'empreintes biométriques et suivi des séjours.",
    shortDesc_en: "Official government identity management system: ICAO passport scanning, automatic optical MRZ zone parsing, biometric fingerprint capture, and residence permit tracking.",
    highlights: [
      "Numérisation de passeport ICAO avec extraction optique automatique de la zone MRZ",
      "Renseignement instantané des champs (Nom, Prénom, Nationalité, Dates, Numéro ICAO)",
      "Intégration d'équipements biométriques pour la capture et validation d'empreintes digitales",
      "Fiche complète de situation (profession, employeur en Tunisie, coordonnées et séjour)"
    ],
    highlights_en: [
      "High-definition ICAO passport scanning with automatic optical parsing of the MRZ zone",
      "Instant field pre-filling (Full Name, Nationality, Birthdate, Passport Number, Expiry)",
      "Biometric hardware integration for fingerprint capture and enrollment validation",
      "Comprehensive case management (profession, employer in Tunisia, residency status)"
    ],
    techStack: ["Spring Boot", "Angular", "SDK Biométrique", "Scanner ICAO & MRZ", "API REST", "Linux VPS", "CI/CD", "PostgreSQL"],
    metrics: {
      "Lecture MRZ": "Scan automatique instantané",
      "Biométrie": "Empreintes digitales",
      "Documents": "Passeport ICAO",
      "Architecture": "Spring Boot / Angular"
    },
    metrics_en: {
      "MRZ Parsing": "Instant automatic scan",
      "Biometrics": "Fingerprint verification",
      "Documents": "ICAO Passport standard",
      "Architecture": "Spring Boot / Angular"
    },
    deepDive: {
      challenge: "Développer une application étatique fiable pour automatiser l'enrôlement des ressortissants étrangers en Tunisie, supprimer les erreurs manuelles de transcription de passeport et interfacer des scanners physiques de haute précision et des capteurs biométriques.",
      solution: "Conception d'une application web Angular communicant avec une couche backend Spring Boot et les SDKs des périphériques matériels. Le système effectue la numérisation haute définition du passeport, parse la ligne MRZ en direct, extrait la photo d'identité et associe les empreintes digitales pour une traçabilité totale.",
      results: [
        "Enrôlement accéléré à moins de 30 secondes par dossier grâce à la lecture OCR MRZ",
        "Fiabilisation absolue des données d'identité et conformité avec les exigences de sécurité",
        "Déploiement continu et sécurisé sur serveur VPS Linux avec pipeline CI/CD automatisé"
      ]
    },
    deepDive_en: {
      challenge: "Build a secure, mission-critical application to automate the enrollment of foreign nationals in Tunisia, eliminate manual passport transcription errors, and interface specialized hardware scanners and fingerprint sensors.",
      solution: "Developed an Angular front-end communicating with a Spring Boot backend and hardware SDKs. The system scans passports in high resolution, parses MRZ strings in real time, extracts the photo, and attaches verified fingerprint biometric templates.",
      results: [
        "Enrollment accelerated to under 30 seconds per record via automatic OCR MRZ reading",
        "Guaranteed identity data accuracy and strict compliance with national security guidelines",
        "Automated deployment on hardened Linux VPS servers with CI/CD pipelines"
      ]
    }
  },
  {
    id: "gestion-stock-aspnet",
    title: "StockMaster Pro – Gestion de Stock & Inventaire ASP.NET Core",
    title_en: "StockMaster Pro – ASP.NET Core (.NET 9) Inventory Management",
    category: "fullstack",
    categoryLabel: "ASP.NET Core & Full Stack",
    categoryLabel_en: "ASP.NET Core & Full Stack",
    contextBadge: "StockMaster Pro (.NET 9)",
    contextBadge_en: "StockMaster Pro (.NET 9)",
    year: "2025",
    dateOrder: 202508,
    role: "Développeuse Full Stack C# / .NET",
    role_en: "Full Stack C# / .NET Developer",
    icon: "📦",
    image: "assets/gestion_stock_aspnet.png",
    gallery: [
      { label: "📊 Tableau de Bord & Inventaire", src: "assets/gestion_stock_aspnet.png" },
      { label: "🔍 Filtres & Actions CRUD", src: "assets/gestion_stock_ui.png" }
    ],
    gradient: "linear-gradient(135deg, #2563eb, #38bdf8)",
    shortDesc: "Application web d'administration et de gestion des stocks développée sous ASP.NET Core 9 (C#) et Entity Framework Core : suivi d'inventaire en temps réel, indicateurs KPIs (valeur globale, unités en stock, alertes de réapprovisionnement), recherche dynamique, catégorisation et opérations CRUD sécurisées avec SQLite/SQL Server.",
    shortDesc_en: "Web administration and inventory control application built with ASP.NET Core 9 (C#) and Entity Framework Core: real-time stock tracking, live KPI indicators, dynamic search, multi-category filtering, and secure CRUD operations with SQLite/SQL Server.",
    highlights: [
      "Tableau de bord KPIs en direct : calcul automatique des indicateurs clés (valorisation globale de l'inventaire, unités en stock et alertes)",
      "Moteur de recherche instantané et filtrage multi-critères par catégories",
      "Cycle CRUD complet (Créer, Consulter, Modifier, Supprimer) avec formulaires validés par DataAnnotations",
      "Architecture MVC découplée sous .NET 9 avec persistance relationnelle via Entity Framework Core & SQLite"
    ],
    highlights_en: [
      "Live KPI dashboard: automated calculation of key inventory indicators (total valuation, units in stock, reorder alerts)",
      "Instant search engine and multi-criteria filtering by product categories",
      "Complete CRUD cycle (Create, Read, Update, Delete) with server and client DataAnnotations validation",
      "Decoupled MVC architecture on .NET 9 with relational data persistence via Entity Framework Core & SQLite"
    ],
    techStack: ["C#", ".NET 9", "ASP.NET Core MVC", "Entity Framework Core", "SQLite", "Bootstrap 5", "HTML5/CSS3"],
    metrics: {
      "Framework": "ASP.NET Core (.NET 9)",
      "ORM & Data": "EF Core & SQLite",
      "Architecture": "MVC Pattern & Repos",
      "UI & Style": "Bootstrap 5 Responsive"
    },
    metrics_en: {
      "Framework": "ASP.NET Core (.NET 9)",
      "ORM & Data": "EF Core & SQLite",
      "Architecture": "MVC Pattern & Repos",
      "UI & Style": "Bootstrap 5 Responsive"
    },
    deepDive: {
      challenge: "Concevoir une application de gestion d'inventaire fluide, fiable et ergonomique pour les gestionnaires de stocks, permettant de suivre la valeur des immobilisations, d'alerter sur les ruptures et de faciliter les opérations d'ajustement sans complexité d'installation.",
      solution: "Architecture robuste ASP.NET Core MVC sous .NET 9 avec injection de dépendance native, persistance relationnelle via Entity Framework Core avec migrations automatiques, interface Bootstrap 5 moderne aux contrastes soignés, et validation stricte des modèles côté serveur et côté client.",
      results: [
        "Génération automatique des indicateurs clés (valorisation globale du stock calculée dynamiquement, suivi en direct)",
        "Traitement ultra-rapide des requêtes avec Entity Framework Core et base SQLite légère",
        "Code source modulaire prêt pour une mise à l'échelle vers SQL Server ou PostgreSQL en production"
      ]
    },
    deepDive_en: {
      challenge: "Design an intuitive, fast, and reliable inventory management application for stock managers to monitor asset valuation, alert on low stock, and handle adjustments without installation complexity.",
      solution: "Engineered a robust ASP.NET Core MVC architecture on .NET 9 with native dependency injection, Entity Framework Core migrations, clean Bootstrap 5 UI, and strict validation.",
      results: [
        "Automatic calculation of key indicators (real-time dynamic stock valuation, low-stock warnings)",
        "Blazing-fast query performance with Entity Framework Core and lightweight SQLite storage",
        "Modular codebase easily scalable to SQL Server or PostgreSQL in production"
      ]
    }
  },
  {
    id: "sniper-phone-tn",
    title: "Sniper Phone TN – E-Commerce High-Tech & Apple",
    title_en: "Sniper Phone TN – High-Tech & Apple E-Commerce",
    category: "fullstack",
    categoryLabel: "Freelance • E-Commerce",
    categoryLabel_en: "Freelance • E-Commerce",
    contextBadge: "Freelance (2025)",
    contextBadge_en: "Freelance (2025)",
    year: "2025",
    dateOrder: 202506,
    role: "Développeuse Full Stack Freelance (Client : Sniper Phone TN)",
    role_en: "Freelance Full Stack Developer (Client: Sniper Phone TN)",
    icon: "📱",
    image: "assets/ecommerce_hero.png",
    gallery: [
      { label: "🛍️ Boutique & Catalogue Apple", src: "assets/ecommerce_hero.png" },
      { label: "🏷️ Logo Officiel Sniper Phone TN", src: "assets/sniper_phone_logo.jpg" }
    ],
    gradient: "linear-gradient(135deg, #0071e3, #38bdf8)",
    shortDesc: "Plateforme e-commerce haut de gamme spécialisée dans les smartphones neufs et reconditionnés, écosystème Apple et accessoires high-tech (Mateur, Tunisie) : navigation multi-niveaux, panier dynamique en DT, espace client, mode admin et commande rapide.",
    shortDesc_en: "Premium e-commerce platform specializing in new and refurbished smartphones, Apple ecosystem devices, and high-tech accessories (Mateur, Tunisia): multi-level catalog, dynamic cart in TND, client area, admin mode, and express checkout.",
    highlights: [
      "Frontend réactif et moderne développé avec React 19, Vite, Lucide React et Canvas Confetti",
      "Catalogue dynamique multi-catégories (Apple iPhone/Mac, smartphones, tablettes, consoles) avec garanties 12 mois et 3 mois",
      "Panier tiroir interactif (Slide-over Cart Drawer) avec calcul instantané en Dinars Tunisiens (DT) et gestion des stocks",
      "Espace compte utilisateur sécurisé et mode Panneau d'Administration pour l'ajout et l'édition de produits en direct",
      "Optimisation des performances : score Lighthouse 98+, expérience responsive mobile et conteneurisation Docker"
    ],
    highlights_en: [
      "Modern, reactive frontend built with React 19, Vite, Lucide React, and Canvas Confetti",
      "Multi-category product catalog (Apple iPhone/Mac, smartphones, tablets, consoles) with 12-month and 3-month warranties",
      "Interactive slide-over cart drawer with instant total calculation in Tunisian Dinars (TND) and stock management",
      "Secure user account area and Admin Dashboard mode for live product editing and creation",
      "Performance optimized: 98+ Lighthouse score, responsive mobile experience, and Docker containerization"
    ],
    techStack: ["React 19", "Vite", "JavaScript ES6+", "Lucide React", "Canvas Confetti", "Docker", "CSS3 Apple Design"],
    metrics: {
      "Garantie & SAV": "12 Mois Neuf / 3 Mois Recond.",
      "Devise": "Dinar Tunisien (DT)",
      "Boutique": "Mateur, Tunisie",
      "Performance": "Lighthouse 98+"
    },
    metrics_en: {
      "Warranty": "12-Mo New / 3-Mo Refurb",
      "Currency": "Tunisian Dinar (TND)",
      "Store": "Mateur, Tunisia",
      "Performance": "Lighthouse 98+"
    },
    deepDive: {
      challenge: "Mission freelance réalisée de bout en bout pour la boutique high-tech Sniper Phone TN à Mateur : concevoir une plateforme de vente en ligne moderne, intuitive et ultra-rapide capable de rivaliser avec les standards de l'Apple Store, avec un panier fluide sans rechargement de page et un panneau d'administration autonome.",
      solution: "Développement d'une application single-page modulaire en React 19 et Vite avec React Context API pour orchestrer le panier persistant, les favoris (Wishlist), l'authentification et les notifications Toast. Intégration d'un mode Administrateur permettant de gérer les fiches produits, prix et stocks en temps réel.",
      results: [
        "Interface responsive et luxueuse inspirée du design system Apple avec chargement instantané",
        "Processus d'achat simplifié et transparent pour les clients tunisiens avec calcul en Dinars (DT)",
        "Administration autonome sans connaissance technique pour le gérant de la boutique"
      ]
    },
    deepDive_en: {
      challenge: "End-to-end freelance project for Sniper Phone TN in Mateur: create a modern, Apple Store-inspired online shopping experience with an instant cart drawer and an autonomous admin dashboard.",
      solution: "Built a modular single-page application using React 19, Vite, and Context API for persistent cart state, wishlist, authentication, and toast alerts. Added an intuitive Admin mode for instant inventory management.",
      results: [
        "Luxurious, responsive Apple-inspired design system with sub-second page loads",
        "Seamless purchase flow for Tunisian shoppers with transparent local currency pricing",
        "Effortless product catalog management for the store owner with no technical background needed"
      ]
    }
  },
  {
    id: "campconnect-tn",
    title: "CampConnect – Organisation de Campings & Réservation de Tentes",
    title_en: "CampConnect – Outdoor Camping & Tent Reservation Platform",
    category: "fullstack",
    categoryLabel: "Full Stack & Plein Air",
    categoryLabel_en: "Full Stack & Outdoors",
    contextBadge: "Plateforme Collaborative (2024)",
    contextBadge_en: "Community Platform (2024)",
    year: "2024",
    dateOrder: 202410,
    role: "Ingénieure Full Stack / Web Developer",
    role_en: "Full Stack Software Engineer",
    icon: "⛺",
    image: "assets/camping_platform_banner.png",
    gallery: [
      { label: "🏕️ Plateforme & Réservation", src: "assets/camping_platform_banner.png" }
    ],
    gradient: "linear-gradient(135deg, #059669, #10b981)",
    shortDesc: "Plateforme web collaborative dédiée aux passionnés de randonnée et de plein air : réservation en ligne de tentes et équipements outdoor, planification d'événements de camping (bivouacs, randos), forum de discussion communautaire en temps réel et partage de spots naturels.",
    shortDesc_en: "Collaborative web platform for hiking and outdoor enthusiasts: online tent and camping gear rentals, group camp event planning (bivouacs, treks), real-time community chat, and natural spot guide.",
    highlights: [
      "Module de réservation de tentes et matériel de bivouac avec calendrier de disponibilités en temps réel",
      "Organisation et création d'événements de camping : localisation, date, difficulté, nombre de participants et météo",
      "Espace de discussion & messagerie interactive (WebSocket) pour la coordination, le covoiturage et les conseils matériel",
      "Système d'évaluation, avis certifiés et fiches détaillées des spots de camping et bivouac"
    ],
    highlights_en: [
      "Online booking module for tents and bivouac equipment with real-time availability calendar",
      "Camping event planning: location coordinates, dates, difficulty, participant quotas, and weather forecasts",
      "Real-time interactive group chat (WebSocket) for trip logistics, carpooling, and gear advice",
      "Spot directory with verified community reviews and safety recommendations across natural sites"
    ],
    techStack: ["Spring Boot", "Angular", "Java", "TypeScript", "WebSocket", "API REST", "PostgreSQL", "Bootstrap"],
    metrics: {
      "Réservations": "Tentes & Matériel 24/7",
      "Communauté": "Messagerie & Forum direct",
      "Événements": "Campings & Randonnées",
      "Architecture": "Spring Boot & Angular"
    },
    metrics_en: {
      "Rentals": "Tents & Gear 24/7",
      "Community": "Real-time Live Chat",
      "Events": "Group Camps & Treks",
      "Architecture": "Spring Boot & Angular"
    },
    deepDive: {
      challenge: "Les amateurs de camping et de bivouac en pleine nature peinent souvent à louer du matériel de qualité, à trouver des partenaires de camp fiables et à échanger des informations sécurisées sur l'état des sites naturels.",
      solution: "Conception d'une plateforme web complète combinant un système e-commerce de réservation locative de matériel (tentes 2/4 places, sacs de couchage, réchauds), un gestionnaire d'événements de groupe et un salon de discussion interactif temps réel via WebSockets pour planifier les départs et covoiturages.",
      results: [
        "Expérience utilisateur fluide de la réservation de tente jusqu'au point de rendez-vous du camp",
        "Canal de discussion actif permettant une logistique sans friction entre campeurs",
        "Architecture sécurisée avec authentification JWT et gestion des rôles (campeur, organisateur, loueur)"
      ]
    },
    deepDive_en: {
      challenge: "Outdoor enthusiasts often struggle to find reliable camping equipment for rent, connect with trustworthy fellow campers, and obtain up-to-date safety conditions on remote campsites.",
      solution: "Engineered a collaborative platform integrating an e-commerce gear rental engine (2/4-person tents, sleeping bags, stoves), a group event organizer, and a WebSocket-powered live chat for departure coordination.",
      results: [
        "Seamless user journey from gear reservation to the campsite rendezvous",
        "Active community channels enabling frictionless carpooling and logistics among campers",
        "Robust security architecture with JWT authentication and role-based access control"
      ]
    }
  },
  {
    id: "ooredoo-traceability",
    title: "Traçabilité des Flux Data & Analytics BI",
    title_en: "Data Activity Traceability & BI Analytics",
    category: "fullstack",
    categoryLabel: "Full Stack & Data",
    categoryLabel_en: "Full Stack & Data",
    contextBadge: "Ooredoo Tunisie (2024)",
    contextBadge_en: "Ooredoo Tunisia (2024)",
    year: "2024",
    dateOrder: 202407,
    role: "Stagiaire Développeur Full Stack",
    role_en: "Full Stack Developer Intern",
    icon: "📊",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    shortDesc: "Plateforme web de traçabilité complète des activités Data avec automatisation des flux par Spring Batch et tableaux de bord décisionnels Power BI.",
    shortDesc_en: "Comprehensive web platform for end-to-end Data activity auditing, with automated ingestion via Spring Batch and executive Power BI dashboards.",
    highlights: [
      "Automatisation d'ingestion quotidienne de gros volumes de fichiers avec Spring Batch",
      "Réduction spectaculaire de 90 % des interventions manuelles quotidiennes",
      "Intégration d'un tableau de bord dynamique Power BI pour le suivi et l'analyse",
      "Pipeline CI/CD Jenkins pour des déploiements fiables et automatisés"
    ],
    highlights_en: [
      "Automated daily ingestion of high-volume data files with Spring Batch",
      "90% reduction in daily manual verification tasks for data engineering teams",
      "Interactive Power BI dashboard integration for operational tracking and analytics",
      "Automated Jenkins CI/CD pipelines ensuring reliable continuous builds and tests"
    ],
    techStack: ["Spring Boot", "Angular", "Spring Batch", "Power BI", "Jenkins CI/CD", "SQL", "Git"],
    metrics: {
      "Automatisation": "-90% d'effort manuel",
      "Performance": "Batch Quotidien Auto",
      "Reporting": "Power BI Interactif",
      "Déploiement": "CI/CD Jenkins"
    },
    metrics_en: {
      "Automation": "-90% manual effort",
      "Performance": "Automated Daily Batch",
      "Reporting": "Interactive Power BI",
      "Deployment": "Jenkins CI/CD"
    },
    deepDive: {
      challenge: "Les équipes data devaient auditer et vérifier manuellement des centaines de flux de données chaque jour, entraînant des retards d'analyse et un risque accru d'erreur humaine.",
      solution: "Mise en place d'une chaîne automatisée avec Spring Batch pour parser, valider et stocker les données en continu, couplée à un portail web Angular réactif et des visualisations Power BI pour les managers opérationnels.",
      results: [
        "Gain de temps massif : les interventions manuelles ont chuté de 90%",
        "Traçabilité infaillible et alertes automatiques en cas d'incohérence",
        "Automatisation du cycle de build et test grâce à Jenkins"
      ]
    },
    deepDive_en: {
      challenge: "Data teams had to manually verify hundreds of incoming data files every day, resulting in reporting delays and elevated risk of human error.",
      solution: "Architected an automated ingestion pipeline with Spring Batch to parse, validate, and persist data continuously, coupled with an Angular web portal and executive Power BI visual dashboards.",
      results: [
        "Massive time savings: manual interventions plummeted by 90%",
        "Rock-solid traceability with automatic anomaly alerts",
        "Automated build and test lifecycle powered by Jenkins"
      ]
    }
  },
  {
    id: "devops-cicd-pipeline",
    title: "Pipeline DevOps Industriel & Monitoring Cloud",
    title_en: "Enterprise DevOps Pipeline & Cloud Monitoring",
    category: "devops",
    categoryLabel: "DevOps & Cloud",
    categoryLabel_en: "DevOps & Cloud",
    contextBadge: "Infrastructure & CI/CD (2024)",
    contextBadge_en: "Infrastructure & CI/CD (2024)",
    year: "2024",
    dateOrder: 202401,
    role: "DevOps Engineer",
    role_en: "DevOps Engineer",
    icon: "⚙️",
    gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    shortDesc: "Automatisation de bout en bout du cycle de vie logiciel : intégration et déploiement continus, orchestration de conteneurs et métriques de monitoring.",
    shortDesc_en: "End-to-end software lifecycle automation: continuous integration and continuous deployment, container orchestration, and proactive cloud monitoring.",
    highlights: [
      "Pipelines CI/CD sous Jenkins et GitLab CI avec étapes de lint, test et build",
      "Conteneurisation multi-stage Docker et orchestration sur cluster Kubernetes",
      "Provisioning d'infrastructure via Terraform et gestion de configuration avec Ansible",
      "Surveillance de métriques et alertes proactives avec Prometheus et Grafana"
    ],
    highlights_en: [
      "Automated CI/CD pipelines with Jenkins and GitLab CI including lint, test, and build phases",
      "Multi-stage Docker containerization and Kubernetes cluster orchestration",
      "Infrastructure provisioning with Terraform and configuration management with Ansible",
      "Proactive metrics monitoring and alert rules with Prometheus and Grafana"
    ],
    techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus", "Grafana"],
    metrics: {
      "Cycle de Build": "100% Automatisé",
      "Orchestration": "Kubernetes K8s",
      "Supervision": "Prometheus & Grafana",
      "IaC": "Terraform / Ansible"
    },
    metrics_en: {
      "Build Cycle": "100% Automated",
      "Orchestration": "Kubernetes K8s",
      "Supervision": "Prometheus & Grafana",
      "IaC": "Terraform / Ansible"
    },
    deepDive: {
      challenge: "Éliminer les déploiements manuels à risque, réduire le temps de mise en production (Time-to-Market) et surveiller la santé des microservices en production.",
      solution: "Mise en place d'une chaîne CI/CD complète déclenchée à chaque push Git, avec tests automatisés, scan de vulnérabilités, publication des conteneurs et déploiement continu sur Kubernetes avec alertes Grafana.",
      results: [
        "Zéro interruption de service (Zero-downtime rolling updates)",
        "Visibilité totale sur la consommation mémoire et CPU des services",
        "Fiabilité renforcée et standardisation de tous les environnements (Dev, Staging, Prod)"
      ]
    },
    deepDive_en: {
      challenge: "Eliminate error-prone manual deployments, shorten time-to-market, and gain full operational visibility over microservice health in production.",
      solution: "Engineered an end-to-end CI/CD pipeline triggered on git push, featuring automated test suites, vulnerability scans, container image registry publishing, and zero-downtime Kubernetes deployments monitored by Grafana.",
      results: [
        "Zero-downtime rolling updates in production",
        "Real-time visibility into CPU, memory, and network latency across all services",
        "Standardized, reproducible environments across Dev, Staging, and Production"
      ]
    }
  }
];

// --- GESTION DE L'ÉTAT GLOBAL ---
let currentLang = localStorage.getItem('nayrouz-portfolio-lang') || 'fr';
let currentFilter = 'all';

// --- INITIALISATION AU CHARGEMENT DU DOM ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitch();
  initThemeToggle();
  renderProjects('all');
  initFilterButtons();
  initModal();
  initStatsCounter();
  initCopyActions();
  initContactForm();
  initMobileNav();
  initScrollSpy();
  initCvDropdowns();
});

// --- GESTION DE LA TRADUCTION MULTILINGUE ---
function setLanguage(lang) {
  if (!['fr', 'en'].includes(lang)) lang = 'fr';
  currentLang = lang;
  localStorage.setItem('nayrouz-portfolio-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Mise à jour des boutons actifs de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Traduction des éléments avec data-i18n
  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY['fr'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Traduction des placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Actualiser la grille des projets dans la langue active
  renderProjects(currentFilter);

  // Si la modale est ouverte, la rafraîchir dans la langue active
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay && modalOverlay.classList.contains('active')) {
    const currentProjectId = modalOverlay.getAttribute('data-current-project');
    if (currentProjectId) {
      openProjectModal(currentProjectId);
    }
  }
}

function initLanguageSwitch() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) {
        setLanguage(lang);
        const toastMsg = lang === 'en' ? 'Language switched to English 🇬🇧' : 'Langue basculée en Français 🇫🇷';
        showToast(toastMsg);
      }
    });
  });

  // Application initiale
  setLanguage(currentLang);
}

// --- GESTION DU THÈME SOMBRE / CLAIR ---
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('nayrouz-portfolio-theme') || (prefersDark ? 'dark' : 'light');

  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.fr;
      showToast(newTheme === 'dark' ? dict.toast_theme_dark : dict.toast_theme_light);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('nayrouz-portfolio-theme', theme);
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    toggleBtn.setAttribute('title', theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre');
  }
}

// --- AFFICHAGE ET FILTRAGE DES PROJETS ---
function renderProjects(filterCategory) {
  currentFilter = filterCategory || 'all';
  const container = document.getElementById('projects-container');
  if (!container) return;

  const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.fr;
  const isEn = currentLang === 'en';

  // Tri automatique et strict par date (du plus récent au plus ancien)
  const sortedProjects = [...PROJECTS_DATA].sort((a, b) => b.dateOrder - a.dateOrder);

  const filteredProjects = currentFilter === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(p => p.category === currentFilter);

  container.innerHTML = filteredProjects.map(project => {
    const pTitle = (isEn && project.title_en) ? project.title_en : project.title;
    const pCatLabel = (isEn && project.categoryLabel_en) ? project.categoryLabel_en : project.categoryLabel;
    const pContext = (isEn && project.contextBadge_en) ? project.contextBadge_en : project.contextBadge;
    const pRole = (isEn && project.role_en) ? project.role_en : project.role;
    const pDesc = (isEn && project.shortDesc_en) ? project.shortDesc_en : project.shortDesc;
    const pHighlights = (isEn && project.highlights_en) ? project.highlights_en : project.highlights;

    return `
    <article class="project-card" style="--project-gradient: ${project.gradient}">
      <div class="project-card-header">
        <span class="project-category-badge">${pCatLabel}</span>
        <span class="project-badge-context">${pContext}</span>
        ${project.image 
          ? `<img src="${project.image}" alt="${pTitle}" class="project-card-img">` 
          : `<div class="project-icon-large">${project.icon}</div>`
        }
      </div>

      <div class="project-card-body">
        <div class="project-header-row">
          <h3 class="project-title">${pTitle}</h3>
        </div>
        <div class="project-meta-info">
          <span class="project-role">${pRole}</span>
          <span class="project-date-pill">📅 ${project.year}</span>
        </div>
        <p class="project-desc">${pDesc}</p>

        <ul class="project-highlights">
          ${pHighlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
        </ul>

        ${project.platformFeatures ? `
          <div class="project-features-preview">
            <span class="features-preview-title">${dict.features_preview_title}</span>
            <div class="features-preview-badges">
              ${project.platformFeatures.slice(0, 5).map(f => `
                <span class="feat-badge-pill" title="${f.desc}">
                  ${f.icon} ${f.title.split('(')[0].trim()}
                </span>
              `).join('')}
              <span class="feat-badge-more" onclick="openProjectModal('${project.id}')">${dict.features_preview_more}</span>
            </div>
          </div>
        ` : ''}

        <div class="project-tech-tags">
          ${project.techStack.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${project.techStack.length > 4 ? `<span class="tech-tag">+${project.techStack.length - 4}</span>` : ''}
        </div>
      </div>

      <div class="project-card-footer">
        <button class="btn-detail" onclick="openProjectModal('${project.id}')">
          ${project.platformFeatures ? dict.btn_detail_features : dict.btn_detail_standard} <span>&rarr;</span>
        </button>
      </div>
    </article>
    `;
  }).join('');
}

function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

// --- MODALE DE DÉTAILS DU PROJET ---
function initModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }
}

window.openProjectModal = function(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const isEn = currentLang === 'en';
  const pTitle = (isEn && project.title_en) ? project.title_en : project.title;
  const pRole = (isEn && project.role_en) ? project.role_en : project.role;
  const pContext = (isEn && project.contextBadge_en) ? project.contextBadge_en : project.contextBadge;
  const pMetrics = (isEn && project.metrics_en) ? project.metrics_en : project.metrics;
  const pDeepDive = (isEn && project.deepDive_en) ? project.deepDive_en : project.deepDive;

  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSolution = document.getElementById('modal-solution');
  const modalResults = document.getElementById('modal-results');
  const modalTechs = document.getElementById('modal-techs');

  modalOverlay.setAttribute('data-current-project', projectId);

  modalTitle.textContent = pTitle;
  modalSubtitle.textContent = `${pRole} • ${pContext} • 📅 ${project.year}`;

  // Image Preview & Gallery Tabs
  const modalImgPreview = document.getElementById('modal-image-preview');
  const modalImg = document.getElementById('modal-img');
  const galleryTabs = document.getElementById('modal-gallery-tabs');

  if (modalImgPreview && modalImg) {
    if (project.image) {
      modalImg.src = project.image;
      modalImg.alt = pTitle;
      modalImgPreview.style.display = 'block';
    } else {
      modalImgPreview.style.display = 'none';
    }
  }

  if (galleryTabs) {
    if (project.gallery && project.gallery.length > 1) {
      galleryTabs.style.display = 'flex';
      galleryTabs.innerHTML = project.gallery.map((item, idx) => `
        <button class="modal-gallery-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchModalGalleryImage('${item.src}', this)">
          ${item.label}
        </button>
      `).join('');
    } else {
      galleryTabs.style.display = 'none';
      galleryTabs.innerHTML = '';
    }
  }

  // Metrics Bar
  modalMetrics.innerHTML = Object.entries(pMetrics).map(([key, val]) => `
    <div class="metric-item">
      <span class="metric-item-label">${key}</span>
      <span class="metric-item-val">${val}</span>
    </div>
  `).join('');

  // Features Section Handling
  const featuresSection = document.getElementById('modal-features-section');
  const featuresGrid = document.getElementById('modal-features-grid');
  if (featuresSection && featuresGrid) {
    if (project.platformFeatures && project.platformFeatures.length > 0) {
      featuresSection.style.display = 'block';
      featuresGrid.innerHTML = project.platformFeatures.map(feat => `
        <div class="modal-feature-item">
          <div class="modal-feature-head">
            <span class="modal-feature-icon">${feat.icon}</span>
            <span>${feat.title}</span>
          </div>
          <p class="modal-feature-desc">${feat.desc}</p>
        </div>
      `).join('');
    } else {
      featuresSection.style.display = 'none';
      featuresGrid.innerHTML = '';
    }
  }

  modalChallenge.textContent = pDeepDive.challenge;
  modalSolution.textContent = pDeepDive.solution;
  modalResults.innerHTML = pDeepDive.results.map(r => `<li>${r}</li>`).join('');
  modalTechs.innerHTML = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.switchModalGalleryImage = function(src, btn) {
  const modalImg = document.getElementById('modal-img');
  if (modalImg) {
    modalImg.src = src;
  }
  document.querySelectorAll('.modal-gallery-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
};

function closeModal() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    modalOverlay.removeAttribute('data-current-project');
    document.body.style.overflow = '';
  }
}

// --- COMPTEURS ANIMÉS DANS LA SECTION HERO ---
function initStatsCounter() {
  const statsElements = document.querySelectorAll('.stat-number');
  if (!statsElements.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
      hasAnimated = true;
      statsElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const duration = 1500;
        const step = Math.max(1, Math.floor(target / (duration / 25)));

        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          el.textContent = count + suffix;
        }, 25);
      });
    }
  }, { threshold: 0.2 });

  const statsContainer = document.querySelector('.hero-stats');
  if (statsContainer) observer.observe(statsContainer);
}

// --- ACTIONS DE COPIE RAPIDE (EMAIL, TÉLÉPHONE) ---
function initCopyActions() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.fr;
          showToast(currentLang === 'en' ? `Copied: ${textToCopy}` : `Copié : ${textToCopy}`);
          const originalText = btn.textContent;
          btn.textContent = dict.contact_copied_btn;
          setTimeout(() => { btn.textContent = originalText; }, 2000);
        }).catch(() => {
          showToast(currentLang === 'en' ? 'Copy error' : 'Erreur lors de la copie');
        });
      }
    });
  });
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨ ${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- FORMULAIRE DE CONTACT ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = form.querySelector('button[type="submit"]');
    const dict = I18N_DICTIONARY[currentLang] || I18N_DICTIONARY.fr;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      showToast(dict.toast_contact_error);
      return;
    }

    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'en' ? 'Sending message...' : 'Envoi en cours...';
    submitBtn.disabled = true;

    setTimeout(() => {
      showToast(currentLang === 'en' ? `Thank you ${nameInput.value}! Your message has been sent.` : `Merci ${nameInput.value} ! Votre message a bien été envoyé.`);
      form.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

// --- MENU MOBILE ---
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      toggleBtn.innerHTML = navLinks.classList.contains('mobile-open') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        toggleBtn.innerHTML = '☰';
      });
    });
  }
}

// --- SCROLL SPY POUR LA NAVIGATION ACTIVE ---
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

// --- DROPDOWN TÉLÉCHARGEMENT CV (ACCESSIBILITÉ & MOBILE) ---
function initCvDropdowns() {
  const cvDropdowns = document.querySelectorAll('.cv-dropdown');

  cvDropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.nav-btn-cv, .btn-secondary');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.nav-btn-cv, .btn-secondary');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        dropdown.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', () => {
    cvDropdowns.forEach(d => {
      d.classList.remove('open');
      const b = d.querySelector('.nav-btn-cv, .btn-secondary');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cvDropdowns.forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.nav-btn-cv, .btn-secondary');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });
}
