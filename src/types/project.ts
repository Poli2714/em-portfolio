export type TPhoto = {
  alt_description: string;
  light_mode: string;
  dark_mode?: string;
};

export type TProjectFeature = {
  name: string;
  description: string;
};

export type TProject = {
  date: string;
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
