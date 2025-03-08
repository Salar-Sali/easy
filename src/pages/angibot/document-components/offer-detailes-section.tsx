import { View, Text, StyleSheet, Font } from "@react-pdf/renderer";
import {
  logoColorDark,
  mainSecionsMargin,
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
    flexDirection: "row",
    justifyContent: "space-between",
    margin: mainSecionsMargin,
  },
  column: {
    flexDirection: "column",
    flex: 1,
    color: logoColorDark,
    fontSize: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },
  label: {
    fontFamily: "Roboto",
    fontSize: 10,
    fontWeight: "bold",
    marginRight: 4,
  },
});

const OfferDetailsSection = () => (
  <View style={styles.container}>
    {/* Left Column */}
    <View style={styles.column}>
      <View style={styles.row}>
        <Text style={styles.label}>Client Name:</Text>
        <Text>Jhon Snow</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Client Address:</Text>
        <Text>Berlin, 16</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Client Street:</Text>
        <Text>26721 Emden</Text>
      </View>
    </View>

    {/* Right Column */}
    <View style={styles.column}>
      <View style={styles.row}>
        <Text style={styles.label}>Offer Number:</Text>
        <Text>1145</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Offer Date:</Text>
        <Text>20.02.2025</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Total Price:</Text>
        <Text>1100,00 Euro</Text>
      </View>
    </View>
  </View>
);

export default OfferDetailsSection;
