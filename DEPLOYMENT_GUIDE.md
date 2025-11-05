# デプロイメントガイド

## GitHub Pagesへのデプロイ手順

### 1. GitHubリポジトリの設定

#### リポジトリへのプッシュ
```bash
# まだリポジトリを作成していない場合
# GitHubで新しいリポジトリを作成: AI-Development-Frontier-Exam

# ローカルで初期化
git init
git add .
git commit -m "feat: 初期リリース - LLM/Deep Learning クイズプラットフォーム"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/AI-Development-Frontier-Exam.git
git push -u origin main
```

### 2. GitHub Pages の有効化

1. GitHubリポジトリページに移動
   ```
   https://github.com/YOUR_USERNAME/AI-Development-Frontier-Exam
   ```

2. **Settings** タブをクリック

3. 左サイドバーの **Pages** をクリック

4. **Source** セクションで以下を設定：
   - Source: **GitHub Actions** を選択
   - ⚠️ 重要: "Deploy from a branch" ではなく "GitHub Actions" を選択してください

5. 設定を保存

### 3. GitHub Actions のパーミッション設定

1. リポジトリの **Settings** > **Actions** > **General** に移動

2. **Workflow permissions** セクションで：
   - ✅ **Read and write permissions** を選択
   - ✅ **Allow GitHub Actions to create and approve pull requests** にチェック

3. **Save** をクリック

### 4. デプロイの実行

設定完了後、以下のいずれかの方法でデプロイが開始されます：

#### 方法1: 自動デプロイ（プッシュ時）
```bash
git add .
git commit -m "docs: デプロイ設定を追加"
git push origin main
```

#### 方法2: 手動デプロイ
1. GitHubリポジトリの **Actions** タブに移動
2. 左サイドバーの **Deploy to GitHub Pages** をクリック
3. **Run workflow** ボタンをクリック
4. **Run workflow** を確認

### 5. デプロイ状況の確認

1. **Actions** タブでワークフローの実行状況を確認
2. 緑色のチェックマークが表示されれば成功
3. デプロイされたサイトのURL:
   ```
   https://YOUR_USERNAME.github.io/AI-Development-Frontier-Exam/
   ```

### トラブルシューティング

#### エラー: "Failed to create deployment (status: 404)"

**原因**: GitHub Pagesが有効化されていない

**解決策**:
1. Settings > Pages で Source を "GitHub Actions" に設定
2. Actions > General で "Read and write permissions" を有効化
3. ワークフローを再実行

#### エラー: "Process completed with exit code 1"

**原因**: ビルドエラー

**解決策**:
```bash
# ローカルでビルドテスト
npm run build

# エラーがある場合は修正してから再度プッシュ
```

#### エラー: "Resource not accessible by integration"

**原因**: GitHub Actions のパーミッション不足

**解決策**:
1. Settings > Actions > General
2. Workflow permissions を "Read and write permissions" に変更
3. 変更を保存してワークフローを再実行

### デプロイ後の確認項目

✅ ホームページが正しく表示される
✅ クイズ一覧ページが表示される
✅ 個別クイズページが動作する
✅ バッジページが表示される
✅ 画像・CSSが正しく読み込まれる
✅ ナビゲーションリンクが機能する

### カスタムドメインの設定（オプション）

1. Settings > Pages > Custom domain で独自ドメインを設定可能
2. DNSレコードでCNAMEを設定
3. `CNAME` ファイルを `public/` ディレクトリに配置

### 継続的デプロイメント

mainブランチにプッシュするたびに自動的にデプロイされます：

```bash
# 変更を加える
git add .
git commit -m "feat: 新機能を追加"
git push origin main

# GitHub Actionsが自動的にビルド＆デプロイ
```

### デプロイワークフローの詳細

`.github/workflows/deploy.yml`:
- **トリガー**: mainブランチへのプッシュ、または手動実行
- **ビルド**: Node.js 20で依存関係をインストールし、Next.jsをビルド
- **アップロード**: `out/` ディレクトリをGitHub Pagesにアップロード
- **デプロイ**: GitHub Pagesにデプロイ

### ローカルでのプロダクションビルド確認

```bash
# ビルド
npm run build

# 静的ファイルを確認
ls -la out/

# ローカルサーバーで確認（オプション）
npx serve out
```

### 参考リンク

- [GitHub Pages ドキュメント](https://docs.github.com/pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
