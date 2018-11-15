export interface BodyColorsType {
  underCoat: string;
  baseCoat: string;
}

export interface HeadColorsType {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
}

export interface DataType extends BodyColorsType {
  hasSpots: boolean;
  secondaryBaseCoat: string;
  tertiaryBaseCoat: string;
  eyeColor: string,
}

export type PropsType = {
  data: DataType;
  excitementLevel: 'low' | 'high';
  onClick: () => void,
  isAnimated: boolean,
};
