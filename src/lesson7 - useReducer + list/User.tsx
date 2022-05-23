import { IUser } from "./types";

interface IProps {
  user: IUser;
  removeUser: React.Dispatch<{
    type: "remove";
    payload: IUser;
  }>;
}

export default function User({ user, removeUser }: IProps) {
  const { firstName, lastName } = user;

  if (!(firstName && lastName)) {
    return undefined;
  }

  return (
    <li>
      Hello: {firstName} {lastName}{" "}
      <button
        onClick={() => {
          removeUser({ type: "remove", payload: user });
        }}
      >
        Usuń
      </button>
    </li>
  );
}
