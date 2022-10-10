import styled from "styled-components";
import { Link } from "react-scroll";

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  & input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  & input:checked ~ .drawer {
    background-color: #1c64f2;
  }
  /* @media only screen and (max-width: 1024px) {
    padding: 0;
  } */
`;

export const Linker = styled(Link)`
  color: #8d2e36;
  cursor: pointer;
  &.active {
    color: #000;
  }
`;
