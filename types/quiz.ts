// クイズの種類
export type QuizCategory = 'deep-learning' | 'llm';

// クイズの難易度
export type QuizDifficulty = 'beginner' | 'intermediate' | 'advanced';

// 問題の種類
export type QuestionType = 'multiple-choice' | 'text' | 'true-false';

// 問題の選択肢
export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

// 個別の問題
export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: QuizOption[];
  correctAnswer?: string;
  explanation: string;
  difficulty: QuizDifficulty;
}

// 論文情報
export interface PaperInfo {
  title: string;
  authors: string[];
  year: number;
  arxivId?: string;
  arxivUrl?: string;
  pdfUrl?: string;
  abstract: string;
}

// クイズセット
export interface Quiz {
  id: string;
  category: QuizCategory;
  paper: PaperInfo;
  questions: QuizQuestion[];
  difficulty: QuizDifficulty;
  estimatedTime: number; // 分
  createdAt: string;
  updatedAt: string;
}

// ユーザーの回答
export interface UserAnswer {
  questionId: string;
  answer: string;
  isCorrect: boolean;
  answeredAt: string;
}

// クイズ結果
export interface QuizResult {
  quizId: string;
  userId?: string;
  answers: UserAnswer[];
  score: number;
  totalQuestions: number;
  completedAt: string;
  timeTaken: number; // 秒
}

// 認定バッジ
export interface Badge {
  id: string;
  name: string;
  description: string;
  category: QuizCategory;
  iconUrl: string;
  requirements: {
    minScore: number;
    requiredQuizzes: string[];
  };
  earnedAt?: string;
}

// ユーザープロフィール
export interface UserProfile {
  id: string;
  name?: string;
  email?: string;
  badges: Badge[];
  quizResults: QuizResult[];
  createdAt: string;
  lastActiveAt: string;
}
