import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  /* width: auto; */
  font-size: ${props => props.size || "14px"};
  display: flex;
  border: 1px solid
    ${props =>
      props.borderLine ||
      "linear-gradient(136.67deg, #CA3832 8.34%, #8D2E36 95.26%)"};
  justify-content: center;
  align-items: center;
  /* padding: ${props => props.pad || "0.5em"} 1.5em; */
  border-radius: 5px;
  color: ${props => props.color || "#fff"};
  background: ${props =>
    props.bg || "linear-gradient(136.67deg, #8D2E36 8.34%, #CA3832 95.26%)"};
`;
