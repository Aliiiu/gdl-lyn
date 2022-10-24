import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  /* width: auto; */
  font-size: ${props => props.size || "14px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${props => props.color || "#fff"};
  /* background: ${props =>
    props.bg || "linear-gradient(136.67deg, #CA3832 8.34%, #8D2E36 95.26%)"}; */
`;
