import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Likes from "./pages/Likes";
import PlaylistDetail from "./pages/PlaylistDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/likes"
        element={
          <MainLayout>
            <Likes />
          </MainLayout>
        }
      />

      <Route
        path="/playlist/:id"
        element={
          <MainLayout>
            <PlaylistDetail />
          </MainLayout>
        }
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
