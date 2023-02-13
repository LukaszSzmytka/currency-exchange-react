import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "../Result";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState();
  const [printResult, setPrintResult] = useState();
  const rate = currencies.find(({ name }) => name === currency).rate;
  const short = currencies.find(({name}) => name === currency).short;
  const calculateResult = () => {
    setResult(() => amount / rate);
  };
  const showResult = () => {
    setPrintResult(() => ({ amount, short, rate }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
    showResult();
    
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h1 className="form__header">Kantor wymiany walut</h1>
      <p>
        <label className="form__label">
          <span className="form__labelText">Podaj kwotę [PLN]* :</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field"
            name="amount"
            type="number"
            required
            step="0.01"
            min="0.01"
          />
        </label>
      </p>
      <p>
        <label className="form__label">
          <span className="form__labelText">Wybierz walutę* :</span>
          <select
            className="form__field"
            name="currency"
            required
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.id}>{currency.name}</option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <Result
        printResult={printResult}
        result={result} 
      />
    </form>
  );
};

export default Form;
