import { Profile, Challenge, AIAnalysisResult, Candidate, ProjectRequirement, SkillCategoryType, UserAccount } from '../types';

export const PROFILES_BY_ID: Record<string, Profile> = {
  tanmayee_01: {
    id: 'tanmayee_01',
    name: 'TANMAYEE P.',
    title: 'Short-Form Video & Visual Content Creator',
    education: 'BBA • Mumbai',
    location: 'Mumbai, MH',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    switchScore: 87,
    xp: 3420,
    xpLevel: 'Advanced',
    nextLevelXp: 5000,
    skills: [
      {
        id: 's1',
        name: 'Video Editing',
        category: 'Media Production',
        score: 91,
        verified: true,
        growth: [72, 78, 84, 91],
        lastUpdated: '2 days ago',
        evidenceCount: 12,
      },
      {
        id: 's2',
        name: 'Reel Pacing & Beat Sync',
        category: 'Media',
        score: 88,
        verified: true,
        growth: [70, 78, 88],
        lastUpdated: '1 week ago',
        evidenceCount: 8,
      },
      {
        id: 's3',
        name: 'Social Media Strategy',
        category: 'Growth & Strategy',
        score: 89,
        verified: true,
        growth: [81, 85, 89],
        lastUpdated: '3 days ago',
        evidenceCount: 10,
      }
    ],
    projectsCompleted: 12,
    clientRating: 4.9,
    totalEarnings: '₹48,500',
    blindCandidateId: 'CANDIDATE #024',
    stackName: '🔥 CONTENT CREATOR',
    stackDescription: 'Highly suited for high-retention short-form video & viral Reels campaigns.',
    badges: [
      { id: 'b1', name: 'Deadline Machine', icon: '🏆', condition: 'Completed 10 projects on time', unlockedAt: 'Oct 2026', isNew: true },
      { id: 'b2', name: 'Top Creator', icon: '🎨', condition: '90+ creativity score achieved', unlockedAt: 'Sep 2026' },
      { id: 'b3', name: 'Client Favourite', icon: '⭐', condition: '95%+ client satisfaction rating', unlockedAt: 'Aug 2026' }
    ]
  },
  rohan_01: {
    id: 'rohan_01',
    name: 'ROHAN MEHTA',
    title: 'Brand Identity & Logo Specialist',
    education: 'B.Des • National Institute of Design',
    location: 'Bengaluru, KA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    switchScore: 95,
    xp: 4850,
    xpLevel: 'Expert',
    nextLevelXp: 6000,
    skills: [
      {
        id: 's_logo_1',
        name: 'Logo & Brand Design',
        category: 'Visual Design',
        score: 95,
        verified: true,
        growth: [80, 88, 92, 95],
        lastUpdated: 'Yesterday',
        evidenceCount: 24,
      },
      {
        id: 's_logo_2',
        name: 'Vector Art Geometry',
        category: 'Vector Art',
        score: 96,
        verified: true,
        growth: [85, 90, 96],
        lastUpdated: '3 days ago',
        evidenceCount: 18,
      },
      {
        id: 's_logo_3',
        name: 'Typography & Guidelines',
        category: 'Branding',
        score: 92,
        verified: true,
        growth: [78, 86, 92],
        lastUpdated: '5 days ago',
        evidenceCount: 15,
      }
    ],
    projectsCompleted: 24,
    clientRating: 4.95,
    totalEarnings: '₹1,24,000',
    blindCandidateId: 'CANDIDATE #091',
    stackName: '🎨 BRAND DESIGNER',
    stackDescription: 'Specialized in minimalist vector logos, emblem marks, brand guidelines, and dark theme visual identity.',
    badges: [
      { id: 'b_logo1', name: 'Vector Master', icon: '🎨', condition: '95+ vector precision score', unlockedAt: 'Sep 2026', isNew: true },
      { id: 'b_logo2', name: 'Brand Legend', icon: '💎', condition: 'Completed 20 brand identity packages', unlockedAt: 'Aug 2026' }
    ]
  },
  devansh_01: {
    id: 'devansh_01',
    name: 'DEVANSH GUPTA',
    title: 'Fullstack & Web Builder Specialist',
    education: 'B.Tech CS • IIT Bombay',
    location: 'Delhi, DL',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    switchScore: 96,
    xp: 5120,
    xpLevel: 'Expert',
    nextLevelXp: 6500,
    skills: [
      {
        id: 's_web_1',
        name: 'Website Building & Webflow',
        category: 'Web Development',
        score: 96,
        verified: true,
        growth: [82, 90, 96],
        lastUpdated: 'Today',
        evidenceCount: 31,
      },
      {
        id: 's_web_2',
        name: 'Responsive UI Layout Math',
        category: 'Frontend CSS',
        score: 97,
        verified: true,
        growth: [88, 93, 97],
        lastUpdated: '2 days ago',
        evidenceCount: 28,
      },
      {
        id: 's_web_3',
        name: 'React & Tailwind Component UI',
        category: 'Frontend Engineering',
        score: 95,
        verified: true,
        growth: [80, 89, 95],
        lastUpdated: '4 days ago',
        evidenceCount: 22,
      }
    ],
    projectsCompleted: 31,
    clientRating: 4.98,
    totalEarnings: '₹2,10,000',
    blindCandidateId: 'CANDIDATE #104',
    stackName: '💻 LANDING PAGE CREATOR',
    stackDescription: 'Expert in high-converting landing pages, fast React storefronts, and dark mode UI systems.',
    badges: [
      { id: 'b_web1', name: 'Speed Demon', icon: '⚡', condition: 'Sub-second web performance load score', unlockedAt: 'Oct 2026', isNew: true },
      { id: 'b_web2', name: 'Fullstack Pro', icon: '💻', condition: 'Built 30 responsive web portals', unlockedAt: 'Aug 2026' }
    ]
  }
};

