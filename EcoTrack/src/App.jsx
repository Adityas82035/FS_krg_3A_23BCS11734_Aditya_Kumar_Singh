import React, { Suspense, lazy } from "react";
import Header from "./components/header";
import { logs } from "./data/logs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./pages/dashboardLayout";
import DashboardAnalytics from "./pages/dashboardAnalytic";

// Lazy load components for code splitting
const Logs = lazy(() => import("./pages/logs"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));
const DashboardSummary = lazy(() => import("./pages/dashboardSummary"));
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header title="EcoTrack - Carbon Footprint Tracker Experiment 1" />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route index element={<DashboardSummary />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="summary" element={<DashboardSummary />} />
            <Route
              path="/logs"
              element={
                <ProtectedRoute>
                  <Logs logs={logs} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
