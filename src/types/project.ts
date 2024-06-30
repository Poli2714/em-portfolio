export type ProjectImg = {
  alt_description: string;
  img_dark: string;
  img_light?: string;
};

export type ProjectFeature = {
  name: string;
  description: string;
};

export type Project = {
  date: string;
  features: Array<ProjectFeature>;
  github_repo: string;
  goals: Array<string>;
  id: string;
  image: Array<ProjectImg>;
  name: string;
  route: string;
  short_description: string;
  stack: Array<string>;
  website: string;
};
