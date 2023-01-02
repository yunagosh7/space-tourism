import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Crew, Destinations, Home, Technology } from "./pages";
import { Navbar } from "./components/navbar";
import {DataContextProvider} from "./context/data/DataContext";

function App() {
  return (
    <>
      <DataContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destinations />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </Router>
      </DataContextProvider>
    </>
  );
}

export default App;
