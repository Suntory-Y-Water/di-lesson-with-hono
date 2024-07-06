import { Hono } from 'hono';
import { diContainer } from './diConfig';
import { PostCreate } from './post';
import { IPostService } from './postService';
import { injectDependencies } from './middleware/injectDependencies';

const app = new Hono<{
  Variables: {
    diContainer: typeof diContainer;
    postService: IPostService;
  };
}>();

app.use('*', injectDependencies);

app.get('/posts/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  const postService = c.get('postService');
  const post = await postService.getPost(id);
  return c.json(post);
});

app.get('/posts', async (c) => {
  const postService = c.get('postService');
  const post = await postService.getAllPosts();

  return c.json(post);
});

app.post('/posts', async (c) => {
  const request = await c.req.json<PostCreate>();
  const postService = c.get('postService');
  const post = await postService.createPost(request);
  return c.json(post);
});

app.get('/search', async (c) => {
  const postService = c.get('postService');
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
