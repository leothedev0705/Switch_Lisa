export type RoleView = 'talent' | 'business';

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

export interface Challenge {
  id: string;
  category: string;
  title: string;
  instruction: string;
  initialTimer: string; // e.g. "28:43"
  clips: ChallengeClip[];
}

export interface AIAnalysisResult {
  title: string;
  skillName: string;
  scores: {
    Storytelling: number;
    Timing: number;
    Creativity: number;
    VisualQuality: number;
  };
  finalScore: number;
  status: 'VERIFIED' | 'PENDING' | 'REJECTED';
  validUntil: string;
  feedbackText: string;
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
  matchScore: number;
  skills: {
    Editing: number;
    Creativity: number;
    SocialMedia: number;
  };
  projects: number;
  rating: number;
  recentWorkTitle: string;
  switchScore: number;
}

export interface ProjectRequirement {
  prompt: string;
  convertedThresholds: {
    Editing: number;
    Creativity: number;
    SocialMedia: number;
  };
  budget: string;
  duration: string;
}
