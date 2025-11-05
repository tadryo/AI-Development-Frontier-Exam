'use client'

import { useState } from 'react'

// サンプルバッジデータ
const badges = [
  {
    id: 'dl-beginner',
    name: 'Deep Learning 入門者',
    description: 'Deep Learningの基礎クイズを3つ以上クリア',
    category: 'deep-learning',
    icon: '🎓',
    requirements: {
      minScore: 70,
      requiredQuizzes: 3,
    },
    earned: false,
  },
  {
    id: 'dl-expert',
    name: 'Deep Learning エキスパート',
    description: 'Deep Learningの上級クイズを全てクリア',
    category: 'deep-learning',
    icon: '🏆',
    requirements: {
      minScore: 85,
      requiredQuizzes: 5,
    },
    earned: false,
  },
  {
    id: 'llm-beginner',
    name: 'LLM 入門者',
    description: 'LLMの基礎クイズを3つ以上クリア',
    category: 'llm',
    icon: '🤖',
    requirements: {
      minScore: 70,
      requiredQuizzes: 3,
    },
    earned: true,
  },
  {
    id: 'llm-expert',
    name: 'LLM エキスパート',
    description: 'LLMの上級クイズを全てクリア',
    category: 'llm',
    icon: '🌟',
    requirements: {
      minScore: 85,
      requiredQuizzes: 5,
    },
    earned: false,
  },
  {
    id: 'ai-master',
    name: 'AI マスター',
    description: 'Deep LearningとLLMの全クイズをクリア',
    category: 'all',
    icon: '👑',
    requirements: {
      minScore: 90,
      requiredQuizzes: 10,
    },
    earned: false,
  },
]

export default function BadgesPage() {
  const [filter, setFilter] = useState<'all' | 'earned' | 'not-earned'>('all')

  const filteredBadges = badges.filter((badge) => {
    if (filter === 'earned') return badge.earned
    if (filter === 'not-earned') return !badge.earned
    return true
  })

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">認定バッジ</h1>
      <p className="text-gray-600 mb-8">
        クイズに合格して認定バッジを取得しましょう。
        バッジはあなたの知識を証明します。
      </p>

      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          すべて
        </button>
        <button
          onClick={() => setFilter('earned')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'earned'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          獲得済み
        </button>
        <button
          onClick={() => setFilter('not-earned')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'not-earned'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          未獲得
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBadges.map((badge) => (
          <div
            key={badge.id}
            className={`p-6 rounded-lg shadow-md ${
              badge.earned
                ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400'
                : 'bg-white border-2 border-gray-200'
            }`}
          >
            <div className="text-6xl mb-4 text-center">{badge.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center">{badge.name}</h3>
            <p className="text-gray-600 text-sm mb-4 text-center">
              {badge.description}
            </p>

            <div className="bg-white bg-opacity-50 p-3 rounded-lg text-sm">
              <p className="mb-1">
                <span className="font-semibold">必要スコア:</span> {badge.requirements.minScore}%以上
              </p>
              <p>
                <span className="font-semibold">必要クイズ数:</span> {badge.requirements.requiredQuizzes}個
              </p>
            </div>

            {badge.earned && (
              <div className="mt-4 text-center">
                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ 獲得済み
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
