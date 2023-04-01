import { useState } from "react";
import { currencies } from "./currencies";
import Result from "./Result";
import { Header, Label, LabelText, Input, Button } from "./styled";

const Form = () => {

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState();
  const [printResult, setPrintResult] = useState();

  const rate = currencies.find(({ name }) => name === currency).rate;
  const short = currencies.find(({ name }) => name === currency).short;

  const calculateResult = () => {
    setResult(amount / rate);
  };

  const showResult = () => {
    setPrintResult({ amount, short, rate });
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
              <option key={currency.id}>{currency.name}</option>
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
