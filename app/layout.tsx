import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Development Frontier Exam',
  description: 'LLM/Deep Learning基礎論文クイズプラットフォーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <nav className="bg-primary-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">AI Development Frontier Exam</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-primary-200">ホーム</a>
              <a href="/quiz/deep-learning" className="hover:text-primary-200">Deep Learning</a>
              <a href="/quiz/llm" className="hover:text-primary-200">LLM</a>
              <a href="/badges" className="hover:text-primary-200">バッジ</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 AI Development Frontier Exam. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
