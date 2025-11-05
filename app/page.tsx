import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">AI Development Frontier Exam</h1>
        <p className="text-xl text-gray-600 mb-8">
          LLM/Deep Learning基礎論文クイズプラットフォーム
        </p>
        <p className="text-lg text-gray-500 mb-12">
          最新の論文から基礎論文まで、AIの最先端をクイズで学ぼう
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4 text-primary-600">Deep Learning</h2>
          <p className="text-gray-600 mb-6">
            Deep Learningの基礎から最新技術まで、重要な論文に基づいたクイズで知識を深めましょう。
            AlexNet、ResNet、VGG、GANなどの画期的な論文を学習できます。
          </p>
          <Link
            href="/quiz/deep-learning"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            クイズに挑戦
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-3xl font-bold mb-4 text-primary-600">Large Language Models</h2>
          <p className="text-gray-600 mb-6">
            Transformer、BERT、GPT、LLaMAなど、大規模言語モデルの基礎となる論文を
            クイズ形式で学習。最新のLLM技術の理解を深められます。
          </p>
          <Link
            href="/quiz/llm"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            クイズに挑戦
          </Link>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">主な機能</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">論文ベース</h3>
            <p className="text-gray-600">
              arXivなどの原著論文へ直接アクセス。一次情報から学べます。
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">認定バッジ</h3>
            <p className="text-gray-600">
              クイズに合格すると認定バッジを取得。知識を証明できます。
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">AI質問機能</h3>
            <p className="text-gray-600">
              わからない問題はGeminiやChatGPTに質問（オプション）。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">最新論文を常に追加</h2>
        <p className="text-center text-gray-600 mb-4">
          arXiv APIと連携し、注目の最新論文を自動的に検知。
          AIが自動生成したクイズ草案を人間がレビューし、常に最新の知識を学べる環境を提供します。
        </p>
      </section>
    </div>
  )
}