export const INITIAL_PROFILE: Profile = PROFILES_BY_ID.tanmayee_01;

// Helper function to return user profile consistent with account
export function getProfileForAccount(account: UserAccount | null): Profile {
  if (!account) return PROFILES_BY_ID.tanmayee_01;

  if (account.name.toLowerCase().includes('rohan')) {
    return PROFILES_BY_ID.rohan_01;
  } else if (account.name.toLowerCase().includes('devansh')) {
    return PROFILES_BY_ID.devansh_01;
  } else if (account.role === 'business') {
    return {
      id: 'biz_alex_01',
      name: account.name || 'ALEX RIVERA',
      title: account.title || 'VP of Digital Experience',
      education: 'MBA • TechStudio Global',
      location: 'San Francisco, CA',
      avatar: account.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      switchScore: 98,
      xp: 6000,
      xpLevel: 'Expert',
      nextLevelXp: 7000,
      skills: [
        { id: 's_biz_1', name: 'Talent Hiring & Briefing', category: 'Management', score: 98, verified: true, growth: [90, 98], lastUpdated: 'Today', evidenceCount: 45 }
      ],
      projectsCompleted: 45,
      clientRating: 5.0,
      totalEarnings: '₹5,00,000 Spent',
      blindCandidateId: 'BUSINESS #001',
      stackName: '🏢 BUSINESS HIRER',
      stackDescription: 'Hiring verified talent for design, web building, and marketing campaigns.',
      badges: [
        { id: 'b_biz1', name: 'Top Hirer', icon: '🏢', condition: 'Posted & funded 40+ verified contracts', unlockedAt: 'Oct 2026', isNew: true }
      ]
    };
  }

  return PROFILES_BY_ID.tanmayee_01;
}

