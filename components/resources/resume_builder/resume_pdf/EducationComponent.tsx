import { Text, View } from "@react-pdf/renderer";
import { ResumePDFSection } from "./ParentComponents/ResumeComponents"
import type { ResumeEducation } from "../redux_lib/types";

export const ResumePDFEducation = ({ profile, }: { profile: ResumeEducation; }) => {
  const { school, degree, gpa, date } = profile;

  return (
    <ResumePDFSection style={{ marginTop: "30pt" }}>
      <Text style={{ fontWeight: "bold", fontSize: "13pt" }}>
        {school}
      </Text>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginTop: "3pt" }}>
        <Text style={{ fontWeight: "normal", fontSize: "13pt" }}>
          {degree}
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: "13pt" }}>
          {date}
        </Text>
      </View>
    </ResumePDFSection>
  );
};