import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import serviceCctv from "@/assets/service-cctv.jpg";
import serviceNetworking from "@/assets/service-networking.jpg";
import serviceDatacenter from "@/assets/service-datacenter.jpg";
import serviceGate from "@/assets/service-gate.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceFencing from "@/assets/service-fencing.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Corporate Server Room — Accra",
    category: "Enterprise",
    shortDesc: "Full structured cabling & rack installation for a 200-employee office in Accra.",
    fullDesc: "A leading financial services company in Accra needed a complete server room overhaul to support their growing workforce. The existing infrastructure was outdated, causing frequent downtime and security vulnerabilities.",
    challenge: "The client had a cramped, poorly ventilated server closet with tangled cables and no redundancy. They needed to migrate to a proper server room without disrupting daily operations for 200 employees.",
    solution: "We designed a purpose-built server room with hot/cold aisle containment, installed Cat6A structured cabling throughout the building, deployed a new rack system with UPS backup, and set up environmental monitoring. The migration was completed over a weekend to minimize disruption.",
    result: "99.9% uptime achieved in the first year. Network speeds increased by 400%. The client saved 30% on energy costs with the new efficient cooling system. Zero unplanned outages since installation.",
    images: [portfolio1, serviceDatacenter, serviceNetworking],
    tags: ["Structured Cabling", "Server Room", "Network Design"],
  },
  {
    id: "p2",
    title: "CCTV Security System — Kumasi Mall",
    category: "Surveillance",
    shortDesc: "32-camera IP surveillance system for a shopping complex in Kumasi.",
    fullDesc: "A major shopping complex in Kumasi required a comprehensive surveillance system to cover all entrances, parking areas, corridors, and retail spaces. The system needed to provide 24/7 recording with remote access for management.",
    challenge: "The complex spans 3 floors with over 50 retail units, multiple entrances, and a large parking area. The existing analog system was unreliable, produced poor image quality, and had blind spots in critical areas.",
    solution: "We deployed 32 Hikvision IP cameras (4MP) with night vision, installed a 64-channel NVR with 30-day recording capacity, set up a dedicated monitoring room, and configured mobile app access for management. Strategic camera placement eliminated all blind spots.",
    result: "Theft incidents reduced by 85% in the first quarter. Management can monitor all areas remotely via smartphone. The high-resolution footage has aided law enforcement in multiple incidents. Insurance premiums were reduced by 20%.",
    images: [portfolio2, serviceCctv, serviceCctv],
    tags: ["CCTV", "IP Cameras", "NVR Setup"],
  },
  {
    id: "p3",
    title: "Hotel WiFi Network — Takoradi",
    category: "Hospitality",
    shortDesc: "Seamless WiFi coverage across 150 rooms for a 4-star hotel in Takoradi.",
    fullDesc: "A premium 4-star hotel in Takoradi was losing guest satisfaction due to poor WiFi coverage. Guests in upper floors and pool areas had virtually no connectivity, leading to negative reviews.",
    challenge: "The hotel's original network used consumer-grade routers that couldn't handle the density of 300+ devices connecting simultaneously. Concrete walls and long corridors created severe dead zones on floors 3-5.",
    solution: "We designed a hospitality-grade WiFi network using Ubiquiti UniFi access points with seamless roaming. Deployed 45 APs across all floors, pool areas, and conference rooms. Implemented bandwidth management with a captive portal for guest login and premium tier options.",
    result: "WiFi satisfaction scores in guest reviews jumped from 2.1 to 4.8 out of 5. The network now handles 500+ concurrent devices effortlessly. The captive portal generates additional revenue through premium WiFi upsells.",
    images: [portfolio3, serviceNetworking, serviceDatacenter],
    tags: ["WiFi Design", "Hospitality", "Access Points"],
  },
  {
    id: "p4",
    title: "Perimeter Security — Industrial Estate",
    category: "Security",
    shortDesc: "Electric fencing and gate automation for a 10-acre industrial compound in Tema.",
    fullDesc: "An industrial estate in Tema needed a comprehensive perimeter security upgrade after a series of break-in attempts. The facility houses expensive machinery and raw materials worth millions of cedis.",
    challenge: "The 10-acre compound had only a basic block wall with no electronic security. The three entry points were manually operated, causing delays during shift changes and making it impossible to track vehicle movements.",
    solution: "We installed 1.2km of energized electric fencing with zone monitoring, automated all three gates with barrier systems and RFID access cards, deployed perimeter IR beam detectors, and integrated everything into a central alarm panel with 24/7 monitoring.",
    result: "Zero break-in attempts since installation. Vehicle entry/exit time reduced from 5 minutes to 30 seconds with RFID. The client's insurance company reduced premiums by 35% due to the enhanced security measures.",
    images: [serviceFencing, serviceGate, serviceAccess],
    tags: ["Electric Fencing", "Gate Automation", "Access Control"],
  },
  {
    id: "p5",
    title: "Solar Power Installation — Cape Coast School",
    category: "Energy",
    shortDesc: "50kW solar system installation for a private school in Cape Coast.",
    fullDesc: "A private school in Cape Coast was spending heavily on diesel generators due to frequent power outages. They needed a sustainable energy solution that would reduce costs and provide reliable power for classrooms, labs, and admin offices.",
    challenge: "The school experienced 8-12 hours of power outage weekly, disrupting classes and damaging lab equipment. Monthly diesel costs exceeded GH₵15,000, straining the school's budget.",
    solution: "We designed and installed a 50kW hybrid solar system with 200kWh battery storage. The system powers all classrooms, computer labs, and administrative offices. An automatic transfer switch ensures seamless switchover between grid, solar, and battery power.",
    result: "Monthly energy costs reduced by 70%. The school now operates independently during outages for up to 10 hours. The system paid for itself within 2.5 years. The school was recognized by the Ghana Energy Commission for sustainable practices.",
    images: [serviceSolar, serviceElectrical, serviceSolar],
    tags: ["Solar Power", "Battery Storage", "Hybrid System"],
  },
  {
    id: "p6",
    title: "Smart Office — Accra Tech Hub",
    category: "Enterprise",
    shortDesc: "Full IT infrastructure and smart building systems for a 5-floor tech hub in Accra.",
    fullDesc: "A new 5-floor co-working tech hub in Accra required a fully integrated smart building solution — from high-speed networking and access control to CCTV, BMS, and energy management.",
    challenge: "The building needed to support 500+ tenants with varying IT needs, provide secure floor-by-floor access, maintain optimal climate control, and keep energy costs manageable — all managed from a single dashboard.",
    solution: "We delivered a complete smart building package: enterprise WiFi with per-tenant VLANs, biometric access control on every floor, 48-camera CCTV system, integrated BMS for HVAC and lighting, and a solar-assisted energy management system. Everything feeds into a central management dashboard.",
    result: "The hub reached 95% occupancy within 3 months, partly due to the premium IT infrastructure. Energy costs are 40% below comparable buildings. Tenants rate the facility 4.9/5 for connectivity and security.",
    images: [serviceDatacenter, serviceNetworking, serviceCctv],
    tags: ["Smart Building", "BMS", "Enterprise WiFi"],
  },
];

export const projectCategories = ["All", ...new Set(projects.map((p) => p.category))];
