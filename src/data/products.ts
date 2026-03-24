export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  price: string;
  duration: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "ProLink AC1200 Dual-Band Router",
    category: "Routers",
    price: 89.99,
    description: "High-speed dual-band WiFi router with 4 external antennas and MU-MIMO technology.",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=80",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "NetMax AX3000 WiFi 6 Router",
    category: "Routers",
    price: 149.99,
    description: "Next-gen WiFi 6 router delivering blazing speeds up to 3Gbps for seamless streaming.",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=80",
  },
  {
    id: "3",
    name: "SpeedLink DOCSIS 3.1 Modem",
    category: "Modems",
    price: 119.99,
    description: "Ultra-fast cable modem supporting speeds up to 10Gbps downstream.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    badge: "New",
  },
  {
    id: "4",
    name: "WaveMax DSL Modem",
    category: "Modems",
    price: 69.99,
    description: "Reliable VDSL2/ADSL2+ modem with integrated firewall and parental controls.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
  {
    id: "5",
    name: "MeshPro Whole-Home WiFi System",
    category: "Mesh Systems",
    price: 249.99,
    description: "3-pack mesh system covering up to 6,000 sq ft with seamless roaming.",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=80",
    badge: "Popular",
  },
  {
    id: "6",
    name: "GigaSwitch 8-Port Managed Switch",
    category: "Switches",
    price: 59.99,
    description: "Enterprise-grade 8-port gigabit managed switch with VLAN support.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
  {
    id: "7",
    name: "PowerLine AV2000 Adapter Kit",
    category: "Accessories",
    price: 79.99,
    description: "Extend your network through electrical wiring with gigabit speeds.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
  {
    id: "8",
    name: "SkyBeam Outdoor WiFi Access Point",
    category: "Access Points",
    price: 129.99,
    description: "Weatherproof outdoor access point with 300m range and PoE support.",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=80",
    badge: "New",
  },
];

export const services: Service[] = [
  {
    id: "s1",
    title: "Network Installation",
    shortDescription: "Professional setup of routers, modems, and network infrastructure.",
    description:
      "Our certified technicians will install and configure your entire network from scratch. Whether it's a home setup with a single router or a multi-floor business with structured cabling, we handle the full end-to-end process — from planning the layout to running cables, mounting access points, and configuring your devices for optimal performance.",
    icon: "Wrench",
    features: [
      "Site assessment & network design",
      "Router & modem installation and configuration",
      "Structured cabling (Cat5e/Cat6)",
      "Access point mounting & setup",
      "Speed testing & performance verification",
      "Post-install documentation & support",
    ],
    price: "From GH₵99",
    duration: "2–4 hours",
  },
  {
    id: "s2",
    title: "WiFi Optimization",
    shortDescription: "Eliminate dead zones and maximize coverage and speed.",
    description:
      "Struggling with slow WiFi or dead zones? Our WiFi optimization service starts with a thorough site survey using professional heatmapping tools. We analyze signal strength, interference sources, and device density to create a tailored plan. Then we reposition equipment, adjust channels, upgrade firmware, and fine-tune settings to deliver the fastest, most reliable coverage possible.",
    icon: "Wifi",
    features: [
      "Professional WiFi heatmap survey",
      "Interference & channel analysis",
      "Equipment repositioning recommendations",
      "Firmware updates & configuration tuning",
      "Band steering & QoS setup",
      "Before/after speed comparison report",
    ],
    price: "From GH₵79",
    duration: "1–3 hours",
  },
  {
    id: "s3",
    title: "Network Security Audit",
    shortDescription: "Protect your network from vulnerabilities and threats.",
    description:
      "In today's connected world, network security isn't optional. Our comprehensive audit examines your entire network infrastructure — from firewall rules and encryption protocols to open ports and default credentials. We identify vulnerabilities, test for common attack vectors, and provide a detailed report with prioritized recommendations to harden your network against threats.",
    icon: "Shield",
    features: [
      "Firewall & router configuration review",
      "Encryption protocol assessment (WPA3, VPN)",
      "Open port & vulnerability scanning",
      "Default credential & password audit",
      "Guest network isolation check",
      "Detailed security report with action items",
    ],
    price: "From GH₵149",
    duration: "3–5 hours",
  },
  {
    id: "s4",
    title: "Technical Support",
    shortDescription: "On-call troubleshooting and maintenance for your equipment.",
    description:
      "Get peace of mind with our ongoing technical support plans. Whether you need help resolving a connectivity issue, updating firmware, or diagnosing intermittent problems, our team is just a call or WhatsApp message away. We offer both one-time troubleshooting sessions and monthly retainer plans for businesses that need guaranteed response times.",
    icon: "Headphones",
    features: [
      "Remote & on-site troubleshooting",
      "Firmware & software updates",
      "Performance monitoring setup",
      "Priority response within 2 hours (retainer)",
      "Monthly health check reports",
      "Equipment replacement assistance",
    ],
    price: "From GH₵49/session",
    duration: "Varies",
  },
  {
    id: "s5",
    title: "Business Network Design",
    shortDescription: "Custom enterprise-grade network architecture for growing businesses.",
    description:
      "Planning a new office or expanding your business? We design scalable, enterprise-grade network architectures tailored to your specific needs. From VLAN segmentation and redundant uplinks to managed switches and centralized WiFi controllers, we build networks that grow with you — reliable, secure, and easy to manage.",
    icon: "Building",
    features: [
      "Custom network topology design",
      "VLAN segmentation & traffic management",
      "Redundancy & failover planning",
      "Managed switch & controller setup",
      "Documentation & network diagrams",
      "Staff training on network management",
    ],
    price: "From $299",
    duration: "1–2 days",
  },
  {
    id: "s6",
    title: "CCTV & IP Camera Setup",
    shortDescription: "Surveillance system installation integrated with your network.",
    description:
      "Secure your premises with a professionally installed CCTV and IP camera system. We integrate cameras directly into your existing network, configure remote viewing on your phone, set up motion alerts, and ensure recordings are stored securely — whether on a local NVR or cloud storage.",
    icon: "Camera",
    features: [
      "IP camera selection & procurement",
      "PoE-powered camera installation",
      "NVR/cloud storage configuration",
      "Remote mobile viewing setup",
      "Motion detection & alert configuration",
      "Night vision & coverage optimization",
    ],
    price: "From $199",
    duration: "3–6 hours",
  },
];

export const categories = ["All", "Routers", "Modems", "Mesh Systems", "Switches", "Access Points", "Accessories"];

export const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number
