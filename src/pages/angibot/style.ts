import { StyleSheet } from "@react-pdf/renderer";

export const footerStyles = StyleSheet.create({
  columnSection: {
    borderTop: "1px solid #f17e01",
    marginTop: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
  },

  columnHeader: {
    flexDirection: "row",
    paddingBottom: 5,
    marginBottom: 5,
  },
  columnHeaderText: {
    flex: 1,
    color: "#000",
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
  },
});
