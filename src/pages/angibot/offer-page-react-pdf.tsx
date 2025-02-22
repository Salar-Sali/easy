import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import { footerStyles } from "~/pages/angibot/style";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
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
    color: "#35393a",
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

export const MyDocument = () => {
  const items = [
    { id: 1, text: " Kompletter Pack- und Auspackservice" },
    { id: 2, text: "Möbelmontage und -demontage" },
    { id: 3, text: "Spezialgutbeförderung" },
    { id: 4, text: "Kurz- und Langzeitlagerlösungen" },
  ];
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* header start */}
        <View>
          <Image style={styles.image} src="/logo.png" />
        </View>

        {/* company in rectangle */}
        <View style={styles.header}>
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
              <Text style={styles.value}>20.2.2025</Text>
            </View>
          </View>
          {/* Company data section - end */}

          {/* offer data section - start */}
          <View style={styles.keyValueSection}>
            <Text style={styles.title}>Angebotsdaten</Text>
            <View style={styles.keyValueRow}>
              <Text style={styles.key}>Angebotsnummer</Text>
              <Text style={styles.value}>1441</Text>
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
                1451 €
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
              {items.map((item) => (
                <Text key={item.id} style={{ lineHeight: "1" }}>
                  {item.id}. {item.text}
                </Text>
              ))}
            </ol>
            {/* inluded services - end */}
          </View>
          <View style={styles.keyValueSection}>
            {/* inluded services - start */}
            <Text style={styles.title}>Zusätzliche Leistungen</Text>
            <ol>
              {items.map((item) => (
                <Text key={item.id} style={{ lineHeight: "1" }}>
                  {item.id}. {item.text}
                </Text>
              ))}
            </ol>
            {/* inluded services - end */}
          </View>
          {/* main and additional services - end */}
        </View>
        {/* body end */}

        {/* Footer */}
        <View style={styles.footer}>
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
const DownloadPDF = () => {
  return (
    <div>
      <h2>Download Component as PDF</h2>
      {/* PDF Preview */}
      <PDFViewer style={{ width: "100%", height: "800px" }}>
        <MyDocument />
      </PDFViewer>

      <PDFDownloadLink document={<MyDocument />} fileName="my-document.pdf">
        {({ loading }) => (
          <button>{loading ? "Generating PDF..." : "Download PDF"}</button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadPDF;
