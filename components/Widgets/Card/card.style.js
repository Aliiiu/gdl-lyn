import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${props => props.bg_color || "red"};
  padding: 1.5em 0.8em 1em;
  height: 100%;
  color: #fff;
  .topic {
    font-size: 20px;
    line-height: 25px;
    width: 80%;
  }
  .round-box {
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    margin-top: -0.3em;
  }
`;
