import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { AuthProvider } from "./Contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

export function AppRoutes() {

  const Private = ({children}) => {
    const { authenticated } = useAuth();

    if (!authenticated) {
      return <Navigate to="/" />
    }

    return children;
  }

    return (
            <BrowserRouter>
              <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn />}></Route>
                    <Route path="/create-account" element={<SignUp />}></Route>
                    <Route path="/home" element={
                        <Private>
                          <Home />
                        </Private>
                      }>
                    </Route>
                </Routes>
              </AuthProvider>
            </BrowserRouter>
        
    );
}
