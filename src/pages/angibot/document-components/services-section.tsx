import { View, Text, StyleSheet, Font } from "@react-pdf/renderer";
import {
  logoColorOrange,
  mainSecionsMargin,
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
    paddingTop:titlePaddingTop, 
  },
  listItem: {
    fontFamily: "Roboto",
    fontSize: 10,
    color: "#35393a",
    marginBottom: 4,
    paddingLeft: 8,
  },
});

type Props = {
  services: string[];
  title: string;
};

const ServicesSection: React.FC<Props> = ({ services, title }) => {
  if (services.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {services.map((service, index) => (
        <Text key={index} style={styles.listItem}>
          {index + 1}. {service}
        </Text>
      ))}
    </View>
  );
};

export default ServicesSection;
