import Button from "@mui/material/Button/Button";
import {
  Document,
  Font,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import { logoColorOrange } from "~/bootstrap/helper/global-styles";
import { Todo } from "~/pages/angibot/angibot-items";
import ClosingSection from "~/pages/angibot/document-components/closing-section";
import AngibotHeaderSection from "~/pages/angibot/document-components/header-section";
import OfferIntroductionSection from "~/pages/angibot/document-components/introduction-section";
import OfferDetailsSection from "~/pages/angibot/document-components/offer-detailes-section";
import ServicesSection from "~/pages/angibot/document-components/services-section";
import { footerStyles } from "~/pages/angibot/style";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/roboto/Roboto-Regular.ttf" },
    { src: "/fonts/roboto/Roboto-Bold.ttf", fontWeight: "bold" },
  ],
});
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    paddingBottom: 90,
  },

  content: {
    flexGrow: 1,
    fontSize: 12,
    textAlign: "left",
  },

  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "grey",
  },
});

export const MyDocument = ({
  items,
  price,
  name,
}: Omit<OfferPageProps, "resetInputs">) => {
  const today = dayjs().format("DD.MM.YYYY");
  console.log("just print", items, price, name, today);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <AngibotHeaderSection />
        <OfferDetailsSection />
        <OfferIntroductionSection />
        <ServicesSection services={["one1", "two"]} title="Main services:" />
        <ServicesSection
          services={["one1", "two"]}
          title="Additional services:"
        />
        <ClosingSection />

        {/* Footer */}
        <View style={styles.footer} fixed>
          {/* Four-Column Section */}
          <View style={styles.content}>
            <View style={footerStyles.columnSection}>
              {/* Headers */}
              <View style={footerStyles.columnHeader}>
                <Text style={footerStyles.columnHeaderText}>
                  Fast Transport
                </Text>
                <Text style={footerStyles.columnHeaderText}>Kontaktdaten</Text>
                <Text style={footerStyles.columnHeaderText}>
                  Bankverbindung
                </Text>
                <Text style={footerStyles.columnHeaderText}>Information</Text>
              </View>

              {/* Data Rows */}
              {[
                [
                  "Inh. Ahmad Alhaj Abdullah",
                  "Tel.: 0157 71435952",
                  "IBAN: DE26 1005 0000 0191 3592 46",
                  "St. Nr.: 69/101/02561",
                ],
                [
                  "Stau 123 26122 Oldenburg",
                  "E-Mail:Fast_transport@web.de",
                  "BIC: BELADEBEXXX",
                  "USt-IdNr.: DE368155037",
                ],
              ].map((row, index) => (
                <View key={index} style={footerStyles.columnRow}>
                  <Text style={footerStyles.columnText}>{row[0]}</Text>
                  <Text style={footerStyles.columnText}>{row[1]}</Text>
                  <Text style={footerStyles.columnText}>{row[2]}</Text>
                  <Text
                    style={{ ...footerStyles.columnText, marginLeft: "12" }}
                  >
                    {row[3]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* Footer - end */}
      </Page>
    </Document>
  );
};

// Main component with download button
interface OfferPageProps {
  items: Todo[];
  price?: number;
  name: string;
  resetInputs: () => void;
}

const OrganizedOfferPage = ({
  items,
  price,
  name,
  resetInputs,
}: OfferPageProps) => {
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "1000px" }}>
        <MyDocument items={items} name={name} price={price} />
      </PDFViewer>
      <PDFDownloadLink
        document={<MyDocument items={items} name={name} price={price} />}
        fileName="angibot.pdf"
      >
        {({ loading }) => (
          <Button
            style={{ backgroundColor: `${logoColorOrange}`, color: "white" }}
            onClick={() => resetInputs()}
          >
            {loading ? "PDF generieren..." : "Herunterladen PDF"}
          </Button>
        )}
      </PDFDownloadLink>
    </>
  );
};

export default OrganizedOfferPage;
