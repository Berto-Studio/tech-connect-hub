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
  icon: string;
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
    description: "Professional setup of routers, modems, and network infrastructure for homes and businesses.",
    icon: "Wrench",
  },
  {
    id: "s2",
    title: "WiFi Optimization",
    description: "Site survey and optimization to eliminate dead zones and maximize coverage and speed.",
    icon: "Wifi",
  },
  {
    id: "s3",
    title: "Network Security Audit",
    description: "Comprehensive security assessment to protect your network from vulnerabilities and threats.",
    icon: "Shield",
  },
  {
    id: "s4",
    title: "Technical Support",
    description: "On-call troubleshooting and maintenance for all networking equipment we sell.",
    icon: "Headphones",
  },
];

export const categories = ["All", "Routers", "Modems", "Mesh Systems", "Switches", "Access Points", "Accessories"];

export const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number
