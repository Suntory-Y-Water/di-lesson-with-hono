# プロジェクト目的

## プロジェクト名

di-lesson-with-hono

## 目的

DI（Dependency Injection）を触って理解するための練習用リポジトリ

## 概要

- Hono フレームワークと Cloudflare Workers を使用した Web API プロジェクト
- DI パターンの学習と実践が主目的
- ブログ投稿システム（Posts）を題材とした CRUD 操作の実装
- 投稿の取得、作成、検索機能を提供
- モック実装を使用したテスト駆動開発の実践

## 主要機能

- GET /posts - 全投稿一覧取得
- GET /posts/:id - 特定投稿取得
- POST /posts - 新規投稿作成
- GET /search - 投稿検索（title/body 内のキーワード検索）

## アーキテクチャ

- Repository パターンでデータアクセス層を抽象化
- Service パターンでビジネスロジックを分離
- Interface を使用した疎結合設計
- Constructor Injection による依存性注入
