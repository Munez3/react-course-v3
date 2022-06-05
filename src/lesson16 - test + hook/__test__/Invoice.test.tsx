import { fireEvent, render, screen } from "@testing-library/react";
import Invoice from "../Invoice";

it("Calculates vat and gross price on net change", async () => {
  render(<Invoice />);
  const net = screen.getByLabelText("Netto");

  fireEvent.change(net, { target: { value: "10000" } });

  const vat = await screen.findByLabelText("Vat");
  expect(vat).toHaveValue("2300,00");
  const gross = await screen.findByLabelText("Brutto");
  expect(gross).toHaveValue("12300,00");
});
