import { IUser } from "./types";

interface IProps {
  user: IUser;
}

export default function User({ user }: IProps) {
  const { firstName, lastName } = user;
  return (
    <div>
      My name is: {firstName} {lastName}
    </div>
  );
}
