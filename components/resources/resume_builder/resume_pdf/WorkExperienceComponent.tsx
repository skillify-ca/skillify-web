import { Text, View } from "@react-pdf/renderer";
import { ResumePDFSection } from "./ParentComponents/ResumeComponents"
import type { ResumeWorkExperience } from "../redux_lib/types";

export const ResumePDFWorkExperience = ({ workExperiences, }: {
    workExperiences: ResumeWorkExperience;
}) => {

    const { company, jobTitle, date, descriptions1, descriptions2 } = workExperiences;

    return (
        <ResumePDFSection>
        <View style={{ display: "flex", flexDirection: "row", marginTop: "10pt" }}>
          <Text style={{ fontWeight: "bold", fontSize: "13pt" }}>Work Experience</Text>
        </View>
  
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Text style={{ fontWeight: "normal" }}>
            {company + " - " +jobTitle}
          </Text>
          <Text>{date}</Text>
        </View>
  
        <View style={{display: "flex", flexDirection: "row", }}>
          <Text style={{ paddingLeft: "6pt", paddingRight: "6pt", lineHeight: "1.3", fontWeight: "bold"}}>{"•"}</Text>
          <Text>{descriptions1}</Text>
        </View>
        <View style={{display: "flex", flexDirection: "row", }}>
          <Text style={{ paddingLeft: "6pt", paddingRight: "6pt", lineHeight: "1.3", fontWeight: "bold"}}>{"•"}</Text>
          <Text>{descriptions2}</Text>
        </View>
        
      </ResumePDFSection>
    );
}