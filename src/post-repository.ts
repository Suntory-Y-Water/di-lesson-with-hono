import { Post, PostCreate } from './post';

export interface IPostRepository {
  findPost(id: number): Promise<Post>;
  findAllPosts(): Promise<Post[]>;
  createPost(post: PostCreate): Promise<Post>;
  searchPosts(keyword: string, post: Post[]): Post[] | null;
}

export class PostRepository implements IPostRepository {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  async findPost(id: number): Promise<Post> {
    const response = await fetch(`${this.apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post with id ${id}`);
    }
    const data = (await response.json()) as Post;
    return data;
  }

  async findAllPosts(): Promise<Post[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch post`);
    }
    const data = (await response.json()) as Post[];
    return data;
  }

  async createPost(post: Post): Promise<Post> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        ...post,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    const data = (await response.json()) as Post;
    return data;
  }

  // タイトルまたは投稿内容に特定のキーワードを含むポストを検索する
  searchPosts(keyword: string, posts: Post[]): Post[] | null {
    const searchResult = posts.filter((post) => {
      return post.title.includes(keyword) || post.body.includes(keyword);
    });
    if (searchResult.length === 0) {
      return null;
    }
    return searchResult;
  }
}
