import styled from "styled-components";

export const FormField = styled.div`
  /** style input field here */
  width: 100%;
  margin: 20px 0;
  input,
  select,
  textarea {
    outline: none;
    border: none;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    background: transparent;
    width: 100%;
    box-sizing: border-box;
    padding: 0 18px;
    border-bottom: 2px solid #fff;
    border-radius: 0;
  }
  .file-input::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }
  .file-input::before {
    content: "select some file";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
`;
export const Label = styled.label`
  /** style the label of input field */
  color: #fff;
`;
