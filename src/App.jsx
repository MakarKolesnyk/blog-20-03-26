import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UsersPage from "./pages/UsersPage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/postPage";
import UserPage from "./pages/UserPage";
import TagPage from "./pages/TagPage";
import SeacrhPage from "./pages/SeacrhPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserPage />} />
        <Route path="posts" element={<BlogPage />} />
        <Route path="posts/:postId" element={<PostPage />} />
        <Route path="/posts/tag/:tagName" element={<TagPage />} />
        <Route path="/posts/search" element={<SeacrhPage/>} />
        {/* */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
