import "./style.css";

const Form = () => (
  <form className="form">
    <h1 className="form__header">Kantor wymiany walut</h1>
    <p>
      <label>
        <span className="form__labelText">Podaj kwotę [PLN]* :</span>
        <input
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
        <select className="form__field" name="currency">
          <option value="EUR">Euro</option>
          <option value="USD">Dolar amerykański</option>
          <option value="CHF">Frank szwajcarski</option>
          <option value="HRK">Kuna chorwacka</option>
          <option value="TRY">Lira turecka</option>
          <option value="GBP">Funt brytyjski</option>
        </select>
      </label>
    </p>
    <p>
      <label>
        <span className="form__labelText">Kurs z dnia 2023-01-09 [PLN] :</span>
        <strong className="form__field">N/A</strong>
      </label>
    </p>
    <p>
      <button className="form__button">Przelicz</button>
    </p>
    <p className="form__result"></p>
  </form>
);

export default Form;
