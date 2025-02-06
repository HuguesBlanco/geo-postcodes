export type LinkDatum = {
  key: string;
  label: string;
  navigationCallback: () => void;
};

export type LinksData = LinkDatum[];
