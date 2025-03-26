import { Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";
import { mainOperationsEndpoint } from "~/bootstrap/helper/endpoints";
import {
  mediumScreenSize,
  largeScreenSize,
  extraLargeScreenSize,
  removeLettersFromString,
} from "~/bootstrap/helper/global-helper";
import { StyledMainButton } from "~/bootstrap/helper/global-styles";
import { LANGS } from "~/bootstrap/i18n/init-i18n";
import langKey from "~/bootstrap/i18n/langKey";
import MainHeader from "~/generic/header/main-header";
import TodoApp, { Todo } from "~/pages/angibot/angibot-items";
import OrganizedOfferPage from "~/pages/angibot/organized-offer-page";

export const AngiBotPage = () => {
  const [items, setItems] = useState<Todo[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const resetInputs = () => {
    setItems([]);
    setName("");
    setPrice("");
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
      await axios.post(`${mainOperationsEndpoint.createOffer}`, dataToSend);
      /**
       * @todo uncomment this to send an email
       */
      // sendEmail({ name, price, items: items.map((item) => item.text) });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const { t,i18n } = useTranslation();
  const direction = i18n.language === LANGS.AR ? "rtl" : "ltr";
  return (
    <div>
      <MainHeader />
      <FormContainer dir={direction}>
        <FormField>
          <Label>{t(langKey.offerEntryPage.customerName)}</Label>
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t(langKey.offerEntryPage.customerName)}
          />
        </FormField>

        {/* price */}
        <FormField>
          <Label>{t(langKey.offerEntryPage.totalPrice)}</Label>
          <StyledInput
            value={removeLettersFromString(price as unknown as string) ?? ""}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={t(langKey.offerEntryPage.totalPrice)}
          />
        </FormField>

        {/* main services */}
        <TodoApp setTodos={setItems} todos={items} />
        <StyledMainButton onClick={printFile}>
          {isPrint ? t(langKey.global.hideFile) : t(langKey.global.showFile)}
        </StyledMainButton>
      </FormContainer>

      {isPrint && (
        <OrganizedOfferPage
          items={items}
          name={name}
          price={Number(price) ?? 0}
          resetInputs={resetInputs}
        />
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    style                                   */
/* -------------------------------------------------------------------------- */
const FormContainer = styled.div`
  margin: 10px auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  @media (min-width: ${mediumScreenSize}) {
    width: 90%;
  }
  @media (min-width: ${largeScreenSize}) {
    width: 75%;
  }
  @media (min-width: ${extraLargeScreenSize}) {
    width: 60%;
  }
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
