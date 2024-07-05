import { IPostService, PostService } from './postService';
import { DIContainer } from './diContainer';
import { IPostRepository, PostRepository } from './postRepository';

export interface DependencyTypes {
  PostService: IPostService;
  PostRepository: IPostRepository;
}

const diContainer = new DIContainer<DependencyTypes>();

// Register repositories
diContainer.register('PostRepository', PostRepository);

// Register services
diContainer.register('PostService', PostService, diContainer.get('PostRepository'));

export { diContainer };
