import { StyledResult } from "../styled";

const Result = ({ result, printResult }) => {
  if (printResult) {
    return (
      <>
         <StyledResult>Kurs z dnia 2023-01-09: <strong>{printResult.rate}</strong> [PLN]</StyledResult>
         <StyledResult>Wynik: <strong>{printResult.amount}</strong> [PLN] = <strong>{result.toFixed(2)}</strong> [{printResult.currency}]</StyledResult>
      </>
    );
  }
};

export default Result;