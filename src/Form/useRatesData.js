import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const URL =
    "https://v6.exchangerate-api.com/v6/76aff3f82713637c14f1c1da/latest/PLN";

  const [ratesData, setRatesData] = useState({ status: "loading" });

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(URL);

          localStorage.setItem("data", JSON.stringify(response.data));

          setRatesData({
            status: "success",
          });
        } catch {
          setRatesData({
            status: "error",
          });
        }
      })();
    }, 2000);
  }, []);

  const dataFromLS = localStorage.getItem("data");
  const currenciesData = JSON.parse(dataFromLS);
  const currencies = Object.keys(currenciesData.conversion_rates);
  const currenciesDate = new Date(currenciesData.time_last_update_utc);

  return { ratesData, currenciesData, currencies, currenciesDate };
};
