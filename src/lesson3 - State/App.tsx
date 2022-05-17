import { useState } from "react";
import User from "./User";

export default function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <User firstName={firstName} lastName={lastName} />
    </div>
  );
}
