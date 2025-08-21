# コーディング規約・スタイル

## 基本原則（CLAUDE.md より）

- **type を使用**: `interface` ではなく `type` を使用
- **構造的型付け**: 型安全性を重視
- **Function 宣言**: 見通しを良くするため Function 宣言で実装
- **引数のオブジェクト化**: 関数の引数が 2 個以上の場合はオブジェクト形式で設定
- **既存型定義の活用**: Pick や Omit などの Utility Types を活用
- **配列型定義**: `Array<T>` ではなく `T[]` を使用

## 実装パターン

### 契約による設計

- TypeScript の型システムを信頼（重複チェック禁止）
- 関数名と型定義で契約を表現
- 過度な JSDoc コメントは避ける
- 単一責任ではなくロジックの意味で実装

### 避けるべきパターン

- TypeScript で型保証済みの引数の再チェック
- 例外を投げないライブラリ関数への不要な try-catch
- 装飾的なコメント

## テスト方針

- **TDD 実践**: コード生成時は対応するユニットテストを常に生成
- **In Source Testing**: vitest で実装と同じファイルにユニットテストを記述
- **Given-When-Then パターン**: テスト構造に基づいて実装
- **契約検証**: 事前条件、事後条件、不変条件を検証

## フォーマット規約（Prettier 設定）

- **セミコロン**: あり (`semi: true`)
- **クォート**: シングルクォート (`singleQuote: true`)
- **JSX クォート**: シングルクォート (`jsxSingleQuote: true`)
- **行幅**: 100 文字 (`printWidth: 100`)
- **タブ幅**: 2 スペース (`tabWidth: 2`)
- **トレーリングカンマ**: すべて (`trailingComma: "all"`)

## ネーミング規約

- **型定義**: PascalCase (`Post`, `PostCreate`)
- **クラス**: PascalCase (`PostService`)
- **メソッド**: camelCase (`getPost`, `getAllPosts`, `createPost`)
- **インターフェース**: I プレフィックス (`IPostService`, `IPostRepository`)

## ファイル構成パターン

```
src/
├── [entity].ts          # 型定義（Post, PostCreate）
├── [entity]Service.ts   # サービス層（ビジネスロジック）
├── [entity]Repository.ts # データアクセス層
├── mocks/
│   └── mock[Entity]Repository.ts # モック実装
└── tests/
    ├── [entity]Service.test.ts
    └── [entity]Repository.test.ts
```

## DI 実装パターン

- **Constructor Injection**: コンストラクタで依存性注入
- **Interface による抽象化**: 疎結合設計
- **Repository パターン**: データアクセス層の抽象化
