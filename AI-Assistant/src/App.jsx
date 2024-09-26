import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./componets/error-boundary.jsx";
import LoginPage from "./pages/login-page/login-page.jsx";
import RegisterPage from "./pages/registration-page/registration-page.jsx";
import ThreadViewPage from "./pages/chat-page/chat-page.jsx";
import ThreadsPage from "./pages/main-page/main-page.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <ErrorBoundary>
              <LoginPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/register"
          element={
            <ErrorBoundary>
              <RegisterPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <ThreadsPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/threads/:threadId"
          element={
            <ErrorBoundary>
              <ThreadViewPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
