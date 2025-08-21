# 推奨コマンド集

## 開発・実行コマンド

### 開発サーバー起動

```bash
pnpm run dev
# または
wrangler dev src/index.ts
```

ローカル開発環境で Cloudflare Workers をエミュレート

### デプロイ

```bash
pnpm run deploy
# または
wrangler deploy --minify src/index.ts
```

Cloudflare Workers にプロダクションデプロイ

## テストコマンド

### テスト実行

```bash
pnpm run test
# または
vitest run
```

全テストを実行

### テスト監視

```bash
vitest
```

ファイル変更を監視してテスト自動実行

## パッケージ管理

### 依存関係インストール

```bash
pnpm install
```

### パッケージ追加

```bash
pnpm add [package]
pnpm add -D [package]  # 開発依存関係
```

## 品質チェックコマンド

### TypeScript 型チェック

```bash
npx tsc --noEmit
```

型エラーの確認（出力なし）

### フォーマット実行

```bash
npx prettier --write .
```

全ファイルのフォーマット適用

### フォーマットチェック

```bash
npx prettier --check .
```

フォーマットが適用されているかチェック

## ユーティリティコマンド

### Wrangler 認証

```bash
wrangler auth login
```

### プロジェクト情報確認

```bash
wrangler whoami
```

## システムコマンド（Linux）

- `git`: Git 操作
- `ls`: ファイル一覧
- `cd`: ディレクトリ移動
- `grep`: 文字列検索
- `find`: ファイル検索
- `cat`: ファイル内容表示

## タスク完了時の推奨フロー

1. `pnpm run test` - テスト実行
2. `npx tsc --noEmit` - 型チェック
3. `npx prettier --check .` - フォーマットチェック
4. 必要に応じて `npx prettier --write .` でフォーマット適用
