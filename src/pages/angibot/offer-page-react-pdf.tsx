import Button from "@mui/material/Button/Button";
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import { Todo } from "~/pages/angibot/angibot-items";
import { footerStyles } from "~/pages/angibot/style";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    paddingBottom: 90,
  },
  image: { width: 135, marginLeft: 20 },

  content: {
    flexGrow: 1,
    fontSize: 12,
    textAlign: "left",
  },

  header: {
    backgroundColor: "#f17e01",
    height: 25,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "relative",
    width: "100%",
    paddingRight: 45,
  },

  headerTextContainer: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#35393a",
  },

  // start company and offer info
  title: {
    fontSize: 20,
    color: "#f17e01",
    marginBottom: 4,
  },
  keyValueSection: {
    marginTop: 12,
    marginHorizontal: 20,
  },
  keyValueRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  key: {
    fontWeight: "bold",
    width: "25%",
    color: "#fff",
    padding: 6,
    backgroundColor: "#35393a",
  },
  value: {
    padding: 6,
    backgroundColor: "#f0f0f0",
    width: "75%",
    color: "#333",
  },
  // end company and offer info

  // descriptionText
  descriptionText: {
    fontSize: 12,
    textAlign: "justify",
    marginTop: 15,
    marginHorizontal: 20,
    lineHeight: 1.5,
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
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* header start */}
        <View fixed>
          <Image style={styles.image} src="/logo.png" />
        </View>

        {/* company in rectangle */}
        <View style={styles.header} fixed>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Fast Transport</Text>
          </View>
        </View>
        {/* header end */}

        {/* body */}
        <View style={styles.content}>
          {/* Company data section - start */}
          <View style={styles.keyValueSection}>
            <Text style={styles.title}>Firmendaten</Text>
            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Firmenname</Text>
              <Text style={styles.value}>Fast Transport</Text>
            </View>

            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Firmenadresse</Text>
              <Text style={styles.value}>Stau 123, 26122 Oldenburg</Text>
            </View>

            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Dokumenttyp</Text>
              <Text style={styles.value}>Angibot</Text>
            </View>
            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Datum</Text>
              <Text style={styles.value}>{today}</Text>
            </View>
          </View>
          {/* Company data section - end */}

          {/* offer data section - start */}
          <View style={styles.keyValueSection}>
            <Text style={styles.title}>Angebotsdaten</Text>
            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Angebotsnummer</Text>
              <Text style={styles.value}>{name}</Text>
            </View>

            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Adresse</Text>
              <Text style={styles.value}>
                Ortsumzug Am Herrentorswall 10, 26725 Emden
              </Text>
            </View>

            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Gesamtpreis</Text>
              <Text
                style={{
                  backgroundColor: "#f17e01",
                  width: "75%",
                  padding: "6px",
                  color: "white",
                }}
              >
                {price} €
              </Text>
            </View>
          </View>
          {/* offer data section - end */}

          {/* description text - start */}
          <Text style={styles.descriptionText}>
            Sehr geehrter geschätzter Kunde,{"\n"}
            Vielen Dank, dass Sie sich für Fast Transport für Ihre
            Umzugsbedürfnisse entschieden haben. Wir freuen uns, Ihnen bei einem
            reibungslosen und stressfreien Umzug zu helfen. Dieses Angebot
            umfasst die folgenden Dienstleistungen, die sorgfältig
            zusammengestellt wurden, um Ihnen ein effizientes und angenehmes
            Erlebnis zu gewährleisten.
          </Text>
          {/* description text - end */}

          {/* main and additional services - start */}
          <View style={styles.keyValueSection}>
            {/* inluded services - start */}

            <Text style={styles.title}>Hauptleistungen</Text>
            <ol>
              {items.map((item, index) => (
                <Text key={item.id} style={{ lineHeight: "1" }}>
                  {index + 1}. {item.text}
                </Text>
              ))}
            </ol>
            {/* inluded services - end */}
          </View>
          <View style={styles.keyValueSection} wrap={false}>
            {/* inluded services - start */}
            <Text style={styles.title}>Zusätzliche Leistungen</Text>
            <ol>
              {items.map((item, index) => (
                <Text key={item.id} style={{ lineHeight: "1" }}>
                  {index + 1}. {item.text}
                </Text>
              ))}
            </ol>
            {/* inluded services - end */}
          </View>
          {/* main and additional services - end */}
        </View>
        {/* body end */}

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
                  <Text style={footerStyles.columnText}>{row[3]}</Text>
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

const OfferPageReactPdf = ({
  items,
  price,
  name,
  resetInputs,
}: OfferPageProps) => {
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "800px" }}>
        <MyDocument items={items} name={name} price={price} />
      </PDFViewer>
      <PDFDownloadLink
        document={<MyDocument items={items} name={name} price={price} />}
        fileName="angibot.pdf"
      >
        {({ loading }) => (
          <Button
            style={{ backgroundColor: "#f17e01", color: "white" }}
            onClick={() => resetInputs()}
          >
            {loading ? "PDF generieren..." : "Herunterladen PDF"}
          </Button>
        )}
      </PDFDownloadLink>
    </>
  );
};

export default OfferPageReactPdf;
