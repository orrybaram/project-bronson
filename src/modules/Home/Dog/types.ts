export interface BodyColorsType {
  underCoat: string;
  baseCoat: string;
}

export interface DataType extends BodyColorsType {
  hasSpots: boolean;
  secondaryBaseCoat: string;
  tertiaryBaseCoat: string;
}

export type PropsType = {
  data: DataType;
};
