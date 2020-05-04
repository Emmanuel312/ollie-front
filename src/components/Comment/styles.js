import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  img {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  svg {
    margin-right: 20px;
  }
  span {
    font-weight: bold;
    color: ${(props) => (props.reply ? "red" : "gray")};
  }

  border-bottom: 1px solid #eee;
`;
