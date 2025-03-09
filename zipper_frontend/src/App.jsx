import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MyNotes from "./Components/MyNotes/MyNotes";
import Landingpage from "./Components/Screens/Landingpage/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" Component={Landingpage} />
          <Route path="/mynotes" Component={MyNotes} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
