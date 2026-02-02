
# Adding Electrical Engineering Services to TrueCan Power

## Overview

Adding electrical engineering to your service scope is a strategic move that:
- Elevates positioning from "contractor" to "engineering + execution partner"
- Justifies higher-margin projects and larger scope work
- Creates natural cross-sell between design and installation
- Differentiates from competitors who only install

---

## What We'll Build

### 1. New Dedicated Service Page: `/services/electrical-engineering`
A comprehensive page showcasing engineering capabilities:

**Hero Section:**
- Title: "Electrical Engineering Services"
- Positioning: "Design. Specify. Solve."
- Subhead: Professional engineering for power distribution, lighting, and control systems

**Engineering Services Grid:**
- Power Distribution Design (load calculations, single-line diagrams)
- Lighting & Controls Design (energy modeling, photometric analysis)
- Arc Flash Studies & Safety Analysis
- Code Compliance Reviews
- Construction Administration (site visits, inspections, punch lists)
- Permit-Ready Drawings

**Why Engineer + Contractor Together:**
- Seamless handoff from design to build
- Single point of accountability
- Cost savings vs. separate firms
- Faster project timelines

**Credentials Section:**
- Highlight your engineer's qualifications (P.Eng if applicable)
- APEGA membership (if Alberta-registered)
- Professional liability coverage

---

### 2. Update Navigation & Header
Add "Engineering" to the Services dropdown menu

---

### 3. Update Home Page
Add engineering to the featured services or problem/solution section

---

### 4. Update Services Hub Page
Add new "Engineering & Design" section alongside Residential and Commercial

---

### 5. Update Commercial Page
Add engineering services to the commercial offerings since this is where engineering is most relevant (facility owners, property managers, GCs)

---

### 6. Update About Page
Add mention of in-house engineering capability

---

### 7. Update Sitemap & SEO
Add new URL to sitemap.xml for search indexing

---

## Technical Implementation

### Files to Create:
| File | Purpose |
|------|---------|
| `src/pages/services/ElectricalEngineering.tsx` | New dedicated engineering services page |

### Files to Modify:
| File | Changes |
|------|---------|
| `src/App.tsx` | Add route for `/services/electrical-engineering` |
| `src/components/Header.tsx` | Add "Engineering" to serviceLinks dropdown |
| `src/pages/Home.tsx` | Add engineering to featured services |
| `src/pages/Services.tsx` | Add new Engineering section |
| `src/pages/Commercial.tsx` | Add engineering to commercial services |
| `src/pages/About.tsx` | Mention in-house engineering |
| `public/sitemap.xml` | Add new URL |

---

## Proposed Language & Positioning

**Tagline options:**
- "Design. Specify. Execute."
- "Engineering-Backed Electrical Solutions"
- "From Single-Line to Switchgear"

**Key differentiator messaging:**
> "Most contractors install what others design. We engineer and build — one team, one responsibility."

**Service descriptions using infrastructure language:**
- "Power distribution engineering for operational reliability"
- "Load analysis and fault current studies"
- "Arc flash hazard analysis and PPE labeling"
- "Permit-ready drawings with professional engineer stamp"

---

## Questions Before Proceeding

Before I build this out, a few quick clarifications would help:

1. **Engineer credentials** - Is your engineer a licensed P.Eng in Alberta (APEGA)? This affects how we can market the services and whether we can offer stamped drawings.

2. **Scope focus** - Should engineering services be positioned for:
   - Commercial/Industrial only?
   - Or also residential (custom homes, major renovations)?

3. **Specific services** - Are there any engineering services I should add or remove from the list above?
