import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Landingpage from "./Components/Screens/Landingpage/Landingpage";

function App() {
  return (
    <>
      <div>
        <Header />

        <main>
          <Landingpage />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
