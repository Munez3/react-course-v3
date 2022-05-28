import Form from "./Form";
import UserList from "./UserList";
import "./style.scss";
import AppProvider from "./App.context";

export default function App() {
  return (
    <AppProvider>
      <>
        <Form />
        <UserList />
      </>
    </AppProvider>
  );
}
