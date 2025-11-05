# CLAUDE.md - プロジェクト開発メモ

## プロジェクト概要

AI Development Frontier Examは、LLM/Deep Learning基礎論文クイズプラットフォームです。

## 技術構成

### フロントエンド
- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript 5.x
- **スタイリング**: Tailwind CSS 3.4
- **デプロイ**: GitHub Pages (Static Export)

### プロジェクト構造

```
AI-Development-Frontier-Exam/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト（ナビゲーション、フッター）
│   ├── page.tsx             # ホームページ
│   ├── globals.css          # グローバルスタイル
│   ├── quiz/
│   │   ├── deep-learning/   # Deep Learningクイズ一覧
│   │   │   └── page.tsx
│   │   └── llm/             # LLMクイズ一覧
│   │       └── page.tsx
│   └── badges/              # バッジページ
│       └── page.tsx
├── components/              # Reactコンポーネント
│   ├── quiz/
│   │   └── QuizCard.tsx     # クイズカードコンポーネント
│   ├── ai-assistant/        # AI質問機能（未実装）
│   └── common/              # 共通コンポーネント
├── lib/                     # ユーティリティ関数
│   ├── firebase/            # Firebase設定（未実装）
│   ├── quiz/                # クイズロジック
│   └── api/                 # API関連
├── types/                   # TypeScript型定義
│   └── quiz.ts              # クイズ関連の型定義
├── public/
│   └── quizzes/             # クイズデータ（JSON）
│       ├── deep-learning/
│       │   └── alexnet-2012.json
│       └── llm/
│           └── transformer-2017.json
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions CI/CD設定
```

## 実装済み機能

### 1. 基本ページ
- ✅ ホームページ（`app/page.tsx`）
- ✅ Deep Learningクイズ一覧（`app/quiz/deep-learning/page.tsx`）
- ✅ LLMクイズ一覧（`app/quiz/llm/page.tsx`）
- ✅ バッジページ（`app/badges/page.tsx`）

### 2. コンポーネント
- ✅ レイアウト（ナビゲーション、フッター）
- ✅ QuizCardコンポーネント（選択式・記述式対応）

### 3. データ構造
- ✅ TypeScript型定義（`types/quiz.ts`）
  - Quiz, QuizQuestion, QuizOption
  - QuizResult, UserAnswer
  - Badge, UserProfile
  - PaperInfo

### 4. サンプルデータ
- ✅ AlexNet クイズ（`public/quizzes/deep-learning/alexnet-2012.json`）
  - 5問の選択式問題
  - 難易度：初級〜上級
- ✅ Transformer クイズ（`public/quizzes/llm/transformer-2017.json`）
  - 6問の選択式問題
  - 難易度：中級〜上級

### 5. デプロイ設定
- ✅ GitHub Actions ワークフロー（`.github/workflows/deploy.yml`）
- ✅ Next.js Static Export設定（`next.config.js`）
- ✅ GitHub Pages対応（basePathなど）

## 未実装機能（今後の開発予定）

### 優先度：高
1. **個別クイズページ**
   - `app/quiz/deep-learning/[id]/page.tsx`
   - `app/quiz/llm/[id]/page.tsx`
   - JSONファイルからクイズデータを読み込み
   - QuizCardコンポーネントを使用した表示

2. **クイズ結果ページ**
   - スコア表示
   - 正解率
   - 獲得バッジの表示
   - 復習機能

3. **バッジ取得システム**
   - クイズ結果に基づくバッジ判定
   - バッジの保存（LocalStorage）
   - バッジ表示の実装

### 優先度：中
4. **AI質問機能**
   - Gemini API連携
   - ChatGPT API連携
   - OAuth認証
   - 質問ウィンドウコンポーネント

5. **ユーザー認証**
   - Firebase Authentication
   - Google OAuth
   - プロフィール管理

6. **データ永続化**
   - Firestore連携
   - クイズ結果の保存
   - バッジの保存
   - 進捗管理

