import { removeUser } from "./api";
import { useAppContext } from "./App.context";
import Button from "./Button";
import { StyledLink } from "./Navigation/Navigation.style";
import { IUser } from "./types";

interface IProps {
  user: IUser;
}

export default function User({ user }: IProps) {
  const { dispatch } = useAppContext();

  const { firstName, lastName } = user;

  if (!(firstName && lastName)) {
    return undefined;
  }

  return (
    <li className="user-list__item">
      <StyledLink to={`/user/${user.id}`}>
        {firstName} {lastName}{" "}
      </StyledLink>
      <Button
        onClick={async () => {
          try {
            await removeUser(user.id);
            dispatch({ type: "remove", payload: user });
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Usuń
      </Button>
    </li>
  );
}
