import serviceCctv from "@/assets/service-cctv.jpg";
import serviceFencing from "@/assets/service-fencing.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceDatacenter from "@/assets/service-datacenter.jpg";
import serviceGate from "@/assets/service-gate.jpg";
import serviceNetworking from "@/assets/service-networking.jpg";
import serviceFire from "@/assets/service-fire.jpg";
import serviceAccess from "@/assets/service-access.jpg";
import serviceStarlink from "@/assets/service-starlink.jpg";
import serviceAc from "@/assets/service-ac.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceIntercom from "@/assets/service-intercom.jpg";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Security" | "Electrical & Energy" | "IT & Networking" | "Installations";
}

export const serviceCategories = ["All", "Security", "Electrical & Energy", "IT & Networking", "Installations"] as const;

export const allServices: ServiceItem[] = [
  // Security
  { id: "sv1", title: "CCTV Camera Installations", description: "Professional CCTV surveillance system design and installation for homes, offices, and commercial premises. We provide IP and analog camera solutions with remote viewing capabilities.", image: serviceCctv, category: "Security" },
  { id: "sv2", title: "Electric Fencing", description: "High-voltage electric fence installation for perimeter security. Our systems include energizers, warning signs, and integration with alarm systems for maximum protection.", image: serviceFencing, category: "Security" },
  { id: "sv3", title: "Gate Automations", description: "Motorized gate automation systems for sliding, swing, and barrier gates. Includes remote controls, GSM modules, and integration with access control systems.", image: serviceGate, category: "Security" },
  { id: "sv4", title: "Intruder Alarm Systems", description: "Advanced intrusion detection systems with motion sensors, door/window contacts, glass break detectors, and 24/7 monitoring capabilities to protect your property.", image: serviceCctv, category: "Security" },
  { id: "sv5", title: "Access Control Systems", description: "Biometric, card reader, and keypad access control solutions for offices, apartments, and restricted areas. Manage who enters your premises with full audit trails.", image: serviceAccess, category: "Security" },
  { id: "sv6", title: "Video/Audio Intercoms", description: "Modern video and audio intercom systems for residential and commercial buildings. Communicate with visitors before granting access, with mobile app integration.", image: serviceIntercom, category: "Security" },
  { id: "sv7", title: "Razor Fencing Installations", description: "Concertina razor wire and razor mesh fencing for high-security perimeter protection. Professional installation with minimal visual intrusion and maximum deterrence.", image: serviceFencing, category: "Security" },
  { id: "sv8", title: "Fire Detection & Suppression", description: "Complete fire alarm and suppression system installation including smoke detectors, heat sensors, sprinkler systems, and fire extinguisher placement with compliance certification.", image: serviceFire, category: "Security" },
  { id: "sv9", title: "Intrusion Detection", description: "Perimeter and interior intrusion detection with PIR sensors, beam detectors, and vibration sensors. Integrated with alarm panels and monitoring stations.", image: serviceAccess, category: "Security" },

  // Electrical & Energy
  { id: "sv10", title: "Solar Power Systems", description: "Design and installation of on-grid and off-grid solar power systems. Includes solar panels, inverters, charge controllers, and battery storage for reliable clean energy.", image: serviceSolar, category: "Electrical & Energy" },
  { id: "sv11", title: "Electrical Panel Building", description: "Custom electrical panel fabrication and installation for industrial and commercial applications. Motor control centers, distribution boards, and PLC panels.", image: serviceElectrical, category: "Electrical & Energy" },
  { id: "sv12", title: "Electrical Installation Services", description: "Complete electrical wiring and installation for new buildings, renovations, and upgrades. Certified electricians ensuring compliance with Ghana's electrical standards.", image: serviceElectrical, category: "Electrical & Energy" },
  { id: "sv13", title: "Energy Management Systems", description: "Smart energy monitoring and management solutions to track consumption, reduce waste, and optimize energy usage across your facility.", image: serviceSolar, category: "Electrical & Energy" },
  { id: "sv14", title: "Generator Synchronization", description: "Professional generator synchronization and automatic transfer switch (ATS) installation for seamless power backup during outages.", image: serviceElectrical, category: "Electrical & Energy" },

  // IT & Networking
  { id: "sv15", title: "Office & Home Network Installation", description: "Structured cabling, router setup, and WiFi network design for homes and offices. From single-room setups to multi-floor enterprise deployments.", image: serviceNetworking, category: "IT & Networking" },
  { id: "sv16", title: "Server Installation & Management", description: "Server rack installation, configuration, and ongoing management. Active Directory, file servers, email servers, and virtualization solutions.", image: serviceDatacenter, category: "IT & Networking" },
  { id: "sv17", title: "Data Centers", description: "Data center design, build, and management services including cooling, power distribution, cable management, and security infrastructure.", image: serviceDatacenter, category: "IT & Networking" },
  { id: "sv18", title: "Computer Hardware Installation & Repairs", description: "PC assembly, component upgrades, hardware troubleshooting, and repair services for desktops, laptops, and workstations.", image: serviceNetworking, category: "IT & Networking" },
  { id: "sv19", title: "Internet Service Provision", description: "Internet connectivity solutions including fiber, wireless, and satellite options. We help you choose and set up the best ISP for your needs.", image: serviceNetworking, category: "IT & Networking" },
  { id: "sv20", title: "I.T Support", description: "On-site and remote IT support services. Help desk, system administration, network troubleshooting, and preventive maintenance plans.", image: serviceDatacenter, category: "IT & Networking" },
  { id: "sv21", title: "Starlink Installation", description: "Professional Starlink satellite internet installation and setup. Optimal dish positioning, network configuration, and integration with existing infrastructure.", image: serviceStarlink, category: "IT & Networking" },
  { id: "sv22", title: "Systems Integration", description: "Seamless integration of multiple technology systems — security, networking, building management, and automation — into a unified platform.", image: serviceDatacenter, category: "IT & Networking" },

  // Installations
  { id: "sv23", title: "Air-Conditioning Installations", description: "Split, cassette, and ducted air conditioning system installation and maintenance for residential and commercial spaces. Energy-efficient climate control.", image: serviceAc, category: "Installations" },
  { id: "sv24", title: "Digital Satellite & TV Network", description: "Digital satellite dish installation, TV distribution systems, and multi-room TV network connectivity for homes and hotels.", image: serviceStarlink, category: "Installations" },
  { id: "sv25", title: "Central Audio Systems", description: "Multi-zone audio system installation for offices, restaurants, hotels, and homes. Background music, paging, and announcement systems.", image: serviceIntercom, category: "Installations" },
  { id: "sv26", title: "Building Management Systems", description: "Integrated BMS solutions for monitoring and controlling HVAC, lighting, access, fire safety, and energy systems from a centralized platform.", image: serviceDatacenter, category: "Installations" },
  { id: "sv27", title: "Instrumentation & Control Projects", description: "Process instrumentation, SCADA systems, and industrial control solutions for manufacturing, oil & gas, and water treatment facilities.", image: serviceElectrical, category: "Installations" },
  { id: "sv28", title: "Industrial Control Systems", description: "PLC programming, HMI design, and industrial automation solutions. Motor drives, process control, and real-time monitoring systems.", image: serviceElectrical, category: "Installations" },
  { id: "sv29", title: "Tank Gauging Systems", description: "Automated tank level monitoring for fuel depots, water treatment plants, and chemical storage. Real-time level, temperature, and volume measurement.", image: serviceDatacenter, category: "Installations" },
  { id: "sv30", title: "Waste Water Management", description: "Wastewater treatment system monitoring, pump control, and SCADA integration for municipal and industrial water management.", image: serviceSolar, category: "Installations" },
  { id: "sv31", title: "Training", description: "Technical training programs for IT, networking, security systems, and electrical installations. Hands-on workshops and certification preparation.", image: serviceNetworking, category: "Installations" },
];
