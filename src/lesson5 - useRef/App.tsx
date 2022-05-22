import { useState } from "react";
import Form from "./Form";
import { IUser } from "./types";
import User from "./User";

export default function App() {
  const [user, setUser] = useState<IUser>({ firstName: "", lastName: "" });

  return (
    <div>
      <Form submitForm={setUser} />
      <User user={user} />
    </div>
  );
}
