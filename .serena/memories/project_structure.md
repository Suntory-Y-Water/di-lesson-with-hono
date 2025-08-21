# プロジェクト構造

## ディレクトリ構造

```
di-lesson-with-hono/
├── src/                     # ソースコード
│   ├── mocks/              # モック実装
│   │   └── mockPostRepository.ts
│   ├── tests/              # テストファイル
│   │   ├── postService.test.ts
│   │   └── postRepository.test.ts
│   ├── index.ts           # エントリーポイント（Honoアプリケーション）
│   ├── post.ts            # 型定義（Post, PostCreate）
│   ├── postService.ts     # サービス層（ビジネスロジック）
│   └── postRepository.ts  # データアクセス層
├── .gitignore
├── .prettierignore
├── .prettierrc            # Prettier設定
├── CLAUDE.md              # プロジェクト固有のAI指示
├── README.md              # プロジェクト概要
├── package.json           # 依存関係・スクリプト定義
├── pnpm-lock.yaml         # パッケージロックファイル
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vitest設定
└── wrangler.toml          # Cloudflare Workers設定
```

## ファイル役割

### エントリーポイント

- **src/index.ts**: Hono アプリケーションのメインファイル
  - API ルート定義（GET /posts, POST /posts 等）
  - DI コンテナの設定
  - エクスポートされる Cloudflare Workers 関数

### 型定義・ドメインモデル

- **src/post.ts**: Post 関連の型定義
  - `PostCreate`: 投稿作成用の型
  - `Post`: 完全な投稿データ型（id 付き）

### ビジネスロジック層

- **src/postService.ts**: PostService クラス
  - `IPostService` インターフェース定義
  - `PostService` 実装クラス
  - 投稿の取得・作成・検索ロジック

### データアクセス層

- **src/postRepository.ts**: PostRepository クラス
  - `IPostRepository` インターフェース定義
  - データ永続化の抽象化

### テスト・モック

- **src/mocks/mockPostRepository.ts**: テスト用モック実装
- **src/tests/**: ユニットテストファイル群

## アーキテクチャパターン

### レイヤー構成

1. **プレゼンテーション層**: index.ts（API エンドポイント）
2. **ビジネスロジック層**: postService.ts
3. **データアクセス層**: postRepository.ts

### 依存性の流れ

```
index.ts → PostService → PostRepository
          ↑            ↑
     IPostService   IPostRepository
```

### DI 実装パターン

- Constructor Injection
- Interface による抽象化
- モック実装によるテスト容易性確保
