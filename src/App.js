import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Home";
import CityPage from "./pages/Cities";
import Location from "./pages/Location";
import HotelDetailPage from "./pages/HotelDetailPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/app.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/city">
            <CityPage />
          </Route>
          <Route exact path="/hotels">
            <Location />
          </Route>
          <Route path="/hotels/:id">
            <HotelDetailPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
