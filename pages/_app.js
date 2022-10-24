import "../styles/globals.css";
//import all components from the components folder
import { Nav, Footer } from "../components";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