### 優先度：低
7. **最新論文自動監視**
   - arXiv API連携
   - 論文検知ロジック
   - クイズ自動生成（AI）
   - 自動PR作成

8. **コミュニティ機能**
   - 問題投稿システム
   - レビューシステム
   - コメント機能
   - 投票機能

## 開発時の注意点

### Next.js設定
- `output: 'export'` を使用してStatic Exportを有効化
- GitHub Pagesのため、`basePath` を設定
- `images.unoptimized: true` で画像最適化を無効化

### TypeScript
- 厳格な型チェックを有効化
- すべてのコンポーネントで型定義を使用
- `@/` エイリアスでインポート

### Tailwind CSS
- ユーティリティファーストでスタイリング
- カスタムカラー（primary）を定義
- レスポンシブデザインに対応（md:, lg:）

### クイズデータ
- JSON形式で管理
- `public/quizzes/` 配下に配置
- カテゴリごとにディレクトリ分け
- ファイル名は `{id}.json` 形式

## 依存関係の問題

現在、npm installに問題が発生しています：
- npmキャッシュの権限エラー
- 解決策: `sudo chown -R 501:20 "/Users/tatenumaryoya/.npm"` を実行

## 次のステップ

1. **npm依存関係の解決**
   - npmキャッシュの権限修正
   - 正常にインストール完了

2. **個別クイズページの実装**
   - 動的ルーティング
   - JSONデータの読み込み
   - クイズ実施機能

3. **クイズ結果の保存**
   - LocalStorage使用
   - 結果ページの実装

4. **追加のクイズデータ作成**
   - ResNet
   - GAN
   - BERT
   - GPT
   - LLaMA

5. **デプロイとテスト**
   - GitHub Pagesへデプロイ
   - 実機テスト
   - パフォーマンス最適化

## 更新履歴

### 2024-11-06（初期構築）
- ✅ プロジェクト初期化（Next.js 14 + TypeScript + Tailwind CSS）
- ✅ 基本ページの実装（ホーム、クイズ一覧、バッジ）
- ✅ TypeScript型定義の作成（`types/quiz.ts`）
- ✅ サンプルクイズデータの作成（AlexNet, Transformer）
- ✅ QuizCardコンポーネントの実装
- ✅ GitHub Pages デプロイ設定（GitHub Actions）
- ✅ プロジェクト構造の完成
- ✅ ドキュメント作成
  - README.md - プロジェクト概要とセットアップ
  - CLAUDE.md - 開発メモ
  - SETUP_GUIDE.md - 詳細セットアップ手順
  - PROJECT_SUMMARY.md - プロジェクトサマリー

### 2024-11-06（追加開発）
- ✅ npm依存関係のインストール成功
- ✅ 個別クイズページの実装
  - Deep Learning用動的ルート (`app/quiz/deep-learning/[id]/`)
  - LLM用動的ルート (`app/quiz/llm/[id]/`)
  - クライアントコンポーネント分離（`QuizPageClient.tsx`）
  - `generateStaticParams()`によるStatic Export対応
- ✅ クイズ結果表示機能
  - スコア計算と表示
  - 所要時間の記録
  - 合格判定（70%以上）
  - 論文リンク表示
- ✅ LocalStorageによる状態管理
  - クイズ結果の保存
  - 進捗管理
- ✅ 追加クイズデータの作成
  - ResNet (Deep Learning) - 5問
  - BERT (LLM) - 6問
- ✅ ビルドテスト成功
  - Static Export正常動作
  - 全11ページ生成成功
- ✅ クイズUI/UXの改善
  - 問題変更時の状態リセット機能追加（useEffect）
  - 「回答する」→「解説表示」→「次の問題へ」のフロー改善
  - 解説表示後に「やり直す」と「次の問題へ」の2択を表示
  - 最終問題では「結果を見る」ボタンを表示
