import styled from "styled-components";

export const Header = styled.h1`
    text-align: center;
    margin: 5px;
`

export const Label = styled.label`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    @media (max-width: 767px) {
        grid-template-columns: auto;
    }
`

export const LabelText = styled.span`
    padding: 10px;

    @media (max-width: 767px) {
        padding: 0;
    }
`

export const Input = styled.input`
    border: 1px solid hsl(75, 10%, 30%);
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    font-weight: bold;
`

export const Button = styled.button`
    color: whitesmoke;
    width: 100%;
    border: none;
    padding: 10px;
    background-color: hsl(75, 10%, 40%);
    border: 1px solid hsl(75, 10%, 30%);
    border-radius: 5px;
    transition: 1s;

    &:hover {
      background-color: hsl(75, 10%, 45%);
      transform: scale(1.04);
    }

    &:active {
      background-color: hsl(75, 10%, 50%);
    }
`
export const Info = styled.p`
    font-size: 0.7em;
    text-align: center;
`

export const StyledResult = styled.p`
    text-align: center;
`

