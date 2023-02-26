import React from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login.tsx";
import Subscribe from "./pages/Subscribe/Subscribe";
import UserContent from "./pages/UserContent/UserContent";

import { useDispatch, useSelector } from "react-redux";
import { getUserLists } from "./utils/functions";
import { API } from "./constants";
import { selectAuthToken, selectUserId } from "./redux/auth/authSlice";
import { initializeContentState } from "./redux/content/contentSlice";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const authToken = useSelector(selectAuthToken);

  if (userId) {
    // function to get user data from database
    const getLists = async () => {
      const lists = async () =>
        await getUserLists(API.updateUser(userId), authToken);
      const userLists = await lists();
      dispatch(initializeContentState(userLists));
    };
    getLists();
  }

  return (
    // <BrowserRouter>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/*" element={<Subscribe />} />
          <Route element={<PrivateRoute />}>
            <Route path="/user-content/*" element={<UserContent />} />
          </Route>
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </Layout>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
