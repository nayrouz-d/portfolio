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
    nav_cv_fr_title: "CV en Français",
    nav_cv_fr_sub: "Version complète (PDF)",
    nav_cv_en_title: "Resume in English",
    nav_cv_en_sub: "Full English version (PDF)",

    // Hero
    hero_status: "Disponible pour opportunités • Java / Spring Boot & Angular",
    hero_role_title: "Ingénieure Informatique",
    hero_role_sub: "Développeuse Full Stack • Java / Spring Boot & Angular",
    hero_desc: "Ingénieure développeuse Full Stack (ESPRIT, Bac+5), avec 2 ans d’expérience à concevoir et livrer des applications web en production. Spécialisée dans le développement d’APIs REST Spring Boot et d’interfaces Angular, avec un code testé (JUnit 5, Mockito) et maintenable. Expérience de plateformes SaaS temps réel utilisées par plus de 100 clients, chacun gérant plusieurs équipements.",
    hero_btn_projects: "Explorer mes Projets",
    hero_btn_cv: "Télécharger mon CV",
    hero_pill_1: "☕ Java 17 • Spring Boot • Microservices",
    hero_pill_2: "⚡ Angular • TypeScript • Docker & CI/CD",
    hero_profile_role: "Ingénieure Développeuse Full Stack • Java / Spring Boot & Angular",
    hero_stat_1_label: "Années d'Ingénierie & Projets",
    hero_stat_2_label: "Temps de Réponse DB Optimisé",
    hero_stat_3_label: "Interventions Manuelles Réduites (Batch)",
    hero_stat_4_label: "Code Testé & Conteneurisé",

    // Projects Section
    projects_badge: "Portfolio Technique",
    projects_title: "Mes Projets Réalisés",
    projects_subtitle: "Une sélection complète de projets industriels, microservices, cloud et SaaS conçus et déployés avec Java, Spring Boot, Angular et PostgreSQL.",
    filter_all: "Tous les Projets",
    filter_java: "Java & Spring Boot",
    filter_angular: "Angular & Frontend",
    filter_saas: "SaaS & Télémétrie",
    filter_cloud: "Cloud & Microservices",
    btn_detail_features: "Voir les détails & fonctionnalités",
    btn_detail_standard: "Voir les détails & architecture",
    features_preview_title: "⚡ Modules & Capacités Clés :",
    features_preview_more: "+ voir toutes les fonctionnalités",

    // Experience Section
    exp_badge: "Parcours Professionnel",
    exp_title: "Expériences en Entreprise",
    exp_subtitle: "Interventions sur des projets à forte valeur ajoutée, de l'ingénierie logicielle au déploiement en production.",
    exp_job1_role: "Ingénieure Développeuse Full Stack Java / Angular",
    exp_job1_date: "01/2026 – Présent",
    exp_job1_task1: "<strong>VMDtrac V2 (Plateforme SaaS de tracking satellitaire & supervision de flotte)</strong> : Conçu des pipelines asynchrones d’ingestion de données télémétriques (Garmin inReach, Iridium SBD, SPOT, réseaux cellulaires), avec normalisation, déduplication et consolidation.",
    exp_job1_task2: "<strong>Optimisation Performance Database</strong> : Réduit de <strong>40 %</strong> les temps de réponse des requêtes PostgreSQL et TimescaleDB.",
    exp_job1_task3: "<strong>Sécurité Multi-Tenant</strong> : Sécurisé l'accès multi-tenant avec <strong>Zitadel IAM</strong> (OIDC, JWT, RBAC), garantissant l’isolation des données entre plus de 100 clients.",
    exp_job1_task4: "<strong>Supervision Géospatiale Temps Réel</strong> : Développé en <strong>Angular</strong> le suivi de flotte en direct, l'historique des trajets et la vue multi-équipements par client.",
    exp_job1_task5: "<strong>Fonctionnalités Métier Critiques</strong> : Livré les modules d'alertes SOS, détection de survitesse, géofencing et notifications multicanales.",
    exp_job1_task6: "<strong>Gestion Commerciale & Automatisation des Commissions</strong> : Automatisé le suivi des objectifs commerciaux et le calcul des commissions.",
    exp_job1_task7: "<strong>Synchronisation Odoo 17</strong> : Synchronisé les données avec Odoo 17 via API REST (échanges bidirectionnels), supprimant les ressaisies manuelles.",

    exp_job2_role: "Ingénieure Développement Full Stack Java / Angular",
    exp_job2_date: "10/2024 – 12/2025",
    exp_job2_task1: "Conçu des API REST <strong>Spring Boot</strong> sécurisées (JWT, <strong>Spring Security</strong>, RBAC) pour la gestion du personnel et le contrôle d’accès de plusieurs sites.",
    exp_job2_task2: "Développé une application <strong>Angular / TypeScript</strong> (RxJS, lazy loading) synchronisée en temps réel avec plusieurs équipements biométriques.",
    exp_job2_task3: "Intégré des SDKs et API externes, avec tests unitaires et d’intégration rigoureux (<strong>JUnit 5</strong>, <strong>Mockito</strong>).",
    exp_job2_task4: "Automatisé les déploiements conteneurisés <strong>Docker</strong> sur Linux via des pipelines <strong>CI/CD</strong>.",

    exp_job3_role: "Ingénieure Développeuse Full Stack, Stage PFE",
    exp_job3_date: "02/2024 – 09/2024",
    exp_job3_task1: "Développé des traitements batch <strong>Spring Batch</strong> pour l’ingestion et la réconciliation de données volumineuses, réduisant de <strong>90 %</strong> les interventions manuelles quotidiennes.",
    exp_job3_task2: "Conçu des API REST (<strong>Spring Boot</strong>, <strong>Spring Data JPA</strong>) exposant les métriques de logs aux équipes métier.",
    exp_job3_task3: "Développé un portail de supervision <strong>Angular</strong> avec tableaux de bord intégrant <strong>Power BI</strong>.",
    exp_job3_task4: "Mis en place une pipeline CI <strong>Jenkins</strong> intégrant tests automatisés, analyse <strong>SonarQube</strong> et builds continus.",

    // Skills Section
    skills_badge: "Expertise & Outils",
    skills_title: "Compétences Techniques",
    skills_subtitle: "Une maîtrise transverse couvrant le développement logiciel, les architectures modernes et l'infrastructure Cloud.",
    skills_cat_backend: "Backend & Architecture",
    skills_cat_frontend: "Frontend & UI/UX",
    skills_cat_devops: "DevOps, Cloud & Outils",
    skills_cat_data: "Bases de Données & ORM",
    skills_cat_testing: "Tests & Qualité",
    skills_cat_methods_languages: "Méthodes & Langues",
    skill_fr: "Français (C1 - Courant)",
    skill_en: "Anglais (B2 - Professionnel)",
    skill_de: "Allemand (A2 - Notions)",
    skill_ar: "Arabe (Langue Maternelle)",

    // Education Section
    edu_badge: "Cursus Académique",
    edu_title: "Diplômes & Formations",
    edu_subtitle: "Un cursus d'excellence en ingénierie logicielle et technologies numériques.",
    edu_deg1_title: "Diplôme National d’Ingénieur en Informatique — Bac+5",
    edu_deg1_school: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologie)",
    edu_deg2_title: "Licence en Génie Logiciel et Systèmes d’Information — Bac+3",
    edu_deg2_school: "ISSATM (Institut Supérieur des Sciences Appliquées et Technologiques de Mateur)",

    // Contact Section
    contact_badge: "Contactez-Moi",
    contact_title: "Discutons de Votre Projet",
    contact_subtitle: "Vous avez un projet innovant, un besoin d'expertise Java, Spring Boot ou Angular ? N'hésitez pas à me contacter.",
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
    footer_role: "Ingénieure Développeuse Full Stack • Java / Spring Boot & Angular",
    footer_home: "Accueil",
    footer_projects: "Projets",
    footer_experience: "Expérience",
    footer_skills: "Compétences",
    footer_contact: "Contact",
    footer_cv_fr: "🇫🇷 CV (FR)",
    footer_cv_en: "🇬🇧 Resume (EN)",
    footer_copyright: "© 2026 Nayrouz Gasmi. Tous droits réservés.",
    footer_tagline: "Conçu avec excellence & passion pour l'ingénierie logicielle.",

    // WhatsApp Floating Widget
    whatsapp_online: "En ligne",
    whatsapp_floating_msg: "Besoin d'un dev ou d'une collaboration ? Écrivez-moi sur WhatsApp ! 👋",
    whatsapp_floating_tooltip: "Discuter sur WhatsApp (+216 29 845 823)",
    whatsapp_bubble_action: "Ouvrir WhatsApp",

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
    hero_status: "Available for opportunities • Java / Spring Boot & Angular",
    hero_role_title: "Software Engineer",
    hero_role_sub: "Full Stack Developer • Java / Spring Boot & Angular",
    hero_desc: "Full Stack Software Engineer (ESPRIT, Master's Level Bac+5) with 2 years of experience designing and shipping production web applications. Developing resilient Spring Boot REST APIs and responsive Angular interfaces with tested (JUnit 5, Mockito) and maintainable code. Proven experience in real-time SaaS platforms serving 100+ clients, each managing multiple assets.",
    hero_btn_projects: "Explore My Projects",
    hero_btn_cv: "Download My Resume",
    hero_pill_1: "☕ Java 17 • Spring Boot • Microservices",
    hero_pill_2: "⚡ Angular • TypeScript • Docker & CI/CD",
    hero_profile_role: "Full Stack Software Engineer • Java / Spring Boot & Angular",
    hero_stat_1_label: "Years of Engineering Experience",
    hero_stat_2_label: "Database Query Latency Reduction",
    hero_stat_3_label: "Manual Batch Ingestion Reduced",
    hero_stat_4_label: "Tested & Containerized Code",

    // Projects Section
    projects_badge: "Technical Portfolio",
    projects_title: "Featured Projects",
    projects_subtitle: "A curated showcase of enterprise, microservices, cloud, and SaaS applications built with Java, Spring Boot, Angular, and PostgreSQL.",
    filter_all: "All Projects",
    filter_java: "Java & Spring Boot",
    filter_angular: "Angular & Frontend",
    filter_saas: "SaaS & Telemetry",
    filter_cloud: "Cloud & Microservices",
    btn_detail_features: "View Details & Features",
    btn_detail_standard: "View Details & Architecture",
    features_preview_title: "⚡ Key Modules & Capabilities:",
    features_preview_more: "+ view all capabilities",

    // Experience Section
    exp_badge: "Professional Journey",
    exp_title: "Work Experience",
    exp_subtitle: "High-impact contributions on mission-critical projects, from software engineering to production deployment.",
    exp_job1_role: "Full Stack Software Engineer (Java / Angular)",
    exp_job1_date: "01/2026 – Present",
    exp_job1_task1: "<strong>VMDtrac V2 (SaaS Telemetry & Fleet Tracking Platform)</strong>: Engineered asynchronous ingestion pipelines for heterogeneous telemetry data (Garmin inReach, Iridium SBD, SPOT, cellular networks) with data normalization, deduplication, and consolidation.",
    exp_job1_task2: "<strong>Database Performance Optimization</strong>: Reduced query response times by <strong>40%</strong> across high-volume PostgreSQL and TimescaleDB tables.",
    exp_job1_task3: "<strong>Multi-Tenant Security</strong>: Secured multi-tenant access using <strong>Zitadel IAM</strong> (OIDC, JWT, RBAC), ensuring strict data isolation across 100+ enterprise clients.",
    exp_job1_task4: "<strong>Real-Time Geospatial Supervision</strong>: Developed <strong>Angular</strong> frontend modules for live fleet monitoring, route playback, and multi-asset customer views.",
    exp_job1_task5: "<strong>Mission-Critical Features</strong>: Implemented SOS panic alerts, speeding detection, geofencing, and multi-channel notifications.",
    exp_job1_task6: "<strong>Sales Management & Automated Commissions</strong>: Automated sales target tracking and multi-tier progressive commission calculations.",
    exp_job1_task7: "<strong>Odoo 17 Synchronization</strong>: Synchronized business data with Odoo 17 via bidirectional REST APIs, eliminating manual data re-entry.",

    exp_job2_role: "Full Stack Software Engineer (Java / Angular)",
    exp_job2_date: "10/2024 – 12/2025",
    exp_job2_task1: "Designed secure <strong>Spring Boot</strong> REST APIs (JWT, <strong>Spring Security</strong>, RBAC) for personnel management and multi-site access control.",
    exp_job2_task2: "Built an <strong>Angular / TypeScript</strong> application (RxJS, lazy loading) synchronized in real-time with multiple biometric hardware devices.",
    exp_job2_task3: "Integrated external hardware SDKs and APIs with thorough unit and integration testing using <strong>JUnit 5</strong> and <strong>Mockito</strong>.",
    exp_job2_task4: "Automated <strong>Docker</strong> container deployments on Linux VPS using reliable <strong>CI/CD</strong> pipelines.",

    exp_job3_role: "Full Stack Software Engineer Intern (Master's Thesis PFE)",
    exp_job3_date: "02/2024 – 09/2024",
    exp_job3_task1: "Developed automated <strong>Spring Batch</strong> jobs for high-volume data ingestion and reconciliation, reducing daily manual effort by <strong>90%</strong>.",
    exp_job3_task2: "Engineered REST APIs using <strong>Spring Boot</strong> and <strong>Spring Data JPA</strong> to expose audit logs and operational metrics to business teams.",
    exp_job3_task3: "Developed an <strong>Angular</strong> supervision portal featuring interactive <strong>Power BI</strong> business intelligence dashboards.",
    exp_job3_task4: "Implemented a <strong>Jenkins</strong> CI pipeline incorporating automated test suites, <strong>SonarQube</strong> static code analysis, and continuous builds.",

    // Skills Section
    skills_badge: "Expertise & Tools",
    skills_title: "Technical Skills",
    skills_subtitle: "Cross-functional expertise covering enterprise full-stack development, modern architectures, and Cloud infrastructure.",
    skills_cat_backend: "Backend & Architecture",
    skills_cat_frontend: "Frontend & UI/UX",
    skills_cat_devops: "DevOps, Cloud & Tools",
    skills_cat_data: "Databases & ORM",
    skills_cat_testing: "Testing & Quality",
    skills_cat_methods_languages: "Methodologies & Languages",
    skill_fr: "French (C1 - Fluent)",
    skill_en: "English (B2 - Professional)",
    skill_de: "German (A2 - Elementary)",
    skill_ar: "Arabic (Native)",

    // Education Section
    edu_badge: "Academic Background",
    edu_title: "Education & Degrees",
    edu_subtitle: "Rigorous academic training in software engineering and digital technologies.",
    edu_deg1_title: "National Engineering Degree in Computer Science — Master's Level (Bac+5)",
    edu_deg1_school: "ESPRIT (Higher Private School of Engineering and Technology)",
    edu_deg2_title: "Bachelor's Degree in Software Engineering & Information Systems (Bac+3)",
    edu_deg2_school: "ISSATM (Higher Institute of Applied Sciences and Technology of Mateur)",

    // Contact Section
    contact_badge: "Get In Touch",
    contact_title: "Let's Discuss Your Project",
    contact_subtitle: "Have an innovative project or looking for Java, Spring Boot, or Angular expertise? Feel free to reach out.",
    contact_stay_connected: "Let's Connect",
    contact_intro: "I respond promptly to job opportunities, consulting inquiries, or technical collaborations.",
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
    footer_role: "Full Stack Software Engineer • Java / Spring Boot & Angular",
    footer_home: "Home",
    footer_projects: "Projects",
    footer_experience: "Experience",
    footer_skills: "Skills",
    footer_contact: "Contact",
    footer_cv_fr: "🇫🇷 Resume (FR)",
    footer_cv_en: "🇬🇧 Resume (EN)",
    footer_copyright: "© 2026 Nayrouz Gasmi. All rights reserved.",
    footer_tagline: "Crafted with excellence & passion for software engineering.",

    // WhatsApp Floating Widget
    whatsapp_online: "Online",
    whatsapp_floating_msg: "Looking for a dev or collaboration? Let's chat on WhatsApp! 👋",
    whatsapp_floating_tooltip: "Chat on WhatsApp (+216 29 845 823)",
    whatsapp_bubble_action: "Open WhatsApp",

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
    title: "VMDtrac V2 – Plateforme SaaS de Télémétrie & Tracking Satellitaire",
    title_en: "VMDtrac V2 – SaaS Satellite Telemetry & Real-Time Tracking Platform",
    category: "saas",
    categories: ["saas", "java", "angular"],
    categoryLabel: "SaaS & Télémétrie",
    categoryLabel_en: "SaaS & Telemetry",
    contextBadge: "Virtual Mobile Data Solutions (2026)",
    contextBadge_en: "Virtual Mobile Data Solutions (2026)",
    year: "2026",
    dateOrder: 202603,
    role: "Ingénieure Développeuse Full Stack Java / Angular",
    role_en: "Full Stack Software Engineer (Java / Angular)",
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
    gradient: "linear-gradient(135deg, #0284c7, #38bdf8)",
    shortDesc: "Plateforme SaaS de tracking satellitaire et supervision de flotte en temps réel utilisée par plus de 100 clients (chacun gérant plusieurs équipements) : pipelines d'ingestion asynchrones (Garmin inReach, Iridium SBD, SPOT), requêtes optimisées (-40%), sécurité Zitadel IAM et interface Angular.",
    shortDesc_en: "Real-time satellite fleet tracking SaaS platform deployed for 100+ enterprise clients (each managing multiple assets): asynchronous telemetry ingestion pipelines (Garmin inReach, Iridium SBD, SPOT), optimized database queries (-40%), Zitadel IAM security, and responsive Angular UI.",
    highlights: [
      "Pipelines asynchrones d'ingestion de flux satellitaires (Garmin inReach, Iridium SBD, SPOT, réseaux cellulaires)",
      "Optimisation de la performance base de données : réduction de 40 % des temps de réponse (PostgreSQL & TimescaleDB)",
      "Sécurisation multi-tenant avec Zitadel IAM (OAuth2 / OIDC, JWT, RBAC), garantissant l'isolation des données entre plus de 100 clients",
      "Supervision géospatiale Angular temps réel : suivi de flotte en direct, historique des trajets et module de Replay",
      "Modules d'alertes critiques : détection de survitesse, franchissement de géofence, panique SOS et synchro Odoo 17"
    ],
    highlights_en: [
      "Asynchronous ingestion pipelines for satellite telemetry (Garmin inReach, Iridium SBD, SPOT, cellular networks)",
      "Database performance optimization: 40% reduction in query response times across PostgreSQL & TimescaleDB",
      "Robust multi-tenant security with Zitadel IAM (OAuth2 / OIDC, JWT, RBAC) ensuring strict data isolation across 100+ clients",
      "Real-time Angular geospatial supervision: live fleet monitoring, historical route replay, and multi-asset views",
      "Mission-critical modules: speeding detection, geofencing breaches, SOS panic alerts, and Odoo 17 REST sync"
    ],
    techStack: ["Java 17", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "TimescaleDB", "Zitadel IAM", "Docker", "Odoo 17", "API REST"],
    metrics: {
      "Performance DB": "-40% temps de réponse",
      "Sécurité": "Zitadel IAM Multi-Tenant",
      "Télémétrie": "Garmin, Iridium, SPOT",
      "Synchronisation": "Odoo 17 REST API"
    },
    metrics_en: {
      "DB Performance": "-40% query response time",
      "Security": "Multi-Tenant Zitadel IAM",
      "Telemetry": "Garmin, Iridium, SPOT",
      "Synchronization": "Odoo 17 REST API"
    },
    platformFeatures: [
      {
        icon: "🗺️",
        title: "Carte en Direct (Real-time Fleet Supervision)",
        desc: "Supervision continue de l'ensemble de la flotte avec actualisation sous la seconde des coordonnées GPS, des indicateurs d'état et du cap des véhicules."
      },
      {
        icon: "🌐",
        title: "Cartographie Multi-Fournisseurs (Multi-Provider Mapping)",
        desc: "Bascule instantanée entre Google Maps, Mapbox 3D, OpenStreetMap (OSM) et Esri pour une lisibilité optimale sur le terrain."
      },
      {
        icon: "⏪",
        title: "Replay & Trajectoires Historiques (Route Playback)",
        desc: "Reconstitution exacte des parcours avec sélecteur de période, profils de vitesse, arrêts et lecture pas-à-pas sur la chronologie."
      },
      {
        icon: "🚩",
        title: "Gestion des Missions & Checkpoints",
        desc: "Définition, affectation et suivi d'itinéraires opérationnels avec validation automatique des points de passage obligatoires."
      },
      {
        icon: "📍",
        title: "Géofencing & Surveillance Spatiale",
        desc: "Délimitation de zones géographiques polygonales ou circulaires avec alertes instantanées sur entrée, sortie et limitations."
      },
      {
        icon: "🔔",
        title: "Système d'Alertes Multi-Canaux",
        desc: "Détection immédiate d'anomalies critiques (bouton panique SOS, dépassement de vitesse) diffusées en temps réel par SMS et email."
      },
      {
        icon: "🔐",
        title: "Sécurité & IAM Centralisé Zitadel",
        desc: "Contrôle d'accès multi-tenant propulsé par Zitadel IAM : authentification OIDC, rôles RBAC et tokens JWT vérifiés."
      },
      {
        icon: "🚛",
        title: "Gestion des Actifs & Boîtiers Télématiques",
        desc: "Inventaire dynamique du parc de véhicules, engins et bateaux avec association des numéros IMEI et protocoles."
      },
      {
        icon: "📊",
        title: "Tableaux de Bord & KPIs Opérationnels",
        desc: "Synthèses d'activité, taux d'utilisation de la flotte, distances cumulées et temps de conduite journaliers."
      },
      {
        icon: "📥",
        title: "Export de Rapports Normalisés (PDF & XLSX)",
        desc: "Génération automatique et téléchargement en un clic de rapports d'activité et bilans de mission."
      },
      {
        icon: "🛰️",
        title: "Connectivité Satellitaire Mondiale",
        desc: "Prise en charge native des flux Garmin InReach, Iridium SBD et terminaux SPOT pour les zones hors couverture GSM."
      },
      {
        icon: "💻",
        title: "Interface Réactive & Ergonomie Angular",
        desc: "Interface moderne en Angular et TypeScript : composants réactifs, mode Sombre / Clair et compatibilité responsive."
      }
    ],
    deepDive: {
      challenge: "Développer une plateforme SaaS temps réel capable de traiter simultanément des flux hétérogènes de télémétrie satellitaire et cellulaire pour des flottes critiques, de stocker et requêter des millions de coordonnées GPS sans latence, et d'assurer une étanchéité multi-tenant absolue.",
      solution: "Conception de pipelines d'ingestion asynchrones robustes, modélisation optimisée sous PostgreSQL et TimescaleDB (hyper-tables, index spatiaux, politiques de rétention), sécurisation Zero Trust via Zitadel IAM (OAuth2/OIDC, RBAC) et interface interactive développée sous Angular avec cartographie multi-fournisseurs et module de replay temporel.",
      results: [
        "Réduction prouvée de 40 % des temps de réponse des requêtes sur les tables volumineuses de télémétrie",
        "Supervision cartographique sous la seconde avec bascule fluide Google Maps, Mapbox 3D et OSM",
        "Replay historique complet avec reconstitution fidèle des trajectoires et profils de vitesse",
        "Garantie d'isolation stricte des données entre clients grâce à Zitadel IAM et aux tokens JWT signés",
        "Synchronisation bidirectionnelle fluide avec Odoo 17 pour la facturation et la gestion des abonnements"
      ]
    },
    deepDive_en: {
      challenge: "Develop a high-reliability real-time SaaS platform capable of ingesting heterogeneous satellite and cellular telemetry streams for critical fleets, querying millions of GPS data points with zero latency, and enforcing strict multi-tenant isolation.",
      solution: "Engineered robust asynchronous ingestion pipelines, optimized data architectures with PostgreSQL and TimescaleDB hyper-tables, secured access with Zitadel IAM (OAuth2/OIDC, RBAC), and built a responsive Angular UI with multi-provider map switching and historical route replay.",
      results: [
        "40% reduction in database query latency across massive time-series telemetry datasets",
        "Sub-second real-time fleet supervision with seamless switching between Google Maps, Mapbox 3D, and OSM",
        "Full historical replay module accurately reconstructing routes, speed profiles, and idle times",
        "Strict client data isolation ensured by Zitadel IAM and cryptographically signed JWT tokens",
        "Seamless bidirectional REST synchronization with Odoo 17 for automated telematic billing"
      ]
    }
  },
  {
    id: "vente-gestion-commerciale",
    title: "Plateforme Web de Vente & Gestion Commerciale",
    title_en: "Enterprise Sales & Commercial Operations Web Platform",
    category: "java",
    categories: ["java", "angular", "saas"],
    categoryLabel: "Java & Spring Boot",
    categoryLabel_en: "Java & Spring Boot",
    contextBadge: "En Production Réelle (2026)",
    contextBadge_en: "In Active Production (2026)",
    year: "2026",
    dateOrder: 202602,
    role: "Ingénieure Développeuse Full Stack Java / Angular",
    role_en: "Full Stack Software Engineer (Java / Angular)",
    icon: "📈",
    image: "assets/vmd_commission_dashboard.png",
    gradient: "linear-gradient(135deg, #f97316, #fb923c)",
    shortDesc: "Conception et déploiement en production réelle d'une plateforme web complète pour la gestion commerciale et les ventes : backend REST Spring Boot & Spring Data JPA, persistance relationnelle PostgreSQL, interface Angular réactive et déploiement Linux Nginx.",
    shortDesc_en: "End-to-end design and production deployment of a complete commercial sales management platform: Spring Boot & Spring Data JPA REST backend, PostgreSQL persistence, reactive Angular frontend, and Linux Nginx deployment.",
    highlights: [
      "Backend REST modulaire développé avec Spring Boot, Spring MVC et Spring Data JPA avec validation métier stricte",
      "Interface utilisateur réactive et intuitive développée avec Angular, TypeScript et composants Angular Material",
      "Modélisation relationnelle avancée et persistance optimisée sous PostgreSQL",
      "Moteur de calcul automatisé des objectifs commerciaux et des commissions progressives par paliers",
      "Déploiement et sécurisation de l'application sur serveur Linux avec reverse proxy Nginx et SSL"
    ],
    highlights_en: [
      "Modular REST backend built with Spring Boot, Spring MVC, and Spring Data JPA with robust business validation",
      "Modern, responsive user interface developed with Angular, TypeScript, and Angular Material components",
      "Advanced relational data modeling and optimized persistence powered by PostgreSQL",
      "Automated progressive tier commission calculation engine aligning sales performance with company targets",
      "Hardened deployment and configuration on Linux servers fronted by Nginx reverse proxy and SSL"
    ],
    techStack: ["Java 11/17", "Spring Boot", "Spring Data JPA", "Spring MVC", "Angular", "Angular Material", "TypeScript", "PostgreSQL", "Nginx", "Linux"],
    metrics: {
      "Statut": "En Production Réelle",
      "Architecture": "Spring Boot REST + Angular",
      "Base de Données": "PostgreSQL & JPA",
      "Hébergement": "Linux & Nginx"
    },
    metrics_en: {
      "Status": "In Active Production",
      "Architecture": "Spring Boot REST + Angular",
      "Database": "PostgreSQL & JPA",
      "Hosting": "Linux & Nginx"
    },
    deepDive: {
      challenge: "Remplacer des processus de gestion commerciale fragmentés et des calculs manuels de commissions par une solution web unifiée, hautement disponible, sécurisée et capable de s'adapter aux règles d'objectifs de vente en constante évolution.",
      solution: "Conception d'une architecture client-serveur découplée : backend Spring Boot respectant les principes Clean Code et l'injection de dépendances, mapping relationnel via Spring Data JPA avec requêtes JPQL optimisées sur PostgreSQL, et frontend Angular réactif exploitant Angular Material pour une navigation fluide et des tableaux de bord dynamiques.",
      results: [
        "Plateforme déployée et exploitée en production réelle avec haute fiabilité",
        "Automatisation intégrale des calculs de commissions, supprimant les erreurs de saisie et les contestations",
        "Temps de consultation et de validation des ventes réduit significativement pour les managers",
        "Haute performance garantie grâce à l'optimisation Nginx et aux index PostgreSQL ciblés"
      ]
    },
    deepDive_en: {
      challenge: "Replace fragmented sales tracking spreadsheets and tedious manual commission calculations with a unified, highly available, and secure web application adapting to evolving sales quota rules.",
      solution: "Engineered a decoupled client-server architecture: robust Spring Boot REST backend adhering to Clean Code and dependency injection, Spring Data JPA mapping with optimized JPQL queries on PostgreSQL, and a responsive Angular frontend leveraging Angular Material for intuitive dashboards.",
      results: [
        "Platform deployed and running smoothly in active enterprise production",
        "Full automation of quota-tier commission computations, eliminating manual overhead and discrepancies",
        "Drastic reduction in approval cycle times for commercial managers and executive leadership",
        "Exceptional performance and uptime delivered through Nginx reverse proxy caching and targeted PostgreSQL indexes"
      ]
    }
  },
  {
    id: "ecommerce-microservices-cloud",
    title: "Application E-Commerce Distribuée & Cloud-Native",
    title_en: "Distributed Cloud-Native E-Commerce Platform",
    category: "cloud",
    categories: ["cloud", "java", "angular"],
    categoryLabel: "Cloud & Microservices",
    categoryLabel_en: "Cloud & Microservices",
    contextBadge: "Microservices & Kubernetes (2025)",
    contextBadge_en: "Microservices & Kubernetes (2025)",
    year: "2025",
    dateOrder: 202512,
    role: "Ingénieure Full Stack & Cloud",
    role_en: "Full Stack & Cloud Engineer",
    icon: "🛍️",
    image: "assets/ecommerce_hero.png",
    gallery: [
      { label: "🛍️ Catalogue & Boutique", src: "assets/ecommerce_hero.png" },
      { label: "🏷️ Logo Sniper Phone", src: "assets/sniper_phone_logo.jpg" }
    ],
    gradient: "linear-gradient(135deg, #0284c7, #2563eb)",
    shortDesc: "Architecture microservices distribuée résiliente propulsée par Spring Boot : catalogue, commandes, authentification et API Gateway. Frontend dynamique Angular (TypeScript, RxJS), conteneurisation Docker, orchestration Kubernetes et pipeline CI/CD GitLab CI.",
    shortDesc_en: "Resilient distributed microservices architecture powered by Spring Boot: catalog, orders, authentication, and API Gateway. Dynamic Angular frontend (TypeScript, RxJS), Docker containerization, Kubernetes orchestration, and GitLab CI/CD pipeline.",
    highlights: [
      "Découpage en microservices indépendants sous Spring Boot : Service Authentification, Catalogue, Commandes et API Gateway",
      "Frontend dynamique et modulaire développé avec Angular, TypeScript, RxJS et chargement différé (Lazy Loading)",
      "Conteneurisation multi-stage avec Docker et orchestration des déploiements sur cluster Kubernetes",
      "Pipeline CI/CD GitLab CI automatisé avec tests unitaires, analyse de code et déploiement continu",
      "Persistance relationnelle isolée sous PostgreSQL avec schémas dédiés et résilience réseau"
    ],
    highlights_en: [
      "Modular microservices decoupling with Spring Boot: Auth Service, Catalog, Orders, and API Gateway",
      "Dynamic and reactive frontend built with Angular, TypeScript, RxJS, and route-based Lazy Loading",
      "Multi-stage Docker containerization and resilient pod orchestration on Kubernetes clusters",
      "Automated GitLab CI/CD pipeline featuring automated unit tests, code analysis, and continuous deployment",
      "Isolated relational persistence per service using PostgreSQL with resilient communication patterns"
    ],
    techStack: ["Java 17", "Spring Boot Microservices", "Spring Security", "Angular", "TypeScript", "RxJS", "Docker", "Kubernetes", "GitLab CI/CD", "PostgreSQL"],
    metrics: {
      "Architecture": "Microservices Spring Boot",
      "Orchestration": "Cluster Kubernetes",
      "CI/CD": "GitLab CI Automatisé",
      "Frontend": "Angular & RxJS"
    },
    metrics_en: {
      "Architecture": "Spring Boot Microservices",
      "Orchestration": "Kubernetes Cluster",
      "CI/CD": "Automated GitLab CI",
      "Frontend": "Angular & RxJS"
    },
    deepDive: {
      challenge: "Concevoir une plateforme de commerce électronique à haute scalabilité capable d'encaisser des pics de trafic, de garantir un découplage sans point de défaillance unique (No SPOF) et de permettre des déploiements sans interruption de service.",
      solution: "Architecture orientée microservices bâtie sur Spring Boot et Spring Cloud (API Gateway, découverte de services, gestion de configuration). Chaque service est conteneurisé via des images Docker optimisées et orchestré sur Kubernetes avec des règles d'autoscaling. L'interface Angular assure une expérience utilisateur réactive grâce à RxJS.",
      results: [
        "Scalabilité horizontale indépendante pour chaque domaine métier (commandes, panier, catalogue)",
        "Pipeline de déploiement continu GitLab CI automatisant l'intégralité du cycle de release",
        "Disponibilité maximale et tolérance aux pannes assurée par l'orchestrateur Kubernetes",
        "Expérience client fluide avec panier réactif et temps de chargement inférieur à la seconde"
      ]
    },
    deepDive_en: {
      challenge: "Design a high-scalability e-commerce platform capable of handling traffic spikes, eliminating single points of failure (No SPOF), and enabling zero-downtime rolling updates.",
      solution: "Built a microservices-based architecture on Spring Boot and Spring Cloud (API Gateway, service discovery, configuration management). Each service is containerized via lightweight Docker images and orchestrated on Kubernetes with autoscaling policies. The Angular frontend delivers a snappy UI via RxJS state management.",
      results: [
        "Independent horizontal scalability for distinct business domains (Orders, Cart, Catalog)",
        "Automated GitLab CI pipeline executing test suites, container publishing, and zero-downtime rollouts",
        "High fault-tolerance and self-healing resilience enforced by Kubernetes",
        "Sub-second page transitions and seamless interactive cart drawer for end-users"
      ]
    }
  },
  {
    id: "smltp-foreigners",
    title: "Gestion des Titres de Séjour & Enrôlement Biométrique",
    title_en: "Residence Permits & Biometric Enrollment System",
    category: "angular",
    categories: ["angular", "java"],
    categoryLabel: "Angular & Frontend",
    categoryLabel_en: "Angular & Frontend",
    contextBadge: "SMLTP (2025)",
    contextBadge_en: "SMLTP (2025)",
    year: "2025",
    dateOrder: 202511,
    role: "Ingénieure Développement Full Stack Java / Angular",
    role_en: "Full Stack Software Engineer (Java / Angular)",
    icon: "🛂",
    image: "assets/smltp_foreigners_management.png",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    shortDesc: "Système officiel d'identification sécurisée et contrôle d'accès multi-sites : API REST Spring Boot sécurisées (Spring Security, JWT, RBAC), application Angular / TypeScript réactive synchronisée en temps réel avec des équipements biométriques et tests rigoureux JUnit 5 / Mockito.",
    shortDesc_en: "Mission-critical identity management and multi-site access control system: secure Spring Boot REST APIs (Spring Security, JWT, RBAC), real-time Angular / TypeScript frontend synchronized with biometric hardware, and comprehensive JUnit 5 / Mockito testing.",
    highlights: [
      "Conception d'APIs REST Spring Boot sécurisées (JWT, Spring Security, RBAC) pour le contrôle d'accès multi-sites",
      "Développement d'une application Angular / TypeScript (RxJS, Lazy Loading) réactive et ergonomique",
      "Synchronisation temps réel avec plusieurs équipements biométriques (capture d'empreintes digitales)",
      "Intégration de SDKs et APIs pour la numérisation de documents ICAO et la reconnaissance optique de la zone MRZ",
      "Couverture de tests unitaires et d'intégration avec JUnit 5 et Mockito, déploiement Docker sur Linux"
    ],
    highlights_en: [
      "Engineered secure Spring Boot REST APIs (JWT, Spring Security, RBAC) for multi-site access control and personnel management",
      "Developed a responsive, modular Angular / TypeScript application (RxJS, Lazy Loading)",
      "Real-time synchronization with biometric hardware devices (fingerprint capture and validation)",
      "Integration of specialized SDKs and REST APIs for ICAO document scanning and automatic MRZ optical parsing",
      "Rigorous unit and integration test coverage with JUnit 5 and Mockito, automated Docker CI/CD on Linux"
    ],
    techStack: ["Java 17", "Spring Boot", "Angular", "TypeScript", "RxJS", "Spring Security", "JUnit 5", "Mockito", "Docker", "Linux"],
    metrics: {
      "Lecture MRZ": "Scan automatique instantané",
      "Biométrie": "Validation d'empreintes",
      "Tests": "JUnit 5 & Mockito",
      "Sécurité": "JWT & Spring Security"
    },
    metrics_en: {
      "MRZ Parsing": "Instant automatic scan",
      "Biometrics": "Fingerprint verification",
      "Testing": "JUnit 5 & Mockito",
      "Security": "JWT & Spring Security"
    },
    deepDive: {
      challenge: "Développer une application d'État hautement sécurisée pour l'enrôlement officiel des résidents, éliminer les risques d'erreur de saisie de passeport et interfacer en direct des scanners de documents ICAO et des capteurs biométriques.",
      solution: "Architecture applicative robuste articulée autour d'un backend Spring Boot sécurisé par Spring Security et JWT, avec contrôle d'accès strict par rôles (RBAC). Le frontend Angular interagit avec les périphériques matériels via des passerelles SDK pour numériser en temps réel le document, parser la zone MRZ et certifier l'empreinte digitale.",
      results: [
        "Enrôlement accéléré à moins de 30 secondes par dossier grâce à la lecture OCR MRZ instantanée",
        "Fiabilisation absolue des données d'identité et traçabilité inviolable des accès",
        "Couverture de tests automatisés JUnit 5 et Mockito assurant une maintenance sereine",
        "Déploiements fiabilisés par pipeline CI/CD et conteneurisation Docker sur serveur VPS Linux"
      ]
    },
    deepDive_en: {
      challenge: "Develop a mission-critical, secure identity management system to streamline the enrollment of foreign residents, prevent manual passport transcription errors, and interface specialized biometric and ICAO scanners in real time.",
      solution: "Engineered a hardened application stack featuring a Spring Boot backend secured with Spring Security, JWT, and RBAC access policies. The Angular frontend communicates with hardware SDKs to capture high-resolution passport scans, parse optical MRZ lines, and bind verified fingerprint biometrics.",
      results: [
        "Enrollment accelerated to under 30 seconds per record via automatic OCR MRZ reading",
        "Guaranteed identity data precision and strict compliance with statutory security standards",
        "Robust automated test suite using JUnit 5 and Mockito ensuring long-term code stability",
        "Reliable continuous deployment pipeline with Docker containers on hardened Linux servers"
      ]
    }
  },
  {
    id: "ooredoo-traceability",
    title: "Traçabilité des Flux Data & Ingestion Spring Batch",
    title_en: "Data Pipeline Traceability & Spring Batch Ingestion",
    category: "java",
    categories: ["java", "angular"],
    categoryLabel: "Java & Spring Boot",
    categoryLabel_en: "Java & Spring Boot",
    contextBadge: "Ooredoo Tunisie (2024)",
    contextBadge_en: "Ooredoo Tunisia (2024)",
    year: "2024",
    dateOrder: 202409,
    role: "Ingénieure Développeuse Full Stack (Stage PFE)",
    role_en: "Full Stack Software Engineer Intern",
    icon: "📊",
    gradient: "linear-gradient(135deg, #e11d48, #fb7185)",
    shortDesc: "Plateforme web de traçabilité des flux Data de bout en bout : traitements batch automatisés Spring Batch réduisant de 90 % les interventions manuelles, API REST Spring Data JPA, portail de supervision Angular avec Power BI et pipeline Jenkins avec SonarQube.",
    shortDesc_en: "End-to-end data activity traceability platform: automated Spring Batch ETL jobs reducing manual intervention by 90%, Spring Data JPA REST APIs, Angular web portal with Power BI, and Jenkins CI pipeline with SonarQube.",
    highlights: [
      "Traitements batch avec Spring Batch pour l'ingestion et la réconciliation automatisée de données volumineuses",
      "Réduction spectaculaire de 90 % des interventions manuelles quotidiennes des équipes d'exploitation",
      "APIs REST conçues avec Spring Boot et Spring Data JPA exposant les indicateurs clés aux équipes métier",
      "Portail de supervision interactif Angular avec intégration de tableaux de bord Power BI en temps réel",
      "Pipeline CI Jenkins intégrant des suites de tests automatisés, l'analyse SonarQube et des builds continus"
    ],
    highlights_en: [
      "Automated batch processing with Spring Batch for high-volume data ingestion and reconciliation",
      "Spectacular 90% reduction in daily manual verification tasks for data engineering teams",
      "REST APIs developed with Spring Boot and Spring Data JPA delivering audit metrics to business units",
      "Interactive Angular supervision portal with real-time Power BI business intelligence dashboards",
      "Jenkins CI pipeline incorporating automated test execution, SonarQube quality gates, and continuous builds"
    ],
    techStack: ["Java 11", "Spring Boot", "Spring Batch", "Spring Data JPA", "Angular", "Power BI", "Jenkins", "SonarQube", "Linux"],
    metrics: {
      "Automatisation": "-90% d'effort manuel",
      "Traitement": "Spring Batch Quotidien",
      "Qualité": "SonarQube & Tests CI",
      "Supervision": "Angular & Power BI"
    },
    metrics_en: {
      "Automation": "-90% manual effort",
      "Processing": "Automated Spring Batch",
      "Quality Gate": "SonarQube & CI Tests",
      "Supervision": "Angular & Power BI"
    },
    deepDive: {
      challenge: "Les équipes data d'un opérateur télécom majeur devaient auditer et réconcilier manuellement des volumes massifs de fichiers de logs chaque jour, provoquant des retards d'analyse et des risques de non-détection d'anomalies.",
      solution: "Architecture d'une chaîne automatisée à haute résilience avec Spring Batch pour parser, valider et ingérer les flux de données volumineux. Développement d'API REST sous Spring Boot et Spring Data JPA pour requêter l'historique d'audit, et conception d'un portail web Angular couplé à des visualisations Power BI.",
      results: [
        "Gain de productivité majeur : diminution de 90 % des interventions humaines sur l'ingestion",
        "Traçabilité infaillible et alertes proactives immédiates en cas d'incohérence de données",
        "Standardisation de la qualité du code grâce à la validation SonarQube intégrée à Jenkins",
        "Visibilité managériale en temps réel via des tableaux de bord Power BI clairs et actionnables"
      ]
    },
    deepDive_en: {
      challenge: "Telecommunications data teams had to manually verify and reconcile large volumes of log files every day, resulting in reporting delays and elevated risk of undetected anomalies.",
      solution: "Engineered a high-resilience automated pipeline using Spring Batch to parse, validate, and persist high-volume data streams. Developed Spring Boot and Spring Data JPA REST APIs for querying audit history, paired with an Angular portal and embedded Power BI dashboards.",
      results: [
        "Massive productivity gain: 90% decrease in manual verification tasks",
        "Rock-solid end-to-end traceability with proactive anomaly alerts",
        "Enforced code quality and test discipline through automated SonarQube gates in Jenkins CI",
        "Executive real-time visibility through rich, interactive Power BI operational dashboards"
      ]
    }
  },
  {
    id: "campconnect-tn",
    title: "CampConnect – Réservation & Organisation Outdoor",
    title_en: "CampConnect – Outdoor Camping & Tent Reservation Platform",
    category: "angular",
    categories: ["angular", "java"],
    categoryLabel: "Angular & Frontend",
    categoryLabel_en: "Angular & Frontend",
    contextBadge: "Plateforme Collaborative (2024)",
    contextBadge_en: "Community Platform (2024)",
    year: "2024",
    dateOrder: 202410,
    role: "Ingénieure Full Stack Java / Angular",
    role_en: "Full Stack Software Engineer",
    icon: "⛺",
    image: "assets/camping_platform_banner.png",
    gallery: [
      { label: "🏕️ Plateforme & Réservation", src: "assets/camping_platform_banner.png" }
    ],
    gradient: "linear-gradient(135deg, #059669, #10b981)",
    shortDesc: "Plateforme web collaborative dédiée aux passionnés de randonnée et de plein air : réservation en ligne de tentes et équipements outdoor, planification d'événements de camping, salon de discussion en temps réel via WebSocket et partage de spots naturels.",
    shortDesc_en: "Collaborative web platform for outdoor and hiking enthusiasts: online tent and gear rentals, group camp event planning, real-time live chat via WebSocket, and natural campsite guide.",
    highlights: [
      "Système de réservation en ligne de tentes et matériels outdoor avec calendrier dynamique des disponibilités",
      "Organisation d'événements de camping : localisation, dates, niveau de difficulté et gestion des inscriptions",
      "Messagerie interactive temps réel basée sur WebSocket pour la coordination, le covoiturage et les échanges",
      "Architecture Spring Boot & Angular avec sécurité par token JWT et base relationnelle PostgreSQL"
    ],
    highlights_en: [
      "Online rental booking system for tents and outdoor gear with real-time dynamic availability calendar",
      "Camping trip management: geographical locations, dates, trek difficulty ratings, and participant rosters",
      "Real-time WebSocket chat room for instant trip coordination, carpooling, and gear recommendations",
      "Spring Boot & Angular full-stack architecture with secure JWT token authentication and PostgreSQL storage"
    ],
    techStack: ["Java", "Spring Boot", "Angular", "TypeScript", "WebSocket", "API REST", "PostgreSQL", "Bootstrap"],
    metrics: {
      "Réservations": "Tentes & Matériel 24/7",
      "Temps Réel": "WebSocket Live Chat",
      "Événements": "Campings & Treks",
      "Architecture": "Spring Boot & Angular"
    },
    metrics_en: {
      "Bookings": "Tents & Gear 24/7",
      "Real-Time": "WebSocket Live Chat",
      "Events": "Campings & Treks",
      "Architecture": "Spring Boot & Angular"
    },
    deepDive: {
      challenge: "Faciliter l'organisation de bivouacs et randonnées en offrant aux passionnés de plein air un guichet unique pour louer des équipements de camping et coordonner leurs sorties de manière conviviale.",
      solution: "Développement d'une application web intégrant un module de réservation de tentes avec gestion de stock en temps réel, un planificateur d'itinéraires et un salon de discussion instantané WebSocket propulsé par Spring Boot et Angular.",
      results: [
        "Réservation intuitive de matériel outdoor avec calcul immédiat des disponibilités et tarifs",
        "Coordination efficace et fluide des groupes de campeurs grâce au chat en direct",
        "Architecture robuste assurant une gestion sécurisée des profils et réservations"
      ]
    },
    deepDive_en: {
      challenge: "Simplify outdoor trip logistics by providing outdoor enthusiasts with a single platform to rent camping gear and coordinate excursions seamlessly.",
      solution: "Engineered a collaborative platform integrating a tent rental engine with real-time inventory tracking, an expedition organizer, and a WebSocket live chat backed by Spring Boot and Angular.",
      results: [
        "Intuitive gear booking experience with instant pricing and availability verification",
        "Effortless group coordination and carpooling via real-time WebSocket communication",
        "Reliable architecture guaranteeing secure profile management and booking integrity"
      ]
    }
  },
  {
    id: "gestion-stock-aspnet",
    title: "StockMaster Pro – Administration & Gestion d'Inventaire",
    title_en: "StockMaster Pro – Enterprise Inventory Management System",
    category: "cloud",
    categories: ["cloud"],
    categoryLabel: "Cloud & Microservices",
    categoryLabel_en: "Cloud & Microservices",
    contextBadge: "StockMaster Pro (2025)",
    contextBadge_en: "StockMaster Pro (2025)",
    year: "2025",
    dateOrder: 202508,
    role: "Ingénieure Logiciel Full Stack",
    role_en: "Full Stack Software Engineer",
    icon: "📦",
    image: "assets/gestion_stock_aspnet.png",
    gallery: [
      { label: "📊 Tableau de Bord & Inventaire", src: "assets/gestion_stock_aspnet.png" },
      { label: "🔍 Filtres & Actions CRUD", src: "assets/gestion_stock_ui.png" }
    ],
    gradient: "linear-gradient(135deg, #2563eb, #38bdf8)",
    shortDesc: "Application web d'administration et de gestion des stocks : suivi d'inventaire en temps réel, indicateurs KPIs en direct (valeur globale, unités en stock, alertes de réapprovisionnement), recherche dynamique, catégorisation et opérations CRUD sécurisées.",
    shortDesc_en: "Web administration and inventory control system: real-time stock tracking, live KPI indicators, dynamic search, multi-category filtering, and secure full-cycle CRUD operations.",
    highlights: [
      "Tableau de bord KPIs en direct : calcul automatique des indicateurs clés (valorisation d'inventaire, unités en stock, alertes)",
      "Moteur de recherche instantané et filtrage multi-critères par catégories de produits",
      "Cycle CRUD complet (Créer, Consulter, Modifier, Supprimer) avec formulaires validés et contrôles stricts",
      "Architecture MVC modulaire avec persistance relationnelle optimisée et conteneurisation Docker"
    ],
    highlights_en: [
      "Live KPI dashboard: automated calculation of critical indicators (total inventory valuation, stock counts, reorder warnings)",
      "Instant search engine and multi-criteria category filtering for fast item lookup",
      "Complete CRUD cycle (Create, Read, Update, Delete) with validated models and strict data integrity",
      "Modular MVC architecture with optimized relational persistence and Docker containerization"
    ],
    techStack: ["Architecture MVC", "Entity Data Models", "APIs REST", "Relational Database", "Bootstrap 5", "HTML5/CSS3", "Docker"],
    metrics: {
      "Dashboard": "KPIs & Valeur en Direct",
      "Cycle CRUD": "Complet & Validé",
      "Recherche": "Instantanée Multi-critères",
      "Déploiement": "Conteneurisé Docker"
    },
    metrics_en: {
      "Dashboard": "Live KPIs & Stock Value",
      "CRUD Lifecycle": "Full & Validated",
      "Search": "Instant Multi-Criteria",
      "Deployment": "Docker Containerized"
    },
    deepDive: {
      challenge: "Offrir aux gestionnaires d'inventaire un outil rapide, fiable et visuel pour suivre la valeur des immobilisations, détecter les ruptures de stocks et effectuer les opérations quotidiennes sans friction.",
      solution: "Conception d'une application MVC structurée avec modèles de données stricts, injection de dépendances, interface Bootstrap 5 aux contrastes soignés et calculs de métriques automatisés côté serveur.",
      results: [
        "Supervision claire de la valorisation globale du stock et des alertes de réapprovisionnement",
        "Opérations CRUD ultra-rapides avec validation en temps réel des formulaires",
        "Application conteneurisée prête pour un déploiement continu en environnement cloud"
      ]
    },
    deepDive_en: {
      challenge: "Deliver an intuitive, fast, and visual inventory management system for stock administrators to track asset valuation, anticipate low-stock alerts, and perform daily updates effortlessly.",
      solution: "Built a structured MVC application with strict data models, dependency injection, responsive Bootstrap 5 interface, and automated server-side KPI recalculation.",
      results: [
        "Immediate oversight into global inventory valuation and automated replenishment alerts",
        "High-performance CRUD lifecycle with instant form validation",
        "Containerized application ready for continuous cloud deployment"
      ]
    }
  },
  {
    id: "odoo-erp-suite",
    title: "Intégration Odoo 17 & Synchronisation REST",
    title_en: "Odoo 17 Enterprise Integration & REST Synchronization",
    category: "saas",
    categories: ["saas", "java"],
    categoryLabel: "SaaS & Télémétrie",
    categoryLabel_en: "SaaS & Telemetry",
    contextBadge: "Virtual Mobile Data Solutions (2026)",
    contextBadge_en: "Virtual Mobile Data Solutions (2026)",
    year: "2026",
    dateOrder: 202601,
    role: "Ingénieure Développeuse Full Stack",
    role_en: "Full Stack Software Engineer",
    icon: "💼",
    gradient: "linear-gradient(135deg, #8b5cf6, #c084fc)",
    shortDesc: "Développement de modules métier sous Odoo 17 et interconnexion bidirectionnelle via API REST avec les plateformes de télémétrie pour synchroniser les actifs, abonnements et facturation.",
    shortDesc_en: "Custom business module development on Odoo 17 with bidirectional REST API synchronization for telemetry assets, subscriptions, and automated invoicing.",
    highlights: [
      "Conception et personnalisation de modules métier Odoo 17 pour la gestion d'actifs et d'abonnements",
      "Synchronisation bidirectionnelle via API REST avec les plateformes de télémétrie pour éliminer les ressaisies",
      "Génération automatisée de factures, rapports comptables et bilans d'activité",
      "Déploiement conteneurisé Docker et administration d'environnements Linux"
    ],
    highlights_en: [
      "Custom Odoo 17 business module development for asset inventory and recurring subscriptions",
      "Bidirectional REST API synchronization with telemetry platforms eliminating manual re-entries",
      "Automated generation of customer invoices, accounting reports, and activity logs",
      "Dockerized container deployments and Linux system administration"
    ],
    techStack: ["Odoo 17", "Python", "API REST", "PostgreSQL", "Docker", "Linux"],
    metrics: {
      "ERP": "Odoo 17 Enterprise",
      "Synchro": "API REST Bidirectionnelle",
      "Modules": "Sur-mesure",
      "Infra": "Docker & Linux"
    },
    metrics_en: {
      "ERP": "Odoo 17 Enterprise",
      "Sync": "Bidirectional REST API",
      "Modules": "Custom Tailored",
      "Infra": "Docker & Linux"
    },
    deepDive: {
      challenge: "Supprimer les doubles saisies et les incohérences de données entre la plateforme télématique et le progiciel de facturation de l'entreprise.",
      solution: "Développement d'un module d'intégration sous Odoo 17 communiquant par API REST pour synchroniser automatiquement les identifiants IMEI, les états d'abonnements et déclencher les facturations périodiques.",
      results: [
        "Suppression totale des ressaisies manuelles et fiabilisation des données comptables",
        "Génération instantanée des rapports mensuels pour les clients abonnés",
        "Architecture robuste sous Docker facilitant les mises à jour et la maintenance"
      ]
    },
    deepDive_en: {
      challenge: "Eliminate double data entry and data mismatches between the telemetry platform and corporate billing software.",
      solution: "Engineered a custom integration module in Odoo 17 interfacing via bidirectional REST endpoints to automatically sync GPS IMEI identifiers, subscription tiers, and periodic invoices.",
      results: [
        "Complete elimination of manual data re-entries and enhanced billing reliability",
        "Instant one-click monthly reporting for subscribers",
        "Robust Dockerized architecture easing maintenance and future upgrades"
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
  initWhatsAppWidget();
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

  // Traduction des infobulles et libellés d'accessibilité
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (dict[key]) {
      el.setAttribute('aria-label', dict[key]);
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
    : sortedProjects.filter(p => p.category === currentFilter || (Array.isArray(p.categories) && p.categories.includes(currentFilter)));

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
  const navbar = document.getElementById('navbar');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('mobile-open');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fermer le menu lors du clic sur un lien de navigation ou bouton CV mobile
    navLinks.querySelectorAll('.nav-link, .mobile-cv-action-btn').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        toggleBtn.innerHTML = '☰';
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu si l'utilisateur clique en dehors
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('mobile-open') && navbar && !navbar.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        toggleBtn.innerHTML = '☰';
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
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

// --- WIDGET POPUP FLOTTANT WHATSAPP (ACCESSIBLE SUR TOUTE LA PAGE) ---
function initWhatsAppWidget() {
  const widget = document.getElementById('whatsapp-widget');
  const bubble = document.getElementById('whatsapp-bubble');
  const closeBtn = document.getElementById('whatsapp-bubble-close');
  const toggleBtn = document.getElementById('whatsapp-toggle-btn');
  if (!widget || !bubble) return;

  // Fermeture du message bulle
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      bubble.classList.add('hidden');
      sessionStorage.setItem('nayrouz-whatsapp-bubble-closed', 'true');
    });
  }

  // Si fermé dans la session courante, masquer au chargement
  if (sessionStorage.getItem('nayrouz-whatsapp-bubble-closed') === 'true') {
    bubble.classList.add('hidden');
  }

  // Clic sur le bouton flottant principal : ré-ouvre la bulle si cachée, ou ouvre WhatsApp
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      if (bubble.classList.contains('hidden')) {
        e.preventDefault();
        bubble.classList.remove('hidden');
        sessionStorage.removeItem('nayrouz-whatsapp-bubble-closed');
      }
    });
  }
}

