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
import { NotRequiresAuth, RequiresAuth } from "./utils";

function App() {
    const { theme } = useTheme();
    return (
        <div className={`App ${theme === "dark" ? "default-theme" : "light-theme"}`}>
            <header className="App-header">
                <Navbar />
                <Drawer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/singlevideo" element={<SingleVideo />} />
                    <Route
                        path="/login"
                        element={
                            <NotRequiresAuth>
                                <Login />
                            </NotRequiresAuth>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <NotRequiresAuth>
                                <Signup />
                            </NotRequiresAuth>
                        }
                    />
                    <Route
                        path="/playlist"
                        element={
                            <RequiresAuth>
                                <Playlist />
                            </RequiresAuth>
                        }
                    />
                    <Route
                        path="/history"
                        element={
                            <RequiresAuth>
                                <History />
                            </RequiresAuth>
                        }
                    />
                    <Route
                        path="/liked"
                        element={
                            <RequiresAuth>
                                <Liked />
                            </RequiresAuth>
                        }
                    />
                    <Route
                        path="/watchlater"
                        element={
                            <RequiresAuth>
                                <WatchLater />
                            </RequiresAuth>
                        }
                    />
                </Routes>
            </header>
        </div>
    );
}

export default App;
