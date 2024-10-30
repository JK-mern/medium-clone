import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Blog from "./Pages/Blog";
import Blogs from "./Pages/Blogs";
import PublishBlog from "./Pages/PublishBlog";
import Profile from "./Pages/Profile";
import EditBlog from "./Pages/EditBlog";

import useUserStore from "./state/store";
import SignInAlert from "./components/SignInAlert";
function App() {
  const userId = useUserStore((state) => state.id);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signin"
            element={<>{userId.length > 0 ? <Blogs /> : <Signin />}</>}
          >
            {" "}
          </Route>
          <Route
            path="/signup"
            element={<> {userId.length > 0 ? <Blogs /> : <Signup />}</>}
          >
            {" "}
          </Route>
          <Route
            path="/blog/:id"
            element={<>{userId.length > 1 ? <Blog /> : <SignInAlert />} </>}
          >
            {" "}
          </Route>
          <Route path="/" element={<Blogs />}></Route>
          <Route
            path="/publish"
            element={
              <> {userId.length > 0 ? <PublishBlog /> : <SignInAlert />}</>
            }
          ></Route>

          <Route
            path="/profile"
            element={<>{userId.length > 0 ? <Profile /> : <SignInAlert />}</>}
          ></Route>
          <Route
            path="/edit/:id"
            element={<> {userId.length > 0 ? <EditBlog /> : <SignInAlert />}</>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
