import { View, Text, StyleSheet, Font } from "@react-pdf/renderer";
import dayjs from "dayjs";
import { memo, useMemo } from "react";
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

interface Props {
  name: string;
  price: number;
}

const OfferDetailsSection = ({ name, price }: Props) => {
  const today = useMemo(() => dayjs().format("DD.MM.YYYY"), []);

  return (
    <View style={styles.container}>
      {/* Left Column */}
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.label}>Kundenname:</Text>
          <Text>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Straßenadresse:</Text>
          <Text>Holzsägerstr. 1</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ort und Postleitzahl:</Text>
          <Text>26721 Emden</Text>
        </View>
      </View>

      {/* Right Column */}
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.label}>Angebotsnummer:</Text>
          <Text>1145</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Angebotsdatum:</Text>
          <Text>{today}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gesamtpreis:</Text>
          <Text style={{ color: `${logoColorOrange}` }}>{price} €</Text>
        </View>
      </View>
    </View>
  );
};

export default OfferDetailsSection;
export const MemoizedOfferDetailsSection = memo(OfferDetailsSection);
