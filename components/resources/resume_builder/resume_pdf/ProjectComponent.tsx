import { Text, View } from "@react-pdf/renderer";
import { ResumePDFSection } from "./ParentComponents/ResumeComponents"
import type { ResumeProject } from "../redux_lib/types";

export const ResumePDFProject = ({ profile, }: { profile: ResumeProject; }) => {
  const { project, date, descriptions } = profile;

  return (
    <ResumePDFSection>
      <View style={{ display: "flex", flexDirection: "row", marginTop: "10pt" }}>
        <Text style={{ fontWeight: "bold", fontSize: "13pt" }}>Project Experience</Text>
      </View>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Text style={{ fontWeight: "normal" }}>
          {project}
        </Text>
        <Text>{date}</Text>
      </View>

      <View style={{display: "flex", flexDirection: "row", }}>
        <Text style={{ paddingLeft: "6pt", paddingRight: "6pt", lineHeight: "1.3", fontWeight: "bold"}}>{"•"}</Text>
        <Text>{descriptions}</Text>
      </View>
      
    </ResumePDFSection>
  );
};
