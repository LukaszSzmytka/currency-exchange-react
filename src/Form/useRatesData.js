import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ status: "loading" });

    useEffect(() => {
        setTimeout(() => {
          (async () => {
            try {
              // const response = await axios.get("https://api.exchangerate.host/latest?base=PLN")
              const response = await axios.get("http://127.0.0.1:5500/src/Form/currenciesData.json");
    
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
        }, 3000);
      }, []);
    
 

  return ratesData ;
};
