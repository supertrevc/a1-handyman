export const SITE = {
  name: "A-1 Handyman Services",
  legalName: "A-1 Handyman Services LLC",
  owner: "Justin",
  shortDescription:
    "Locally owned, fully insured handyman serving Sapulpa, Tulsa, and Green Country.",
  url: "https://a1handymanok.com",
  phone: "(918) 949-8890",
  phoneHref: "tel:+19189498890",
  phoneRaw: "+19189498890",
  email: "a1handymanjc@gmail.com",
  street: "Sapulpa, OK",
  city: "Sapulpa",
  region: "OK",
  postalCode: "74066",
  country: "US",
  geo: { lat: 35.9987, lng: -96.1142 },
  hoursHuman: "Mon–Sat 9am–5pm · Closed Sunday",
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "17:00" },
  ],
  priceRange: "$$",
  founded: "2019",
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_AREAS = [
  {
    slug: "sapulpa",
    name: "Sapulpa",
    blurb:
      "Our home base. We know every neighborhood from Sahoma Lake to downtown Dewey Avenue, and most jobs in Sapulpa can be scheduled same week.",
  },
  {
    slug: "tulsa",
    name: "Tulsa",
    blurb:
      "From midtown bungalows to new construction in south Tulsa, we handle repairs, installs, and the dozen little things on your honey-do list.",
  },
  {
    slug: "broken-arrow",
    name: "Broken Arrow",
    blurb:
      "Broken Arrow homeowners get the same flat-rate honesty as our Sapulpa neighbors — no padded hours, no surprise fees.",
  },
  {
    slug: "bixby",
    name: "Bixby",
    blurb:
      "Bixby additions, drainage work, and electrical upgrades are some of our most common calls. Quick, clean, and done right.",
  },
  {
    slug: "jenks",
    name: "Jenks",
    blurb:
      "Whether it's a sprinkler tune-up before summer or a kitchen faucet swap, Jenks neighbors trust us to show up when we say we will.",
  },
  {
    slug: "glenpool",
    name: "Glenpool",
    blurb:
      "Glenpool is a quick drive from our shop. Drywall, painting, and door rehangs are weekly regulars on this side of town.",
  },
  {
    slug: "kiefer",
    name: "Kiefer",
    blurb:
      "Small town, big repairs. From storm-damaged fences to leaky water heaters, Kiefer calls always get a real person on the phone.",
  },
  {
    slug: "mounds",
    name: "Mounds",
    blurb:
      "Rural Mounds properties often need a handyman who can tackle a little bit of everything in one trip — that's exactly what we do.",
  },
  {
    slug: "sand-springs",
    name: "Sand Springs",
    blurb:
      "Sand Springs is part of our weekly rotation. Plumbing, electrical, and outdoor drainage are the most common projects we book here.",
  },
  {
    slug: "bristow",
    name: "Bristow",
    blurb:
      "Bristow calls get scheduled efficiently so we keep your estimate honest. Free quotes, real timelines, no runaround.",
  },
] as const;

