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
    width: 120,
    height: 100,
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
          Zuverlässige und schnelle Umzugsdienste
        </Text>
        <Text style={styles.companyDetails}>
          Stau 123 Oldenburg 26122 | +49 1577 1435952
        </Text>
      </View>

      {/* Right Side: Logo */}
      <Image style={styles.image} src="/logo.png" />
    </View>
    {/* Header end */}
  </>
);

export default AngibotHeaderSection;
export const MemoizedAngibotHeaderSection = memo(AngibotHeaderSection);
