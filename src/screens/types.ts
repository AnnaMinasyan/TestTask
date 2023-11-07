import { ImageProps } from "react-native";

export interface IGift {
  id: number;
  title: string;
  url: ImageProps;
  count: number
}
export interface IAdditionalInfo {
  advantage: string
}
export interface ICoordinates {
  address: string
}
export interface IAddress {
  city: string;
  coordinates: ICoordinates[]
}
export interface IUser {
  additionalInfo: IAdditionalInfo,
  address: IAddress,
  email: string,
  id: string,
  likesCount: number,
  name: string,
  phone: string,
  shortDescription: string,
  subscribersCount: number,
  subscriptionsCount: number
}