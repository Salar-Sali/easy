import { View, Text, StyleSheet, Font } from "@react-pdf/renderer";
import { memo } from "react";
import {
  logoColorDark,
  mainSecionsMargin,
} from "~/bootstrap/helper/global-styles";

// Register TTF fonts
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
    fontSize: 10,
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    color: logoColorDark,
  },

  signature: {
    fontWeight: "bold",
  },
});

const ClosingSection = () => (
  <View style={styles.container}>
    <Text>Mit freundlichen Grüßen,</Text>
    <Text style={styles.signature}>Ihr Fast Transport</Text>
  </View>
);

export default ClosingSection;
export const MemoizedClosingSection = memo(ClosingSection);
