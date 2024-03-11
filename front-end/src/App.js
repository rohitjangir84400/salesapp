import { BrowserRouter as Router, Route, Routes , Switch } from "react-router-dom";
import AddSales from "./pages/addsalesscreen";
import Topsales from "./pages/topsalesscreen";
import TotalRevenue from "./pages/totalrevenuescreen";
import Login from "./pages/loginsccreen";
import Register from "./pages/registrationscreen";
import NavBar from "./components/navbar";
import Profile from "./pages/userProfile";

function App() {
  return (
    <>
      {/* defining routes for the application with its specific element that shout render on the screen  */}
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<AddSales/>} />
            <Route path="/topsales" element={<Topsales/>} />
            <Route path="/totalrevenue" element={<TotalRevenue/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
