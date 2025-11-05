# AI Development Frontier Exam

LLM/Deep Learning基礎論文クイズプラットフォーム

## 概要

AI Development Frontier Examは、LLM（大規模言語モデル）やDeep Learningの主要基礎論文に関する知識をクイズ形式で学び、知識証明バッジを取得できるWebアプリケーションです。

### 主な特徴

- 📚 **論文ベース学習**: arXivなどの原著論文へ直接アクセス可能
- 🏆 **認定バッジシステム**: クイズ合格で認定バッジを取得
- 🤖 **AI質問機能**: Gemini/ChatGPTでわからない問題を質問（オプション）
- 🔄 **最新論文の自動追加**: arXiv APIと連携し、注目論文のクイズを自動生成
- 🌐 **レスポンシブデザイン**: PC・スマートフォン両対応

## カテゴリ

### Deep Learning基礎論文
- AlexNet
- ResNet
- VGG
- GAN
- など

### LLM基礎論文
- Transformer
- BERT
- GPT
- LLaMA
- など

## 技術スタック

- **フロントエンド**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **デプロイ**: GitHub Pages
- **クイズデータ**: JSON形式（GitHubで管理）
- **CI/CD**: GitHub Actions

## プロジェクト構造

```
AI-Development-Frontier-Exam/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # ホームページ
│   ├── quiz/
│   │   ├── deep-learning/   # Deep Learningクイズ
│   │   └── llm/             # LLMクイズ
│   └── badges/              # バッジページ
├── components/              # Reactコンポーネント
│   ├── quiz/                # クイズ関連コンポーネント
│   ├── ai-assistant/        # AI質問機能
│   └── common/              # 共通コンポーネント
├── lib/                     # ユーティリティ関数
│   ├── firebase/            # Firebase設定
│   ├── quiz/                # クイズロジック
│   └── api/                 # API関連
├── types/                   # TypeScript型定義
├── public/
│   └── quizzes/             # クイズデータ（JSON）
│       ├── deep-learning/
│       └── llm/
└── .github/
    └── workflows/           # CI/CD設定
```

## セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/AI-Development-Frontier-Exam.git
cd AI-Development-Frontier-Exam

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## ビルドとデプロイ

### ローカルビルド

```bash
npm run build
```

### GitHub Pagesへのデプロイ

#### 事前準備
1. GitHubで新しいリポジトリを作成
2. ローカルで以下を実行:

```bash
git init
git add .
git commit -m "feat: 初期リリース"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/AI-Development-Frontier-Exam.git
git push -u origin main
```

#### GitHub Pagesの有効化
1. GitHubリポジトリの **Settings** > **Pages** に移動
2. **Source** を **"GitHub Actions"** に設定（重要: "Deploy from a branch" ではない）
3. **Settings** > **Actions** > **General** に移動
4. **Workflow permissions** を **"Read and write permissions"** に設定
5. 変更を保存

#### デプロイ実行
設定完了後、mainブランチにプッシュすると自動デプロイされます:

```bash
git add .
git commit -m "docs: デプロイ設定を追加"
git push origin main
```

または、**Actions** タブから **Run workflow** で手動実行も可能です。

デプロイ完了後、以下のURLでアクセス可能:
```
https://YOUR_USERNAME.github.io/AI-Development-Frontier-Exam/
```

詳細な手順は `DEPLOYMENT_GUIDE.md` を参照してください。

## クイズデータの追加

クイズデータは `public/quizzes/` 以下にJSON形式で保存されています。

### クイズデータの構造

```json
{
  "id": "quiz-id",
  "category": "deep-learning" | "llm",
  "paper": {
    "title": "論文タイトル",
    "authors": ["著者1", "著者2"],
    "year": 2024,
    "arxivUrl": "https://arxiv.org/abs/...",
    "abstract": "論文の概要"
  },
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "問題文",
      "options": [
        {
          "id": "a",
          "text": "選択肢A",
          "isCorrect": false
        }
      ],
      "explanation": "解説",
      "difficulty": "beginner" | "intermediate" | "advanced"
    }
  ],
  "difficulty": "intermediate",
  "estimatedTime": 15
}
```

### 新しいクイズの追加方法

1. `public/quizzes/[category]/` に新しいJSONファイルを作成
2. 上記の構造に従ってクイズデータを記述
3. PRを作成してレビュー依頼
4. レビュー後、マージして公開

## コミュニティによる貢献

### 問題の追加・修正

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/new-quiz`)
3. クイズデータを追加・修正
4. コミットしてプッシュ (`git push origin feature/new-quiz`)
5. PRを作成

### レビュープロセス

- 最低2名のレビュアーによる承認が必要
- 問題の正確性、解説の妥当性を確認
- 承認後、mainブランチにマージ

## 最新論文の自動監視機能（予定）

将来的に以下の機能を実装予定：

1. arXiv APIを定期的に監視
2. 注目論文を自動検知
3. AIがクイズ草案を自動生成
4. 自動でPRを作成
5. 人間がレビュー・修正してマージ

## ライセンス

MIT License

## 開発者向け情報

### 使用技術

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: GitHub Pages (Static Export)
- **CI/CD**: GitHub Actions

### コーディング規約

- TypeScriptの型定義を必ず使用
- コンポーネントは関数コンポーネントで実装
- Tailwind CSSでスタイリング
- ESLintのルールに従う

### 今後の開発予定

- [ ] AI質問機能の実装（Gemini/ChatGPT連携）
- [ ] ユーザー認証機能（Firebase Authentication）
- [ ] クイズ結果の保存（Firestore）
- [ ] バッジ取得システムの実装
- [ ] arXiv API連携による最新論文監視
- [ ] クイズ自動生成機能
- [ ] コミュニティ投票システム
- [ ] モバイルアプリ版の開発

## お問い合わせ

質問や提案がある場合は、[Issues](https://github.com/yourusername/AI-Development-Frontier-Exam/issues)で報告してください。

---

© 2024 AI Development Frontier Exam. All rights reserved.
