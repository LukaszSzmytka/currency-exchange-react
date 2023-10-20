import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({ status: "loading" });

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          // const response = await axios.get("https://api.exchangerate.host/latest?base=PLN")
          const response = await axios.get(
            "http://127.0.0.1:5500/src/Form/currenciesData.json"
          );
          console.log(response.data);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = response.data;
          setRatesData({
            status: "succes",
            data,
          });
        } catch {
          setRatesData({
            status: "error",
          });
        }
      })();
    }, 4000);
  }, []);

  return ratesData;
};
