import { Profile, Challenge, AIAnalysisResult, Candidate, ProjectRequirement } from '../types';

export const INITIAL_PROFILE: Profile = {
  id: 'tanmayee_01',
  name: 'TANMAYEE',
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
      name: 'Design',
      category: 'Visual & UI',
      score: 84,
      verified: true,
      growth: [68, 74, 82, 84],
      lastUpdated: '1 week ago',
      evidenceCount: 8,
    },
    {
      id: 's3',
      name: 'Social Media',
      category: 'Growth & Strategy',
      score: 89,
      verified: true,
      growth: [81, 85, 89],
      lastUpdated: '3 days ago',
      evidenceCount: 10,
    },
    {
      id: 's4',
      name: 'Copywriting',
      category: 'Content',
      score: 82,
      verified: true,
      growth: [70, 76, 82],
      lastUpdated: '5 days ago',
      evidenceCount: 6,
    }
  ],
  projectsCompleted: 12,
  clientRating: 4.9,
  totalEarnings: '₹48,500',
  blindCandidateId: 'CANDIDATE #024',
  stackName: '🔥 CONTENT CREATOR',
  stackDescription: 'Highly suited for high-retention short-form video & brand engagement campaigns.',
  badges: [
    {
      id: 'b1',
      name: 'Deadline Machine',
      icon: '🏆',
      condition: 'Completed 10 projects on time',
      unlockedAt: 'Oct 2026',
      isNew: true,
    },
    {
      id: 'b2',
      name: 'Top Creator',
      icon: '🎨',
      condition: '90+ creativity score achieved',
      unlockedAt: 'Sep 2026',
    },
    {
      id: 'b3',
      name: 'Client Favourite',
      icon: '⭐',
      condition: '95%+ client satisfaction rating',
      unlockedAt: 'Aug 2026',
    },
    {
      id: 'b4',
      name: 'Fast Learner',
      icon: '⚡',
      condition: 'Improved a skill by 20+ points in 30 days',
      unlockedAt: 'Jul 2026',
    }
  ]
};

export const MOCK_CHALLENGE: Challenge = {
  id: 'c_video_01',
  category: 'VIDEO EDITING',
  title: '30-Minute Skill Challenge',
  instruction: 'Create a 15-second high-engagement Reel from these 5 raw clips for a luxury Gen-Z cafe.',
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
};

export const MOCK_AI_ANALYSIS: AIAnalysisResult = {
  title: 'AI SKILL ASSESSMENT REPORT',
  skillName: 'Video Editing',
  scores: {
    Storytelling: 91,
    Timing: 87,
    Creativity: 94,
    VisualQuality: 89,
  },
  finalScore: 91,
  status: 'VERIFIED',
  validUntil: 'March 2027',
  feedbackText: 'Outstanding fast-paced rhythm matching beats. Strong visual continuity between Macro Pour and Customer Emotion.'
};

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'cand_a',
    label: 'Candidate A',
    name: 'Tanmayee P.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    matchScore: 94,
    skills: {
      Editing: 96,
      Creativity: 91,
      SocialMedia: 94,
    },
    projects: 18,
    rating: 4.9,
    recentWorkTitle: 'Gen-Z Cafe Reels Campaign (3.4M Views)',
    switchScore: 91,
  },
  {
    id: 'cand_b',
    label: 'Candidate B',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    matchScore: 91,
    skills: {
      Editing: 92,
      Creativity: 89,
      SocialMedia: 91,
    },
    projects: 14,
    rating: 4.8,
    recentWorkTitle: 'Streetwear Launch Promo Video',
    switchScore: 88,
  },
  {
    id: 'cand_c',
    label: 'Candidate C',
    name: 'Riya Kulkarni',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    matchScore: 87,
    skills: {
      Editing: 89,
      Creativity: 86,
      SocialMedia: 87,
    },
    projects: 11,
    rating: 4.7,
    recentWorkTitle: 'Tech Podcast Highlight Edits',
    switchScore: 85,
  }
];

export const MOCK_DEFAULT_REQUIREMENT: ProjectRequirement = {
  prompt: 'I need someone to edit 3 Instagram Reels for a trendy cafe launch in Bandra.',
  convertedThresholds: {
    Editing: 80,
    Creativity: 75,
    SocialMedia: 70,
  },
  budget: '₹3,500',
  duration: '48 Hours',
};

export const PERFECT_SWITCH_RECOMMENDATIONS = [
  {
    id: 'ps1',
    project: 'Edit 3 High-Energy Instagram Reels',
    client: 'Sublime Coffee Co.',
    budget: '₹2,500',
    match: '94%',
    tag: 'Fast Payout',
    skillRequired: 'Video Editing 85+'
  },
  {
    id: 'ps2',
    project: 'Design Minimalist Café Menu & Story Template',
    client: 'Bake & Brew Mumbai',
    budget: '₹1,500',
    match: '89%',
    tag: 'Portfolio Builder',
    skillRequired: 'Design 80+'
  },
  {
    id: 'ps3',
    project: 'Manage Instagram & Reel Strategy for 1 Week',
    client: 'Velvet Apparel Studio',
    budget: '₹4,000',
    match: '87%',
    tag: 'Weekly Contract',
    skillRequired: 'Social Media 85+'
  }
];

export const SKILL_STACK_PRESETS = [
  {
    title: 'Content Creator',
    skills: ['Video Editing 90', 'Social Media 88', 'Copywriting 82'],
    badge: '🔥 CONTENT CREATOR',
    description: 'Highly suited for short-form content creation & viral Reels.'
  },
  {
    title: 'Brand Designer',
    skills: ['Design 88', 'Branding 85', 'Social Media 84'],
    badge: '🎨 BRAND DESIGNER',
    description: 'Perfect for visual identity, social aesthetics & menu layouts.'
  },
  {
    title: 'Landing Page Creator',
    skills: ['Web Design 86', 'Copywriting 84', 'UX Research 80'],
    badge: '💻 LANDING PAGE CREATOR',
    description: 'Ideal for conversion-focused marketing & startup splash pages.'
  }
];
