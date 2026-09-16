import { CaseStudy, CapabilityGroup, CredibilityItem, DesignerProfile } from '../types';

export const designerProfile: DesignerProfile = {
  name: 'Suryansh Yadav',
  title: 'Product Designer',
  availability: 'Open to UI/UX & Product Design opportunities',
  location: 'Open to Remote / Global Relocation',
  email: 'yadavsuryansh2912@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/suryansh-yadav-08178139a',
  heroHeadline: 'Designing clear digital experiences through thoughtful UX and visual design.',
  valueProposition:
    'I focus on understanding the problem before designing the interface — combining research, structured thinking, and visual design to create clear and purposeful digital experiences.',
  aboutShort:
    'I’m Suryansh Yadav, a Product Designer focused on understanding real user problems and turning them into clear, usable, and purposeful digital experiences. I enjoy working across the product design process — from research and problem definition to information architecture, user flows, wireframes, prototypes, and refined UI.',
  aboutFull: [
    'I’m Suryansh Yadav, a Product Designer focused on understanding real user problems and turning them into clear, usable, and purposeful digital experiences. I enjoy working across the product design process — from research and problem definition to information architecture, user flows, wireframes, prototypes, and refined UI.',
    'My approach combines structured UX thinking with a strong interest in visual design. I pay close attention to hierarchy, typography, spacing, color, interaction patterns, and consistency to make interfaces easier to understand and use.',
    'I believe good design is not only about making an interface look polished. It is about making the right information easier to find, the right actions easier to understand, and complex workflows simpler for the people using them.',
    'I’m continuously developing my skills in product thinking, visual design, accessibility fundamentals, and design systems while building practical case studies around real-world product problems.'
  ],
  designPhilosophy: [
    {
      title: 'Purpose before decoration',
      description: "Every design element should have a reason to exist and support the user's goal."
    },
    {
      title: 'Evidence over assumptions',
      description: 'Use research, observation, user input, and product analysis to inform design decisions rather than relying only on assumptions.'
    },
    {
      title: 'Clarity over complexity',
      description: 'Make information easier to understand through thoughtful hierarchy, spacing, structure, and interaction.'
    },
    {
      title: 'Consistency by design',
      description: 'Use reusable patterns, components, and design systems to create experiences that feel coherent and predictable.'
    }
  ],
  tools: [
    {
      category: 'Design & Prototyping',
      items: [
        'Figma',
        'FigJam',
        'Stitch',
        'Auto Layout',
        'Interactive Prototyping',
        'Components & Variants',
        'Design Systems'
      ]
    },
    {
      category: 'Research & UX',
      items: [
        'User Surveys',
        'User Interviews',
        'User Observation',
        'Secondary Research',
        'Competitor Analysis',
        'Information Architecture',
        'User Flows',
        'Journey Mapping',
        'Wireframing',
        'Heuristic Evaluation'
      ]
    },
    {
      category: 'Organization & Collaboration',
      items: [
        'Notion',
        'Design Documentation',
        'Research Synthesis',
        'Design Handoff & Specifications',
        'Collaborative Design Workflows'
      ]
    }
  ]
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'shared-record-local-services',
    title: 'Building a shared record for recurring local services',
    tagline: 'What started as a payment-management problem became a problem of keeping residents and service providers on the same page.',
    category: 'Two-Sided Service Platform',
    year: '2024',
    status: 'Featured Case Study',
    featured: true,
    accentColor: '#48A1EA',
    quickFacts: {
      role: 'UI/UX Designer',
      duration: 'Personal Project',
      projectType: 'Mobile (Residents & Service Providers)',
      tools: ['Figma', 'Miro', 'User Observations', 'Design Systems'],
      keyResponsibility: 'Core problem reframing, decision stories, payment iteration, Service Log matrix, and two-sided system architecture.'
    },
    overview: {
      product: 'A mobile product creating a synchronized, verified record of service delivery and payment calculation between residents and local service providers.',
      targetUsers: 'Residents subscribing to recurring daily household services and independent local service providers managing multiple customer accounts.',
      context: 'Recurring services like milk delivery, newspapers, garbage collection, maid services, and car washing are typically tracked across fragmented notebooks, WhatsApp chats, and paper receipts without a shared single source of truth.',
      roleDescription: 'Sole UI/UX Designer responsible for secondary research, informal observations and surveys, information architecture, wireframing in Miro, high-fidelity UI in Figma, and design systems.'
    },
    problem: {
      summary: 'Recurring services are often managed through a mix of notebooks, receipts, screenshots, WhatsApp messages and memory. What happens when the resident and the service provider are both managing the same service, but keeping separate records?',
      coreChallenges: [
        'Scattered records across paper books, phone notes, chats, and personal memory.',
        'Payment verification difficulty: when recurring activity affects payment, the activity itself needs to be easy to verify.',
        'Asymmetric service records: if a delivery is missed or paused, calculating the due amount causes dispute without a shared mutual log.'
      ]
    },
    research: {
      summary: 'Used secondary research, observations and informal conversations, and a small resident survey to understand existing behaviour. The survey had small usable resident responses, treated as directional rather than representative.',
      methods: [
        {
          method: 'Resident Survey (Small Directional Sample)',
          description: 'Surveyed residents about tracking methods for daily deliveries, maid schedules, and monthly payment settlements.',
          deliverable: 'Directional understanding that fragmented tools create payment verification disputes.'
        },
        {
          method: 'Observational Inquiry & Informal Conversations',
          description: 'Observed and spoke with residents and service providers regarding their daily recording practices.',
          deliverable: 'Mapped the scattered artifact ecosystem (receipt photos, WhatsApp, notebooks, calendars, memory).'
        }
      ]
    },
    insights: [
      {
        id: 'INS-01',
        observation: 'Records were scattered across WhatsApp, paper notebooks, and memory on both resident and provider sides.',
        implication: 'There was no shared record connecting the two sides, making payment difficult to verify.',
        designAction: 'Transformed the Service Log from a passive history screen into an active shared tabular verification matrix.'
      },
      {
        id: 'INS-02',
        observation: 'The service itself directly affects the payment (e.g., missed milk delivery on a specific day changes the bill).',
        implication: 'Payment management cannot be decoupled from daily service tracking.',
        designAction: 'Directly linked daily service status checks to automated monthly payment calculations.'
      }
    ],
    howMightWe: [
      'How can both sides maintain a reliable understanding of the same service relationship?',
      'How might we connect daily service delivery directly to payment verification with zero ambiguity?',
      'How might we support both Resident and Provider workflows using a unified, calm visual system?'
    ],
    informationArchitecture: {
      description: 'The core relationship connects Service → Service activity → Payment → History / proof → Communication.',
      flowNodes: [
        {
          step: '1. Service & Roster Setup',
          action: 'Establish the core service with name, provider, frequency, amount, and autopay status.',
          systemResponse: 'Initializes the shared service ledger between resident and provider.'
        },
        {
          step: '2. Daily Activity Logging',
          action: 'Daily checkmarks record service provided / not provided in a tabular matrix.',
          systemResponse: 'Calculates active delivery count and updates verification log.'
        },
        {
          step: '3. Contextual Payment Execution',
          action: 'User views overdue or upcoming status with direct contextual actions (Overdue → Pay, Upcoming → Schedule Now).',
          systemResponse: 'Settles verified balance and syncs payment proof to both parties.'
        }
      ]
    },
    ideation: {
      summary: 'Iterated through 3 major decision stories: transforming the Service Log into the primary record, refining payment cards from heavy to compact contextual actions, and ruthlessly scoping Add Service fields.',
      decisions: [
        {
          option: 'Tabular Checkbox Grid (Service Log)',
          chosen: true,
          reasoning: 'Makes the daily record easy to scan and verify, directly bridging daily deliveries to payment calculations.'
        },
        {
          option: 'Contextual Action Cards (Payment 3)',
          chosen: true,
          reasoning: 'Replaced heavy, space-consuming cards with compact states that pair status directly with action (Overdue → Pay).'
        },
        {
          option: 'Minimal Setup Fields (Add Service)',
          chosen: true,
          reasoning: 'Avoided form bloat by capturing only strictly required attributes needed to establish the shared record.'
        }
      ]
    },
    wireframes: {
      summary: 'Explored low-fidelity wireframe structures in Miro for daily overview cards, monthly cards, and tabular matrices.',
      iterations: [
        {
          step: 'Step 1',
          title: 'Miro Low-Fidelity Explorations',
          changes: 'Tested daily overview cards vs monthly blocks before standardizing on the tabular matrix.',
          rationale: 'Scanning and verification speed was superior with a simple date/day row structure.',
          learning: 'When recurring activity affects payment, the activity itself needs to be easy to verify.'
        },
        {
          step: 'Step 2',
          title: 'Add Service Field Scoping',
          changes: 'Narrowed the form strictly to essential information: Service name, Provider name, Usage, Amount, Payment frequency, Autopay.',
          rationale: 'Lower cognitive load and faster onboarding for both parties.',
          learning: 'Initial service setup should not attempt to capture every edge case.'
        }
      ]
    },
    finalUI: {
      summary: 'High-fidelity mobile UI system built in Figma using a calm, neutral foundation inspired by Notion with #48A1EA primary blue.',
      screens: [
        {
          title: 'Servotix Service Log (Tabular Matrix)',
          description: 'Date/Day grid displaying verified service deliveries alongside quick-filter overlays and AI summarization.',
          keyDecisions: [
            'Tabular checkbox matrix allows instant month-at-a-glance scanning.',
            'Connects delivery confirmation directly to payment verification.'
          ],
          mockupType: 'mobile-finance'
        },
        {
          title: 'Payment 3 (Compact Contextual Cards)',
          description: 'Compact cards prioritizing Payment → Auto Pay → Payment History with contextual Pay Now and Review buttons.',
          keyDecisions: [
            'Eliminates wasted scrolling by binding actions directly to payment state.',
            'Distinct semantic color accents for Overdue, Upcoming, and Paid.'
          ],
          mockupType: 'mobile-finance'
        },
        {
          title: 'Provider Customer & Delivery Management',
          description: 'Customer management and service delivery tracking tailored specifically to provider operational priorities.',
          keyDecisions: [
            'Shares the same visual design language while serving provider-specific operational workflows.',
            'Simplified Add Customer flow with address and service assignment.'
          ],
          mockupType: 'mobile-finance'
        }
      ]
    },
    prototype: {
      description: 'Interactive high-fidelity mobile prototype covering Resident and Provider core flows.',
      linkPlaceholder: 'https://figma.com/proto/servotix-local-services',
      availableInteractions: [
        'Resident: View Service Log and verify daily delivery entries',
        'Resident: Review Payment 3 card and execute contextual payment',
        'Provider: Add new customer and configure service parameters',
        'Provider: Review customer history and track pending balances'
      ]
    },
    learnings: [
      {
        category: 'What I Learned',
        text: 'The biggest shift in my thinking was moving from “This is a recurring payment problem” to “This is a shared-record problem between two sides of the same service relationship.”'
      },
      {
        category: 'What I Learned',
        text: 'Systemic cohesion: Service Log became connected to payment, payment became connected to service status, and provider management became part of the same system.'
      },
      {
        category: 'What I Would Test Next',
        text: 'The next useful step would be testing the Service Log, payment states, and provider workflows with actual residents and service providers.'
      },
      {
        category: 'What I Would Improve',
        text: 'Expand research with formal participant interviews and statistically representative provider field observations.'
      }
    ]
  },
  {
    id: 'invotix',
    title: 'From Creating Invoices to Managing the Journey — INVOTIX',
    tagline: 'Simplifying the journey from creating an invoice to managing its payment.',
    category: 'Invoicing & Payment Lifecycle',
    year: '2024',
    status: 'Case Study 2',
    featured: true,
    accentColor: '#3899E8',
    quickFacts: {
      role: 'UI/UX Designer',
      duration: 'UX/UI Case Study',
      projectType: 'Digital Product Design',
      tools: ['Figma', 'Paper Wireframing', 'Inter Design System'],
      keyResponsibility: 'Decision stories, from invoice creation to management, Quick & Bulk invoice flows, focused Home IA, and design system.'
    },
    overview: {
      product: 'Invotix is an invoice creation and payment-management product designed to help freelancers, small business owners, shopkeepers, and startups create, send, track, and manage invoices.',
      targetUsers: 'Freelancers, small business owners, shopkeepers, startups, and anyone needing to create and manage professional invoices without friction.',
      context: 'Invotix started with a simple idea: make invoice creation easier. Research shifted the focus from purely invoice creation toward the entire lifecycle: Create → Send → Track → Get Paid.',
      roleDescription: 'Sole UI/UX Designer responsible for exploratory research, wireframing iterations, structural decision-making, high-fidelity UI, and design system specifications.'
    },
    problem: {
      summary: 'Creating an invoice is only one part of the overall journey. Once created, invoices still need to be organized, tracked, followed up, and marked as paid.',
      coreChallenges: [
        'Scattered records and manual follow-ups across different tools.',
        'Lengthy multi-step creation flows causing form fatigue.',
        'Lack of payment lifecycle tracking (Created → Sent → Reminder 1 → Reminder 2 → Paid).'
      ]
    },
    research: {
      summary: 'Used survey research (small number of responses, exploratory), secondary research, observations, and AI-assisted exploratory inquiry.',
      methods: [
        {
          method: 'Exploratory Survey (small number of responses)',
          description: 'Surveyed small business operators and freelancers regarding manual invoicing pain points.',
          deliverable: 'Identified the need for payment tracking, reminders, and lower creation friction.'
        }
      ]
    },
    insights: [
      {
        id: 'INS-01',
        observation: 'Invoice creation is only the beginning; post-creation tracking is where operational friction peaks.',
        implication: 'Invotix must support the complete journey: Create → Send → Track → Get Paid.',
        designAction: 'Introduced dedicated Invoices management area inside Settings with lifecycle status filters.'
      }
    ],
    howMightWe: [
      'How might we simplify the process of creating, managing, and tracking invoices from creation to payment?'
    ],
    informationArchitecture: {
      description: 'Home reduced from 9 competing entry points to 3 core pillars: Invoice | Reports | Settings.',
      flowNodes: [
        {
          step: '1. Create',
          action: 'Fast Quick Invoice (4 steps) or Bulk Invoice (Max line items → Fill/Download → Upload → Preview).',
          systemResponse: 'Generates structured invoice draft or batch.'
        },
        {
          step: '2. Manage & Track',
          action: 'Access Invoices area with Draft, Paid, Unpaid, Overdue filter views.',
          systemResponse: 'Visualizes payment progression through reminder cycles.'
        }
      ]
    },
    ideation: {
      summary: 'Four major design decisions: Invoice Creation to Management, Quick Invoice grouping, Bulk Invoicing preparation, and Home focus.',
      decisions: [
        {
          option: 'Dedicated Invoices Area',
          chosen: true,
          reasoning: 'Gives users a central place to view and manage invoices after creation.'
        },
        {
          option: '4-Step Quick Invoice',
          chosen: true,
          reasoning: 'Replaced 6-8 separate screens with grouped inputs for faster creation.'
        }
      ]
    },
    wireframes: {
      summary: 'Iterated through wireframes across Home, creation, bulk invoicing, and template preferences.',
      iterations: [
        {
          step: 'Step 1',
          title: 'Home IA Reduction',
          changes: 'Reduced 9 competing entry points to 3 core areas (Invoice | Reports | Settings).',
          rationale: 'Clarified primary actions on landing.',
          learning: 'More features do not automatically create a better product.'
        }
      ]
    },
    finalUI: {
      summary: 'Clean, high-craft UI built with Inter typography and #3899E8 primary blue palette.',
      screens: [
        {
          title: 'Invotix Home & Invoices Area',
          description: 'Focused 3-pillar dashboard and dedicated invoice lifecycle status manager.',
          keyDecisions: [
            'Direct access to Quick and Bulk creation.',
            'Lifecycle progression tracking from Sent to Paid.'
          ],
          mockupType: 'mobile-finance'
        }
      ]
    },
    prototype: {
      description: 'Interactive high-fidelity prototype covering Quick Invoice, Bulk Invoice, and Invoice Management.',
      linkPlaceholder: 'https://figma.com/proto/invotix-case-study',
      availableInteractions: [
        'Create Quick Invoice in 4 grouped steps',
        'Upload & validate Bulk Invoice spreadsheet',
        'Track invoice payment progression across reminder states',
        'Customize brand color and typography preferences'
      ]
    },
    learnings: [
      {
        category: 'What I Learned',
        text: 'More features do not automatically create a better product. Wireframing helped solve product structure before investing in visual design.'
      },
      {
        category: 'What I Learned',
        text: 'The problem expanded from invoice creation toward the broader invoice journey: Create → Send → Track → Get Paid.'
      }
    ]
  },
];

