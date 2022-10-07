import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

export const Linker = styled(Link)`
  color: #8d2e36;
  cursor: pointer;
  &.active {
    color: #000;
  }
`;
