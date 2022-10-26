import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.bg || "#2f2f2f"};
  @media and screen only (min-width: 1280px) {
    ${"" /* max-height: ${props => props.height || "15em"}; */}
  }
`;

export const CardDiv = styled.div`
  overflow-x: scroll;
  padding: 2em 0 0;
`;

export const StartContainer = styled.div`
  padding: ${props => props.padding || "10em 0"};
  ${"" /* padding-inline: ${(props) => props.inline_padding || '15em'}; */}
  background-color: ${props => props.bg || "#462020"};
  @media (max-width: 768px) {
    padding: 0;
    padding-inline: 5px;
    background-color: ${props => props.bg || "#462020"};
  }
`;

export const DiagonalBox = styled.div`
  width: 100%;
  /* background-image: linear-gradient(45deg, #6303b1, #ff0099); */
  margin: 5em 0 0;
  transform: skewY(-5deg);
  .content {
    /* max-width: 50em; */
    margin: 0 auto;
    padding: 2em 0;
    /* background-color: yellow; */
    width: 100%;
    transform: skewY(3deg);
  }
`;

export const ContentBox = styled.div`
  background-color: ${props => props.bg_color};
  .round-box {
    width: 3.5em;
    height: 3.5em;
    padding: 1em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.19);
  }
`;
