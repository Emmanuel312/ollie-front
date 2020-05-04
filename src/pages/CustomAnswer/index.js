import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Content, Header } from "../Main/styles";
import { Form } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";
function CustomAnswer() {
  const [customAnswers, setCustomAnswers] = useState([]);
  const [task, setTask] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    async function handleFetchtasks() {
      const response = await api.get("answer");
      setCustomAnswers(response.data);
      setTask(response.data[0].task);
    }

    handleFetchtasks();
  }, []);

  async function handleEdit(e) {
    e.preventDefault();
    await api.put("answer", { task, answer });
  }

  console.log(task);
  return (
    <Container>
      <Content>
        <Header>Customize suas respostas</Header>
        <div>
          <Form>
            <select
              id="tasks"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            >
              {customAnswers &&
                customAnswers.map((customAnswer) => (
                  <option key={customAnswer._id} value={customAnswer.task}>
                    {customAnswer.task}
                  </option>
                ))}
            </select>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={handleEdit}>
              <AiOutlineEdit color="white"></AiOutlineEdit>
            </button>
          </Form>
        </div>
      </Content>
    </Container>
  );
}

export default CustomAnswer;
