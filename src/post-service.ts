import { Post } from './post';
import { IPostRepository } from './post-repository';

export interface IPostService {
  getPost(id: number): Promise<Post>;
  getAllPosts(): Promise<Post[]>;
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
}