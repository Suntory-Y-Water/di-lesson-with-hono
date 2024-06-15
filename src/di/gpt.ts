// src/utils/DIContainer.ts

class DIContainer {
  // サービスを保存するためのMap
  private services: Map<string, any>;

  constructor() {
    this.services = new Map();
  }

  /**
   * サービスを登録します。
   * @param name - サービスの名前
   * @param service - サービスのインスタンス
   */
  register<T>(name: string, service: T): void {
    this.services.set(name, service);
  }

  /**
   * サービスを取得します。
   * @param name - サービスの名前
   * @returns サービスのインスタンス
   */
  get<T>(name: string): T {
    const service = this.services.get(name);
    if (!service) {
      throw new Error(`Service not found: ${name}`);
    }
    return service;
  }

  /**
   * すべてのサービスをクリアします。
   */
  clear(): void {
    this.services.clear();
  }
}

export default new DIContainer();
