import React, { createContext, useMemo, useState, ReactNode, useEffect } from "react";
import { apiAuth } from "src/api/auth";
import { storage } from "src/api/storage";
import { LoginParams, Session } from "src/api/types";

// Определение типа для контекста
export interface SessionContextType {
  session: Session;
  login: (params: LoginParams) => Promise<void>;
  logout: () => Promise<void>;
  //   error: any;
  //   setError: any;
}

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session>({} as Session);
  const [errors, setErrors] = useState({ email: "", password: "" });

  // * set auth state in initial mounting components
  useEffect(() => {
    loadInitialSession();
  }, []);

  async function loadInitialSession() {
    // console.debug("Loading initial session", loading);
    try {
      setSession(await storage.getSession());
    } catch (errors) {
      console.error("Error loading user data:", errors);
    }
  }

  async function login({ email, password }: LoginParams): Promise<void> {
    try {
      const newSession = await apiAuth.login({ email, password });

      await storage.setSession(newSession);
      setSession(newSession);
    } catch (errors) {
      console.error("Error login:", errors);
      await storage.setSession({} as Session);
      setErrors(errors);
    }
  }

  async function logout(): Promise<void> {
    await storage.removeSession();
    setSession({} as Session);
  }

  const memoValues = useMemo(() => ({ session, login, logout, errors, setErrors }), [session, errors, setErrors]);

  return <SessionContext.Provider value={memoValues}>{children}</SessionContext.Provider>;
};
