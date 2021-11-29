export type Link = {
  name: string;
  link?: string;
};

export type Links = Link & {
  children?: Link[];
};
