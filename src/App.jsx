// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
// import Home from "./components/Home";
// import ErrorPage from "./components/ErrorPage";
// import Likes from "./pages/Likes";
// import PlaylistDetail from "./pages/PlaylistDetails";

// function App() {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <MainLayout>
//             <Home />
//           </MainLayout>
//         }
//       ></Route>
//       <Route
//         path="/likes"
//         element={
//           <MainLayout>
//             <Likes />
//           </MainLayout>
//         }
//       ></Route>
//       <Route
//         path="/playlist/:id"
//         element={
//           <MainLayout>
//             <PlaylistDetail />
//           </MainLayout>
//         }
//       />
//       <Route path="*" element={<ErrorPage />} />
//     </Routes>
//   );
// }

// export default App;



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
      {/* Home Page Route */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* Likes Page Route */}
      <Route
        path="/likes"
        element={
          <MainLayout>
            <Likes />
          </MainLayout>
        }
      />

      {/* Playlist Details with Dynamic ID */}
      <Route
        path="/playlist/:id"
        element={
          <MainLayout>
            <PlaylistDetail />
          </MainLayout>
        }
      />

      {/* Fallback for Undefined Routes */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