export const SERVICES = [
  {
    slug: "general-repairs",
    icon: "Wrench",
    title: "General Home Repairs",
    short: "The catch-all category for everything on your list.",
    long: "We handle the long list of small things that pile up around a house. One trip, one bill, one person to call when something else breaks next month.",
    jobs: [
      "Door alignment, latch, and hinge fixes",
      "Squeaky stairs, sticking windows, loose handrails",
      "Caulking around tubs, sinks, and showers",
      "Smoke detector replacement and battery swaps",
      "Cabinet hardware, soft-close hinges, drawer slides",
      "Weather stripping and threshold adjustments",
    ],
    caseStudy:
      "A Sapulpa homeowner called with a list of 14 small items their realtor flagged before closing. Justin knocked it out in a single Saturday afternoon — saved them three separate service calls and got the house ready for the buyer.",
  },
  {
    slug: "electrical",
    icon: "Plug",
    title: "Electrical",
    short: "Outlets, switches, fixtures, ceiling fans, and small panel work.",
    long: "Small electrical jobs that don't need a full-blown commercial crew. Done safely, to code, and with a clear explanation of what we did and why.",
    jobs: [
      "Outlet and switch replacement (including GFCI and tamper-resistant)",
      "Ceiling fan and light fixture installation",
      "Recessed lighting and under-cabinet lighting",
      "Bathroom exhaust fan replacement",
      "Doorbell and smart-doorbell installs",
      "Troubleshooting dead outlets and tripping breakers",
    ],
    caseStudy:
      "A Tulsa family had two outlets stop working in their kitchen. Most folks would have ripped out drywall — we traced it to a backstabbed receptacle two rooms away, rewired it properly, and were out the door in under an hour.",
  },
  {
    slug: "plumbing",
    icon: "Droplets",
    title: "Plumbing",
    short: "Fixtures, water heaters, leaks, and bathroom rehabs.",
    long: "Small to mid-size plumbing work where you need it done right the first time. We carry the right parts and won't make three trips to the hardware store on your dime.",
    jobs: [
      "Faucet, toilet, and shower valve replacement",
      "Water heater install and replacement",
      "Tub and shower fixture rebuilds",
      "Garbage disposal install and repair",
      "Hose bib and outdoor spigot repair",
      "Supply line and shutoff valve replacement",
    ],
    caseStudy:
      "L.M. in Sapulpa came home to a leaking water heater on a Friday afternoon. Justin had a new unit installed and tested that evening, plus rebuilt a leaky tub fixture in the master bath while he was there — one trip, fair price.",
  },
  {
    slug: "drywall-painting",
    icon: "PaintRoller",
    title: "Drywall & Painting",
    short: "Patches, full rooms, ceilings, trim, and texture matching.",
    long: "From popped nails to a whole room refresh. We feather, prime, and texture-match so repairs disappear instead of standing out as a square patch on your wall.",
    jobs: [
      "Drywall patches, holes, and seam repairs",
      "Texture matching (knockdown, orange peel, smooth)",
      "Interior room and trim painting",
      "Ceiling repair and repaint",
      "Door, baseboard, and crown molding paint",
      "Water-damage drywall replacement",
    ],
    caseStudy:
      "A Jenks customer had three doorknob-sized holes left by movers. Instead of an obvious patch, we matched the orange-peel texture and rolled the wall edge-to-edge so the repair vanished completely.",
  },
  {
    slug: "sprinkler-drainage",
    icon: "Sprout",
    title: "Sprinkler & Drainage",
    short: "Heads, valves, controllers, French drains, and standing water.",
    long: "Oklahoma weather is hard on yards. We fix the sprinkler problems most companies won't bother with and dig drainage that actually keeps your foundation dry.",
    jobs: [
      "Sprinkler head replacement and adjustment",
      "Valve and solenoid repair",
      "Controller programming and replacement",
      "Backflow preventer service",
      "French drain installation",
      "Downspout extensions and grading fixes",
    ],
    caseStudy:
      "A Bixby customer had standing water against their foundation every time it rained. We installed a 40-foot French drain to daylight and tied in two downspouts — first storm after, the side yard stayed dry.",
  },
  {
    slug: "assembly-installations",
    icon: "Hammer",
    title: "Assembly & Installations",
    short: "Furniture, fixtures, mounts, hardware, and small additions.",
    long: "The stuff you bought online and dread putting together. Plus mounting, anchoring, and additions like shelving, railings, and small structures.",
    jobs: [
      "Furniture and IKEA-style assembly",
      "TV mounting (with concealed cables)",
      "Shelving, closet systems, and pegboards",
      "Door, lockset, and deadbolt installation",
      "Basketball goals, swing sets, trampolines",
      "Small additions: decks, ramps, sheds, railings",
    ],
    caseStudy:
      "A Broken Arrow family had three rooms of furniture sitting in boxes from a recent move. We assembled everything, mounted two TVs, and hauled the boxes out — one afternoon, no chaos.",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const FAQS = [
  {
    q: "Are you insured?",
    a: "Yes — A-1 Handyman Services LLC is fully insured. We're happy to provide a copy of our certificate of insurance before any job starts. It's part of doing this right.",
  },
  {
    q: "Do you give free estimates?",
    a: "Always. Every estimate is free, and we won't pressure you into deciding on the spot. Call or text (918) 949-8890 and we'll either give you a price over the phone or come take a look in person.",
  },
  {
    q: "What areas do you serve?",
    a: "We work all over Green Country — Sapulpa, Tulsa, Broken Arrow, Bixby, Jenks, Glenpool, Sand Springs, Kiefer, Mounds, and Bristow. If you're nearby and not listed, give us a call anyway.",
  },
  {
    q: "What kinds of jobs do you take on?",
    a: "General repairs, electrical, plumbing, drywall, painting, sprinklers, drainage, assembly, and small additions. If you're not sure whether it's in our wheelhouse, ask — we'll tell you straight up.",
  },
  {
    q: "How fast can you get out to me?",
    a: "Most jobs we book within the same week. Quick fixes and emergencies often happen sooner. Booked-up periods get scheduled in the order calls come in, so the sooner you reach out the sooner we'll be there.",
  },
  {
    q: "Do you take small jobs?",
    a: "Yes. Two-hour minimum, but a long honey-do list often fits in that time. Small jobs are how we build trust for the bigger projects later.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Justin came out the same day my water heater started leaking, installed a new one, and rebuilt a leaky tub fixture in the master bath while he was there. Fair price, no upsell, and he cleaned up after himself. Hard to find that anymore.",
    name: "L.M.",
    city: "Sapulpa, OK",
  },
  {
    quote:
      "Two outlets in our kitchen quit working and the first electrician quoted us $800 to open up walls. Justin found the bad receptacle, fixed it properly, and was done in under an hour. Honest work.",
    name: "Daniel R.",
    city: "Tulsa, OK",
  },
  {
    quote:
      "We had a list a mile long — door that wouldn't latch, leaky outdoor spigot, broken sprinkler heads, a ceiling fan to hang. He knocked all of it out in one afternoon and the price was exactly what he quoted.",
    name: "Christine H.",
    city: "Broken Arrow, OK",
  },
] as const;

export const STATS = [
  { value: "1,200+", label: "Jobs Completed" },
  { value: "10", label: "Cities Served" },
  { value: "5★", label: "Average Rating" },
  { value: "Same Week", label: "Typical Scheduling" },
] as const;

export const VALUES = [
  {
    icon: "Clock",
    title: "Show Up On Time",
    body: "When we say 10am, we mean 10am. You'll get a text on the way, not a four-hour window and a ghost.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Honest Pricing",
    body: "Flat quotes whenever possible. If something changes mid-job, we stop and talk to you before adding a dollar.",
  },
  {
    icon: "Wrench",
    title: "Quality Workmanship",
    body: "We do the job we'd want done in our own house. Right materials, clean lines, and a tidy worksite when we leave.",
  },
  {
    icon: "ShieldCheck",
    title: "Locally Insured",
    body: "A-1 Handyman Services LLC is a fully insured Oklahoma business. We can provide our certificate before we ever pick up a tool.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "5-signs-your-water-heater-is-about-to-fail",
    title: "5 Signs Your Water Heater Is About to Fail",
    excerpt:
      "Water heaters rarely die without warning. Here are the five clues homeowners almost always miss — and what each one means for your wallet.",
    category: "Plumbing",
    date: "2026-04-22",
    readMinutes: 5,
  },
  {
    slug: "why-your-outlets-stopped-working",
    title: "Why Your Outlets Stopped Working — When to Call an Electrician",
    excerpt:
      "A dead outlet doesn't always mean a big electrical bill. Try these three safe checks first, then know when to put the screwdriver down.",
    category: "Electrical",
    date: "2026-03-14",
    readMinutes: 6,
  },
  {
    slug: "sprinkler-winterization-oklahoma-checklist",
    title: "Sprinkler Winterization in Oklahoma: A Homeowner's Checklist",
    excerpt:
      "Oklahoma freezes are unpredictable. This is the same checklist we run on every system we winterize — print it, save it, and protect your sprinkler investment.",
    category: "Sprinklers",
    date: "2026-02-02",
    readMinutes: 7,
  },
] as const;

export type BlogSlug = (typeof BLOG_POSTS)[number]["slug"];
