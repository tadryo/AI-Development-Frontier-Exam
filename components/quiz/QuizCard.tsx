'use client'

import { useState, useEffect } from 'react'
import type { QuizQuestion } from '@/types/quiz'

interface QuizCardProps {
  question: QuizQuestion
  questionNumber: number
  totalQuestions: number
  onAnswer: (answer: string, isCorrect: boolean) => void
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [textAnswer, setTextAnswer] = useState('')

  // 問題が変わったら状態をリセット
  useEffect(() => {
    setSelectedAnswer(null)
    setShowExplanation(false)
    setTextAnswer('')
  }, [question.id])

  const handleSubmit = () => {
    if (question.type === 'multiple-choice' && selectedAnswer) {
      const option = question.options?.find((opt) => opt.id === selectedAnswer)
      if (option) {
        setShowExplanation(true)
      }
    } else if (question.type === 'text' && textAnswer.trim()) {
      setShowExplanation(true)
    }
  }

  const handleNext = () => {
    if (question.type === 'multiple-choice' && selectedAnswer) {
      const option = question.options?.find((opt) => opt.id === selectedAnswer)
      if (option) {
        onAnswer(selectedAnswer, option.isCorrect)
      }
    } else if (question.type === 'text' && textAnswer.trim()) {
      const isCorrect = textAnswer.toLowerCase().includes(question.correctAnswer?.toLowerCase() || '')
      onAnswer(textAnswer, isCorrect)
    }
  }

  const resetQuestion = () => {
    setSelectedAnswer(null)
    setShowExplanation(false)
    setTextAnswer('')
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-500">
          問題 {questionNumber} / {totalQuestions}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            question.difficulty === 'beginner'
              ? 'bg-green-100 text-green-800'
              : question.difficulty === 'intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {question.difficulty === 'beginner'
            ? '初級'
            : question.difficulty === 'intermediate'
            ? '中級'
            : '上級'}
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-6">{question.question}</h2>

      {question.type === 'multiple-choice' && question.options && (
        <div className="space-y-3 mb-6">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => !showExplanation && setSelectedAnswer(option.id)}
              disabled={showExplanation}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                showExplanation
                  ? option.isCorrect
                    ? 'border-green-500 bg-green-50'
                    : selectedAnswer === option.id
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-gray-50'
                  : selectedAnswer === option.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    showExplanation
                      ? option.isCorrect
                        ? 'border-green-500 bg-green-500'
                        : selectedAnswer === option.id
                        ? 'border-red-500 bg-red-500'
                        : 'border-gray-300'
                      : selectedAnswer === option.id
                      ? 'border-primary-500 bg-primary-500'
                      : 'border-gray-300'
                  }`}
                >
                  {showExplanation && option.isCorrect && (
                    <span className="text-white text-sm">✓</span>
                  )}
                  {showExplanation && !option.isCorrect && selectedAnswer === option.id && (
                    <span className="text-white text-sm">✗</span>
                  )}
                  {!showExplanation && selectedAnswer === option.id && (
                    <span className="text-white text-sm">●</span>
                  )}
                </div>
                <span>{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {question.type === 'text' && (
        <div className="mb-6">
          <textarea
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            disabled={showExplanation}
            placeholder="あなたの回答を入力してください"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
            rows={4}
          />
        </div>
      )}

      {showExplanation && (
        <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <h3 className="font-bold mb-2 text-blue-900">解説</h3>
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}

      <div className="flex space-x-4">
        {!showExplanation ? (
          <button
            onClick={handleSubmit}
            disabled={
              (question.type === 'multiple-choice' && !selectedAnswer) ||
              (question.type === 'text' && !textAnswer.trim())
            }
            className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            回答する
          </button>
        ) : (
          <>
            <button
              onClick={resetQuestion}
              className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              やり直す
            </button>
            <button
              onClick={handleNext}
              className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {questionNumber < totalQuestions ? '次の問題へ' : '結果を見る'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
