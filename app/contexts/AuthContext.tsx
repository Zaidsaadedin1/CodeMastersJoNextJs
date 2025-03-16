// src/contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { DecodedToken, decodeToken } from "../utils/authDecode";
import { useRouter } from "next/router";

type AuthContextType = {
  user: DecodedToken | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.exp * 1000 > Date.now()) {
        setUser(decoded);
      } else {
        logout();
      }
    }
  }, []);

  const login = (token: string) => {
    // Save to localStorage
    localStorage.setItem("token", token);

    // Set cookie that will be sent with requests
    document.cookie = `token=${token}; path=/; max-age=${
      30 * 24 * 60 * 60
    }; SameSite=Strict`;

    const decoded = decodeToken(token);
    if (decoded) setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