// MULTI-SKILL CHALLENGES (Website Building, Logo Design, Video Editing, Copywriting, Social Media)
export const MULTI_SKILL_CHALLENGES: Record<SkillCategoryType, Challenge> = {
  video_editing: {
    id: 'c_video_01',
    category: 'VIDEO EDITING',
    categoryType: 'video_editing',
    title: '30-Minute Video Reel Challenge',
    instruction: 'Assemble a 15-second high-engagement Instagram Reel from raw cafe clips with beat matching and storytelling transitions.',
    initialTimer: '28:43',
    clips: [
      {
        id: 'clip_1',
        title: 'Espresso Pour Slow-Mo',
        duration: '04.2s',
        thumbnail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=300',
        tags: ['Cinematic', 'Liquid', 'B-Roll']
      },
      {
        id: 'clip_2',
        title: 'Neon Sign & Ambience',
        duration: '03.8s',
        thumbnail: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=300',
        tags: ['Vibe', 'Neon', 'Lighting']
      },
      {
        id: 'clip_3',
        title: 'Barista Latte Art',
        duration: '05.1s',
        thumbnail: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=300',
        tags: ['Focus', 'Skill', 'Macro']
      },
      {
        id: 'clip_4',
        title: 'Pastry Display Counter',
        duration: '03.5s',
        thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300',
        tags: ['Food', 'Color', 'Detail']
      },
      {
        id: 'clip_5',
        title: 'Customer First Sip Smile',
        duration: '04.0s',
        thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=300',
        tags: ['Emotion', 'People', 'Reaction']
      }
    ]
  },
  website_building: {
    id: 'c_web_01',
    category: 'WEBSITE BUILDING',
    categoryType: 'website_building',
    title: '30-Minute Responsive Web Builder Challenge',
    instruction: 'Build a conversion-focused landing page layout with a dark theme hero section, feature cards, and CTA button.',
    initialTimer: '29:10',
  },
  logo_design: {
    id: 'c_logo_01',
    category: 'LOGO & BRAND DESIGN',
    categoryType: 'logo_design',
    title: '30-Minute Brand Identity & Logo Challenge',
    instruction: 'Design a minimalist high-contrast logo vector concept for a futuristic tech brand with color palette guidelines.',
    initialTimer: '27:50',
  },
  copywriting: {
    id: 'c_copy_01',
    category: 'COPYWRITING & AD HOOKS',
    categoryType: 'copywriting',
    title: '30-Minute Conversion Copy Challenge',
    instruction: 'Write 3 viral hook variations, product positioning statements, and a high-converting call to action.',
    initialTimer: '26:15',
  },
  social_media: {
    id: 'c_social_01',
    category: 'SOCIAL MEDIA STRATEGY',
    categoryType: 'social_media',
    title: '30-Minute Carousel & Growth Challenge',
    instruction: 'Design a 5-slide educational Instagram carousel with copy hooks and engagement triggers.',
    initialTimer: '28:00',
  }
};

export const MOCK_CHALLENGE = MULTI_SKILL_CHALLENGES.video_editing;

