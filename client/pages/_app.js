import "../styles/globals.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from "react-dnd-html5-backend";

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={TouchBackend}>
      <Component {...pageProps} />
    </DndProvider>
  );
}

export default MyApp;
