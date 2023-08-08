import LandingNavbar from "../../../components/landingPage/LandingNavbar";
import { Provider } from 'react-redux'
import { store } from "../../../components/resources/resume_uploader/redux/store";
import { Uploader } from "../../../components/resources/resume_uploader/uploader"

export default function resume_uploader() {

    return (
        <Provider store={store}>
            <Uploader />
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