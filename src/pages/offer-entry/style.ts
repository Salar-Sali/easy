import { StyleSheet } from "@react-pdf/renderer";
import {
  logoColorDark,
  logoColorOrange,
  mainSecionsMargin,
} from "~/bootstrap/helper/global-styles";

export const footerStyles = StyleSheet.create({
  columnSection: {
    borderTop: `1px solid ${logoColorOrange}`,
    marginTop: 15,
    marginHorizontal: mainSecionsMargin,
    paddingVertical: 10,
  },

  columnHeader: {
    flexDirection: "row",
    paddingBottom: 5,
    marginBottom: 5,
  },
  columnHeaderText: {
    flex: 1,
    color: logoColorDark,
    fontSize: 12,
    textAlign: "left",
  },
  columnRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  columnText: {
    flex: 1,
    fontSize: 8,
    marginRight: 8,
  },
});
