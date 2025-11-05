# Favicon設定ガイド

## Next.js 14 (App Router) でのFavicon設定方法

### 方法1: ファイルベースのメタデータ（推奨）

Next.js 14では、特定の名前のファイルを`app/`ディレクトリに配置するだけで自動認識されます。

#### 対応ファイル名

1. **favicon.ico**
   - `app/favicon.ico` に配置
   - 最も一般的な方法
   - サイズ: 16x16, 32x32, 48x48 のマルチサイズICO

2. **icon.png / icon.svg**
   - `app/icon.png` または `app/icon.svg` に配置
   - PNGの場合: 推奨サイズ 32x32 または 64x64
   - SVGの場合: スケーラブルで高品質

3. **apple-icon.png**
   - `app/apple-icon.png` に配置
   - iOSデバイス用
   - 推奨サイズ: 180x180

#### 設定手順

```bash
# 1. faviconファイルを準備
# 例: favicon.ico (16x16, 32x32, 48x48のマルチサイズ)

# 2. app/ディレクトリに配置
cp /path/to/your/favicon.ico app/favicon.ico

# 3. ビルド（自動的に認識される）
npm run build
```

### 方法2: メタデータAPIを使用

`app/layout.tsx`でメタデータとして設定する方法：

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Development Frontier Exam',
  description: 'LLM/Deep Learning基礎論文クイズプラットフォーム',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}
```

この場合、ファイルは`public/`ディレクトリに配置します：
```
public/
├── favicon.ico
└── apple-icon.png
```

### 推奨設定（両方使用）

最適な互換性のため、両方の方法を組み合わせることをお勧めします：

```
app/
├── favicon.ico          # 基本的なfavicon
├── icon.png            # モダンブラウザ用
└── apple-icon.png      # iOS用

public/
└── favicon.ico         # フォールバック用（古いブラウザ）
```

### Faviconの作成ツール

#### オンラインツール
- [Favicon.io](https://favicon.io/) - テキスト、絵文字、画像からfaviconを作成
- [RealFaviconGenerator](https://realfavicongenerator.net/) - 全デバイス対応のfaviconセット生成

#### コマンドラインツール
```bash
# ImageMagickを使用してPNGからICOを作成
convert icon.png -define icon:auto-resize=16,32,48 favicon.ico

# SVGからPNGを生成
convert -background none icon.svg -resize 32x32 icon.png
```

### 絵文字をFaviconとして使用

簡単な方法として、絵文字をSVGとして使用できます：

```typescript
// app/icon.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(to bottom right, #0ea5e9, #0369a1)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        🧠
      </div>
    ),
    {
      ...size,
    }
  )
}
```

### 動的Faviconの生成

プログラムで動的にfaviconを生成することもできます：

```typescript
// app/icon.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0ea5e9',
          borderRadius: '50%',
        }}
      >
        <div style={{ fontSize: 20, color: 'white' }}>AI</div>
      </div>
    ),
    { ...size }
  )
}
```

### トラブルシューティング

#### Faviconが更新されない
1. ブラウザキャッシュをクリア: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
2. ハードリロード: `Ctrl+F5` (Windows) / `Cmd+Option+R` (Mac)
3. シークレットモードで確認

#### 古いFaviconが表示される
- `out/`ディレクトリを削除して再ビルド
```bash
rm -rf .next out
npm run build
```

#### GitHub Pagesで反映されない
- `next.config.js`の`basePath`設定を確認
- デプロイ後、数分待つ
- ブラウザキャッシュをクリア

### 確認方法

#### ローカル開発
```bash
npm run dev
# http://localhost:3000 でfaviconを確認
```

#### プロダクション
```bash
npm run build
npx serve out
# http://localhost:3000 で確認
```

### 推奨サイズ一覧

| ファイル | サイズ | 用途 |
|---------|-------|------|
| favicon.ico | 16x16, 32x32, 48x48 | 標準ブラウザ |
| icon.png | 32x32 | モダンブラウザ |
| apple-icon.png | 180x180 | iOS Safari |
| icon-192.png | 192x192 | Android Chrome |
| icon-512.png | 512x512 | PWA |

### このプロジェクトでの実装例

AI/ML関連のプロジェクトなので、以下のような絵文字faviconがおすすめ：

- 🧠 (脳) - AI/知能
- 🤖 (ロボット) - AI
- 📚 (本) - 学習
- 🎓 (卒業帽) - 教育
- ⚡ (稲妻) - スピード/エネルギー
- 🔬 (顕微鏡) - 研究

または、カスタムロゴを作成することもできます。
