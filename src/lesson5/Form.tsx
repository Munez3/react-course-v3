import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "./types";

export default function Form({
  submitForm,
}: {
  submitForm: (user: IUser) => void;
}) {
  const [newUser, setNewUser] = useState<IUser>({
    firstName: "",
    lastName: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitForm(newUser);
    setNewUser({ firstName: "", lastName: "" });
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Imię:
          <input
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Nazwisko:
          <input
            name="lastName"
            value={newUser.lastName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Dodaj użytkownika</button>
      </form>
    </>
  );
}
