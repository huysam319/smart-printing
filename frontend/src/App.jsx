import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routers, studentRouters, adminRouters} from "./router";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import React from "react";
import { useState } from "react";
function App() {
  return (
    <Router>
      <Routes>
        {routers.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {studentRouters.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute redirecPath="/LoginSV" role="student">
                  <Layout>
                    <Page />
                  </Layout>
                </ProtectedRoute>
              }
            />
          );
        })}
        {adminRouters.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute redirecPath="/loginAdmin" role="admin">
                  <Layout>
                    <Page />
                  </Layout>
                </ProtectedRoute>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
