import React, { createContext, useMemo, useState, ReactNode, useEffect } from "react";
import { apiAuth } from "src/api/auth";
import { storage } from "src/api/storage";
import { LoginParams, Session } from "src/api/types";

// Определение типа для контекста
interface SessionContextType {
  session: Session;
  login: () => void;
  logout: () => void;
  //   error: any; //! stub
  //   setError: any; //! stub
}

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session>({} as Session);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  // * set auth state in initial mounting components
  useEffect(() => {
    loadInitialSession();
  }, []);

  async function loadInitialSession() {
    // console.debug("Loading initial session", loading);
    try {
      setSession(await storage.getSession());
    } catch (error) {
      console.error("Error loading user data:", error);
    }
    // finally {
    //   setLoading(false);
    //   console.debug("End initial session", loading);
  }

  async function login({ email, password }: LoginParams): Promise<void> {
    try {
      const newSession = await apiAuth.login({ email, password });

      await storage.setSession(newSession);
      setSession(newSession);
    } catch (error) {
      console.error("Error login:", error);
      //   setError(error);
    }
  }

  async function logout(): Promise<void> {
    await storage.removeSession();
    setSession({} as Session);
  }

  //   const memoValues = useMemo(() => ({ session, login, logout, loading, error, setError }), [session, error]);
  const memoValues = useMemo(() => ({ session, login, logout }), [session]);

  return <SessionContext.Provider value={memoValues}>{children}</SessionContext.Provider>;
};
