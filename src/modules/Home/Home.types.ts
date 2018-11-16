export type ValuesType = {
  backgroundColor: string;
  baseCoat: string;
  eyeColor: string;
  hasSpots: boolean;
  isButtFirst: boolean;
  name: string;
  secondaryBaseCoat: string;
  tertiaryBaseCoat: string;
  underCoat: string;
  spotStyles: { [key: string]: string };
  heightFactor: number;
};

export type MetaType = {
  hash: string;
};