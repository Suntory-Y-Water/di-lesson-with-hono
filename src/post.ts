export type PostCreate = {
  userId: number;
  title: string;
  body: string;
};

export type Post = PostCreate & {
  id: number;
};
