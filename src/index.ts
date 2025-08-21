import { Hono } from 'hono';
import { PostCreate } from './post';
import { PostService } from './postService';
import { PostRepository } from './postRepository';

const app = new Hono();

const postRepository = new PostRepository();
const postService = new PostService(postRepository);

app.get('/posts/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  const post = await postService.getPost(id);
  return c.json(post);
});

app.get('/posts', async (c) => {
  const post = await postService.getAllPosts();
  return c.json(post);
});

app.post('/posts', async (c) => {
  const request = await c.req.json<PostCreate>();
  const post = await postService.createPost(request);
  return c.json(post);
});

app.get('/search', async (c) => {
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
