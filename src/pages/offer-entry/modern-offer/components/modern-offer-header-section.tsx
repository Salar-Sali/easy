import { View, Text, Image, StyleSheet, Font } from "@react-pdf/renderer";
import { memo } from "react";
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
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: logoColorOrange,
  },
  logoContainer: {
    alignItems: "center",
    marginRight: 10, // Add a bit of space from the center
  },
  logo: {
    width: 100,
    height: 80,
  },
  boldText: {
    fontFamily: "Roboto",
    fontSize: 8,
    fontWeight: "bold",
    color: logoColorOrange,
    marginTop: -15,
  },
  companyInfo: {
    alignItems: "center",
  },
  companyName: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    color: logoColorOrange,
  },
  companyDetails: {
    fontSize: 10,
    color: logoColorDark,
    marginTop: 2,
  },
  qrCode: {
    width: 60,
    height: 60,
  },
});

const ModernOfferHeaderSection = () => (
  <View style={styles.headerContainer} fixed>
    {/* Left Side: Logo + Bold Text */}
    <View style={styles.logoContainer}>
      <Image style={styles.logo} src="/logo.png" />
      <Text style={styles.boldText}>Stau 123, 26122 Oldenburg</Text>
    </View>

    {/* Center: Company Info */}
    <View style={styles.companyInfo}>
      <Text style={styles.companyName}>FAST TRANSPORT</Text>
      <Text style={styles.companyDetails}>
        Zuverlässige und schnelle Umzugsdienste
      </Text>
    </View>

    {/* Right Side: QR Code */}
    <Image style={styles.qrCode} src="/qrcode.png" />
  </View>
);

export default ModernOfferHeaderSection;
export const MemoizedModernOfferHeaderSection = memo(ModernOfferHeaderSection);
