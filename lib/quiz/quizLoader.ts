import type { Quiz } from '@/types/quiz'

/**
 * クイズデータを読み込む
 */
export async function loadQuiz(category: string, id: string): Promise<Quiz | null> {
  try {
    const basePath = process.env.NODE_ENV === 'production'
      ? '/AI-Development-Frontier-Exam'
      : ''

    const response = await fetch(`${basePath}/quizzes/${category}/${id}.json`)

    if (!response.ok) {
      console.error(`Failed to load quiz: ${category}/${id}`)
      return null
    }

    const quiz: Quiz = await response.json()
    return quiz
  } catch (error) {
    console.error('Error loading quiz:', error)
    return null
  }
}

/**
 * すべてのクイズのメタデータを取得
 */
export function getAllQuizzes() {
  // 将来的にはファイルシステムから動的に取得
  // 現在は静的に定義
  return {
    'deep-learning': [
      {
        id: 'alexnet-2012',
        title: 'ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)',
        authors: ['Alex Krizhevsky', 'Ilya Sutskever', 'Geoffrey Hinton'],
        year: 2012,
        difficulty: 'intermediate' as const,
        estimatedTime: 15,
      },
    ],
    'llm': [
      {
        id: 'transformer-2017',
        title: 'Attention Is All You Need',
        authors: ['Ashish Vaswani', 'et al.'],
        year: 2017,
        difficulty: 'advanced' as const,
        estimatedTime: 30,
      },
    ],
  }
}
