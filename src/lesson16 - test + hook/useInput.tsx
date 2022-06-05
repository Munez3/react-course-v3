import { ChangeEvent, ChangeEventHandler, useState } from "react";

export default function useInput(initialVal: string): {
  inputAttrs: {
    value: string;
    onChange: ChangeEventHandler;
  };
  setValue: (value: string) => void;
  numberValue: number;
} {
  const [value, setValue] = useState(initialVal);

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  return {
    inputAttrs: { value: value.replace(".", ","), onChange },
    numberValue: parseFloat(value?.replace(",", ".") || "0"),
    setValue,
  };
}