export const MOCK_AI_ANALYSIS_MAP: Record<SkillCategoryType, AIAnalysisResult> = {
  video_editing: {
    title: 'AI VIDEO SKILL ASSESSMENT REPORT',
    skillName: 'Video Editing & Reel Assembly',
    scores: {
      Storytelling: 91,
      Timing: 87,
      Creativity: 94,
      VisualQuality: 89,
    },
    finalScore: 91,
    status: 'VERIFIED',
    validUntil: 'March 2027',
    feedbackText: 'Outstanding fast-paced rhythm matching beats. Strong visual continuity between Macro Pour and Customer Emotion.',
    metrics: [
      { label: 'Storytelling Retention', score: 91 },
      { label: 'Pacing & Beat Timing', score: 87 },
      { label: 'Creativity & Transition', score: 94 },
      { label: 'Visual Color Grading', score: 89 }
    ]
  },
  website_building: {
    title: 'AI WEBSITE BUILDING ASSESSMENT REPORT',
    skillName: 'Website Building & UI Frontend',
    scores: {
      Responsiveness: 95,
      Performance: 92,
      UIPolish: 93,
      Accessibility: 88,
    },
    finalScore: 93,
    status: 'VERIFIED',
    validUntil: 'March 2027',
    feedbackText: 'Exceptional clean CSS layout math, mobile viewport scaling, and high-converting CTA positioning.',
    metrics: [
      { label: 'Responsive Layout Scaling', score: 95 },
      { label: 'DOM Performance & Speed', score: 92 },
      { label: 'UI Polish & Typography', score: 93 },
      { label: 'Accessibility & Contrast', score: 88 }
    ]
  },
  logo_design: {
    title: 'AI LOGO DESIGN ASSESSMENT REPORT',
    skillName: 'Logo & Brand Identity Design',
    scores: {
      VectorPrecision: 96,
      BrandIdentity: 92,
      ColorHarmony: 94,
      Scalability: 90,
    },
    finalScore: 93,
    status: 'VERIFIED',
    validUntil: 'March 2027',
    feedbackText: 'Flawless geometry alignment, strong contrast ratios for dark theme rendering, and instantly recognizable mark.',
    metrics: [
      { label: 'Vector Geometry Precision', score: 96 },
      { label: 'Brand Identity Concept', score: 92 },
      { label: 'Color Contrast & Harmony', score: 94 },
      { label: 'Icon Scalability (Favicon to Billboard)', score: 90 }
    ]
  },
  copywriting: {
    title: 'AI COPYWRITING ASSESSMENT REPORT',
    skillName: 'Conversion Copywriting & Ad Hooks',
    scores: {
      HookStrength: 94,
      Clarity: 91,
      Persuasion: 93,
      SEOOptimization: 89,
    },
    finalScore: 92,
    status: 'VERIFIED',
    validUntil: 'March 2027',
    feedbackText: 'High click-through probability hooks with emotional resonance and concise value proposition phrasing.',
    metrics: [
      { label: '3-Second Hook Retention', score: 94 },
      { label: 'Message Clarity', score: 91 },
      { label: 'CTA Persuasion Rating', score: 93 },
      { label: 'Keyword Relevance', score: 89 }
    ]
  },
  social_media: {
    title: 'AI SOCIAL MEDIA STRATEGY REPORT',
    skillName: 'Social Growth & Carousel Strategy',
    scores: {
      EngagementRate: 92,
      VisualHierarchy: 90,
      AudienceMatch: 93,
      ViralPotential: 88,
    },
    finalScore: 91,
    status: 'VERIFIED',
    validUntil: 'March 2027',
    feedbackText: 'Strong slide-by-slide swipe retention strategy with high save & share trigger calls.',
    metrics: [
      { label: 'Swipe-Through Retention', score: 92 },
      { label: 'Visual Hierarchy', score: 90 },
      { label: 'Audience Targeting', score: 93 },
      { label: 'Viral Share Score', score: 88 }
    ]
  }
};

export const MOCK_AI_ANALYSIS: AIAnalysisResult = MOCK_AI_ANALYSIS_MAP.video_editing;

