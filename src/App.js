import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Alert } from "./components/Alert/Alert";
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
    IndividualPlaylist,
    PageNotFound,
    UserProfile,
} from "./pages";
import { NotRequiresAuth, RequiresAuth } from "./utils";

function App() {
    const { theme } = useTheme();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={`App ${theme === "dark" ? "default-theme" : "light-theme"}`}>
            <header className="App-header">
                <Navbar />
                <Alert />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/explore/:videoId" element={<SingleVideo />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route element={<NotRequiresAuth />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Route>
                    <Route element={<RequiresAuth />}>
                        <Route path="/playlist" element={<Playlist />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/liked" element={<Liked />} />
                        <Route path="/watchlater" element={<WatchLater />} />
                        <Route
                            path="/playlist/:playlistId"
                            element={<IndividualPlaylist />}
                        />
                        <Route path="/user" element={<UserProfile />} />
                    </Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
