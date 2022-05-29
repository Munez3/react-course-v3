import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Form from "./Form";
import UserList from "./UserList";
import "./style.scss";
import AppProvider from "./App.context";
import Home from "./Home";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Strona Główna</Link>
            </li>
            <li>
              <Link to={"/users"}>Użytkownicy</Link>
            </li>
            <li>
              <Link to={"/user/add"}>Dodaj użytkownika</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/add" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
