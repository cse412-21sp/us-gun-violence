import GlobalStyles from "./../styles/GlobalStyles";
// import "antd/dist/antd.css";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
