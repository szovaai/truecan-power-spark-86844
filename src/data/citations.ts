// Citation data for Evidence Blocks across service pages

export interface Citation {
  title: string;
  url: string;
}

export interface EvidenceData {
  claim: string;
  sources: Citation[];
  localNote: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const evidenceBlocks: Record<string, EvidenceData> = {
  'ev-charger': {
    claim: "Most Calgary homes benefit from a dedicated 240V circuit for Level-2 charging, providing up to 7x faster charging than standard outlets.",
    sources: [
      {
        title: "Canadian Electrical Code - EV Charging Requirements",
        url: "https://www.esasafe.com/electrical-products/electric-vehicle-charging-systems/"
      },
      {
        title: "Natural Resources Canada - EV Charging Guide",
        url: "https://natural-resources.canada.ca/energy-efficiency/transportation-alternative-fuels/personal-vehicles/choosing-right-vehicle/buying-electric-vehicle/understanding-the-tables/21383"
      }
    ],
    localNote: "We install to Alberta Electrical Code standards and handle all permits and ESA inspections required in Calgary."
  },
  'panel-upgrade': {
    claim: "Homes built before 2000 often need 200A service upgrades to safely support modern electrical loads including EVs, heat pumps, and smart home systems.",
    sources: [
      {
        title: "Electrical Safety Authority - Panel Upgrade Guidelines",
        url: "https://www.esasafe.com/homeowners/home-electrical-system/"
      },
      {
        title: "Canadian Electrical Code - Service Requirements",
        url: "https://www.esasafe.com/assets/files/esasafe/pdf/Codes_and_Standards/CEC_Fact_Sheets.pdf"
      }
    ],
    localNote: "We provide free load calculations and work directly with ENMAX for seamless meter upgrades in Calgary."
  },
  'pot-lights': {
    claim: "Modern LED pot lights use 85% less energy than halogen bulbs and last up to 25 years, saving Calgary homeowners hundreds annually on electricity costs.",
    sources: [
      {
        title: "Natural Resources Canada - LED Lighting Efficiency",
        url: "https://natural-resources.canada.ca/energy-efficiency/products/product-information/lighting/13738"
      },
      {
        title: "ENERGY STAR - LED Bulb Performance",
        url: "https://www.energystar.gov/products/lighting_fans/light_bulbs/learn_about_led_bulbs"
      }
    ],
    localNote: "We install IC-rated fixtures that meet Alberta fire code for safe installation in insulated ceilings."
  },
  'hot-tub-sauna': {
    claim: "240V GFCI-protected circuits are required for safe outdoor hot tub and sauna operation, preventing electrical shock hazards in wet environments.",
    sources: [
      {
        title: "CSA C22.1 - Hot Tub Electrical Standards",
        url: "https://www.csagroup.org/article/research/what-homeowners-need-to-know-about-hot-tubs/"
      },
      {
        title: "Electrical Safety Authority - Pool & Spa Safety",
        url: "https://www.esasafe.com/homeowners/swimming-pools/"
      }
    ],
    localNote: "We install weatherproof disconnect switches and GFCI breakers that meet Calgary's stringent outdoor electrical requirements."
  },
  'renovation-wiring': {
    claim: "Modern kitchens require 7+ dedicated circuits to safely power appliances, with arc-fault protection mandated by 2021 Canadian Electrical Code updates.",
    sources: [
      {
        title: "Canadian Electrical Code - Kitchen Requirements",
        url: "https://www.esasafe.com/assets/files/esasafe/pdf/Codes_and_Standards/CEC_Fact_Sheets.pdf"
      },
      {
        title: "National Research Council - Residential Electrical Design",
        url: "https://nrc.canada.ca/en/certifications-evaluations-standards"
      }
    ],
    localNote: "We design electrical layouts that accommodate your renovation plans while ensuring full code compliance for Calgary permit approval."
  },
  'emergency': {
    claim: "Electrical emergencies account for over 24,000 home fires annually in Canada, with professional response within 2 hours preventing 90% of major damage.",
    sources: [
      {
        title: "Statistics Canada - Fire Incident Data",
        url: "https://www150.statcan.gc.ca/n1/pub/85-002-x/2021001/article/00017-eng.htm"
      },
      {
        title: "Electrical Safety Foundation International",
        url: "https://www.esfi.org/home-electrical-fires"
      }
    ],
    localNote: "Our 24/7 emergency service covers all of Calgary with guaranteed 2-hour response for critical electrical hazards."
  },
  'surge-protection': {
    claim: "Power surges cause over $1 billion in damage to electronics annually in North America, with whole-home surge protection preventing up to 99% of transient voltage damage.",
    sources: [
      {
        title: "Electrical Safety Foundation International - Surge Protection",
        url: "https://www.esfi.org/electrical-safety-in-the-home/surge-protective-devices/"
      },
      {
        title: "IEEE - Surge Protective Devices Standards",
        url: "https://standards.ieee.org/ieee/C62.72/5645/"
      }
    ],
    localNote: "We install panel-mounted surge protection devices that meet CSA C22.1 requirements, providing whole-home protection for Calgary residences and businesses."
  }
};
