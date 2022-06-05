import { useEffect } from "react";
import useInput from "./useInput";

export default function Invoice(): React.ReactElement {
  const net = useInput("0");
  const vat = useInput("0");
  const gross = useInput("0");

  useEffect(() => {
    const calculatedVat = net.numberValue * 0.23;
    vat.setValue(calculatedVat.toFixed(2));
    gross.setValue((net.numberValue + calculatedVat).toFixed(2));
  }, [net.numberValue]);

  return (
    <>
      <label>
        Netto
        <input type="text" name="priceNet" {...net.inputAttrs} />
      </label>
      <label>
        Vat
        <input type="text" name="priceVat" {...vat.inputAttrs} />
      </label>
      <label>
        Brutto
        <input type="text" name="priceGross" {...gross.inputAttrs} />
      </label>
    </>
  );
}
