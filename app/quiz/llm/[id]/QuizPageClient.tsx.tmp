'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import QuizCard from '@/components/quiz/QuizCard'
import type { Quiz, UserAnswer, QuizResult } from '@/types/quiz'

export default function QuizPageClient() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<UserAnswer[]>([])
  const [startTime] = useState(Date.now())
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const basePath = process.env.NODE_ENV === 'production'
          ? '/AI-Development-Frontier-Exam'
          : ''

        const response = await fetch(`${basePath}/quizzes/deep-learning/${id}.json`)
        if (response.ok) {
          const data = await response.json()
          setQuiz(data)
        }
      } catch (error) {
        console.error('Error loading quiz:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchQuiz()
  }, [id])

  const handleAnswer = (answer: string, isCorrect: boolean) => {
    if (!quiz) return

    const userAnswer: UserAnswer = {
      questionId: quiz.questions[currentQuestionIndex].id,
      answer,
      isCorrect,
      answeredAt: new Date().toISOString(),
    }

    const newAnswers = [...answers, userAnswer]
    setAnswers(newAnswers)

    // 次の質問へ
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // クイズ完了
      completeQuiz(newAnswers)
    }
  }

  const completeQuiz = (finalAnswers: UserAnswer[]) => {
    if (!quiz) return

    const score = (finalAnswers.filter(a => a.isCorrect).length / quiz.questions.length) * 100
    const timeTaken = Math.floor((Date.now() - startTime) / 1000)

    const result: QuizResult = {
      quizId: quiz.id,
      answers: finalAnswers,
      score,
      totalQuestions: quiz.questions.length,
      completedAt: new Date().toISOString(),
      timeTaken,
    }

    // LocalStorageに保存
    saveQuizResult(result)
    setIsCompleted(true)
  }

  const saveQuizResult = (result: QuizResult) => {
    try {
      const existingResults = localStorage.getItem('quizResults')
      const results = existingResults ? JSON.parse(existingResults) : []
      results.push(result)
      localStorage.setItem('quizResults', JSON.stringify(results))
    } catch (error) {
      console.error('Error saving quiz result:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">読み込み中...</div>
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-4">クイズが見つかりません</h1>
        <p className="text-gray-600 mb-8">指定されたクイズが存在しません。</p>
        <button
          onClick={() => router.push('/quiz/deep-learning')}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
        >
          クイズ一覧に戻る
        </button>
      </div>
    )
  }

  if (isCompleted) {
    const correctAnswers = answers.filter(a => a.isCorrect).length
    const score = Math.round((correctAnswers / quiz.questions.length) * 100)
    const timeTaken = Math.floor((Date.now() - startTime) / 1000)
    const minutes = Math.floor(timeTaken / 60)
    const seconds = timeTaken % 60

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">クイズ完了！</h1>

          <div className="mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-primary-600 mb-2">
                {score}%
              </div>
              <div className="text-gray-600">
                {correctAnswers} / {quiz.questions.length} 問正解
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">クイズ情報</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">論文:</span> {quiz.paper.title}</p>
                <p><span className="font-semibold">所要時間:</span> {minutes}分{seconds}秒</p>
                <p><span className="font-semibold">難易度:</span> {
                  quiz.difficulty === 'beginner' ? '初級' :
                  quiz.difficulty === 'intermediate' ? '中級' : '上級'
                }</p>
              </div>
            </div>

            {score >= 70 && (
              <div className="bg-green-50 border-2 border-green-400 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">おめでとうございます！</h3>
                  <p className="text-green-700">
                    {score >= 90 ? '素晴らしい理解度です！' :
                     score >= 80 ? '良く理解できています！' :
                     '合格です！'}
                  </p>
                </div>
              </div>
            )}

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold mb-2 text-blue-900">論文を読む</h3>
              <p className="text-blue-800 mb-4 text-sm">
                さらに理解を深めるため、原著論文を読むことをお勧めします。
              </p>
              <a
                href={quiz.paper.arxivUrl || quiz.paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
              >
                原著論文を読む
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
            >
              もう一度挑戦
            </button>
            <button
              onClick={() => router.push('/quiz/deep-learning')}
              className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
            >
              クイズ一覧に戻る
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = quiz.questions[currentQuestionIndex]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{quiz.paper.title}</h1>
        <p className="text-gray-600">
          {quiz.paper.authors.join(', ')} ({quiz.paper.year})
        </p>
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
          <span>問題 {currentQuestionIndex + 1} / {quiz.questions.length}</span>
          <span>•</span>
          <a
            href={quiz.paper.arxivUrl || quiz.paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            原著論文を開く
          </a>
        </div>
      </div>

      <div className="mb-8 bg-gray-100 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{
            width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
          }}
        />
      </div>

      <QuizCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quiz.questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  )
}
