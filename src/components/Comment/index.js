import React from "react";
import { Container } from "./styles";
import { FaRegCommentAlt } from "react-icons/fa";
import Ollie from "../../assets/pp.jpeg";

export default function Coment({ text, reply }) {
  return (
    <Container reply={reply}>
      {!reply ? <FaRegCommentAlt /> : <img src={Ollie} />}

      <span>{text}</span>
    </Container>
  );
}
