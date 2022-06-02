import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./Form";
import UserList from "./UserList";
import "./style.scss";
import AppProvider from "./App.context";
import Home from "./Home";
import Navigation from "./Navigation";
import axios from "axios";
import api from "./api";

axios
  .post("http://localhost:3001/users", { firstName: "John", lastName: "Smith" })
  .then((response) => console.log(response));

axios("http://localhost:3001/users").then((response) => console.log(response));

api("/users").then((response) => console.log(response.data));
api("/users", { params: { id: 1 } }).then((response) =>
  console.log(response.data)
);

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/add" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
