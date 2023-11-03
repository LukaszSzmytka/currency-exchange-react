import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const URL =
    "https://v6.exchangerate-api.com/v6/76aff3f82713637c14f1c1da/latest/PLN";

  const [ratesData, setRatesData] = useState({ status: "loading", data: null });

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(URL);

          setRatesData({
            status: "success",
            data: response.data,
            currencies: response.data.conversion_rates,
            apiDate: response.data.time_last_update_utc,
          });
        } catch {
          setRatesData({
            status: "error",
            data: null,
          });
        }
      })();
    }, 2000);
  }, []);

  return { ratesData };
};
