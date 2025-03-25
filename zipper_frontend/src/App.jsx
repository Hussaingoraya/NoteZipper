import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MyNotes from "./Components/MyNotes/MyNotes";
import Landingpage from "./Components/Screens/Landingpage/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./Components/Screens/Landingpage/LoginScreen/LoginScreen";
import RegisterScreen from "./Components/Screens/Landingpage/RegisterScreen/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" Component={Landingpage} />
          <Route path="/mynotes" Component={MyNotes} />
          <Route path="/login" Component={LoginScreen} />
          <Route path="/register" Component={RegisterScreen} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
