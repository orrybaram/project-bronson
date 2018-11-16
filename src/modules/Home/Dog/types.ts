export interface DogPropsType {
  underCoat: string;
  baseCoat: string;
  isButtFirst: boolean;
}

export interface HeadColorsType {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
}

export interface DataType extends DogPropsType {
  hasSpots: boolean;
  secondaryBaseCoat: string;
  tertiaryBaseCoat: string;
  eyeColor: string,
  isButtFirst: boolean;
}

export type PropsType = {
  data: DataType;
};
