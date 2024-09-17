import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NewsViewPage from "./components/NewsViewPage";
import 'bootstrap'
import SubscriptionPage from "./components/SubscriptionPage";
import Register from "./components/Signup-page/Signup";
import Login from "./components/user/Login";
function App() {
  return (
    <div className="container-fulid">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsViewPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
