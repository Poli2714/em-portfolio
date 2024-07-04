export type TPhoto = {
  alt_description: string;
  light_mode: string;
  dark_mode?: string;
};

export type TSolutionDetail = {
  id: string;
  item: string;
};

export type TProjectChallenge = {
  name: string;
  solution_summary: Array<string>;
  solution_details?: Array<TSolutionDetail>;
  isBlogged: boolean;
  blog_post_link: string;
};

export type TProjectFeature = {
  name: string;
  description: string;
};

export type TProject = {
  date: string;
  challenges: Array<TProjectChallenge>;
  features: Array<TProjectFeature>;
  github_repo: string;
  goals: Array<string>;
  id: string;
  images: Array<TPhoto>;
  name: string;
  route: string;
  short_description: string;
  stack: Array<string>;
  website: string;
};
