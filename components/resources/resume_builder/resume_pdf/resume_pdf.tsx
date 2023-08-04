import React from 'react';
import { ResumePDFProfile } from "./ProfileComponent";
import { ResumePDFEducation } from "./EducationComponent";
import { ResumePDFWorkExperience } from "./WorkExperienceComponent"
import { ResumePDFProject } from "./ProjectComponent";

import { Page, View, Document } from "@react-pdf/renderer";
import type { Settings } from "../redux_lib/settingSlice"
import { DownloadButton } from "./DownloadButton";
import type { Resume } from "../redux_lib/types"


export const ResumePDF = ({ resume, settings, }: { resume: Resume; settings: Settings; }) => {

    const { profile, workExperiences, educations, projects } = resume;
    const { fontFamily } = settings;

    const fontSize = 12;

    return (
        <Document>
            <Page size="A4"
                style={{ display: "flex", flexDirection: "column", height: "80vh", width: "50vw", backgroundColor: "#fcfcfc", color: "#171717", fontFamily, fontSize: "12pt", }}>
                <View
                    style={{ display: "flex", flexDirection: "column", padding: "60pt", }}>
                    <ResumePDFProfile profile={profile} />
                    <ResumePDFEducation profile={educations} />
                    <ResumePDFWorkExperience workExperiences={workExperiences} />
                    <ResumePDFProject profile={projects} />
                </View>
            </Page>
        </Document>
    );
}