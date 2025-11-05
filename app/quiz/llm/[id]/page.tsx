import QuizPageClient from './QuizPageClient'

// Static Params生成（Static Export用）
export async function generateStaticParams() {
  return [
    { id: 'transformer-2017' },
    { id: 'bert-2018' },
  ]
}

export default function LLMQuizPage() {
  return <QuizPageClient />
}
