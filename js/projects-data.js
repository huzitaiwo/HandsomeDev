/* Handsome. — Shared project data (Work archive + individual project pages).
   Case-study copy was transcribed from the supplied project-page screenshots,
   so give each entry one proofreading pass. Hosts shown on pages are derived from `url`.
   Fields shared with the Work page: id, title, type, description, url, image, imageAlt, tags. */
(function () {
  "use strict";

  var ECOM = ["Shopify", "Ecommerce"];
  var PROD = ["UI/UX", "Frontend", "Product Design"];

  window.HANDSOME_PROJECTS = [
    {
      id: "veloura",
      title: "Veloura Ecommerce",
      type: "Ecommerce",
      description: "Luxury skincare commerce, softly considered.",
      url: "https://velourashop-4qq7wt3s.manus.space/",
      image: "assets/images/projects/portfolio_2_veloura_nobadge.png",
      imageAlt:
        "Veloura storefront on a laptop with the headline “Luxury skincare, softly considered.”",
      tags: ECOM,
      services: "Ecommerce UX / Editorial design / Frontend",
      badge: "Custom Ecommerce Store",
      caption: "",
      summary:
        "A skincare ecommerce experience that pairs a calm luxury aesthetic with clear product browsing, ritual framing, and a direct route into the collection.",
      chips: [
        "Responsive interface",
        "Product discovery",
        "Editorial storytelling",
      ],
      challenge:
        "Create a storefront that feels editorial without letting visual atmosphere obscure product discovery, product detail, or the next purchase decision.",
      objectives: [
        "Give the brand a recognisable editorial point of view.",
        "Keep category and product discovery close to the visitor.",
        "Make product, philosophy, and journal content feel part of one system.",
      ],
      process: [
        "Frame the hierarchy",
        "Balance commerce and editorial",
        "Create a responsive product journey",
        "Refine interactive states",
      ],
      design:
        "The visual direction relies on restraint: generous space, tactile imagery, and product information given a clear, unhurried frame.",
      system: [
        "Warm editorial imagery",
        "Soft product framing",
        "High-contrast type hierarchy",
        "Quiet navigation rhythm",
      ],
      responsive:
        "The core promise, collection access, and product imagery remain in sequence as the layout reduces to a focused mobile browsing path.",
      features: [
        "Collection browsing",
        "Product detail routes",
        "Cart interaction",
        "Philosophy and journal sections",
      ],
      interactions:
        "Navigation and product links create a calm path forward; hover and focus states make the ecommerce choices legible without adding visual noise.",
      outcome:
        "A live supplied ecommerce experience with an editorial skincare identity and a visible product-discovery path.",
    },

    {
      id: "elvixe",
      title: "Elvixe Skincare",
      type: "Ecommerce",
      description: "Thoughtful skincare, every day.",
      url: "https://elvixeskin-hyfdqpxh.manus.space/",
      image: "assets/images/projects/portfolio_3_elvixe_nobadge.png",
      imageAlt:
        "Elvixe skincare site on a laptop and phone beside a close portrait, headlined “Skincare for body & every skin”",
      tags: ECOM,
      services: "Brand experience / Ecommerce UX / Frontend",
      badge: "Skincare Brand Theme",
      caption:
        "Presented with the supplied showcase image and a verified public site. The portfolio describes the visible editorial and commerce structure without making product or efficacy claims.",
      summary:
        "A skincare ritual experience built around a clear edit, a step-by-step routine, considered benefits, and editorial studio notes.",
      chips: ["Editorial interface", "Ritual structure", "Responsive commerce"],
      challenge:
        "Make an everyday skincare journey feel considered and calm while keeping the route into a product edit easy to understand.",
      objectives: [
        "Translate a skincare routine into an approachable sequence.",
        "Use editorial moments to support—not interrupt—product discovery.",
        "Carry a consistent visual tone from hero to journal notes.",
      ],
      process: [
        "Set the ritual structure",
        "Build a product edit",
        "Compose the content rhythm",
        "Tune responsive hierarchy",
      ],
      design:
        "The design makes care feel like an invitation: textured imagery, room to pause, and a measured cadence through every section.",
      system: [
        "Quiet skin imagery",
        "Measured serif emphasis",
        "Pale natural surfaces",
        "Numbered ritual rhythm",
      ],
      responsive:
        "Routine steps become an easy vertical sequence while the edit and key calls to action stay immediately reachable on smaller screens.",
      features: [
        "Product edit",
        "Six-step routine",
        "Benefits section",
        "Studio-journal storytelling",
      ],
      interactions:
        "Anchor links and browse actions move visitors between the ritual, the edit, and the studio without breaking the page's slower reading pace.",
      outcome:
        "A live supplied skincare experience that combines a visible ritual narrative with a clear editorial product structure.",
    },

    {
      id: "ai-workspace",
      title: "AI Workspace",
      type: "Product design",
      description:
        "Contextual productivity for research, decisions, and shared work.",
      url: "https://aiworkspa-nzdo48cx.manus.space/",
      image: "assets/images/projects/portfolio_4_aiworkspace.png",
      imageAlt:
        "AI Workspace product page headlined “Your work, amplified by AI.”",
      tags: PROD,
      services: "Product UX / Interface design / Frontend",
      badge: "AI-Powered SaaS",
      caption:
        "Presented with the supplied showcase image and a verified public interactive demo. The live page states that its model names and generated responses are illustrative; this portfolio does not claim production AI capabilities.",
      summary:
        "An interactive workspace concept for keeping research, source files, drafts, reports, and project context visible in one place.",
      chips: [
        "Information hierarchy",
        "Workspace UI",
        "Responsive product design",
      ],
      challenge:
        "Present a complex set of AI-assisted work modes without turning the interface into a collection of disconnected tools.",
      objectives: [
        "Make the workspace purpose legible at a glance.",
        "Show how research, sources, drafts, and decisions connect.",
        "Keep plan and feature information easy to scan.",
      ],
      process: [
        "Clarify the workspace model",
        "Map the continuous workflow",
        "Surface feature roles",
        "Compose product demonstration states",
      ],
      design:
        "The interface gives context a visual place: current work, sources, and decisions are treated as the product's primary material.",
      system: [
        "Calm application framing",
        "Source-aware information blocks",
        "Restrained data emphasis",
        "Clear workflow labels",
      ],
      responsive:
        "Workspace concepts reduce to a readable content sequence while feature roles and call-to-action hierarchy remain intact across widths.",
      features: [
        "Context-aware chat",
        "Document intelligence",
        "AI writer",
        "Reports, knowledge, and projects",
      ],
      interactions:
        "The product presentation uses focused entry points and visible workflow steps to explain movement through a task without overstating the demo's capabilities.",
      outcome:
        "A live supplied interactive product demo that communicates an AI-assisted workspace through clear information architecture and UI hierarchy.",
    },

    {
      id: "staynest",
      title: "StayNest Marketplace",
      type: "Product design",
      description: "Find a place worth staying for.",
      url: "https://staynest-mra4smen.manus.space/",
      image: "assets/images/projects/portfolio_5_staynest.png",
      imageAlt:
        "StayNest travel marketplace homepage headlined “Find a place worth staying for.”",
      tags: PROD,
      services: "Marketplace UX / Editorial design / Frontend",
      badge: "Travel Marketplace",
      caption:
        "Presented with the supplied showcase image and a verified public site. The project is described from its visible discovery and host-workspace concepts only.",
      summary:
        "A hospitality marketplace concept for discovering thoughtfully composed stays, destination notes, and the beginnings of a host-facing experience.",
      chips: [
        "Discovery flow",
        "Property storytelling",
        "Responsive interface",
      ],
      challenge:
        "Make accommodation discovery feel personal and editorial while retaining the clear information visitors need to decide where to stay.",
      objectives: [
        "Lead with a distinctive sense of place.",
        "Give listings atmosphere as well as essential context.",
        "Create a bridge from guest discovery to a host workspace.",
      ],
      process: [
        "Set the travel story",
        "Structure stay discovery",
        "Layer in destination context",
        "Introduce the host pathway",
      ],
      design:
        "The visual direction privileges atmosphere first, then supports it with concise property context and a deliberately calm discovery rhythm.",
      system: [
        "Destination-led imagery",
        "Editorial listing cards",
        "Unhurried spacing",
        "Travel-note typography",
      ],
      responsive:
        "Cards, location detail, and calls to action settle into a single, easy-to-browse travel sequence on smaller screens.",
      features: [
        "Curated stays",
        "Destination notes",
        "Property details",
        "Host-workspace introduction",
      ],
      interactions:
        "Entry points guide visitors from editorial discovery to stays and the host story with plain-language actions.",
      outcome:
        "A live supplied hospitality marketplace concept with a clear visual identity for place-led accommodation discovery.",
    },

    {
      id: "coolteam-saas",
      title: "CoolTeam SaaS",
      type: "Product design",
      description: "One shared rhythm, from first thought to final file.",
      url: "https://coolteamsaas-tq4ccrhg.manus.space/",
      image: "assets/images/projects/portfolio_6_coolteam.png",
      imageAlt:
        "CoolTeam collaboration SaaS homepage headlined “From brief to final delivery, together.”",
      tags: PROD,
      services: "SaaS UX / Dashboard design / Frontend",
      badge: "Creative Collaboration SaaS",
      caption:
        "Presented with the supplied showcase image and a verified public site. This case study discusses visible workflow concepts without claiming active integrations or commercial usage.",
      summary:
        "A creative-operations product concept that brings planning, feedback, approvals, capacity, and project context into one legible workspace.",
      chips: [
        "Collaboration UI",
        "Workflow hierarchy",
        "Responsive product design",
      ],
      challenge:
        "Explain a broad collaboration system without losing the thread between the brief, the work in progress, and the next decision.",
      objectives: [
        "Give creative review a visible home.",
        "Make workload and project health easy to scan.",
        "Show integrations as context rather than as clutter.",
      ],
      process: [
        "Define the shared workflow",
        "Frame review and feedback",
        "Clarify capacity signals",
        "Organise the plan comparison",
      ],
      design:
        "The design turns a wide operational system into a composed series of decisions, with room for review detail and project signals to breathe.",
      system: [
        "Calm product surfaces",
        "Legible project signals",
        "Structured review states",
        "Measured pricing layout",
      ],
      responsive:
        "The high-level workflow and key value propositions remain sequential and scannable as dense product areas collapse for small screens.",
      features: [
        "Creative review",
        "Project health",
        "Capacity overview",
        "Plan comparison",
      ],
      interactions:
        "The page treats feedback, review, and planning as connected actions, using clear labels and low-friction calls to action.",
      outcome:
        "A live supplied SaaS concept that makes a creative team's handoff, review, and planning model visible.",
    },

    {
      id: "coolteam-v2",
      title: "CoolTeam V2",
      type: "Product design",
      description: "Creative project management, without the drift.",
      url: "https://coolteam-fr4mvpq9.manus.space/",
      image: "assets/images/projects/portfolio_7_coolteam_v2.png",
      imageAlt:
        "CoolTeam V2 homepage on a laptop and phone, headlined “Make the work feel in flow.”",
      tags: PROD,
      services: "Product UX / Visual direction / Frontend",
      badge: "Asynchronous Workflow SaaS",
      caption:
        "Presented with the supplied showcase image and a verified public site. It is a distinct supplied visual presentation of the CoolTeam concept.",
      summary:
        "A second, editorially focused CoolTeam presentation that frames creative project management around flow, asynchronous collaboration, and visible decisions.",
      chips: [
        "Workflow design",
        "Creative collaboration",
        "Responsive interface",
      ],
      challenge:
        "Create a product story that feels human and calm while still making briefs, review notes, ownership, and progress concrete.",
      objectives: [
        "Make the team workflow feel coherent from brief to review.",
        "Explain asynchronous collaboration without abstract jargon.",
        "Use visual rhythm to make the product promise memorable.",
      ],
      process: [
        "Focus the narrative",
        "Frame the worktable",
        "Describe collaboration states",
        "Keep the next move visible",
      ],
      design:
        "This direction gives the product more editorial air, using oversized messaging and rhythm to make collaboration feel less procedural.",
      system: [
        "Editorial product storytelling",
        "High-contrast headline rhythm",
        "Calm workspace framing",
        "Visible sequence markers",
      ],
      responsive:
        "The narrative remains readable as the workspace imagery and feature points stack into a direct vertical flow.",
      features: [
        "Brief framing",
        "Review notes",
        "Shared decision trail",
        "Ownership and capacity signals",
      ],
      interactions:
        "Section links move through the story of the workspace, workflow, and invitation without interrupting the calm product tone.",
      outcome:
        "A live supplied CoolTeam presentation that articulates a creative workflow through an editorial product story.",
    },

    {
      id: "foodie",
      title: "Foodie Marketplace",
      type: "Product design",
      description: "Everything you crave, delivered.",
      url: "https://foodiehub-dmeuqz3s.manus.space/",
      image: "assets/images/projects/portfolio_8_foodiehub.png",
      imageAlt: "Foodie Marketplace showcase",
      tags: PROD,
      services: "Marketplace UX / Interface design / Frontend",
      badge: "Food Delivery Marketplace",
      caption:
        "Presented with the supplied showcase image and a verified public site. This case study describes the visible food-discovery concept and does not claim delivery coverage or performance metrics.",
      summary:
        "A neighbourhood food-delivery marketplace concept built around location, appetite, estimated delivery time, and restaurant discovery.",
      chips: [
        "Location-aware UI",
        "Restaurant discovery",
        "Responsive marketplace",
      ],
      challenge:
        "Help a hungry visitor move from an open-ended craving to a useful choice without losing the sense of local character.",
      objectives: [
        "Make location and timing visible immediately.",
        "Offer discovery routes for different food moods.",
        "Present restaurant detail in a compact, useful format.",
      ],
      process: [
        "Prioritise the delivery context",
        "Group food by feeling",
        "Compose local restaurant cards",
        "Refine the browse rhythm",
      ],
      design:
        "The interface puts the immediate question—what sounds good and what is close—at the center of a warm, fast-moving discovery flow.",
      system: [
        "Appetite-led hierarchy",
        "Warm food imagery",
        "Compact restaurant information",
        "Confident delivery signals",
      ],
      responsive:
        "Location, timing, and restaurant cards remain at the top of the mobile sequence so the core decision never gets buried.",
      features: [
        "Location-aware delivery context",
        "Mood browsing",
        "Restaurant cards",
        "Cuisine and price cues",
      ],
      interactions:
        "Browse paths give visitors several natural ways to move: from a mood, from a cuisine, or directly into a restaurant card.",
      outcome:
        "A live supplied food marketplace concept with a clear local discovery and delivery-oriented interface.",
    },

    {
      id: "hirely",
      title: "Hirely Jobs",
      type: "Product design",
      description: "A more considered way to hire.",
      url: "https://hirelyjob-g6az9pqk.manus.space/",
      image: "assets/images/projects/portfolio_9_hirely.png",
      imageAlt:
        "Hirely job marketplace homepage headlined “Work that moves with you.”",
      tags: PROD,
      services: "Marketplace UX / Product design / Frontend",
      badge: "Professional Job Marketplace",
      caption:
        "Presented with the supplied showcase image and a verified public site. It describes the visible marketplace workflow without claiming live job availability, salary accuracy, or hiring outcomes.",
      summary:
        "A job marketplace concept designed for focused search, role context, candidate profiles, employer submissions, and clear application status.",
      chips: ["Job discovery", "Application flow", "Role-based interface"],
      challenge:
        "Make job discovery and application management feel more intentional while serving candidates, employers, and administrators with different needs.",
      objectives: [
        "Make role context easy to scan before a deeper decision.",
        "Give candidates and employers distinct, understandable paths.",
        "Keep application progress visible from submission to decision.",
      ],
      process: [
        "Frame the job-search journey",
        "Separate audience needs",
        "Clarify application states",
        "Refine role detail hierarchy",
      ],
      design:
        "The design uses pace and clarity to reduce unnecessary back-and-forth, making the information behind a role feel easier to reach.",
      system: [
        "Editorial marketplace tone",
        "Scannable role cards",
        "Clear status signals",
        "Role-based information structure",
      ],
      responsive:
        "The job cards and role context compress into a focused mobile search experience without losing employment type, location, or next action.",
      features: [
        "Focused job search",
        "Role previews",
        "Candidate profiles",
        "Employer and administrator pathways",
      ],
      interactions:
        "Role previews, application states, and audience-specific paths make the next relevant action visible without cluttering the journey.",
      outcome:
        "A live supplied job-marketplace concept that expresses clearer discovery and role-based workflow structure.",
    },

    {
      id: "arvela",
      title: "ARVELA Furniture",
      type: "Ecommerce",
      description: "Thoughtfully designed pieces for calmer rooms.",
      url: "https://tidyfurnish-9ozvvrkn.manus.space/",
      image: "assets/images/projects/portfolio_10_arvela.png",
      imageAlt:
        "ARVELA furniture storefront with the word “harmony” beside an armchair",
      tags: ECOM,
      services: "Ecommerce UX / Editorial design / Frontend",
      badge: "Furniture & Interior Ecommerce",
      caption:
        "Presented with the supplied showcase image and a verified public site. The entry intentionally excludes the site's customer, award, and longevity statements because they are not independently verified.",
      summary:
        "A furniture-commerce concept that brings product browsing, interior inspiration, and material/form/function storytelling into a quiet home-focused brand world.",
      chips: [
        "Product browsing",
        "Interior storytelling",
        "Responsive commerce",
      ],
      challenge:
        "Use a calm design language for furniture discovery while giving visitors a clear route from inspiration to the shop.",
      objectives: [
        "Make product browsing feel considered rather than crowded.",
        "Turn brand principles into useful shopping context.",
        "Carry a room-led visual identity from landing page to shop action.",
      ],
      process: [
        "Set the home mood",
        "Frame the product entry",
        "Build inspiration moments",
        "Clarify the shopping CTA",
      ],
      design:
        "The direction uses natural texture and whitespace to let each furniture moment feel composed, then anchors it with direct shopping entry points.",
      system: [
        "Scandinavian-inspired calm",
        "Natural material palette",
        "Interior-led imagery",
        "Open typographic spacing",
      ],
      responsive:
        "Inspiration, product pathways, and guiding principles stay in a single comfortable reading path on mobile.",
      features: [
        "Product browsing",
        "Interior inspiration",
        "Material/form/function principles",
        "Shop calls to action",
      ],
      interactions:
        "Shop and inspiration actions stay deliberately prominent so editorial exploration can move naturally into product browsing.",
      outcome:
        "A live supplied furniture-commerce concept that combines a calm interior brand story with visible shopping pathways.",
    },

    {
      id: "eloura",
      title: "Eloura Skincare",
      type: "Ecommerce",
      description: "Care that feels considered.",
      url: "https://elouraskin-2m4lvxox.manus.space/",
      image: "assets/images/projects/portfolio_11_eloura.png",
      imageAlt:
        "Eloura skincare homepage headlined “Skincare for Body & Every Skin”",
      tags: ECOM,
      services: "Brand experience / Ecommerce UX / Frontend",
      badge: "Inclusive Beauty Brand",
      caption:
        "Presented with the supplied showcase image and a verified public site. The portfolio does not repeat the live site's efficacy, formula, or professional-qualification claims.",
      summary:
        "A skincare storefront and editorial ritual experience structured around a guided routine, a formula shelf, evidence-oriented content, and studio notes.",
      chips: ["Ritual design", "Editorial storefront", "Responsive interface"],
      challenge:
        "Build an approachable skincare narrative that feels quiet and personal while maintaining a clear route to the product collection.",
      objectives: [
        "Give the daily ritual a memorable structure.",
        "Keep formula exploration near the narrative.",
        "Use editorial content to create a consistent brand atmosphere.",
      ],
      process: [
        "Establish the ritual shelf",
        "Sequence the daily routine",
        "Frame the editorial notes",
        "Refine the storefront pathway",
      ],
      design:
        "The page creates a steady rhythm between ritual, product shelf, and editorial reflection, letting the brand feel composed without becoming distant.",
      system: [
        "Soft skincare imagery",
        "Ritual numbering",
        "Quiet editorial copy",
        "Natural product framing",
      ],
      responsive:
        "The ritual sequence and collection entry remain in a direct mobile flow, with key information preserved before supporting notes.",
      features: [
        "Formula shelf",
        "Six-step ritual",
        "Evidence-oriented sections",
        "Studio notes",
      ],
      interactions:
        "Simple anchors and shop calls to action give the visitor a clear way to move between the ritual story and product exploration.",
      outcome:
        "A live supplied skincare storefront concept with a calm routine-led content and commerce structure.",
    },

    {
      id: "elvixe-editorial",
      title: "Elvixe Editorial (V2)",
      type: "Ecommerce",
      description:
        "A second editorial presentation for the Elvixe skincare experience.",
      url: "https://elvixeskin-hyfdqpxh.manus.space/",
      image: "assets/images/projects/portfolio_12_elvixe_v2.png",
      imageAlt: "Elvixe editorial skincare presentation on a laptop and phone",
      tags: ECOM,
      services: "Art direction / Editorial design / Frontend",
      badge: "Editorial Skincare Brand",
      caption:
        "Presented with a distinct supplied showcase image. Its supplied live URL is the same active Elvixe Skincare destination, so this entry is presented as a second editorial showcase rather than a separate live product or client claim.",
      summary:
        "A distinct supplied editorial showcase for the active Elvixe skincare experience, focused on a different visual composition of the same ritual-led product world.",
      chips: [
        "Editorial composition",
        "Ecommerce UX",
        "Responsive storytelling",
      ],
      challenge:
        "Create a visually distinct editorial presentation while being transparent that the supplied live destination is shared with the Elvixe Skincare project.",
      objectives: [
        "Preserve a distinct visual showcase identity.",
        "Keep the relationship to the shared live experience clear.",
        "Use the supplied asset as the primary presentation evidence.",
      ],
      process: [
        "Select the editorial framing",
        "Clarify the shared destination",
        "Compose the showcase narrative",
        "Preserve responsive reading rhythm",
      ],
      design:
        "The supplied visual gives the Elvixe world a second editorial lens, using the same calm product language with a distinct showcase composition.",
      system: [
        "Editorial image focus",
        "Quiet luxury tone",
        "Structured type hierarchy",
        "Measured whitespace",
      ],
      responsive:
        "The visual and explanatory note remain central on mobile so the relationship between this presentation and the shared live destination is never obscured.",
      features: [
        "Editorial skincare framing",
        "Ritual-led product story",
        "Shared live destination",
        "Distinct supplied showcase asset",
      ],
      interactions:
        "The live-site action is retained but paired with transparent source context, so visitors understand exactly what the link opens.",
      outcome:
        "A distinct supplied editorial presentation for the verified Elvixe experience, documented without treating it as a separate live site.",
    },

    {
      id: "realty",
      title: "REALTY Marketplace",
      type: "Product design",
      description: "A more considered way to move.",
      url: "https://realtyhub-eyircxnr.manus.space/",
      image: "assets/images/projects/portfolio_13_realtyhub.png",
      imageAlt:
        "REALTY real estate marketplace headlined “Find a place that feels like home.”",
      tags: PROD,
      services: "Marketplace UX / Interface design / Frontend",
      badge: "Real Estate Marketplace",
      caption:
        "Presented with the supplied showcase image and a verified public site. The live site identifies itself as a product concept and its property and financial figures as representative demos; this case study describes visible interface patterns only.",
      summary:
        "A real-estate discovery concept that brings property search, curated addresses, neighbourhood context, saved activity, comparison, and viewing preparation into a calm interface.",
      chips: [
        "Property discovery",
        "Search interface",
        "Responsive marketplace",
      ],
      challenge:
        "Make a property search feel considered and editorial while keeping the practical path from location criteria to property comparison easy to follow.",
      objectives: [
        "Make search criteria and collection access immediately understandable.",
        "Pair property detail with neighbourhood and practical decision context.",
        "Create a bridge between public discovery and a personal workspace.",
      ],
      process: [
        "Frame the search entry",
        "Compose the address collection",
        "Layer in neighbourhood context",
        "Clarify the personal-desk pathway",
      ],
      design:
        "The interface balances large architectural imagery with a structured search surface, making the first practical decision feel direct without losing the sense of place.",
      system: [
        "Editorial property imagery",
        "Neutral architectural palette",
        "Search-first hierarchy",
        "Measured serif display type",
      ],
      responsive:
        "Location, property-type, price, and bedroom controls retain their priority as the collection and neighbourhood content reduce into a clear vertical journey.",
      features: [
        "Buy and rent search controls",
        "Curated property collection",
        "Neighbourhood discovery",
        "Saved-home and comparison pathways",
      ],
      interactions:
        "Search, saved-home, comparison, and workspace entry points make the next decision explicit while preserving the site's quiet reading rhythm.",
      outcome:
        "A live supplied real-estate marketplace concept that presents discovery, comparison, and personal planning through a composed property-search interface.",
    },

    {
      id: "pulse",
      title: "PULSE Operations",
      type: "Product design",
      description: "An operating picture for the work ahead.",
      url: "https://pulseops-ea4kn5x8.manus.space/",
      image: "assets/images/projects/portfolio_14_pulseops.png",
      imageAlt: "PULSE Operations dark dashboard interface",
      tags: PROD,
      services: "Dashboard UI / Information design / Frontend",
      badge: "Enterprise Operations Platform",
      caption:
        "Presented with the supplied showcase image and a verified public site. The visible people, task details, revenue values, and workspace figures are interface data; no client metrics or business outcomes are claimed.",
      summary:
        "An enterprise operations workspace concept that brings project signals, task priorities, analytics, customer context, activity, documents, and settings into a structured dashboard.",
      chips: [
        "Operations dashboard",
        "Project signals",
        "Responsive workspace UI",
      ],
      challenge:
        "Make a dense operational workspace easy to scan at the beginning of a workday without hiding the paths into projects, tasks, and performance context.",
      objectives: [
        "Provide an immediate operating overview.",
        "Make priority actions and project health easy to locate.",
        "Maintain a consistent path to supporting workspace functions.",
      ],
      process: [
        "Set the workspace shell",
        "Prioritise the operating picture",
        "Group performance and project signals",
        "Surface actions and activity",
      ],
      design:
        "A dark, focused workspace frame allows numerical signals, project status, and priority actions to hold distinct visual roles without overwhelming the overview.",
      system: [
        "Dark application shell",
        "Layered information cards",
        "Violet signal accents",
        "Compact operational typography",
      ],
      responsive:
        "The primary workspace view preserves the overview before deeper management areas, maintaining a clear reading order as the dashboard adapts to smaller screens.",
      features: [
        "Persistent workspace navigation",
        "Operations overview",
        "Revenue and project-health views",
        "Priority actions and recent activity",
      ],
      interactions:
        "Sidebar destinations, search, creation controls, and review actions make the workspace navigable through direct, labeled entry points.",
      outcome:
        "A live supplied operations-dashboard concept that communicates project health, work priorities, and workspace navigation through a clear application hierarchy.",
    },
  ];
})();
