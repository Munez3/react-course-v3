import { useReducer } from "react";
import Form from "./Form";
import { IUser } from "./types";
import UserList from "./UserList";
import "./style.scss";

let ID = 1;

type ActionType = "add" | "remove";

function userReducer(
  state: IUser[],
  action: { type?: ActionType; payload: IUser }
) {
  switch (action.type) {
    case "add":
      const id = ID;
      ID += 1;
      return [...state, { ...action.payload, id: id.toString() }];
    case "remove":
      return state.filter((user) => user.id !== action.payload.id);
    default:
      return state;
  }
}

export default function App() {
  const [users, dispatch] = useReducer(userReducer, []);

  return (
    <div>
      <Form submitForm={dispatch} />
      <UserList users={users} removeUser={dispatch} />
    </div>
  );
}
