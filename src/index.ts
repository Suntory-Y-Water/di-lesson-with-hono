import { Hono } from 'hono';
import { DIContainer } from './di-container';
import { DependencyTypes, diContainer } from './di-config';

const app = new Hono<{
  Variables: {
    diContainer: DIContainer<DependencyTypes>;
  };
}>();

app.use('*', (c, next) => {
  c.set('diContainer', diContainer);
  return next();
});

app.get('/:id', async (c) => {
  const di = c.get('diContainer');
  const id = parseInt(c.req.param('id'));

  const postService = di.get('PostService');
  const post = await postService.getPost(id);

  return c.json(post);
});

app.get('/', async (c) => {
  const di = c.get('diContainer');

  const postService = di.get('PostService');
  const post = await postService.getAllPosts();

  return c.json(post);
});

export default app;