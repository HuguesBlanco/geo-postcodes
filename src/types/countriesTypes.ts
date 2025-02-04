export type Country = {
  continent: string;
  iso: string;
  name: string;
  noPostalCode: boolean;
  limited: boolean;
  notAvailable: boolean;
  url: string;
  continentCode: number;
};

export type Countries = Country[];
