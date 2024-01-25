import { Navigate, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, LoginPage, Navbar } from "./";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
    return (
        // This Component called 'UserProvider' we'll need to set as the Fragment of the Main/Father Component
        <UserProvider>
            <h1>MainApp</h1>

            <Navbar/>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>

        </UserProvider>
    )
}
