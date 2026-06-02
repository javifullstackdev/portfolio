import { StyleSheet } from "@react-pdf/renderer";

/** Estilo ATS: una columna, Helvetica, poco color, texto seleccionable. */
export const colors = {
  text: "#111111",
  muted: "#444444",
  accent: "#111111",
  rule: "#cccccc",
};

export const cvStyles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 36,
    paddingHorizontal: 42,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: colors.text,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  nameBlock: {
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.25,
    marginBottom: 6,
  },
  role: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.35,
    marginBottom: 0,
  },
  contactBlock: {
    gap: 2,
  },
  contactLine: {
    fontSize: 9,
    color: colors.text,
  },
  contactLabel: {
    fontFamily: "Helvetica-Bold",
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.rule,
  },
  paragraph: {
    fontSize: 10,
    textAlign: "left",
    marginBottom: 3,
  },
  skillCategory: {
    marginBottom: 4,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    marginBottom: 1,
  },
  skillList: {
    fontSize: 9,
    lineHeight: 1.4,
  },
  entry: {
    marginBottom: 7,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
  },
  entryTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    flex: 1,
  },
  projectTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  entryPeriod: {
    fontSize: 9,
    color: colors.muted,
    flexShrink: 0,
  },
  entryOrg: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  bullet: {
    fontSize: 9,
    marginBottom: 2,
    paddingLeft: 6,
  },
  stackLine: {
    fontSize: 9,
    color: colors.muted,
    marginTop: 1,
  },
  link: {
    fontSize: 9,
    color: colors.text,
    marginTop: 1,
  },
});
