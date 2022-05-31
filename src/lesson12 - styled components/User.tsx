import { useAppContext } from "./App.context";
import Button from "./Button";
import { IUser } from "./types";

interface IProps {
  user: IUser;
}

export default function User({ user }: IProps) {
  const { dispatch: removeUser } = useAppContext();

  const { firstName, lastName } = user;

  if (!(firstName && lastName)) {
    return undefined;
  }

  return (
    <li className="user-list__item">
      {firstName} {lastName}{" "}
      <Button
        onClick={() => {
          removeUser({ type: "remove", payload: user });
        }}
      >
        Usuń
      </Button>
    </li>
  );
}
