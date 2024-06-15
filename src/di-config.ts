import { IPostService, PostService } from './post-service';
import { DIContainer } from './di-container';
import { IPostRepository, PostRepository } from './post-repository';

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
