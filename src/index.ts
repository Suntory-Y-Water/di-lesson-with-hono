import { Hono } from 'hono';
import { DIContainer } from './di-container';
import { DependencyTypes, diContainer } from './di-config';
import { PostCreate } from './post';

const app = new Hono<{
  Variables: {
    diContainer: DIContainer<DependencyTypes>;
  };
}>();

app.use('*', (c, next) => {
  c.set('diContainer', diContainer);
  return next();
});

app.get('/posts/:id', async (c) => {
  const di = c.get('diContainer');
  const id = parseInt(c.req.param('id'));

  const postService = di.get('PostService');
  const post = await postService.getPost(id);

  return c.json(post);
});

app.get('/posts', async (c) => {
  const di = c.get('diContainer');

  const postService = di.get('PostService');
  const post = await postService.getAllPosts();

  return c.json(post);
});

app.post('/posts', async (c) => {
  const di = c.get('diContainer');
  const request = await c.req.json<PostCreate>();
  const postService = di.get('PostService');
  const post = await postService.createPost(request);
  return c.json(post);
});

// http://127.0.0.1:8787/search?keyword=doloremにアクセスすると、正しく取得できていた。
app.get('/search', async (c) => {
  const di = c.get('diContainer');

  const postService = di.get('PostService');
  const post = await postService.getAllPosts();
  const query = c.req.query('keyword');
  if (!query) {
    console.error('No keyword query');
    return c.json(post);
  }
  const searchResult = postService.search(query, post);

  if (!searchResult) {
    return c.json({ message: 'No search result' });
  }
  return c.json(searchResult);
});

export default app;
