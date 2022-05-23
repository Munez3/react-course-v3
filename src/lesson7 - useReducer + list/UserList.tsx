import { memo } from "react";
import { IUser } from "./types";
import User from "./User";

interface IProps {
  users: IUser[];
  removeUser: React.Dispatch<{
    type: "remove";
    payload: IUser;
  }>;
}

export default memo(function UserList({
  users,
  removeUser,
}: IProps): React.ReactElement {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} user={user} removeUser={removeUser} />
      ))}
    </ul>
  );
});
