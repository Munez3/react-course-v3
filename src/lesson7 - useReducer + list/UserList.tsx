import { memo } from "react";
import { IUser } from "./types";
import User from "./User";

interface IProps {
  users: IUser[];
}

export default memo(function UserList({ users }: IProps): React.ReactElement {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
});
