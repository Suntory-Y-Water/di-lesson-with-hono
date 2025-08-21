# 技術スタック

## ランタイム・プラットフォーム

- **Cloudflare Workers**: サーバーレス実行環境
- **Node.js**: 開発環境（ESNext モジュール）

## フレームワーク・ライブラリ

- **Hono** v4.9.2: 軽量 Web フレームワーク（Cloudflare Workers 対応）
  - JSX サポート (`hono/jsx`)
  - TypeScript ファーストフレームワーク

## 言語・設定

- **TypeScript**: 主要言語
  - Target: ESNext
  - Module: ESNext
  - Strict mode 有効
  - Decorator 機能有効 (`experimentalDecorators`, `emitDecoratorMetadata`)

## 開発ツール

- **Wrangler** v4.31.0: Cloudflare Workers 開発・デプロイツール
- **Vitest** v3.2.4: テスティングフレームワーク
  - In Source Testing サポート
  - globals 設定有効
- **Prettier**: コードフォーマッタ
  - セミコロンあり
  - シングルクォート
  - 行幅 100 文字
  - タブ幅 2

## 型定義

- **@cloudflare/workers-types**: Cloudflare Workers 型定義
- **vitest/globals**: Vitest グローバル型定義

## パッケージ管理

- **pnpm**: パッケージマネージャー

## 主要設定ファイル

- `wrangler.toml`: Cloudflare Workers 設定
- `tsconfig.json`: TypeScript 設定
- `vite.config.ts`: Vitest 設定
- `.prettierrc`: Prettier 設定
