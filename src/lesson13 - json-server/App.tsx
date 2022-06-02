import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./Form";
import UserList from "./UserList";
import "./style.scss";
import AppProvider from "./App.context";
import Home from "./Home";
import Navigation from "./Navigation";

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
