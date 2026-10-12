/**
 * Portfolio Nayrouz Gasmi - Script Dynamique & Interactif
 * Fonctionnalités : Filtrage projets, Modales détaillées, Mode Sombre/Clair,
 * Compteurs animés, Copie rapide et Formulaire de contact.
 */

// --- BASE DE DONNÉES COMPLÈTE DES PROJETS ---
const PROJECTS_DATA = [
  {
    id: "vmdtrac-v2",
    title: "VMDTrac V2 – Plateforme IoT & Télémétrie Satellite",
    category: "iot",
    categoryLabel: "IoT & Télémétrie",
    contextBadge: "VMD Solutions (2026)",
    year: "2026",
    dateOrder: 202603,
    role: "Software Engineer / Full Stack Developer",
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
    highlights: [
      "Cartographie temps réel interactive : Google Terrain, Mapbox 3D, OSM, Esri, multi-vues (Split-screen) et géofencing",
      "Module Replay avancé : parcours historique (24h, 7j, 30j), profils de vitesse, arrêts et lecture pas-à-pas",
      "Architecture microservices en Go : Ingestion haute fréquence, Feed Relay satellite et Aggregation Service",
      "Ingestion des protocoles Garmin InReach, balises Iridium SBD, terminaux SPOT et passerelle SFTP",
      "Sécurité et contrôle d'accès multi-tenant centralisés avec Zitadel IAM (OAuth2 / OIDC) et alertes SMS / Email"
    ],
    techStack: ["Go (Golang)", "React.js", "TypeScript", "Google Maps API", "Mapbox", "Docker", "Zitadel IAM", "Traccar", "Odoo 17", "SFTP", "PostgreSQL"],
    metrics: {
      "Cartographie": "Google, Mapbox 3D, OSM",
      "Disponibilité": "99.9% Uptime temps réel",
      "Architecture": "Microservices Go",
      "Télémétrie": "Garmin, Iridium, SPOT"
    },
    platformFeatures: [
      {
        icon: "🗺️",
        title: "Carte en Direct (Real-time Asset & Fleet Tracking)",
        desc: "Supervision continue et dynamique de l'ensemble de la flotte avec actualisation sous la seconde des coordonnées GPS, des indicateurs d'état (en marche, à l'arrêt, alertes) et du cap des véhicules."
      },
      {
        icon: "🌐",
        title: "Cartographie Multi-Fournisseurs (Enhanced Mapping & Geolocation)",
        desc: "Capacités de géolocalisation enrichies avec bascule instantanée entre Google Maps (Terrain, Satellite, Routier), 3D Mapbox, OpenStreetMap (OSM), Stadia et Esri sans rechargement de page."
      },
      {
        icon: "⏪",
        title: "Replay & Trajectoires Historiques (Route Playback & Telemetry)",
        desc: "Rejouer l'historique complet des déplacements avec sélecteur de période (24h, 7j, 30j, personnalisé), résolution temporelle (raw à 1h), distance totale (ex: 865.4 km), profil de vitesse (min, moyenne, max) et barre de contrôle interactive."
      },
      {
        icon: "🚩",
        title: "Gestion des Missions & Checkpoints (Missions & Checkpoints)",
        desc: "Définition, affectation et suivi d'itinéraires opérationnels avec validation automatique des points de passage obligatoires, horodatage certifié et détection des retards."
      },
      {
        icon: "📍",
        title: "Géofencing & Surveillance Spatiale (Geofencing Monitoring)",
        desc: "Délimitation de zones géographiques polygonales ou circulaires, alertes en temps réel sur entrée/sortie de périmètre autorisé et contrôle automatique du respect des limitations de vitesse."
      },
      {
        icon: "🔔",
        title: "Système d'Alertes Multi-Canaux (SMS, Email & Push Notifications)",
        desc: "Détection immédiate d'anomalies critiques (bouton panique SOS, dépassement de vitesse, sortie de zone, déconnexion) avec diffusion instantanée par SMS, notifications push et courriels."
      },
      {
        icon: "🔐",
        title: "Sécurité & IAM Centralisé Zitadel (Secure User & Access Management)",
        desc: "Gestion multi-tenant stricte et gouvernance des identités propulsées par Zitadel IAM : authentification moderne OAuth2 / OpenID Connect (OIDC), contrôle d'accès basé sur les rôles (RBAC : Platform Admin, Client Admin, Opérateur), validation cryptographique des jetons JWT par les microservices Go, sessions sécurisées et traçabilité intégrale des logs d'audit."
      },
      {
        icon: "🚛",
        title: "Gestion des Actifs & Unités (Asset & Unit Management)",
        desc: "Gestion centralisée du parc de véhicules, engins, conteneurs et bateaux avec association dynamique des boîtiers GPS, des numéros IMEI et des caractéristiques d'exploitation."
      },
      {
        icon: "📊",
        title: "Tableaux de Bord Avancés & Reporting (Advanced Dashboards)",
        desc: "Indicateurs de performance opérationnelle en temps réel : synthèses d'activité, taux d'utilisation de la flotte, temps d'arrêt moteur, kilométrages cumulés et alertes enregistrées."
      },
      {
        icon: "📥",
        title: "Export de Données Multi-Formats (Data Export in PDF & XLSX)",
        desc: "Génération et téléchargement en un clic de rapports d'activité, journaux d'événements et bilans de missions aux formats normalisés PDF et feuilles de calcul Excel (XLSX)."
      },
      {
        icon: "🛰️",
        title: "Technologies Satellitaires (Satellite Communication Integration)",
        desc: "Intégration native des flux satellitaires Garmin InReach, Iridium SBD (Short Burst Data), SPOT Devices, SmartOne-B et passerelle SFTP automatisée pour une couverture mondiale hors réseau cellulaire."
      },
      {
        icon: "💻",
        title: "Interface Ergonomique & Responsive (Modern Responsive UI)",
        desc: "Interface moderne développée avec React.js et TypeScript : mode Sombre / Clair, découpage d'écran multi-vues (Split screen), raccourcis clavier et compatibilité totale mobile et tablette."
      }
    ],
    deepDive: {
      challenge: "Développer une plateforme cartographique unifiée et ultra-réactive capable de superviser des flottes critiques réparties sur tout le territoire, d'absorber simultanément des flux de données satellites hétérogènes (Garmin, Iridium, SPOT) et de proposer des outils d'analyse rétrospective (Replay) précis sans latence.",
      solution: "Conception d'une architecture microservices résiliente en Go (Feed-Relay haute performance pour l'ingestion satellite, service d'agrégation, passerelle SFTP) couplée à un frontend moderne en React.js et TypeScript avec bascule multi-fournisseurs (Google Maps, Mapbox 3D), lecteur de replay temporel, IAM Zitadel et interconnexion avec Odoo 17.",
      results: [
        "Supervision temps réel sous la seconde et visualisation cartographique fluide de flottes sur Google Maps, Mapbox 3D et OSM",
        "Module de replay interactif avec reconstitution exacte des trajectoires (ex: 865.4 km parcourus à travers la Tunisie avec profils de vitesse et arrêts)",
        "Couverture satellitaire mondiale ininterrompue pour les zones isolées (désert du Sahara, offshore, transfrontalier) via Garmin InReach, Iridium SBD et SPOT",
        "Authentification centralisée & sécurité Zero Trust avec Zitadel IAM : gestion multi-tenant étanche, OAuth2 / OIDC, rôles RBAC (Platform Admin, Client Admin, Opérateur) et tokens JWT signés",
        "Réactivité opérationnelle immédiate grâce aux alertes multi-canaux (SMS, email, push) sur franchissement de géofence, survitesse et bouton panique SOS",
        "Pipeline d'ingestion haute performance en Go garantissant zéro perte de trames télémétriques avec disponibilité continue (99.9% uptime)",
        "Synchronisation bidirectionnelle avec Odoo 17 pour la facturation automatisée des abonnements télématiques et la gestion du parc d'actifs"
      ]
    }
  },
  {
    id: "vmd-commission",
    title: "VMD Gestion Commerciale & Calcul des Commissions",
    category: "fullstack",
    categoryLabel: "Full Stack & FinTech",
    contextBadge: "VMD Solutions (2026)",
    year: "2026",
    dateOrder: 202602,
    role: "Software Engineer / Full Stack Developer",
    icon: "📈",
    image: "assets/vmd_commission_dashboard.png",
    gradient: "linear-gradient(135deg, #f97316, #fb923c)",
    shortDesc: "Plateforme web de pilotage des ventes, de gestion de la relation client et de calcul automatisé des commissions progressives par paliers (Go Gin, React TS, PostgreSQL, Traefik, Docker).",
    highlights: [
      "Moteur de calcul automatisé des commissions progressives par tranches (0-70%, 70-90%, 90-100%, 100-120%, >120%)",
      "Tableaux de bord de direction : Vue globale Direction, KPIs en direct, objectifs annuels et suivi par commercial",
      "Workflow de validation des ventes à double niveau : Commercial ➔ BackOffice ➔ Validation Direction",
      "Planification hebdomadaire des commerciaux, rapports d'activité et export dynamique PDF / Image",
      "Module d'extraction automatique de devis et factures par analyse optique et règles heuristiques"
    ],
    techStack: ["Go (Golang)", "Gin Gonic", "React (TS)", "Vite", "GORM", "PostgreSQL 16", "Traefik v3.1", "Docker", "Tailwind CSS", "Recharts", "jsPDF"],
    metrics: {
      "Objectif Global": "8.5M+ TND supervisés",
      "Architecture": "Go Gin + React TS",
      "Calcul Commissions": "Tranches progressives auto",
      "Sécurité": "RBAC & Traefik Proxy"
    },
    deepDive: {
      challenge: "L'équipe commerciale utilisait des processus manuels fastidieux pour consolider les ventes et calculer des commissions progressives complexes avec règles de bonus d'entreprise et multi-devises (TND / EUR / USD), générant des retards et des risques d'erreurs.",
      solution: "Développement d'une suite applicative conteneurisée avec Traefik. Backend haute performance en Go (Gin) intégrant un moteur de calcul par paliers d'objectifs, schéma PostgreSQL géré par GORM, interface React avec Tailwind CSS, graphiques Recharts, export PDF et module d'extraction automatique de devis.",
      results: [
        "Automatisation intégrale du calcul des commissions personnelles, bonus collectifs et primes managériales",
        "Visibilité immédiate de la direction sur le CA validé, en attente et l'atteinte des objectifs de l'équipe",
        "Gain de temps considérable pour les commerciaux grâce au planning hebdomadaire et aux rapports instantanés"
      ]
    }
  },
  {
    id: "smltp-foreigners",
    title: "Gestion des Étrangers & Enrôlement Biométrique",
    category: "fullstack",
    categoryLabel: "Biométrie & Documents Officiels",
    contextBadge: "SMLTP (2025)",
    year: "2025",
    dateOrder: 202511,
    role: "Ingénieur Informatique Full Stack",
    icon: "🛂",
    image: "assets/smltp_foreigners_management.png",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    shortDesc: "Système officiel (تطبيقية التصرف في الأجانب) d'identification sécurisée : numérisation de passeports ICAO, reconnaissance automatique de zone MRZ, capture d'empreintes biométriques et suivi des séjours.",
    highlights: [
      "Numérisation de passeport ICAO avec extraction optique automatique de la zone MRZ",
      "Renseignement instantané des champs (Nom, Prénom, Nationalité, Dates, Numéro ICAO)",
      "Intégration d'équipements biométriques pour la capture et validation d'empreintes digitales",
      "Fiche complète de situation (profession, employeur en Tunisie, coordonnées et séjour)"
    ],
    techStack: ["Spring Boot", "Angular", "SDK Biométrique", "Scanner ICAO & MRZ", "API REST", "Linux VPS", "CI/CD", "PostgreSQL"],
    metrics: {
      "Lecture MRZ": "Scan automatique instantané",
      "Biométrie": "Empreintes digitales",
      "Documents": "Passeport ICAO",
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
    }
  },
  {
    id: "ooredoo-traceability",
    title: "Traçabilité des Flux Data & Analytics BI",
    category: "fullstack",
    categoryLabel: "Full Stack & Data",
    contextBadge: "Ooredoo Tunisie (2024)",
    year: "2024",
    dateOrder: 202407,
    role: "Stagiaire Développeur Full Stack",
    icon: "📊",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    shortDesc: "Plateforme web de traçabilité complète des activités Data avec automatisation des flux par Spring Batch et tableaux de bord décisionnels Power BI.",
    highlights: [
      "Automatisation d'ingestion quotidienne de gros volumes de fichiers avec Spring Batch",
      "Réduction spectaculaire de 90 % des interventions manuelles quotidiennes",
      "Intégration d'un tableau de bord dynamique Power BI pour le suivi et l'analyse",
      "Pipeline CI/CD Jenkins pour des déploiements fiables et automatisés"
    ],
    techStack: ["Spring Boot", "Angular", "Spring Batch", "Power BI", "Jenkins CI/CD", "SQL", "Git"],
    metrics: {
      "Automatisation": "-90% d'effort manuel",
      "Performance": "Batch Quotidien Auto",
      "Reporting": "Power BI Interactif",
      "Déploiement": "CI/CD Jenkins"
    },
    deepDive: {
      challenge: "Les équipes data devaient auditer et vérifier manuellement des centaines de flux de données chaque jour, entraînant des retards d'analyse et un risque accru d'erreur humaine.",
      solution: "Mise en place d'une chaîne automatisée avec Spring Batch pour parser, valider et stocker les données en continu, couplée à un portail web Angular réactif et des visualisations Power BI pour les managers opérationnels.",
      results: [
        "Gain de temps massif : les interventions manuelles ont chuté de 90%",
        "Traçabilité infaillible et alertes automatiques en cas d'incohérence",
        "Automatisation du cycle de build et test grâce à Jenkins"
      ]
    }
  },
  {
    id: "odoo-erp-suite",
    title: "Modules Métier & Personnalisation Odoo 17",
    category: "erp",
    categoryLabel: "ERP & Automatisation",
    contextBadge: "VMD Solutions (2026)",
    year: "2026",
    dateOrder: 202601,
    role: "Développeur & Admin Odoo",
    icon: "💼",
    gradient: "linear-gradient(135deg, #8b5cf6, #c084fc)",
    shortDesc: "Développement sur-mesure de modules métier Odoo 17, interconnexion avec les flux de géolocalisation et automatisation de processus d'entreprise.",
    highlights: [
      "Conception de modules Odoo 17 pour la gestion d'actifs et d'abonnements télématiques",
      "Interfaçage API REST entre Odoo et les microservices de tracking VMDTrac",
      "Génération automatisée de rapports, factures et tableaux de bord financiers",
      "Administration système, déploiement Docker et sécurisation des bases de données Odoo"
    ],
    techStack: ["Python", "Odoo 17", "PostgreSQL", "XML", "API REST", "Docker", "Linux"],
    metrics: {
      "ERP Version": "Odoo 17 Enterprise",
      "Modules": "Sur-mesure",
      "Interconnexion": "API REST Temps Réel",
      "Données": "PostgreSQL Dédié"
    },
    deepDive: {
      challenge: "Éliminer la double saisie entre la plateforme de télémétrie VMDTrac et le logiciel de gestion de facturation et d'actifs de l'entreprise.",
      solution: "Développement d'un module Odoo dédié qui interroge et reçoit les événements de VMDTrac via API REST, synchronise les numéros IMEI des boîtiers, met à jour les statuts de compte et automatise la facturation.",
      results: [
        "Suppression totale des redondances de données et des erreurs de saisie",
        "Génération en un clic des rapports mensuels pour les clients abonnés",
        "Mise à niveau sereine vers Odoo 17 avec une base de code documentée et maintenable"
      ]
    }
  },
  {
    id: "sniper-phone-tn",
    title: "Sniper Phone TN – E-Commerce High-Tech & Apple",
    category: "fullstack",
    categoryLabel: "Full Stack & E-Commerce",
    contextBadge: "Sniper Phone TN (2025)",
    year: "2025",
    dateOrder: 202506,
    role: "Lead Full Stack & UI/UX Developer",
    icon: "📱",
    image: "assets/ecommerce_hero.png",
    gallery: [
      { label: "🛍️ Boutique & Catalogue Apple", src: "assets/ecommerce_hero.png" },
      { label: "🏷️ Logo Officiel Sniper Phone TN", src: "assets/sniper_phone_logo.jpg" }
    ],
    gradient: "linear-gradient(135deg, #0071e3, #38bdf8)",
    shortDesc: "Plateforme e-commerce haut de gamme spécialisée dans les smartphones neufs et reconditionnés, écosystème Apple et accessoires high-tech (Mateur, Tunisie) : navigation multi-niveaux, panier dynamique en DT, espace client, mode admin et commande rapide.",
    highlights: [
      "Frontend réactif et moderne développé avec React 19, Vite, Lucide React et Canvas Confetti",
      "Catalogue dynamique multi-catégories (Apple iPhone/Mac, smartphones, tablettes, consoles) avec garanties 12 mois et 3 mois",
      "Panier tiroir interactif (Slide-over Cart Drawer) avec calcul instantané en Dinars Tunisiens (DT) et gestion des stocks",
      "Espace compte utilisateur sécurisé et mode Panneau d'Administration pour l'ajout et l'édition de produits en direct",
      "Optimisation des performances : score Lighthouse 98+, expérience responsive mobile et conteneurisation Docker"
    ],
    techStack: ["React 19", "Vite", "JavaScript ES6+", "Lucide React", "Canvas Confetti", "Docker", "CSS3 Apple Design"],
    metrics: {
      "Garantie & SAV": "12 Mois Neuf / 3 Mois Recond.",
      "Devise": "Dinar Tunisien (DT)",
      "Boutique": "Mateur, Tunisie",
      "Performance": "Lighthouse 98+"
    },
    deepDive: {
      challenge: "Concevoir pour la boutique high-tech Sniper Phone TN à Mateur une plateforme de vente en ligne moderne, intuitive et ultra-rapide capable de rivaliser avec les standards de l'Apple Store, avec un panier fluide sans rechargement de page et un panneau d'administration autonome.",
      solution: "Développement d'une application single-page modulaire en React 19 et Vite avec React Context API pour orchestrer le panier persistant, les favoris (Wishlist), l'authentification et les notifications Toast. Intégration d'un mode Administrateur permettant de gérer les fiches produits, prix et stocks en temps réel.",
      results: [
        "Interface responsive et luxueuse inspirée du design system Apple avec chargement instantané",
        "Processus d'achat simplifié et transparent pour les clients tunisiens avec calcul en Dinars (DT)",
        "Administration autonome sans connaissance technique pour le gérant de la boutique"
      ]
    }
  },
  {
    id: "devops-cicd-pipeline",
    title: "Pipeline DevOps Industriel & Monitoring Cloud",
    category: "devops",
    categoryLabel: "DevOps & Cloud",
    contextBadge: "Infrastructure & CI/CD (2024)",
    year: "2024",
    dateOrder: 202401,
    role: "DevOps Engineer",
    icon: "⚙️",
    gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    shortDesc: "Automatisation de bout en bout du cycle de vie logiciel : intégration et déploiement continus, orchestration de conteneurs et métriques de monitoring.",
    highlights: [
      "Pipelines CI/CD sous Jenkins et GitLab CI avec étapes de lint, test et build",
      "Conteneurisation multi-stage Docker et orchestration sur cluster Kubernetes",
      "Provisioning d'infrastructure via Terraform et gestion de configuration avec Ansible",
      "Surveillance de métriques et alertes proactives avec Prometheus et Grafana"
    ],
    techStack: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus", "Grafana"],
    metrics: {
      "Cycle de Build": "100% Automatisé",
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
    }
  }
];

