import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main id="main">
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
