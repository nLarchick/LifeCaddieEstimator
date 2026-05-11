export interface Service {
  name: string;
  category: string;
  description?: string;
}

export const SERVICES: Service[] = [
  // Assessment, Strategy & Planning
  { name: "Comprehensive Home & Life Assessment (In-Home or Virtual)", category: "Assessment, Strategy & Planning" },
  { name: "Safety, Capacity & Overwhelm Evaluation", category: "Assessment, Strategy & Planning" },
  { name: "Personalized Organization Roadmap (Core Deliverable)", category: "Assessment, Strategy & Planning" },
  { name: "Immediate Stabilization & Priority Action Plan", category: "Assessment, Strategy & Planning" },
  { name: "Priority & Decision-Making Framework", category: "Assessment, Strategy & Planning" },
  { name: "Timeline, Scheduling & Implementation Planning", category: "Assessment, Strategy & Planning" },
  { name: "Maintenance, Sustainability & Support Planning", category: "Assessment, Strategy & Planning" },

  // Whole-Home & Lifestyle Organizing
  { name: "Whole-Home Reset & Fresh Start Service", category: "Whole-Home & Lifestyle Organizing" },
  { name: "Lifestyle-Based Home Editing & Simplification", category: "Whole-Home & Lifestyle Organizing" },
  { name: "Physical Organizing & Space Optimization", category: "Whole-Home & Lifestyle Organizing" },

  // Decluttering & Core Organizing
  { name: "Decluttering System Setup & Categorization Framework", category: "Decluttering & Core Organizing" },
  { name: "Pre-Move Decluttering & Sorting", category: "Decluttering & Core Organizing" },
  { name: "Specialty Organizing (ADHD, Low-Energy, Small Space)", category: "Decluttering & Core Organizing" },

  // Paper & Administrative Organizing
  { name: "Paper & Document Organization (Strategy + Systems)", category: "Paper & Administrative Organizing" },
  { name: "Paper & Document Triage (Hands-On or Guided)", category: "Paper & Administrative Organizing" },

  // Digital Organizing
  { name: "Light Digital Organization", category: "Digital Organizing" },
  { name: "Digital Life Organization Systems", category: "Digital Organizing" },

  // Room-by-Room Organizing
  { name: "Room-by-Room Organizing Packages (Kitchen, Closets, Bedrooms, Garage, etc.)", category: "Room-by-Room Organizing" },

  // Family & Household Systems
  { name: "Family & Household Systems Design", category: "Family & Household Systems" },
  { name: "Family Communication & Alignment Tools", category: "Family & Household Systems" },
  { name: "Family Mediation & Shared-Space Support", category: "Family & Household Systems" },

  // Move & Transition Organizing
  { name: "Strategic Packing & Staging Preparation", category: "Move & Transition Organizing" },
  { name: "Home Sale & Transition Organizing", category: "Move & Transition Organizing" },
  { name: "Post-Move Unpacking & System Setup", category: "Move & Transition Organizing" },

  // Life Transition & Emotional Organizing
  { name: "Life Transition Organizing Support", category: "Life Transition & Emotional Organizing" },
  { name: "Sentimental & Legacy Item Organizing", category: "Life Transition & Emotional Organizing" },

  // Coaching, Guidance & Support
  { name: "Supported Session Planning & Preparation", category: "Coaching, Guidance & Support" },
  { name: "Real-Time Organizing Coaching (Side-by-Side)", category: "Coaching, Guidance & Support" },
  { name: "Emotional & Cognitive Support During Organizing", category: "Coaching, Guidance & Support" },
  { name: "Ongoing Coaching & Accountability (Phone/Virtual)", category: "Coaching, Guidance & Support" },
  { name: "Maintenance & Ongoing Support", category: "Coaching, Guidance & Support" },
  { name: "Maintenance & Recurring Reset Services", category: "Coaching, Guidance & Support" },

  // Concierge & Premium Services
  { name: "Concierge & White-Glove Organizing Services", category: "Concierge & Premium Services" },
  { name: "Inventory & Household Visibility Systems", category: "Concierge & Premium Services" },
];

export function servicesForPrompt(): string {
  const byCategory = new Map<string, Service[]>();
  for (const s of SERVICES) {
    if (!byCategory.has(s.category)) byCategory.set(s.category, []);
    byCategory.get(s.category)!.push(s);
  }
  return Array.from(byCategory.entries())
    .map(([cat, services]) =>
      `${cat}:\n${services
        .map(s => `  - ${s.name}${s.description ? `: ${s.description}` : ""}`)
        .join("\n")}`
    )
    .join("\n\n");
}
