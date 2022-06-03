import { memo, useEffect } from "react";
import { fetchUsers } from "./api";
import { useAppContext } from "./App.context";
import { IUser } from "./types";
import User from "./User";

export default memo(function UserList(): React.ReactElement {
  const { users, dispatch } = useAppContext();

  useEffect(() => {
    fetchUsers().then((response) => {
      dispatch({ type: "add", payload: response.data });
    });
  }, [dispatch]);

  if (!users.length) {
    return <div>Brak</div>;
  }

  return (
    <ul className="user-list">
      {users
        .filter((user): user is IUser => !!user.id)
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
    </ul>
  );
});
