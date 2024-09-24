import React, { createContext, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/home";
// import Login from "./Pages/login";
// import Registration from "./Pages/registration";
// import ContactUs from "./Pages/contactUs";
// import PageNotFound from "./Pages/pageNotFound-1";
import BlogApp from "./blogComponent/BlogApp";
import Blog from "./blogComponent/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EachBlog from "./blogComponent/EachBlog";

export const BlogContext = createContext();
// function App() {
//   return (
//     <>
//       <BlogApp />
//       <div>
//         {/* <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Registration />} />
//             <Route path="home" element={<Home />} />
//             <Route path="contactUs" element={<ContactUs />} />
//             <Route path="login" element={<Login />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </BrowserRouter> */}
//       </div>
//     </>
//   );
// }

function BlogsProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

function App() {
  return (
    <BlogsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogApp />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<EachBlog />} />
        </Routes>
      </BrowserRouter>
    </BlogsProvider>
  );
}

export default App;
