import styled from "styled-components";

export const PageContent = styled.div`
  .container {
    padding-inline: 1em;
    @media screen only (min-width: 1024px) {
      padding-inline: 1em;
      ${
        "" /* max-width: 1440px;
      width: 100%; */
      }
    }
    @media screen only (max-width: 768px) {
      width: 100%;
    }
  }
`;
