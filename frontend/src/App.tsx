import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Blog from "./Pages/Blog";
import Blogs from "./Pages/Blogs";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/blog/:id" element={<Blog />}>
            {" "}
          </Route>
          <Route path="/blogs" element= {<Blogs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
