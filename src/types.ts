export interface CaseStudyQuickFacts {
  role: string;
  duration: string;
  projectType: string;
  tools: string[];
  keyResponsibility: string;
}

export interface ResearchMethod {
  method: string;
  description: string;
  deliverable: string;
}

export interface InsightItem {
  id: string;
  observation: string;
  implication: string;
  designAction: string;
}

export interface WireframeIteration {
  step: string;
  title: string;
  changes: string;
  rationale: string;
  learning: string;
}

export interface LearningItem {
  category: 'What I Learned' | 'What I Would Improve' | 'What I Would Test Next' | 'What I Would Do Differently';
  text: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: string;
  featured: boolean;
  accentColor: string;
  
  // Header / Quick Scan
  quickFacts: CaseStudyQuickFacts;
  
  // Overview
  overview: {
    product: string;
    targetUsers: string;
    context: string;
    roleDescription: string;
  };
  
  // Problem
  problem: {
    summary: string;
    coreChallenges: string[];
  };
  
  // Research
  research: {
    summary: string;
    methods: ResearchMethod[];
  };
  
  // Insights
  insights: InsightItem[];
  
  // HMW Problem Framing
  howMightWe: string[];
  
  // IA and User Flows
  informationArchitecture: {
    description: string;
    flowNodes: { step: string; action: string; systemResponse: string }[];
  };
  
  // Ideation
  ideation: {
    summary: string;
    decisions: { option: string; chosen: boolean; reasoning: string }[];
  };
  
  // Wireframes
  wireframes: {
    summary: string;
    iterations: WireframeIteration[];
  };
  
  // Final UI
  finalUI: {
    summary: string;
    screens: {
      title: string;
      description: string;
      keyDecisions: string[];
      mockupType: 'desktop-dashboard' | 'mobile-finance' | 'design-tokens';
    }[];
  };
  
  // Prototype
  prototype: {
    description: string;
    linkPlaceholder?: string;
    availableInteractions: string[];
  };
  
  // Honest Learnings & Next Steps
  learnings: LearningItem[];
}

export interface CapabilityGroup {
  name: string;
  description: string;
  skills: string[];
}

export interface CredibilityItem {
  period: string;
  role: string;
  organization: string;
  type: 'Work Experience' | 'Education' | 'Certification' | 'Credential';
  summary: string;
  credentialUrl?: string;
}

export interface DesignerProfile {
  name: string;
  title: string;
  availability: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl?: string;
  figmaUrl?: string;
  heroHeadline: string;
  valueProposition: string;
  aboutShort: string;
  aboutFull: string[];
  designPhilosophy: { title: string; description: string }[];
  tools: { category: string; items: string[] }[];
}
