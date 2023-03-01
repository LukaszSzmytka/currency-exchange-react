import { useEffect, useState } from "react";
import "./style.css";

const Time = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDate(date => date = new Date())
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return (
      <p className="header">Dzisiaj jest 
       {`
         ${date.toLocaleString(undefined, {weekday: "long", day: "numeric", month: "long"})},
         ${date.toLocaleTimeString()}
       `}
      </p>   
    )
};

export default Time;