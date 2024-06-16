import { Post, PostCreate } from './post';
import { IPostRepository } from './post-repository';

export interface IPostService {
  getPost(id: number): Promise<Post>;
  getAllPosts(): Promise<Post[]>;
  createPost(post: PostCreate): Promise<Post>;
  search(keyword: string, posts: Post[]): Post[] | null;
}

export class PostService implements IPostService {
  private postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  getPost(id: number): Promise<Post> {
    return this.postRepository.findPost(id);
  }

  getAllPosts(): Promise<Post[]> {
    return this.postRepository.findAllPosts();
  }

  createPost(post: PostCreate): Promise<Post> {
    return this.postRepository.createPost(post);
  }

  search(keyword: string, posts: Post[]): Post[] | null {
    const searchResult = posts.filter((post) => {
      return post.title.includes(keyword) || post.body.includes(keyword);
    });
    if (searchResult.length === 0) {
      return null;
    }
    return searchResult;
  }
}
