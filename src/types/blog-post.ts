export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  read_time: number;
  images: Array<string>;
};
