import { useRef, useState } from "react";
import generatePDF from "react-to-pdf";
import TodoApp, { Todo } from "~/pages/angibot/angibot-items";
import OfferPage from "~/pages/angibot/ofer-page";
import Button from "@mui/material/Button";
import { styled } from "styled-components";

export const AngiBotPage = () => {
  const targetRef = useRef(null);
  const [items, setItems] = useState<Todo[]>([]);
  const [name, setName] = useState<string>("");
  const [total, setTotal] = useState(0);

  const resetInputs = () => {
    setItems([]);
    setName("");
    setTotal(0);
  };
  return (
    <div>
      <FormContainer>
        <FormField>
          <Label>Geben Sie den Namen des Kunden ein:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Geben Sie den Namen des Kunden ein"
            style={{ width: "95%" }}
          />
        </FormField>

        <FormField>
          <Label>Geben Sie den Gesamtbetrag ein:</Label>
          <Input
            style={{ width: "95%" }}
            value={total}
            onChange={(e) => setTotal(e.target.value as unknown as number)}
            placeholder="Geben Sie den Gesamtbetrag ein"
          />
        </FormField>
        <TodoApp setTodos={setItems} todos={items} />
      </FormContainer>

      <div ref={targetRef} style={{ padding: "16px" }}>
        <OfferPage items={items} name={name} price={total} />
      </div>

      <Button
        onClick={() => {
          generatePDF(targetRef, { filename: "angibot.pdf" });
          resetInputs();
        }}
        style={{ backgroundColor: "#f17e01", color: "white" }}
      >
        Herunterladen PDF
      </Button>
    </div>
  );
};

// Styled-components
const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #f17e01;
  }

  &::placeholder {
    color: #aaa;
  }
`;
