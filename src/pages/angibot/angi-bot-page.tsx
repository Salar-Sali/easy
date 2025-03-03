import { Button, Input } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";
import TodoApp, { Todo } from "~/pages/angibot/angibot-items";
import OfferPageReactPdf from "~/pages/angibot/offer-page-react-pdf";

export const AngiBotPage = () => {
  const [items, setItems] = useState<Todo[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState(0);

  const resetInputs = () => {
    setItems([]);
    setName("");
    setPrice(0);
  };

  const [isPrint, setIsPrint] = useState(false);

  const printFile = () => {
    setIsPrint((prev) => !prev);
  };

  return (
    <div>
      <FormContainer>
        <FormField>
          <Label>Geben Sie den Namen des Kunden ein:</Label>
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Geben Sie den Namen des Kunden ein"
          />
        </FormField>

        {/* price */}
        <FormField>
          <Label>Geben Sie den Gesamtbetrag ein:</Label>
          <StyledInput
            value={price}
            onChange={(e) => setPrice(e.target.value as unknown as number)}
            placeholder="Geben Sie den Gesamtbetrag ein"
          />
        </FormField>

        {/* main services */}
        <TodoApp setTodos={setItems} todos={items} />
      </FormContainer>

      <Button
        onClick={printFile}
        style={{ backgroundColor: "#f17e01", color: "white" }}
      >
        {isPrint ? "Hide File" : "Show File"}
      </Button>

      {isPrint && (
        <OfferPageReactPdf
          items={items}
          name={name}
          price={price}
          resetInputs={resetInputs}
        />
      )}
    </div>
  );
};

// Styled-components
const FormContainer = styled.div`
  margin: 0 auto 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 18px;
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

const StyledInput = styled(Input)`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
  background-color: white;

  &:focus {
    border-color: #f17e01;
  }

  &::placeholder {
    color: #aaa;
  }
`;
