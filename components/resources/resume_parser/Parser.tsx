import { Provider } from 'react-redux'
import { store } from "./redux/store";

import { Test_parser } from "./test";

export const Parser_Top = () => {

    return (
        <Provider store={store}>
            <Test_parser />
        </Provider>
    );

};