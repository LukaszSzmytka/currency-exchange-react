import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h1 className="form__header">Kantor wymiany walut</h1>
      <p>
        <label>
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
        <label>
          <span className="form__labelText">Wybierz walutę :</span>
          <select
            className="form__field"
            name="currency"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
          {currencies.map((currency) => (
            <option
              key={currency.id}
            >
              {currency.name}
            </option>
          ))}
          </select>
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Kurs z dnia 2023-01-09 [PLN] :
          </span>
          <strong className="form__field">{currency}</strong>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <p className="form__result"></p>
    </form>
  );
};

export default Form;
