export interface DogPropsType {
  underCoat: string;
  baseCoat: string;
  isButtFirst: boolean;
  spotStyles: { [key: string]: string };
  heightFactor: number;
}

export interface HeadPropsType {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
  isButtFirst: boolean;
  heightFactor: number;
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
