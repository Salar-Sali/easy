import { View, Text, StyleSheet, Font } from "@react-pdf/renderer";
import {
  logoColorDark,
  logoColorOrange,
  mainSecionsMargin,
  textFontSize,
  titleFontSize,
  titlePaddingTop,
} from "~/bootstrap/helper/global-styles";

Font.register({
  family: "Roboto",
  fonts: [
    { src: "/fonts/roboto/Roboto-Regular.ttf" },
    { src: "/fonts/roboto/Roboto-Bold.ttf", fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  container: {
    margin: mainSecionsMargin,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: titleFontSize,
    fontWeight: "bold",
    color: logoColorOrange,
    marginBottom: 4,
    paddingTop: titlePaddingTop,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: textFontSize,
    color: logoColorDark,
    lineHeight: 1.4,
  },
});

const OfferIntroductionSection = () => (
  <View style={styles.container}>
    <Text style={styles.title}>ANGEBOT</Text>
    <Text style={styles.text}>
      Sehr geehrte Damen und Herren, wir bedanken uns herzlich für Ihre
      Umzugsanfrage und Ihr entgegengebrachtes Vertrauen. Im Folgenden möchten
      wir Ihnen unser Angebot präsentieren:
    </Text>
  </View>
);

export default OfferIntroductionSection;
