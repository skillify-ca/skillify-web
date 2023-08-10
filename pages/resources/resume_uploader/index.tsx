import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import { Provider } from 'react-redux'
import { store } from "../../../components/resources/resume_uploader/redux/store";
import { Uploader } from "../../../components/resources/resume_uploader/uploader"
import { ResumeDisplay } from "../../../components/resources/resume_uploader/resumeDisplay";

export default function resume_uploader() {

    return (
        <Provider store={store}>
            <div className="h-screen grid md:grid-cols-6">
                <div className="col-span-3">
                    <Uploader />
                </div>
                <div className="col-span-3">
                    <ResumeDisplay />
                </div>
            </div>
        </Provider>
    )
};

resume_uploader.getLayout = function getLayout(page) {
    return (
        <div className="theme-default">
            <LandingNavbar />
            {page}
        </div>
    );
};