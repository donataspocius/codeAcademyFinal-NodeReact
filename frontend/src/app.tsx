import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login.tsx";
import Subscribe from "./pages/Subscribe/Subscribe";
import UserContent from "./pages/UserContent/UserContent";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/*" element={<Subscribe />} />
          <Route path="/user-content/*" element={<UserContent />} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
