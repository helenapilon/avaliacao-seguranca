import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import logService from "services/apiServices/log.service";
import { useAuth } from "../useAuth/useAuth";

type LogContextData = {
  generateLog: (action: string, description: string) => void;
};

type LogProviderProps = {
  children: ReactNode;
};

export const LogContext = createContext({} as LogContextData);

export function LogProvider({ children }: LogProviderProps) {
  const { user } = useAuth();

  const generateLog = (action: string, description: string) => {
    logService
      .create({ action, description, user_id: user.id })
      .then((res) => {
        console.log("log created", res);
      })
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <LogContext.Provider
      value={{
        generateLog,
      }}
    >
      {children}
    </LogContext.Provider>
  );
}

function useLog(): LogContextData {
  const context = useContext(LogContext);

  if (!context) {
    throw new Error("useLog must be used within an LogProvider");
  }

  return context;
}

export { useLog };
