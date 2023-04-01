import { useEffect, useState } from "react";
import { StyledDate } from "./styled";

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
      <StyledDate>Dzisiaj jest 
       {`
         ${date.toLocaleString(undefined, {weekday: "long", day: "numeric", month: "long"})},
         ${date.toLocaleTimeString()}
       `}
      </StyledDate>   
    )
};

export default Time;