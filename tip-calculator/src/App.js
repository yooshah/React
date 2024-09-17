import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [isBill, setIsBill] = useState("");
  const [service, setService] = useState(0);
  const [service2, setService2] = useState(0);

  const tip = isBill * ((service + service2) / 2 / 100);
  return (
    <div>
      <BillInput bill={isBill} onSetBill={setIsBill} />
      <SelectPercentage srevice={service} onSetService={setService}>
        {" "}
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage srevice={service2} onSetService={setService2}>
        {" "}
        How did your friend like the service?
      </SelectPercentage>
      <BillOutput bill={isBill} tip={tip} />
      <Reset />
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label type="text ">How much was the bill ?</label>
      <input
        type="text"
        placeholder="Bill amount"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, service, onSetService }) {
  return (
    <div>
      <label>{children}</label>
      <select value={service} onChange={(e) => onSetService(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="30">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function BillOutput({ bill, tip }) {
  return (
    <div>
      <h3>
        Pay Bill : ${bill + tip} (${bill}+ ${tip} tip)💰
      </h3>
    </div>
  );
}
function Reset() {}
