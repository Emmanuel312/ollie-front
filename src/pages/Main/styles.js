import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: #ccc;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 1);
  height: 100%;
  width: 95%;

  form {
    input {
      width: 800px;
      height: 50px;
      /* border: 1px solid gray; */
      border-radius: 30px;
      margin-right: 10px;
      padding: 0 30px;
      background: #dcdcdc;
      ::placeholder {
        color: gray;
        font-weight: bold;
      }
    }

    button {
      border-radius: 30px;
      border: 1px solid #4169e1;
      padding: 10px;
      color: #fff;
      font-weight: bold;
      background: #4169e1;
      transition: background 0.5s;

      :hover {
        border-color: #4169e1;
        color: #4169e1;
        background: white;
      }
    }
  }
`;

export const Header = styled.div`
  align-self: flex-start;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 50px;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 20px;
  display: flex;
  background: #4169e1;
`;

export const Coments = styled.div`
  overflow-y: scroll;
  padding: 30px;
  width: 80%;
  ul {
  }
`;
