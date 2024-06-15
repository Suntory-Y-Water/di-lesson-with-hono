// post-repository.ts
import { Post } from './post';

export interface IPostRepository {
  findPost(id: number): Promise<Post>;
  findAllPosts(): Promise<Post[]>;
}

export class PostRepository implements IPostRepository {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  protected async findPost(id: number) {
    const response = await fetch(`${this.apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post with id ${id}`);
    }
    const data = (await response.json()) as Post;
    return data;
  }

  async findAllPosts() {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch post `);
    }
    const data = (await response.json()) as Post[];
    return data;
  }
}
