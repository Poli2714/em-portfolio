export type TBlogPost = {
  id: string;
  slug: string;
  author: string;
  category: string;
  date: string;
  description: string;
  images: Array<TBlogPostImage>;
  read_time: number;
  sections: Array<TBlogPostSection>;
  title: string;
};

export type TBlogPostImage = {
  alt_description: string;
  light_mode: string;
  dark_mode?: string;
};

export type TBlogPostSection = {
  code?: string;
  image?: TBlogPostImage;
  paragraphs: Array<string>;
  subtitle?: string;
};
