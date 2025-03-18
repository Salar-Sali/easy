import { Button, Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";
import { mainOperationsEndpoint } from "~/bootstrap/helper/endpoints";
import MainHeader from "~/generic/header/main-header";
import TodoApp, { Todo } from "~/pages/angibot/angibot-items";
import OrganizedOfferPage from "~/pages/angibot/organized-offer-page";

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

  const printFile = async () => {
    setIsPrint((prev) => !prev);

    const dataToSend = {
      customerName: name,
      price,
      mainServices: items.map((item) => item.text),
    };

    try {
      const response = await axios.post(
        `${mainOperationsEndpoint.createOffer}`,
        dataToSend
      );
      console.log("Data successfully sent:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <MainHeader />
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
        <Button
          onClick={printFile}
          style={{ backgroundColor: "#35393a", color: "white" }}
        >
          {isPrint ? "Hide File" : "Show File"}
        </Button>
      </FormContainer>

      {isPrint && (
        <OrganizedOfferPage
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