export const capabilities: CapabilityGroup[] = [
  {
    name: 'Research & Problem Understanding',
    description: 'Understanding users, their workflows, and the problems behind a product before moving into design.',
    skills: [
      'Secondary Research',
      'User Interviews',
      'User Surveys',
      'User Observation',
      'Competitor Analysis',
      'Heuristic Evaluation',
      'Pain-Point Analysis',
      'Research Synthesis'
    ]
  },
  {
    name: 'Product & Interaction Design',
    description: 'Structuring information and user flows to make complex tasks easier to understand and complete.',
    skills: [
      'Information Architecture',
      'User Flows',
      'Task Flows',
      'Journey Mapping',
      'Wireframing',
      'Interaction Design',
      'Low-Fidelity Prototyping',
      'Rapid Prototyping',
      'Edge Cases & States'
    ]
  },
  {
    name: 'UI & Visual Design',
    description: 'Creating clear and consistent interfaces through visual hierarchy, typography, spacing, color, layout, and reusable components.',
    skills: [
      'Visual Hierarchy',
      'Typography',
      'Color & Contrast',
      'Spacing & Layout',
      'Responsive UI',
      'Figma Components',
      'Auto Layout',
      'Design Systems & UI Documentation'
    ]
  }
];

export const credibilityList: CredibilityItem[] = [
  {
    period: 'Nov 2025 — Apr 2026',
    role: 'UI/UX Developer Intern',
    organization: 'Techventive IT Solutions Pvt. Ltd.',
    type: 'Work Experience',
    summary:
      'Contributed to UI/UX across several projects, helping improve interfaces and user experiences while gaining hands-on experience with real product workflows and collaborative design processes.'
  },
  {
    period: '2022 — 2025',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Uttaranchal University',
    type: 'Education',
    summary:
      'Built a foundation in computer applications and digital technologies, with coursework including DBMS, web development, and programming, while developing a focused interest in UI/UX and product design.'
  },
  {
    period: '2026',
    role: 'UX Design',
    organization: 'IBM SkillsBuild',
    type: 'Credential',
    summary:
      'Completed UX-focused learning through IBM SkillsBuild, strengthening my understanding of user-centered design, design thinking, and the UX design process.',
    credentialUrl: 'https://www.credly.com/badges/d4dd46ae-8da3-4970-9993-4e5f589b1153/public_url'
  }
];
