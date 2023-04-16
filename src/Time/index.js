
import { StyledDate } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Time = () => {

    const date = useCurrentDate();

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