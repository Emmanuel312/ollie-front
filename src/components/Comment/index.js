import React from "react";
import { Container } from "./styles";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsReply } from "react-icons/bs";

export default function Coment({ text, reply }) {
  return (
    <Container reply={reply}>
      {!reply ? <FaRegCommentAlt /> : <BsReply />}

      <span>{text}</span>
    </Container>
  );
}
