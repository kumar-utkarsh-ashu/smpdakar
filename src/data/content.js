export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      activities: "Activités",
      projects: "Réalisations",
      equipment: "Nos équipements",
      contact: "Contact",
      rfqButton: "Demander un devis / RFQ",
      clientArea: "Espace Client",
      careersNote: "Carrière (Option)"
    },
    hero: {
      badge: "CONTRACTANT EPCI & VENDOR FINANCING EN AFRIQUE",
      title: "Infrastructures énergétiques clés en main, de l'ingénierie au financement",
      subtitle: "SMP (Structures Métalliques & Pipes) conçoit, approvisionne, construit, installe et finance les grands projets souverains d'énergie, de stockage et d'infrastructures industrielles onshore & offshore.",
      ctaProjects: "Nos réalisations",
      ctaContact: "Nous contacter",
      keyMetrics: [
        { label: "Années d'excellence", value: "25+" },
        { label: "Capacité de stockage réalisée", value: "65 000 m³" },
        { label: "Tonnage acier usiné", value: "18 000 T" },
        { label: "Taux sécurité LTI", value: "0 Accident" }
      ]
    },
    epci: {
      tag: "NOTRE MODÈLE INTÉGRÉ",
      title: "Le cycle complet EPCI-VF : De la conception à la pérennité",
      desc: "Une maîtrise d'œuvre intégrée unique en Afrique de l'Ouest, capable de sécuriser chaque jalon technique et d'apporter des solutions de financement souverain.",
      steps: [
        {
          num: "01",
          title: "Engineering",
          sub: "Ingénierie & Études",
          desc: "Conception détaillée 3D, calculs de structures selon normes ASME/API/Eurocodes, études géotechniques et plans d'exécution certifiés."
        },
        {
          num: "02",
          title: "Procurement",
          sub: "Approvisionnement",
          desc: "Sourcing mondial d'aciers certifiés, vannes haute pression, équipements sous pression et logistique portuaire sécurisée via le Port de Dakar."
        },
        {
          num: "03",
          title: "Construction",
          sub: "Fabrication & Travaux",
          desc: "Ateliers de chaudronnerie lourde, tuyauterie industrielle certifiée ISO, soudage haute précision, réservoirs et charpentes métalliques."
        },
        {
          num: "04",
          title: "Installation",
          sub: "Montage & Érection",
          desc: "Levage lourd jusqu'à 150 tonnes, pose de pipelines terrestres et connexions maritimes, raccordements électromécaniques sur site."
        },
        {
          num: "05",
          title: "Financing",
          sub: "Vendor Financing (VF)",
          desc: "Structuration de financements clés en main pour gouvernements et institutions : création de réserves nationales stratégiques avec remboursement étatique."
        },
        {
          num: "06",
          title: "Operation & Maint.",
          sub: "Exploitation & Maintenance",
          desc: "Maintien de l'intégrité opérationnelle, contrats de maintenance préventive/curative, réhabilitation de cuves et supervision technique 24/7."
        }
      ]
    },
    sectors: {
      tag: "DOMAINES D'INTERVENTION",
      title: "Solutions industrielles onshore & offshore",
      desc: "Une expertise éprouvée au service des majors de l'énergie, des gouvernements et des opérateurs miniers.",
      items: [
        {
          id: "upstream",
          badge: "ONSHORE & OFFSHORE",
          title: "Upstream / Offshore",
          highlight: "Machine Shop dédié aux campagnes de forage",
          desc: "Fabrication d'éléments sous-marins, spools de raccordement, structures pour plateformes pétrolières et gazière. Notre atelier d'usinage mécanique de précision (Machine Shop) à Dakar usine et rectifie en urgence les garnitures et tubes pour soutenir les campagnes de forage.",
          tags: ["Machine Shop 24/7", "Plateformes Offshore", "Têtes de puits", "Soudage duplex & inox"],
          image: "/images/machine_shop.jpg"
        },
        {
          id: "midstream",
          badge: "TRANSPORT D'ÉNERGIE",
          title: "Midstream / Pipelines",
          highlight: "Canalisations d'hydrocarbures & connexions mer-terre",
          desc: "Pose de pipelines de transport de pétrole brut, produits raffinés et gaz naturel. Réalisation complète des liaisons offshore-to-onshore (atterrages de pipelines), stations de pompage, manifold de vannage et traversées spéciales.",
          tags: ["Pipelines acier grande dimension", "Atterrages sous-marins", "Contrôles CND radiographiques", "Protection cathodique"],
          image: "/images/pipeline.jpg"
        },
        {
          id: "downstream",
          badge: "RAFFINAGE & STOCKAGE",
          title: "Downstream / Stockage & Raffinage",
          highlight: "Parcs de réservoirs (Tank Farms) & Stations fixes/SKD",
          desc: "Construction clés en main de terminaux pétroliers (dépôts de stockage jusqu'à 50 000 m³), sphères GPL, réhabilitation d'unités de raffinage (SAR Mbao) et fabrication de stations-service fixes et conteneurisées semi-knock-down (SKD) pour zones isolées.",
          tags: ["Réservoirs API 650", "Dépôts stratégiques", "Stations conteneurisées SKD", "Piping raffinerie"],
          image: "/images/hero_tankfarm.jpg"
        },
        {
          id: "mining",
          badge: "EXTRACTION & MINES",
          title: "Infrastructures Minières",
          highlight: "Charpentes lourdes & usines de traitement",
          desc: "Construction métallique intégrale pour les complexes miniers : hangars de stockage de minerai, structures de broyage, convoyeurs à bande, charpentes industrielles à haute portée et réservoirs de réactifs chimiques.",
          tags: ["Usines or & sables minéralisés", "Charpente lourde grande portée", "Convoyeurs & trémies", "Bâtiments industriels"],
          image: "/images/mining_infra.jpg"
        }
      ]
    },
    financing: {
      tag: "DIFFÉRENCIATEUR STRATÉGIQUE",
      title: "Projets Clés en Main Financés (Vendor Financing)",
      subtitle: "Offre d'Infrastructures Stratégiques Souveraines pour les Gouvernements Africains",
      lead: "Pour les projets étatiques d'envergure, SMP transcende le rôle de constructeur traditionnel en proposant un modèle unique de Vendor Financing (VF). Nous concevons, finançons intégralement et construisons les réserves stratégiques nationales de stockage avant remboursement échelonné par l'État.",
      points: [
        {
          title: "Réserves Nationales 3 à 6 Mois",
          desc: "Sécurisation de l'indépendance énergétique nationale grâce à des Tank Farms modernes d'une autonomie stratégique de 90 à 180 jours de consommation d'hydrocarbures et gaz."
        },
        {
          title: "Financement Intégral Clés en Main",
          desc: "Montage financier sur-mesure sans impact immédiat sur la trésorerie souveraine : livraison de l'infrastructure opérationnelle prête à l'emploi (Turnkey)."
        },
        {
          title: "Exploitation & Transfert Sécurisé (BOT)",
          desc: "Exploitation transitoire, maintenance préventive et formation complète des équipes nationales avant transfert d'actifs définitif."
        }
      ],
      cta: "Planifier une présentation souveraine"
    },
    figures: {
      tag: "PUISSANCE INDUSTRIELLE",
      title: "SMP Dakar en Chiffres Clés",
      desc: "Des indicateurs opérationnels démontrant notre solidité technique et financière.",
      list: [
        { number: "25+", label: "Années d'Expérience", note: "Pionnier de la métallurgie en Afrique de l'Ouest" },
        { number: "65 000", unit: "m³", label: "Capacité Stockage Pétrolier", note: "Construite selon les standards API 650" },
        { number: "18 000", unit: "T", label: "Acier Charpente & Tuyauterie", note: "Fabriqués et érigés avec succès" },
        { number: "0", label: "Accident LTI (Lost Time Injury)", note: "Culture de sécurité absolue sur nos chantiers" },
        { number: "8", label: "Pays d'Intervention", note: "Présence opérationnelle régionale solide" }
      ]
    },
    projects: {
      tag: "PORTFOLIO SÉLECTIONNÉ",
      title: "Nos Réalisations Emblématiques",
      desc: "Découvrez nos projets majeurs exécutés pour les leaders internationaux de l'énergie et des mines.",
      filters: ["Tous", "Downstream / Stockage", "Upstream & Raffinage", "Mines & Industrie", "Midstream / Gaz"],
      items: [
        {
          title: "Dépôt Pétrolier Stratégique de Mandinary",
          client: "GNPC / État de Gambie",
          location: "Mandinary, Gambie",
          category: "Downstream / Stockage",
          scope: "EPCI complet de cuves de stockage d'hydrocarbures, appontement maritime et piping de chargement.",
          stats: "40 000 m³ • API 650 • Clés en main",
          image: "/images/hero_tankfarm.jpg"
        },
        {
          title: "Rénovation & Tuyauteries Haute Pression SAR",
          client: "Société Africaine de Raffinage (SAR)",
          location: "Mbao, Dakar, Sénégal",
          category: "Upstream & Raffinage",
          scope: "Préfabrication et pose de collecteurs haute pression, réfection d'unités de distillation et spools certifiés.",
          stats: "Tuyauterie certifiée • Arrêt d'unité • 0 Accident",
          image: "/images/machine_shop.jpg"
        },
        {
          title: "Complexe Industriel Minier Mine d'Or de Mako",
          client: "Toro Gold / Resolute Mining",
          location: "Kédougou, Sénégal",
          category: "Mines & Industrie",
          scope: "Fabrication et montage de la charpente métallique lourde, broyeurs, trémies et convoyeurs de minerai.",
          stats: "3 200 Tonnes • Bâtiments process • Haute cadence",
          image: "/images/mining_infra.jpg"
        },
        {
          title: "Installation Industrielle & Manutention GCO Diogo",
          client: "Grande Côte Operations (Eramet)",
          location: "Diogo, Sénégal",
          category: "Mines & Industrie",
          scope: "Infrastructures métalliques pour sables titanifères et zircon, tours de criblage et ponts roulants.",
          stats: "Charpente marine anti-corrosion • 1 800 T",
          image: "/images/mining_infra.jpg"
        },
        {
          title: "Pipeline & Terminal Gazier Touba Gaz",
          client: "Touba Gaz",
          location: "Dakar, Sénégal",
          category: "Midstream / Gaz",
          scope: "Réseau de tuyauterie gaz GPL haute pression, skid de détente, soudage radiographié 100% et sécurité incendie.",
          stats: "Pression 25 Bars • Épreuve hydraulique • Sécurité totale",
          image: "/images/pipeline.jpg"
        },
        {
          title: "Dépôt d'Hydrocarbures MEP Mauritanie",
          client: "MEP / Opérateurs Pétroliers",
          location: "Nouakchott, Mauritanie",
          category: "Downstream / Stockage",
          scope: "Construction de parcs de bacs pour carburants marins et terrestres avec système de pompage et sécurité.",
          stats: "25 000 m³ • Ligne côtière • Vendor Support",
          image: "/images/hero_tankfarm.jpg"
        }
      ]
    },
    clients: {
      tag: "CONFIANCE & PARTENARIATS",
      title: "Ils nous font confiance",
      subtitle: "Compagnies pétrolières internationales, majors minières et gouvernements partenaires."
    },
    locations: {
      tag: "EMPREINTE GÉOGRAPHIQUE",
      title: "Présence Opérationnelle en Afrique de l'Ouest",
      desc: "Depuis notre siège stratégique et nos ateliers industriels de Dakar (Sénégal), nos équipes mobiles interviennent à travers toute la région.",
      hub: "Hub Central : Dakar (Siège, Ateliers & Machine Shop 15 000 m²)",
      countries: [
        { name: "Sénégal", status: "Siège Social, Ateliers & Chantiers", active: true },
        { name: "Gambie", status: "Terminaux de Mandinary & Appontements", active: true },
        { name: "Mauritanie", status: "Dépôts Pétroliers & Projets Gaziers", active: true },
        { name: "Mali", status: "Infrastructures Minières & Dépôts", active: true },
        { name: "Guinée", status: "Structures Bauxite & Équipements Portuaires", active: true },
        { name: "Côte d'Ivoire", status: "Projets Industriels & Partenariats", active: true }
      ]
    },
    qhse: {
      tag: "ENGAGEMENT RSE & QUALITÉ",
      title: "Sécurité Absolue, Qualité Rigoureuse, Respect de l'Environnement",
      desc: "Chez SMP, la sécurité de nos collaborateurs et des installations est une valeur non négociable. Nos chantiers appliquent une politique 'Zéro Accident' et respectent les standards internationaux les plus stricts.",
      pillars: [
        {
          title: "Zéro Accident LTI",
          desc: "Plan de prévention systématique, quarts de sécurité quotidiens et certification des soudeurs et grutiers."
        },
        {
          title: "Contrôles CND Certifiés",
          desc: "Contrôle non destructif (radiographie, ultrasons, ressuage, magnétoscopie) selon normes ISO et API."
        },
        {
          title: "Préservation Écologique",
          desc: "Gestion rigoureuse des déchets métalliques, rétentions environnementales et réduction de l'empreinte carbone."
        },
        {
          title: "Contenu Local Fort",
          desc: "Plus de 85% d'ingénieurs et techniciens locaux formés aux meilleures pratiques mondiales."
        }
      ],
      certifications: ["ISO 9001 : Management Qualité", "ISO 14001 : Environnement", "ISO 45001 : Santé & Sécurité", "API 650 / ASME : Standards Pétroliers"]
    },
    cta: {
      title: "Vous avez un projet d'envergure industrielle ou énergétique ?",
      subtitle: "Consultez nos équipes techniques pour vos études EPCI ou vos besoins de structuration de Vendor Financing.",
      button1: "Démarrer une consultation",
      button2: "Appeler notre bureau de Dakar"
    },
    footer: {
      tagline: "Contractant EPCI & Vendor Financing majeur pour infrastructures industrielles et énergétiques clés en main.",
      address: "Km 18, Route de Rufisque, Zone Industrielle, Dakar, Sénégal",
      phone: "+221 33 832 60 40",
      mobile: "+221 77 388 21 21",
      email: "contact@smpdakar.com",
      hours: "Lun - Ven : 08h00 - 18h00 / Urgence Machine Shop 24/7",
      rights: "© 2026 SMP (Structures Métalliques & Pipes). Tous droits réservés."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      activities: "Activities",
      projects: "Projects",
      equipment: "Our Equipment",
      contact: "Contact",
      rfqButton: "Request a Quote / RFQ",
      clientArea: "Client Portal",
      careersNote: "Careers (Add-on)"
    },
    hero: {
      badge: "MAJOR EPCI & VENDOR FINANCING CONTRACTOR IN AFRICA",
      title: "Turnkey energy infrastructure, from engineering to financing",
      subtitle: "SMP (Structures Métalliques & Pipes) designs, procures, builds, installs and finances sovereign energy, storage and industrial infrastructure projects onshore and offshore.",
      ctaProjects: "Our Projects",
      ctaContact: "Contact Us",
      keyMetrics: [
        { label: "Years of Excellence", value: "25+" },
        { label: "Storage Capacity Built", value: "65,000 m³" },
        { label: "Fabricated Steel Tonnage", value: "18,000 T" },
        { label: "LTI Safety Record", value: "0 Accidents" }
      ]
    },
    epci: {
      tag: "OUR INTEGRATED MODEL",
      title: "The complete EPCI-VF cycle: From design to long-term sustainability",
      desc: "A unique turnkey delivery capability in West Africa, securing every engineering milestone and providing sovereign infrastructure financing models.",
      steps: [
        {
          num: "01",
          title: "Engineering",
          sub: "Design & Studies",
          desc: "Full 3D modeling, finite element structural calculations per ASME/API/Eurocodes, geotechnical surveys and certified shop fabrication drawings."
        },
        {
          num: "02",
          title: "Procurement",
          sub: "Global Sourcing",
          desc: "International sourcing of mill-certified steels, high-pressure valves, pressure vessels, and secure logistics via Port of Dakar."
        },
        {
          num: "03",
          title: "Construction",
          sub: "Fabrication & Shop Work",
          desc: "Heavy boilermaking workshops, certified ISO high-pressure piping, robotic welding, atmospheric storage tanks and heavy structural steel."
        },
        {
          num: "04",
          title: "Installation",
          sub: "Erection & Commissioning",
          desc: "Heavy lifting up to 150 tons, cross-country pipeline laying, subsea pipeline shore landings and electromechanical field hookups."
        },
        {
          num: "05",
          title: "Financing",
          sub: "Vendor Financing (VF)",
          desc: "Turnkey financing structure for African governments: strategic national petroleum reserves delivered turnkey with structured state repayment."
        },
        {
          num: "06",
          title: "Operation & Maint.",
          sub: "Asset Integrity",
          desc: "Sustaining operational reliability, full preventive/corrective maintenance contracts, tank overhaul and 24/7 technical field support."
        }
      ]
    },
    sectors: {
      tag: "CORE SECTORS",
      title: "Onshore & Offshore Industrial Solutions",
      desc: "Proven engineering excellence serving international energy majors, governments, and mining corporations.",
      items: [
        {
          id: "upstream",
          badge: "ONSHORE & OFFSHORE",
          title: "Upstream / Offshore",
          highlight: "Dedicated Machine Shop supporting drilling campaigns",
          desc: "Fabrication of subsea spools, riser clamps, and offshore platform topsides. Our Dakar heavy precision Machine Shop operates 24/7 to re-thread, machine, and recondition heavy drilling strings, stabilizers, and casing tools for active drilling campaigns.",
          tags: ["24/7 Machine Shop", "Offshore Platforms", "Wellhead Spools", "Duplex & Stainless Welding"],
          image: "/images/machine_shop.jpg"
        },
        {
          id: "midstream",
          badge: "ENERGY TRANSPORT",
          title: "Midstream / Pipelines",
          highlight: "Hydrocarbon pipelines & offshore-to-onshore connections",
          desc: "Laying cross-country crude, refined product and natural gas steel pipelines. Turnkey execution of offshore-to-onshore pipeline landfalls, metering skids, valve stations, and horizontal directional drilling river crossings.",
          tags: ["Large-diameter steel lines", "Subsea shore approach", "100% NDT X-Ray inspection", "Cathodic protection"],
          image: "/images/pipeline.jpg"
        },
        {
          id: "downstream",
          badge: "REFINING & STORAGE",
          title: "Downstream / Storage & Refining",
          highlight: "Strategic Tank Farms & Fixed/SKD Container Fuel Stations",
          desc: "Turnkey tank farm construction (up to 50,000 m³ capacity), LPG storage spheres, revamp of refinery units (SAR Mbao), and fabrication of turnkey containerized semi-knock-down (SKD) fuel retail stations for remote sites.",
          tags: ["API 650 storage tanks", "Strategic national reserves", "Containerized SKD stations", "Refinery piping revamp"],
          image: "/images/hero_tankfarm.jpg"
        },
        {
          id: "mining",
          badge: "MINING & EXTRACTION",
          title: "Mining Infrastructure",
          highlight: "Heavy structural steel & ore processing facilities",
          desc: "Comprehensive structural engineering for major mining complexes: heavy ore storage sheds, crusher building steel, overland conveyor gantries, processing plant towers, and chemical reagent storage tanks.",
          tags: ["Gold & mineral sand plants", "Heavy long-span trusses", "Conveyors & hoppers", "Industrial buildings"],
          image: "/images/mining_infra.jpg"
        }
      ]
    },
    financing: {
      tag: "KEY DIFFERENTIATOR",
      title: "Turnkey Financed Projects (Vendor Financing)",
      subtitle: "Strategic Sovereign Infrastructure Framework for African Governments",
      lead: "For select sovereign projects, SMP transcends conventional contracting by offering a robust Vendor Financing (VF) model. We design, fully finance, and deliver strategic national petroleum and gas storage reserves holding 3 to 6 months of national consumption, repaid systematically by the State.",
      points: [
        {
          title: "3 to 6 Months Strategic National Reserves",
          desc: "Securing national energy independence against global supply shocks with modern tank farms designed to hold 90 to 180 days of sovereign fuel and gas reserves."
        },
        {
          title: "100% Fully Financed Turnkey Delivery",
          desc: "Tailored project financing reducing immediate sovereign fiscal strain: the facility is built, commissioned, and handed over ready for operations."
        },
        {
          title: "Build-Operate-Transfer (BOT) Reliability",
          desc: "Interim facility management, rigorous preventive maintenance, and comprehensive capacity transfer to local national operating agencies."
        }
      ],
      cta: "Schedule a Sovereign Briefing"
    },
    figures: {
      tag: "INDUSTRIAL STRENGTH",
      title: "SMP Dakar in Key Numbers",
      desc: "Measurable metrics that validate our technical prowess and operational capacity.",
      list: [
        { number: "25+", label: "Years in Industry", note: "Pioneer in heavy engineering across West Africa" },
        { number: "65,000", unit: "m³", label: "Storage Tank Capacity Built", note: "Engineered to strict API 650 standards" },
        { number: "18,000", unit: "T", label: "Steel Structures & Piping", note: "Successfully fabricated and erected" },
        { number: "0", label: "LTI Safety Incidents", note: "Relentless safety-first culture on all sites" },
        { number: "8", label: "Countries Served", note: "Solid, proven regional operational footprint" }
      ]
    },
    projects: {
      tag: "FEATURED PORTFOLIO",
      title: "Signature Completed & Ongoing Projects",
      desc: "Explore high-profile infrastructure deliveries executed for international energy majors and state authorities.",
      filters: ["All", "Downstream / Storage", "Upstream & Refining", "Mining & Industry", "Midstream / Gas"],
      items: [
        {
          title: "Mandinary Strategic Petroleum Tank Farm",
          client: "GNPC / Government of The Gambia",
          location: "Mandinary, The Gambia",
          category: "Downstream / Storage",
          scope: "Full EPCI of coastal hydrocarbon storage tanks, marine tanker offloading terminal, and loading gantries.",
          stats: "40,000 m³ • API 650 • Turnkey Delivery",
          image: "/images/hero_tankfarm.jpg"
        },
        {
          title: "SAR National Refinery Revamp & High-Pressure Piping",
          client: "Société Africaine de Raffinage (SAR)",
          location: "Mbao, Dakar, Senegal",
          category: "Upstream & Refining",
          scope: "Shop prefabrication and site erection of high-pressure process piping, crude distillation revamps, and certified spools.",
          stats: "Certified alloy piping • Unit turnaround • 0 LTI",
          image: "/images/machine_shop.jpg"
        },
        {
          title: "Mako Gold Mine Processing Plant & Structural Steel",
          client: "Toro Gold / Resolute Mining",
          location: "Kédougou, Senegal",
          category: "Mining & Industry",
          scope: "Engineering, fabrication, and erection of heavy structural steel, ball mill supports, hoppers, and overland conveyors.",
          stats: "3,200 Tons steel • Fast-track schedule • Rugged terrain",
          image: "/images/mining_infra.jpg"
        },
        {
          title: "GCO Diogo Mineral Sands Heavy Infrastructure",
          client: "Grande Côte Operations (Eramet)",
          location: "Diogo, Senegal",
          category: "Mining & Industry",
          scope: "Corrosion-resistant structural steel for titanium and zircon concentration plants, screening towers, and overhead cranes.",
          stats: "Coastal marine coating • 1,800 Tons steel",
          image: "/images/mining_infra.jpg"
        },
        {
          title: "Touba Gaz LPG Terminal & High-Pressure Pipeline",
          client: "Touba Gaz",
          location: "Dakar, Senegal",
          category: "Midstream / Gaz",
          scope: "LPG high-pressure gas distribution pipeline, pressure-reducing station, 100% radiographic weld testing and deluge fire protection.",
          stats: "25 Bar test rating • Hydrostatic testing • Zero leak",
          image: "/images/pipeline.jpg"
        },
        {
          title: "MEP Mauritania Strategic Fuel Terminal",
          client: "MEP / Regional Oil Majors",
          location: "Nouakchott, Mauritania",
          category: "Downstream / Storage",
          scope: "Construction of storage tank farm for marine and automotive fuels with manifold pumps and automated loading.",
          stats: "25,000 m³ • Coastal marine facility • Vendor Support",
          image: "/images/hero_tankfarm.jpg"
        }
      ]
    },
    clients: {
      tag: "TRUSTED BY LEADERS",
      title: "Our Clients & Sovereign Partners",
      subtitle: "International energy majors, mining corporations, and African state utilities."
    },
    locations: {
      tag: "REGIONAL REACH",
      title: "Operational Footprint Across West Africa",
      desc: "Operating from our headquarters and 15,000 m² industrial fabrication yard and machine shop in Dakar, our rapid mobilization teams deploy across the subregion.",
      hub: "Central Hub: Dakar, Senegal (Headquarters, Machine Shop & Heavy Yard)",
      countries: [
        { name: "Senegal", status: "Corporate HQ, Machine Shop & Industrial Yards", active: true },
        { name: "The Gambia", status: "Mandinary Terminal & Marine Jetties", active: true },
        { name: "Mauritania", status: "Hydrocarbon Terminals & Gas Interconnections", active: true },
        { name: "Mali", status: "Mining Plant Infrastructure & Fuel Storage", active: true },
        { name: "Guinea", status: "Bauxite Export Terminals & Port Structures", active: true },
        { name: "Côte d'Ivoire", status: "Industrial Partnerships & Downstream Projects", active: true }
      ]
    },
    qhse: {
      tag: "QHSE EXCELLENCE",
      title: "Safety First, Rigorous Quality, Environmental Stewardship",
      desc: "At SMP, safety is an absolute core value. Every project site implements strict 'Zero Harm' standards compliant with international energy contractor benchmarks.",
      pillars: [
        {
          title: "Zero Harm / 0 LTI Goal",
          desc: "Systematic pre-task safety risk assessments, daily toolbox talks, and mandatory qualification for all welders and riggers."
        },
        {
          title: "Certified NDT Quality",
          desc: "Non-destructive testing (X-ray radiography, ultrasound, dye penetrant, magnetic particle) adhering strictly to ISO and API specs."
        },
        {
          title: "Environmental Protection",
          desc: "Zero-discharge fluid management, spill prevention bunding, and systematic scrap recycling across all yards."
        },
        {
          title: "85%+ Local Content",
          desc: "Empowering African talent with ongoing technical certification programs in advanced welding and precision machining."
        }
      ],
      certifications: ["ISO 9001: Quality Management", "ISO 14001: Environmental Systems", "ISO 45001: Occupational Health & Safety", "API 650 / ASME: Oil & Gas Standards"]
    },
    cta: {
      title: "Planning a Major Energy or Industrial Project?",
      subtitle: "Consult our engineering team for turnkey EPCI execution or strategic Vendor Financing proposals.",
      button1: "Request an Engineering Consultation",
      button2: "Call Our Dakar Headquarters"
    },
    footer: {
      tagline: "Major EPCI & Vendor Financing contractor delivering turnkey energy and industrial infrastructure in Africa.",
      address: "Km 18, Route de Rufisque, Industrial Zone, Dakar, Senegal",
      phone: "+221 33 832 60 40",
      mobile: "+221 77 388 21 21",
      email: "contact@smpdakar.com",
      hours: "Mon - Fri: 08:00 - 18:00 / 24/7 Machine Shop Support",
      rights: "© 2026 SMP (Structures Métalliques & Pipes). All rights reserved."
    }
  }
};
