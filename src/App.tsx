import { Navigate, Route, Routes, useNavigate } from "react-router"

import './App.css'
import SignIn from "./views/SignIn"
import PageNotFound from "./views/PageNotFound"
import SignUp from "./views/SignUp"
import AccountView from "./views/AccountView"
import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./firebase/config"
import NavBar from "./components/NavBar"

// protected route, account page cannot be access unless signed in
function ProtectedRoute({ children, isAuthenticated }: { children: JSX.Element, isAuthenticated: boolean }) {
  if (isAuthenticated === undefined) return <p>Loading...</p>;
  return isAuthenticated ? children : <Navigate to="/sign-in" />;
}

// main App component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      if (user) {
        navigate("/account");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
    navigate("/sign-in");
  };

  return (
    <>
      <NavBar isAuthenticated={!!isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route 
          index 
          element={<SignIn />}
        />
        <Route 
          path="sign-in" 
          element={<SignIn />}
        />
        <Route 
          path="sign-up" 
          element={<SignUp />}
        />
        <Route 
          path="account" 
          element={
            <ProtectedRoute isAuthenticated={!!isAuthenticated}>
              <AccountView />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div className="my-4"><p className="text-xs">This content is developed by <a href="https://github.com/rarya618">Russal Arya</a>, modified by <a href="https://github.com/liutkwilliam">William Liu</a>.</p></div>
    </>
  )
}

export default App
