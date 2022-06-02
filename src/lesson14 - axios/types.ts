export type ID = string;

export type ActionType = "add" | "remove";

export interface IUser {
  id?: ID;
  firstName: string;
  lastName: string;
}
