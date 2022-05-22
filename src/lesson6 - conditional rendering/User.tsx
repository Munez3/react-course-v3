import { IUser } from "./types";

interface IProps {
  user: IUser;
}

export default function User({ user }: IProps) {
  const { firstName, lastName } = user;

  if (!(firstName && lastName)) {
    return undefined;
  }

  return (
    <div>
      My name is: {firstName} {lastName}
    </div>
  );
}
