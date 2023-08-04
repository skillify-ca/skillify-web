import { Text, View } from "@react-pdf/renderer";
import { ResumePDFSection } from "./ParentComponents/ResumeComponents"
import type { ResumeProfile } from "../redux_lib/types";

export const ResumePDFProfile = ({ profile, }: {
  profile: ResumeProfile;
}) => {
  const { name, email, phone, url, location } = profile;
  // const iconProps = { email, phone, location, url };

  return (
    <ResumePDFSection style={{ marginTop: "12pt" }}>
      <View style={{ textAlign: 'center' }} >
        <Text style={{ fontWeight: "bold", fontSize: "20pt" }}>
          {name}
        </Text>
      </View>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginTop: "10pt" }}>
        <Text style={{ fontWeight: "normal", fontSize: "12pt" }}>
          {email}
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: "12pt" }}>
          {phone}
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: "12pt" }}>
          {url}
        </Text>
      </View>
    </ResumePDFSection>
  );
};
