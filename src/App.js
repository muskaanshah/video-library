import { Routes, Route } from "react-router-dom";

import { Drawer } from "./components/Drawer/Drawer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Drawer />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
