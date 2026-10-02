export type RoleView = 'talent' | 'business';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: RoleView;
  avatar: string;
  title: string;
  switchScore?: number;
  companyName?: string;
}

export interface VerifiedSkill {
  id: string;
  name: string;
  category: string;
  score: number;
  verified: boolean;
  growth: number[];
  lastUpdated: string;
  evidenceCount: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  condition: string;
  unlockedAt?: string;
  isNew?: boolean;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  education: string;
  location: string;
  avatar: string;
  switchScore: number;
  xp: number;
  xpLevel: 'Beginner' | 'Capable' | 'Verified' | 'Advanced' | 'Expert';
  nextLevelXp: number;
  skills: VerifiedSkill[];
  projectsCompleted: number;
  clientRating: number;
  totalEarnings: string;
  badges: Badge[];
  stackName: string;
  stackDescription: string;
  blindCandidateId: string;
}

export interface ChallengeClip {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  tags: string[];
}

export type SkillCategoryType = 'video_editing' | 'website_building' | 'logo_design' | 'copywriting' | 'social_media';

export interface Challenge {
  id: string;
  category: string;
  categoryType: SkillCategoryType;
  title: string;
  instruction: string;
  initialTimer: string; // e.g. "28:43"
  clips?: ChallengeClip[];
}

export interface AIAnalysisResult {
  title: string;
  skillName: string;
  scores: Record<string, number>;
  finalScore: number;
  status: 'VERIFIED' | 'PENDING' | 'REJECTED';
  validUntil: string;
  feedbackText: string;
  metrics?: { label: string; score: number }[];
}

export interface ProofEvidence {
  skillName: string;
  score: number;
  challengeResult: string;
  portfolioCount: number;
  clientReviewsScore: string;
  completedProjectsCount: number;
  breakdown: {
    label: string;
    score: number;
    color: string;
  }[];
  verifiedDate: string;
  validUntil: string;
}

export interface Candidate {
  id: string;
  label: string;
  name: string;
  avatar: string;
  categoryType: SkillCategoryType;
  matchScore: number;
  skills: {
    Primary: number;
    Creativity: number;
    Execution: number;
    [key: string]: number;
  };
  primarySkillName: string;
  projects: number;
  rating: number;
  recentWorkTitle: string;
  recentWorkThumbnail?: string;
  switchScore: number;
  portfolioSamples: { title: string; image: string; type: string }[];
}

export interface ProjectRequirement {
  prompt: string;
  categoryType: SkillCategoryType;
  convertedThresholds: {
    PrimarySkill: number;
    Creativity: number;
    Execution: number;
    [key: string]: number;
  };
  primarySkillName: string;
  budget: string;
  duration: string;
}

