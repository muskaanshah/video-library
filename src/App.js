import { Routes, Route } from "react-router-dom";

import { Drawer } from "./components/Drawer/Drawer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home, Explore, SingleVideo } from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Drawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/singlevideo" element={<SingleVideo />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
