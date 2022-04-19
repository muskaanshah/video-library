import { Routes, Route } from "react-router-dom";

import { Drawer } from "./components/Drawer/Drawer";
import { Navbar } from "./components/Navbar/Navbar";
import { useTheme } from "./context";
import {
    Home,
    Explore,
    SingleVideo,
    Playlist,
    Login,
    Signup,
    History,
    Liked,
    WatchLater,
} from "./pages";

function App() {
    const { theme } = useTheme();
    return (
        <div
            className={`App ${
                theme === "dark" ? "default-theme" : "light-theme"
            }`}
        >
            <header className="App-header">
                <Navbar />
                <Drawer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/singlevideo" element={<SingleVideo />} />
                    <Route path="/playlist" element={<Playlist />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/liked" element={<Liked />} />
                    <Route path="/watchlater" element={<WatchLater />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
