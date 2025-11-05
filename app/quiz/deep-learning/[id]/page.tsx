import QuizPageClient from './QuizPageClient'

// Static Params生成（Static Export用）
export async function generateStaticParams() {
  return [
    { id: 'alexnet-2012' },
    { id: 'resnet-2015' },
  ]
}

export default function DeepLearningQuizPage() {
  return <QuizPageClient />
}
