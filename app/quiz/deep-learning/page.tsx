import Link from 'next/link'

// クイズデータ
const deepLearningQuizzes = [
  {
    id: 'alexnet-2012',
    title: 'ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)',
    authors: ['Alex Krizhevsky', 'Ilya Sutskever', 'Geoffrey Hinton'],
    year: 2012,
    difficulty: 'intermediate',
    estimatedTime: 15,
    arxivUrl: 'https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks',
  },
  {
    id: 'resnet-2015',
    title: 'Deep Residual Learning for Image Recognition (ResNet)',
    authors: ['Kaiming He', 'Xiangyu Zhang', 'Shaoqing Ren', 'Jian Sun'],
    year: 2015,
    difficulty: 'advanced',
    estimatedTime: 20,
    arxivUrl: 'https://arxiv.org/abs/1512.03385',
  },
]

export default function DeepLearningQuizPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Deep Learning 基礎論文クイズ</h1>
      <p className="text-gray-600 mb-8">
        Deep Learningの画期的な論文に基づいたクイズに挑戦しましょう。
        各クイズには原著論文へのリンクがあり、一次情報から学ぶことができます。
      </p>

      <div className="space-y-6">
        {deepLearningQuizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-primary-600">{quiz.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                quiz.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                quiz.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {quiz.difficulty === 'beginner' ? '初級' :
                 quiz.difficulty === 'intermediate' ? '中級' : '上級'}
              </span>
            </div>

            <p className="text-gray-600 mb-2">
              著者: {quiz.authors.join(', ')}
            </p>
            <p className="text-gray-600 mb-4">
              発行年: {quiz.year} | 推定時間: {quiz.estimatedTime}分
            </p>

            <div className="flex space-x-4">
              <Link
                href={`/quiz/deep-learning/${quiz.id}`}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                クイズに挑戦
              </Link>
              <a
                href={quiz.arxivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                原著論文を読む
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
