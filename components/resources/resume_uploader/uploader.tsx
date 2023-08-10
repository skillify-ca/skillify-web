import { FileUpload } from "./fileUpload"
import { JobDescription } from "./jobDescription"
import { ResumeDrop } from "./resumeDrop";

export const Uploader = () => {

    return (
        <div className="m-10 grid-row-2 h-screen">
            <ResumeDrop />
            <JobDescription/>
        </div>
    );
}