// EXPANDED MULTI-CATEGORY CANDIDATE DATABASE
export const ALL_CANDIDATES: Candidate[] = [
  // --- LOGO & BRAND DESIGNERS ---
  {
    id: 'cand_logo_1',
    label: 'Candidate A (Logo Specialist)',
    name: 'Rohan Mehta',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    categoryType: 'logo_design',
    primarySkillName: 'Logo & Brand Design',
    matchScore: 96,
    skills: {
      Primary: 95,
      Creativity: 96,
      Execution: 94,
      Branding: 96,
      VectorArt: 95,
      Typography: 92,
    },
    projects: 24,
    rating: 4.95,
    recentWorkTitle: 'Minimalist Vector Logo & Brand Identity for SaaS Fintech',
    recentWorkThumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400',
    switchScore: 95,
    portfolioSamples: [
      { title: 'SWITCH Monogram Logo', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400', type: 'Logo Vector' },
      { title: 'Apex AI Brand Guidelines & Typography', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400', type: 'Brand Kit' },
      { title: 'Velvet Cafe Emblem Logo', image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=400', type: 'Emblem Logo' },
    ]
  },
  {
    id: 'cand_logo_2',
    label: 'Candidate B (Brand Designer)',
    name: 'Priya Verma',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    categoryType: 'logo_design',
    primarySkillName: 'Logo & Brand Design',
    matchScore: 92,
    skills: {
      Primary: 91,
      Creativity: 94,
      Execution: 90,
      Branding: 92,
      VectorArt: 90,
      Typography: 91,
    },
    projects: 19,
    rating: 4.88,
    recentWorkTitle: 'Luxury Boutique Brand Kit & Custom Lettermark Logo',
    recentWorkThumbnail: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=400',
    switchScore: 91,
    portfolioSamples: [
      { title: 'Luminary Jewelry Logo Mark', image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=400', type: 'Logo Vector' },
      { title: 'EcoLeaf Packaging Logo System', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400', type: 'Packaging Logo' },
    ]
  },

  // --- WEBSITE BUILDERS & DEVELOPERS ---
  {
    id: 'cand_web_1',
    label: 'Candidate A (Web Builder)',
    name: 'Devansh Gupta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    categoryType: 'website_building',
    primarySkillName: 'Website Building & Webflow',
    matchScore: 97,
    skills: {
      Primary: 96,
      Creativity: 92,
      Execution: 98,
      WebBuilding: 96,
      ReactTailwind: 97,
      ResponsiveDesign: 95,
    },
    projects: 31,
    rating: 4.98,
    recentWorkTitle: 'High-Converting Webflow Landing Page & Dark UI System',
    recentWorkThumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
    switchScore: 96,
    portfolioSamples: [
      { title: 'SaaS Launchpad Responsive Portal', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400', type: 'Landing Page' },
      { title: 'Crypto Wallet Dark Mode Web UI', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400', type: 'Dashboard' },
      { title: 'E-commerce React Storefront', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400', type: 'Web App' },
    ]
  },
  {
    id: 'cand_web_2',
    label: 'Candidate B (Frontend Dev)',
    name: 'Neha Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    categoryType: 'website_building',
    primarySkillName: 'Website Building & Webflow',
    matchScore: 91,
    skills: {
      Primary: 90,
      Creativity: 91,
      Execution: 92,
      WebBuilding: 90,
      ReactTailwind: 91,
      ResponsiveDesign: 93,
    },
    projects: 16,
    rating: 4.85,
    recentWorkTitle: 'Responsive Agency Portfolio & Interactive Motion Site',
    recentWorkThumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
    switchScore: 90,
    portfolioSamples: [
      { title: 'Design Agency Splash Site', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400', type: 'Portfolio Website' },
    ]
  },

  // --- VIDEO EDITORS ---
  {
    id: 'cand_a',
    label: 'Candidate A (Video Editor)',
    name: 'Tanmayee P.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    categoryType: 'video_editing',
    primarySkillName: 'Video Editing',
    matchScore: 95,
    skills: {
      Primary: 96,
      Creativity: 91,
      Execution: 94,
      Editing: 96,
      SocialMedia: 94,
    },
    projects: 18,
    rating: 4.9,
    recentWorkTitle: 'Gen-Z Cafe Reels Campaign (3.4M Views)',
    recentWorkThumbnail: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400',
    switchScore: 91,
    portfolioSamples: [
      { title: 'Cafe Mocha Slow-Mo Reel', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400', type: 'Instagram Reel' },
      { title: 'Streetwear Commercial Edit', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400', type: 'Ad Video' }
    ]
  },
  {
    id: 'cand_b',
    label: 'Candidate B (Video Editor)',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    categoryType: 'video_editing',
    primarySkillName: 'Video Editing',
    matchScore: 91,
    skills: {
      Primary: 92,
      Creativity: 89,
      Execution: 91,
      Editing: 92,
      SocialMedia: 91,
    },
    projects: 14,
    rating: 4.8,
    recentWorkTitle: 'Streetwear Launch Promo Video Cut',
    recentWorkThumbnail: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400',
    switchScore: 88,
    portfolioSamples: [
      { title: 'Sneaker Launch Beat Sync Cut', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400', type: 'Promo Video' }
    ]
  }
];

export const MOCK_CANDIDATES: Candidate[] = ALL_CANDIDATES.filter(c => c.categoryType === 'video_editing');

// RELEVANCE SEARCH FUNCTION FOR MARKETPLACE
export function searchCandidates(query: string): { candidates: Candidate[]; detectedCategory: SkillCategoryType; primarySkillName: string } {
  const q = (query || '').toLowerCase();

  let detectedCategory: SkillCategoryType = 'video_editing';
  let primarySkillName = 'Video Editing';

  if (q.includes('logo') || q.includes('brand') || q.includes('design') || q.includes('graphic') || q.includes('icon') || q.includes('vector')) {
    detectedCategory = 'logo_design';
    primarySkillName = 'Logo & Brand Design';
  } else if (q.includes('web') || q.includes('site') || q.includes('build') || q.includes('developer') || q.includes('frontend') || q.includes('landing') || q.includes('webflow') || q.includes('code')) {
    detectedCategory = 'website_building';
    primarySkillName = 'Website Building & UI';
  } else if (q.includes('copy') || q.includes('write') || q.includes('text') || q.includes('script') || q.includes('headline') || q.includes('content')) {
    detectedCategory = 'copywriting';
    primarySkillName = 'Conversion Copywriting';
  } else if (q.includes('social') || q.includes('instagram') || q.includes('strategy') || q.includes('post') || q.includes('growth')) {
    detectedCategory = 'social_media';
    primarySkillName = 'Social Media Strategy';
  } else {
    detectedCategory = 'video_editing';
    primarySkillName = 'Video Editing & Reels';
  }

  // Filter candidates matching category
  let matched = ALL_CANDIDATES.filter(c => c.categoryType === detectedCategory);

  if (matched.length === 0) {
    matched = ALL_CANDIDATES;
  }

  return {
    candidates: matched,
    detectedCategory,
    primarySkillName,
  };
}

export const MOCK_DEFAULT_REQUIREMENT: ProjectRequirement = {
  prompt: 'I need a sleek modern logo design and story template for a luxury cafe brand.',
  categoryType: 'logo_design',
  convertedThresholds: {
    PrimarySkill: 88,
    Creativity: 85,
    Execution: 80,
  },
  primarySkillName: 'Logo & Brand Design',
  budget: '₹4,500',
  duration: '48 Hours',
};

export const PERFECT_SWITCH_RECOMMENDATIONS = [
  {
    id: 'ps1',
    project: 'Design Minimalist Logo & Brand Identity Package',
    client: 'Sublime Coffee Co.',
    budget: '₹4,500',
    match: '96%',
    tag: 'Top Recommended',
    skillRequired: 'Logo Design 85+'
  },
  {
    id: 'ps2',
    project: 'Build Responsive Landing Page in React/Webflow',
    client: 'Fintech Spark Ltd',
    budget: '₹8,000',
    match: '94%',
    tag: 'High Budget',
    skillRequired: 'Website Building 88+'
  },
  {
    id: 'ps3',
    project: 'Edit 3 High-Energy Instagram Reels',
    client: 'Bake & Brew Mumbai',
    budget: '₹3,500',
    match: '91%',
    tag: 'Fast Payout',
    skillRequired: 'Video Editing 85+'
  }
];

export const SKILL_STACK_PRESETS = [
  {
    title: 'Brand & Logo Designer',
    skills: ['Logo Design 92', 'Brand Identity 90', 'Typography 86'],
    badge: '🎨 LOGO & BRAND DESIGNER',
    description: 'Perfect for visual identity, emblem logos, color palettes & vector branding.'
  },
  {
    title: 'Landing Page & Web Builder',
    skills: ['Website Building 94', 'Responsive UI 92', 'CSS/Webflow 88'],
    badge: '💻 LANDING PAGE CREATOR',
    description: 'Ideal for conversion-focused marketing splash pages & web applications.'
  },
  {
    title: 'Short-Form Video Creator',
    skills: ['Video Editing 91', 'Beat Sync 88', 'Social Media 85'],
    badge: '🔥 CONTENT CREATOR',
    description: 'Highly suited for short-form content creation & viral Instagram Reels.'
  }
];
