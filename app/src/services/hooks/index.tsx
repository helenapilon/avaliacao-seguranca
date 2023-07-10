import React, { ReactNode } from "react";
import { AuthProvider } from "./useAuth/useAuth";
import { LogProvider } from "./useLog/useLog";

type AppProviderProps = {
  children: ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <LogProvider>{children}</LogProvider>
    </AuthProvider>
  );
}

export default AppProvider;
