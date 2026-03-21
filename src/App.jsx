import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./Components/Header/Header";
import UsersPage from "./pages/UsersPage";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserProfile />} />
        {/* */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
