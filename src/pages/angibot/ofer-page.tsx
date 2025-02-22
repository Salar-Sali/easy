import styled from "styled-components";
import dayjs from "dayjs";
import { Todo } from "~/pages/angibot/angibot-items";

interface OfferPageProps {
  items: Todo[];
  price?: number;
  name: string;
}
const OfferPage: React.FC<OfferPageProps> = ({
  items,
  price,
  name = false,
}) => {
  const today = dayjs().format("YYYY-MM-DD");

  return (
    <Container>
      <Header>
        <div>
          <CompanyName>Fast Transport</CompanyName>
          <DocumentType>Angebot</DocumentType>
          <Date>{today}</Date>
        </div>
        <Logo src="/logo.png" alt="Fast Transport Logo" />
      </Header>
      <Intro>
        <strong>Lieber:</strong> {name} <br />
        <br />
        Es freut uns sehr, Ihnen dieses spannende Angebot zu unterbreiten, und
        wir sind gespannt auf die bevorstehende Zusammenarbeit mit Ihnen. Unser
        Team ist voll und ganz darauf ausgerichtet, hochwertige Dienstleistungen
        zu erbringen, die sorgfältig auf Ihre spezifischen Bedürfnisse und
        Anforderungen zugeschnitten sind. Unser Ziel ist es, Ihre Erwartungen zu
        übertreffen und eine starke, langfristige Partnerschaft aufzubauen, die
        auf Vertrauen, Professionalität und außergewöhnlichen Ergebnissen
        basiert. Wir freuen uns auf eine erfolgreiche Zusammenarbeit und sind
        überzeugt, dass unsere gemeinsamen Bemühungen zu großartigen Erfolgen
        führen werden.
      </Intro>
      <Section>
        <SectionTitle>Dieses Angebot enthält: </SectionTitle>
        <ol>
          {items.map((item) => (
            <ListItem key={item.id}>{item.text}</ListItem>
          ))}
        </ol>
      </Section>
      <Section>
        <SectionTitle>Gesamtbetrag: </SectionTitle>
        <Price>{price} €</Price>
      </Section>
      <Section>
        <SectionTitle>
          Überprüfen Sie alle unsere Dienstleistungen:
        </SectionTitle>
        <ol>
          <ListItem>Umzug</ListItem>
          <ListItem>Möbeltaxi</ListItem>
          <ListItem>Firmenumzug</ListItem>
          <ListItem>Hartz4-Umzug</ListItem>

          <ListItem>Regionaler Umzug</ListItem>
          <ListItem>Umzug bundesweit</ListItem>
          <ListItem>Senioren Umzüge</ListItem>
          <ListItem>Ein- und Auspackservice</ListItem>

          <ListItem>Möbelmontage und -demontage</ListItem>

          <ListItem>Entrümpelung</ListItem>
          <ListItem>Wohnungsauflösung</ListItem>
          <ListItem>Sperrmüll entsorgen</ListItem>
        </ol>
        <MoreInfo>
          Find more details on our website:{" "}
          <a
            href="https://umzug-fasttransport.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            umzug-fasttransport.com
          </a>
        </MoreInfo>
      </Section>
    </Container>
  );
};

export default OfferPage;

const Container = styled.div`
  width: 80%;
  margin: 100px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const CompanyName = styled.h1`
  font-size: 48px;
  margin: 0;
`;

const DocumentType = styled.p`
  font-size: 36px;
  margin: 5px 0;
`;

const Date = styled.p`
  font-size: 36px;
  color: #777;
`;

const Logo = styled.img`
  height: 200px;
`;

const Intro = styled.p`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: justify;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  font-size: 32px;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 42px;
  font-weight: bold;
  color: #f17e01;
`;

const MoreInfo = styled.p`
  font-size: 32px;
  margin-top: 10px;
`;

export { OfferPage };
