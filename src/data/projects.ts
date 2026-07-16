import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "restaurant-pos",
    title: "Restaurant POS",
    tagline: "Offline-first desktop POS running live in a restaurant",
    category: "desktop",
    problem:
      "A fast-food restaurant client needed billing, order management, and instant receipt printing that keeps working with zero internet dependency - cloud POS systems stop the business the moment the connection drops.",
    solution:
      "A fully offline Windows desktop POS built with Electron and React: staff log in with PINs, take orders, and print thermal receipts instantly, with every record stored in a local SQLite database. The restaurant uses it in production every day.",
    architecture:
      "Electron desktop shell with a React 19 + TypeScript frontend. Local SQLite database through better-sqlite3 with Drizzle ORM for type-safe queries. ESC/POS thermal receipt printing over USB, PIN-based staff authentication, and a device-locked licensing system built on HMAC-SHA256 machine signatures.",
    technologies: ["Electron", "React", "TypeScript", "SQLite", "Drizzle ORM", "Node.js"],
    imageUrl: "/projects/restaurant-pos.png",
    features: [
      "Complete order and billing workflow designed for fast-food speed",
      "Instant thermal receipt printing (ESC/POS over USB)",
      "Works fully offline - no internet required at any point",
      "PIN-based staff authentication",
      "Device-locked licensing so each installation is tied to one machine",
    ],
    challenges: [
      "Debugging USB thermal printer port enumeration on Windows for reliable receipt printing",
      "Designing a licensing system that locks the app to a specific machine without any online activation server",
    ],
    lessonsLearned: [
      "Shipping to a real client means handling the messy last 10 percent: printers, installers, and licensing",
      "Offline-first architecture forces cleaner data design than cloud-first thinking",
    ],
    featured: true,
  },
  {
    slug: "repomind",
    title: "RepoMind",
    tagline: "Semantic code search engine for GitHub repositories",
    category: "ai",
    problem:
      "Understanding a large or unfamiliar codebase is slow: finding where a feature is implemented means manually reading through dozens of files.",
    solution:
      "RepoMind clones any GitHub repository, indexes the entire codebase into a vector database, and answers natural-language questions by returning the exact files and code chunks that are relevant - every answer backed by real source locations.",
    architecture:
      "FastAPI backend: GitPython clones the repo, files across 20+ languages are split into chunks, embedded with the all-MiniLM-L6-v2 sentence-transformer model, and stored per-repo in ChromaDB collections. Semantic search retrieves the top matching chunks with file paths and previews. React + Vite frontend.",
    technologies: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "LangChain", "GitPython", "React", "Vite"],
    features: [
      "One-step repository indexing from a GitHub URL",
      "Semantic search across 20+ programming languages",
      "Source-backed results: exact file paths and code chunk previews",
      "Per-repository vector collections with re-index support",
      "REST API with typed request/response schemas (Pydantic)",
    ],
    challenges: [
      "Designing a language-agnostic chunking strategy that keeps code context intact across very different file types",
      "Managing per-repo vector collections so re-indexing a repository replaces stale embeddings instead of duplicating them",
    ],
    lessonsLearned: [
      "How a retrieval pipeline (chunking, embeddings, vector search) works end to end",
      "Local embedding models make semantic search possible with zero API cost",
    ],
    imageUrl: "/projects/repomind.png",
    githubUrl: "https://github.com/Okasha-Chaudhry/RepoMind",
    featured: true,
  },
  {
    slug: "beauty-salon-platform",
    title: "Beauty Salon Platform",
    tagline: "Full-stack salon booking marketplace with payments",
    category: "web",
    problem:
      "Salons rely on phone calls and walk-ins for appointments, and customers have no single place to discover salons, compare services, book a slot, and pay online.",
    solution:
      "A MERN marketplace connecting customers with salons: browse salons on a map, book appointments with a date picker, pay via Stripe, and leave reviews - while salon owners manage their listings and bookings from a dedicated dashboard.",
    architecture:
      "Express + MongoDB (Mongoose) REST API with JWT authentication and role-based middleware for three roles: customer, salon owner, and admin. Stripe for payments, Cloudinary + Multer for image uploads, Nodemailer for email notifications. React frontend with React Router, Stripe Elements, and Leaflet maps. Deployed on Vercel.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Cloudinary", "JWT", "Leaflet", "Nodemailer"],
    features: [
      "Three-role platform: customer, salon owner, and admin dashboards",
      "Appointment booking with date selection and booking management",
      "Stripe payment integration end to end",
      "Salon discovery with interactive Leaflet maps",
      "Image uploads to Cloudinary and email notifications",
      "Reviews and ratings for salons",
    ],
    challenges: [
      "Modeling role-based access control across three user types with JWT middleware",
      "Integrating the full Stripe payment flow between the React frontend and Express backend",
    ],
    lessonsLearned: [
      "Structuring a production MERN codebase with separate models, routes, and middleware layers",
      "Third-party integrations (payments, image CDN, email) each need their own error handling strategy",
    ],
    imageUrl: "/projects/beauty-salon.png",
    githubUrl: "https://github.com/Okasha-Chaudhry/beauty-salon-platform",
    liveUrl: "https://beauty-salon-platform.vercel.app",
    featured: true,
  },
  {
    slug: "blood-bridge",
    title: "Blood Bridge",
    tagline: "Cross-platform app connecting blood donors with patients",
    category: "mobile",
    problem:
      "When a patient urgently needs blood, finding a matching donor nearby depends on frantic phone calls and social media posts - there is no fast, targeted way to reach compatible donors.",
    solution:
      "A Flutter app where donors register with their blood type and location, patients post blood requests, and matching donors in the same city receive instant targeted push notifications - with a map view to find donors nearby.",
    architecture:
      "Flutter frontend for Android, iOS, web, and desktop. Firebase Auth with Google Sign-In, Cloud Firestore for donor profiles and requests, Geolocator for device location, flutter_map (OpenStreetMap) for the donor map, Hive for local storage, and OneSignal REST API for targeted push notifications filtered by blood type tags.",
    technologies: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "OneSignal", "Hive", "OpenStreetMap"],
    features: [
      "Donor registration with blood type, city, and availability",
      "Blood requests with urgency flag, hospital, and contact details",
      "Targeted push notifications sent only to donors with a matching blood type",
      "Donor search filtered by city and blood type with distance calculation",
      "Interactive map view of matching donors",
    ],
    challenges: [
      "Building targeted notification delivery with OneSignal tag filters so only compatible donors are alerted",
      "Combining Firestore compound queries (donor status, blood type, city) for fast matching",
    ],
    lessonsLearned: [
      "Designing Firestore data around the queries the app needs, not around a relational mindset",
      "Push notification infrastructure and API keys must live server-side, never in client code",
    ],
    githubUrl: "https://github.com/Okasha-Chaudhry/Blood-Bridge-project",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);