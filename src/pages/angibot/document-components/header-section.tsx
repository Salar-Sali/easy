import { View, Text, Image, StyleSheet, Font } from "@react-pdf/renderer";
import {
  logoColorDark,
  logoColorOrange,
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: mainSecionsMargin,
    borderBottom: `1px solid ${logoColorOrange}`,
  },
  companyInfo: {
    flexDirection: "column",
    gap: 4,
  },
  companyName: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: logoColorOrange,
  },
  companyDetails: {
    fontSize: 10,
    color: logoColorDark,
  },
  image: {
    width: 100,
    height: 80,
  },
});

const AngibotHeaderSection = () => (
  <>
    {/* Header start */}
    <View style={styles.headerContainer} fixed>
      {/* Left Side: Company Info */}
      <View style={styles.companyInfo}>
        <Text style={styles.companyName}>Fast Transport</Text>
        <Text style={styles.companyDetails}>
          Reliable and Fast Moving Services
        </Text>
        <Text style={styles.companyDetails}>
          +123-456-7890 | info@fasttransport.com
        </Text>
      </View>

      {/* Right Side: Logo */}
      <Image style={styles.image} src="/logo.png" />
    </View>
    {/* Header end */}
  </>
);

export default AngibotHeaderSection;
