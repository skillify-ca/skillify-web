import { Text, View, Link } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";
import { styles } from "../styles";
import { DEFAULT_FONT_COLOR } from "../../redux_lib/settingSlice";

export const ResumePDFSection = ({ themeColor, heading, style = {}, children,}: {
  themeColor?: string;
  heading?: string;
  style?: Style;
  children: React.ReactNode;
}) => (
  <View
    style={{
      ...styles.flexCol,
      gap: "6pt",
      marginTop: "15pt",
      ...style,
    }}
  >
    {heading && (
      <View style={{ ...styles.flexRow, alignItems: "center" }}>
        {themeColor && (
          <View
            style={{
              height: "3.75pt",
              width: "30pt",
              backgroundColor: themeColor,
              marginRight: "10pt",
            }}
          />
        )}
        <Text
          style={{
            fontWeight: "bold",
            letterSpacing: "0.3pt", // tracking-wide -> 0.025em * 12 pt = 0.3pt
          }}
        >
          {heading}
        </Text>
      </View>
    )}
    {children}
  </View>
);