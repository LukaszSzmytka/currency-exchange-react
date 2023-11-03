import { useState } from "react";
import Result from "./Result";
import { Header, Label, LabelText, Input, Button, Info } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const { ratesData } = useRatesData();

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState();

  const currenciesDate = new Date(ratesData.apiDate);

  const calculateResult = () => {
    const rate = ratesData.currencies[currency];
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
      rate,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Header>Kantor wymiany walut</Header>
      {ratesData.status === "loading" ? (
        <p>
          Sekundka...
          <br />
          Pobieram aktualne kursy walut z Europejskiego Banku Centralnego...
        </p>
      ) : ratesData.status === "error" ? (
        <p>
          Hmm... Coś poszło nie tak. Sprawdź czy masz połączenie z internetem.
          <br />
          Jeśli masz... to wygląda na to, że to nasza wina. Możesz spróbować
          później?
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
                {Object.keys(ratesData.currencies).map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </Input>
            </Label>
          </p>
          <p>
            <Button>Przelicz</Button>
          </p>
          <Info>Kursy walut pobierane z Europejskiego Banku Centralnego.</Info>
          <Result result={result} currenciesDate={currenciesDate} />
        </>
      )}
    </form>
  );
};

export default Form;
