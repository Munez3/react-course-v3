import { useReducer } from "react";
import Form from "./Form";
import { IUser } from "./types";
import UserList from "./UserList";

let ID = 1;

type ActionType = "add";

function userReducer(
  state: IUser[],
  action: { type?: ActionType; payload: IUser }
) {
  switch (action.type) {
    case "add":
      const id = ID;
      ID += 1;
      return [...state, { ...action.payload, id: id.toString() }];
    default:
      return state;
  }
}

export default function App() {
  const [users, dispatch] = useReducer(userReducer, []);

  return (
    <div>
      <Form submitForm={dispatch} />
      <UserList users={users} />
    </div>
  );
}
