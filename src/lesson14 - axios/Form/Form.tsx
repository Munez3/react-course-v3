import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../App.context";
import { IUser } from "../types";
import { Input, Label, StyledForm } from "./Form.style";

export default function Form() {
  const { dispatch: submitForm } = useAppContext();

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState<IUser>({
    firstName: "",
    lastName: "",
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitForm({ type: "add", payload: newUser });
    setNewUser({ firstName: "", lastName: "" });
    inputRef.current?.focus();
    navigate("/users");
  }

  return (
    <>
      <StyledForm action="" onSubmit={handleSubmit}>
        <Label>
          Imię:
          <Input
            ref={inputRef}
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Nazwisko:
          <Input
            name="lastName"
            value={newUser.lastName}
            onChange={handleChange}
          />
        </Label>
        <button type="submit">Dodaj użytkownika</button>
      </StyledForm>
    </>
  );
}
