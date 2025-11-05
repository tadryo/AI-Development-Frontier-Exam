# セットアップガイド

## 前提条件

- Node.js 18以上
- npm または yarn
- Git

## npmキャッシュ権限の修正（必要に応じて）

npm installでエラーが発生する場合、以下のコマンドでnpmキャッシュの権限を修正してください：

```bash
sudo chown -R $(whoami) ~/.npm
```

または、特定のユーザーIDを指定する場合：

```bash
sudo chown -R 501:20 "/Users/tatenumaryoya/.npm"
```

## インストール手順

### 1. 依存関係のインストール

```bash
# npmキャッシュのクリーン（エラーが発生した場合）
npm cache clean --force

# 依存関係のインストール
npm install
```

エラーが続く場合は、以下を試してください：

```bash
# legacy-peer-depsオプションを使用
npm install --legacy-peer-deps
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

### 3. ビルド

```bash
npm run build
```

静的ファイルが `out/` ディレクトリに生成されます。

### 4. プロダクションサーバー（オプション）

```bash
npm start
```

## トラブルシューティング

### 問題: npm installが失敗する

**解決策1**: キャッシュをクリーンアップ
```bash
npm cache clean --force
npm install
```

**解決策2**: node_modulesを削除して再インストール
```bash
rm -rf node_modules package-lock.json
npm install
```

**解決策3**: legacy-peer-depsオプションを使用
```bash
npm install --legacy-peer-deps
```

### 問題: TypeScriptのエラー

**解決策**: TypeScript型定義を確認
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

### 問題: Tailwind CSSが適用されない

**解決策**: Tailwind設定を確認
1. `tailwind.config.ts` のcontentパスを確認
2. `app/globals.css` で@tailwindディレクティブを確認
3. 開発サーバーを再起動

### 問題: GitHub Pagesでパスが正しくない

**解決策**: `next.config.js` のbasePathを確認
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/AI-Development-Frontier-Exam' : ''
```

## 開発のヒント

### Hot Reload

開発サーバー起動中は、ファイルを保存すると自動的にブラウザが更新されます。

### TypeScriptの型チェック

```bash
npx tsc --noEmit
```

### ESLintによるコードチェック

```bash
npm run lint
```

### フォーマット

```bash
# Prettierを使用する場合
npx prettier --write .
```

## 次のステップ

1. サンプルクイズを確認
2. 新しいクイズを追加（`public/quizzes/`）
3. 個別クイズページの実装
4. AI質問機能の追加（オプション）

## 参考リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
- [GitHub Pages ドキュメント](https://docs.github.com/pages)
