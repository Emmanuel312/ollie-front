import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;

  svg {
    margin-right: 20px;
  }
  span {
    font-weight: bold;
    color: ${(props) => (props.reply ? "red" : "gray")};
  }

  border-bottom: 1px solid #eee;
`;
