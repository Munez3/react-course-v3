import { memo } from "react";
import { useAppContext } from "./App.context";
import User from "./User";

export default memo(function UserList(): React.ReactElement {
  const { users } = useAppContext();

  if (!users.length) {
    return <div>Brak</div>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
});
