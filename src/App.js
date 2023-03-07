import "./App.scss";
import { BrowserRouter } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
