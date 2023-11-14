import React, { createContext, useMemo, useState, ReactNode, useEffect } from "react";
import { authApi } from "src/api/authApi";
import { storage } from "src/api/storage";
import { LoginParams, Session, Token } from "src/api/types";

// Определение типа для контекста
interface AuthContextType {
  session: Session | null;
  error: any; //! stub
  setError: any; //! stub
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const initialSession = {
    access: null,
    refresh: null,
    user: null,
  };

  const [session, setSession] = useState<Session | null>(initialSession);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // * set auth state in initial mounting components
  useEffect(() => {
    const initial = async () => {
      await loadInitialSession();
    };
    return () => setLoading(false);
    initial();
  }, []);

  async function loadInitialSession() {
    console.debug("Loading initial session", loading);
    try {
      const session = await storage.getSession();
      if (session && session?.access) {
        setSession(session);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setLoading(false);
      console.debug("End initial session", loading);
    }
  }

  async function login({ email, password }: LoginParams) {
    try {
      const session = await authApi.login({ email, password });
      console.dir(session);
      // await storage.setSession(session);
      // setSession(session);
    } catch (error) {
      console.error("Error login:", error);
      setError(error);
    }
  }

  async function logout() {
    await storage.removeSession();
    setSession(null);
  }

  const memoValues = useMemo(() => ({ session, login, logout, loading, error, setError }), [session, error]);

  return <AuthContext.Provider value={memoValues}>{children}</AuthContext.Provider>;
};
