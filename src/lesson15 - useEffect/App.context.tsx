import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import { IUser } from "./types";

let ID = 1;

interface IAppContext {
  users: IUser[];
  dispatch: Dispatch<
    | { type: "addOne"; payload: IUser }
    | { type: "add"; payload: IUser[] }
    | { type: "remove"; payload: IUser }
  >;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

function userReducer(
  state: IUser[],
  action:
    | { type: "addOne"; payload: IUser }
    | { type: "add"; payload: IUser[] }
    | { type: "remove"; payload: IUser }
) {
  switch (action.type) {
    case "addOne":
      const id = ID;
      ID += 1;
      return [...state, { ...action.payload, id: id.toString() }];
    case "add":
      return action.payload;
    case "remove":
      return state.filter((user) => user.id !== action.payload.id);
    default:
      return state;
  }
}

export default function AppProvider({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  const [users, dispatch] = useReducer(userReducer, []);

  return (
    <AppContext.Provider value={{ users, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("No context");
  }

  return context;
};
