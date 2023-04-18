import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import { ActionType, IUser } from "./types";

let ID = 1;

interface IAppContext {
  users: IUser[];
  dispatch: Dispatch<{ type?: ActionType; payload: IUser }>;
}

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

const AppContext = createContext<IAppContext | undefined>(undefined);

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
