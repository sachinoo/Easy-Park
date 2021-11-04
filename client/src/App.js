/* eslint-disable */

import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Navbar";
import Home from "./pages/homePage/Home";
import About from "./pages/aboutPage/About";
import Guest from "./pages/guestPage/Guest";
import Errorpage from "./pages/Errorpage";
import User from "./pages/accountPage/User";
import Contact_Us from "./pages/contactPage/Contact_Us";
import Account from "./pages/accountPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/accountPage/LoginScreen";
import Logout from "./pages/accountPage/LoginScreen";
import Signup from "./pages/accountPage/RegisterScreen";
import LandingPage from "./pages/accountPage/LandingPage";
import Management from "./pages/accountPage/ManagementLogin";
import ManagementView from "./pages/accountPage/ManagementView";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/guest" exact component={Guest} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={Login} />
      <Route path="/managementview" exact component={ManagementView} />
      <Route path="/management" exact component={Management} />
      <Route path="/register" exact component={Signup} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/contact_us" exact component={Contact_Us} />
      <Route path="/user" exact component={User} />
      <Route path="/account" exact component={LandingPage} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
