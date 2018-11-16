export interface HeadPropsType {
  underCoat: string;
  baseCoat: string;
  eyeColor: string;
  isButtFirst: boolean;
  heightModifier: number;
}

export type DogPropsType = {
  hasSpots: boolean;
  eyeColor: string,
  isButtFirst: boolean;
  underCoat: string;
  baseCoat: string;
  spotStyles: { [key: string]: string };
  heightModifier: number;
  scaleModifier: number;
}

export type PropsType = {
  data: DogPropsType;
};
