import { useState } from "react";
import Result from "./Result";
import { Header, Label, LabelText, Input, Button } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const { ratesData, currencies, currenciesData, currenciesDate } =
    useRatesData();

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const [result, setResult] = useState();
  const [printResult, setPrintResult] = useState();

  const rate = currenciesData.rates[currency];

  const calculateResult = () => {
    setResult(amount * rate);
  };

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
      {ratesData.status === "loading" ? (
        <p>
          Sekundka...<br></br>Pobieram aktualne kursy walut z Europejskiego
          Banku Centralnego...
        </p>
      ) : ratesData.status === "error" ? (
        <p>
          Hmm... Coś poszło nie tak. Sprawdź czy masz połączenie z internetem.
          <br></br>Jeśli masz... to wygląda na to, że to nasza wina. Możesz
          spróbować później?
        </p>
      ) : (
        <>
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
          <Result
            printResult={printResult}
            result={result}
            currenciesDate={currenciesDate}
          />
        </>
      )}
    </form>
  );
};

export default Form;
