import React, { useState, useEffect } from "react";
import { Container, Content, Coments, Header } from "./styles";
import api from "../../services/api";
import Comment from "../../components/Comment";

export default function Main() {
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  async function handleSubmit(e) {
    e.preventDefault();
    setQuestions([...questions, { msg: newQuestion, reply: false }]);

    try {
      const body = { product_id: 1, query: newQuestion };
      setNewQuestion("");
      const response = await api.post("/", body);
      setQuestions((questions) => [
        ...questions,
        { msg: response.data.message, reply: true },
      ]);
      console.log(questions);
    } catch (err) {
      if (err.response.status === 400) {
        setQuestions((questions) => [
          ...questions,
          { msg: err.response.data.message, reply: true },
        ]);
      }
    }
  }

  return (
    <Container>
      <Content>
        <Header>Marketplace x / produto y</Header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pergunte ao ollie"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button type="submit">enviar pergunta</button>
        </form>
        <Coments>
          {questions.map((question) => (
            <Comment text={question.msg} reply={question.reply} />
          ))}
        </Coments>
      </Content>
    </Container>
  );
}
