import { StyledResult } from "../styled";

const Result = ({ result, currenciesDate }) => {
  if (result) {
    return (
      <>
        <StyledResult>
          Aktualna stawka na dzień
          {` ${currenciesDate.toLocaleString(undefined, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}`}
          : <strong>{result.rate.toFixed(3)}</strong>&nbsp;PLN
        </StyledResult>
        <StyledResult>
          Wynik: <strong>{result.sourceAmount}</strong> PLN ={" "}
          <strong>{result.targetAmount.toFixed(2)}</strong> {result.currency}
        </StyledResult>
      </>
    );
  }
};

export default Result;
