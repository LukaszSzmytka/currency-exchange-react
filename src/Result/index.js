const Result = ({ result, printResult }) => {
  if (printResult) {
    return (
      <>
         <p className="form__result">Kurs z dnia 2023-01-09 : <strong>{printResult.rate}</strong> [PLN]</p>
         <p className="form__result"><strong>{printResult.amount}</strong> [PLN] = <strong>{result.toFixed(2)}</strong> [{printResult.short}]</p>
      </>
    );
  }
};

export default Result;