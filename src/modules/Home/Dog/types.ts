export interface BodyColorsType {
  bellyColor: string;
  coatColor: string;
}

export interface DataType extends BodyColorsType {
  hasSpots: boolean;
  secondaryCoatColor: string;
  tertiaryCoatColor: string;
}

export type PropsType = {
  data: DataType;
};