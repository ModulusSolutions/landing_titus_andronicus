
import ParentBanner from "./component/board/ParentBanner";
import Home from "./component/body/Home";
import Card from "./component/card/Card";
import Footer from "./component/footer/Footer";
import Footerprev from "./component/footer/Footerprev";
import Meet from "./component/meet/Meet";
import Nav from "./component/nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <ParentBanner />
      <Meet />
      <Card />
      <Footerprev />
      <Footer/>
    </div>
  );
}

export default App;
