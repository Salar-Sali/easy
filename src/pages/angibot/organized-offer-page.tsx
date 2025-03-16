import Button from "@mui/material/Button/Button";
import {
  Document,
  Font,
  Page,
  pdf,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { memo, useMemo } from "react";
import { Todo } from "~/pages/angibot/angibot-items";
import { MemoizedClosingSection } from "~/pages/angibot/document-components/closing-section";
import { MemoizedAngibotHeaderSection } from "~/pages/angibot/document-components/header-section";
import { MemoizedOfferIntroductionSection } from "~/pages/angibot/document-components/introduction-section";
import { MemoizedOfferDetailsSection } from "~/pages/angibot/document-components/offer-detailes-section";
import { MemoizedServicesSection } from "~/pages/angibot/document-components/services-section";
import WatermarkSection from "~/pages/angibot/document-components/watermark-section";
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

export const MyDocument = memo(
  ({ items, price, name }: Omit<OfferPageProps, "resetInputs">) => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <MemoizedAngibotHeaderSection />
          <MemoizedOfferDetailsSection name={name} price={price || 0} />
          <MemoizedOfferIntroductionSection />
          <MemoizedServicesSection services={items} title="Hauptleistungen:" />
          <MemoizedServicesSection
            services={items}
            title="Zusätzliche Leistungen:"
          />
          <MemoizedClosingSection />

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
                  <Text style={footerStyles.columnHeaderText}>
                    Kontaktdaten
                  </Text>
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
          <WatermarkSection />
        </Page>
      </Document>
    );
  }
);

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
  const handleDownload = async () => {
    const blob = await pdf(
      <MyDocument items={items} name={name} price={price} />
    ).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "angibot.pdf";
    link.click();
  };
  const memoizedDocument = useMemo(
    () => <MyDocument items={items} name={name} price={price} />,
    [items, name, price]
  );

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "1000px" }}>
        {memoizedDocument}
      </PDFViewer>
      <Button onClick={resetInputs}>Reset</Button>
      <Button onClick={handleDownload}>Download PDF</Button>
    </>
  );
};

export default OrganizedOfferPage;