// --- INITIALISATION AU CHARGEMENT DU DOM ---
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  renderProjects('all');
  initFilterButtons();
  initModal();
  initStatsCounter();
  initCopyActions();
  initContactForm();
  initMobileNav();
  initScrollSpy();
});

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
      showToast(`Mode ${newTheme === 'dark' ? 'Sombre' : 'Clair'} activé`);
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
  const container = document.getElementById('projects-container');
  if (!container) return;

  // Tri automatique et strict par date (du plus récent au plus ancien)
  const sortedProjects = [...PROJECTS_DATA].sort((a, b) => b.dateOrder - a.dateOrder);

  const filteredProjects = filterCategory === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(p => p.category === filterCategory);

  container.innerHTML = filteredProjects.map(project => `
    <article class="project-card" style="--project-gradient: ${project.gradient}">
      <div class="project-card-header">
        <span class="project-category-badge">${project.categoryLabel}</span>
        <span class="project-badge-context">${project.contextBadge}</span>
        ${project.image 
          ? `<img src="${project.image}" alt="${project.title}" class="project-card-img">` 
          : `<div class="project-icon-large">${project.icon}</div>`
        }
      </div>

      <div class="project-card-body">
        <div class="project-header-row">
          <h3 class="project-title">${project.title}</h3>
        </div>
        <div class="project-meta-info">
          <span class="project-role">${project.role}</span>
          <span class="project-date-pill">📅 ${project.year}</span>
        </div>
        <p class="project-desc">${project.shortDesc}</p>

        <ul class="project-highlights">
          ${project.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
        </ul>

        ${project.platformFeatures ? `
          <div class="project-features-preview">
            <span class="features-preview-title">⚡ 12 Modules & Capacités Clés :</span>
            <div class="features-preview-badges">
              ${project.platformFeatures.slice(0, 5).map(f => `
                <span class="feat-badge-pill" title="${f.desc}">
                  ${f.icon} ${f.title.split('(')[0].trim()}
                </span>
              `).join('')}
              <span class="feat-badge-more" onclick="openProjectModal('${project.id}')">+7 autres (Replay, Satellites, Geofencing...)</span>
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
          ${project.platformFeatures ? 'Voir les détails & 12 fonctionnalités' : 'Voir les détails & architecture'} <span>&rarr;</span>
        </button>
      </div>
    </article>
  `).join('');
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

  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSolution = document.getElementById('modal-solution');
  const modalResults = document.getElementById('modal-results');
  const modalTechs = document.getElementById('modal-techs');

  modalTitle.textContent = project.title;
  modalSubtitle.textContent = `${project.role} • ${project.contextBadge} • 📅 ${project.year}`;

  // Image Preview & Gallery Tabs
  const modalImgPreview = document.getElementById('modal-image-preview');
  const modalImg = document.getElementById('modal-img');
  const galleryTabs = document.getElementById('modal-gallery-tabs');

  if (modalImgPreview && modalImg) {
    if (project.image) {
      modalImg.src = project.image;
      modalImg.alt = project.title;
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
  modalMetrics.innerHTML = Object.entries(project.metrics).map(([key, val]) => `
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

  modalChallenge.textContent = project.deepDive.challenge;
  modalSolution.textContent = project.deepDive.solution;

  modalResults.innerHTML = project.deepDive.results.map(r => `<li>${r}</li>`).join('');

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
  }, { threshold: 0.3 });

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
          showToast(`Copié : ${textToCopy}`);
          const originalText = btn.textContent;
          btn.textContent = 'Copié !';
          setTimeout(() => { btn.textContent = originalText; }, 2000);
        }).catch(() => {
          showToast('Erreur lors de la copie');
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

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      showToast('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;

    setTimeout(() => {
      showToast(`Merci ${nameInput.value} ! Votre message a bien été envoyé.`);
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
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

// --- SCROLL SPY POUR LA BARRE DE NAVIGATION ---
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}
