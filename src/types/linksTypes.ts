export type LinkBasis = {
  path: string;
  label: string;
};

export type LinkDatum = LinkBasis & {
  visit: () => void;
};

export type LinksData = LinkDatum[];
