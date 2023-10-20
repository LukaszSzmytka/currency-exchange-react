import { useState } from "react";
import Result from "./Result";
import { Header, Label, LabelText, Input, Button } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const ratesData = useRatesData();
  const dataFromLS = localStorage.getItem("data");
  const currenciesData = JSON.parse(dataFromLS);
  const currencies = Object.keys(currenciesData.rates);

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [result, setResult] = useState();
  const [printResult, setPrintResult] = useState();

  const rate = currenciesData.rates[currency];

  function calculateResult() {
    setResult(amount * rate);
  }

  const showResult = () => {
    setPrintResult({ amount, currency, rate });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
    showResult();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header>Kantor wymiany walut</Header>
      <p>
        <Label>
          <LabelText>Podaj kwotę [PLN]* :</LabelText>
          <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            name="amount"
            type="number"
            required
            step="0.01"
            min="0.01"
          />
        </Label>
      </p>
      <p>
        <Label>
          <LabelText>Wybierz walutę* :</LabelText>
          <Input
            as="select"
            name="currency"
            required
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </Input>
        </Label>
      </p>
      <p>
        <Button>Przelicz</Button>
      </p>
      <Result printResult={printResult} result={result} />
    </form>
  );
};

export default Form;
