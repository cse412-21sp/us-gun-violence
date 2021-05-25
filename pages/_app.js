import GlobalStyles from "./../styles/GlobalStyles";
import "antd/dist/antd.css";
import "../styles/globe.css";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
