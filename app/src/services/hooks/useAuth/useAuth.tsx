import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import userServices from "../../apiServices/user.service";
import { useRouter } from "next/router";

type SignInCredentials = {
  email: string;
  password: string;
};

interface userProps {
  id: number;
  name: string;
  email: string;
  password: string;
}

type AuthContextData = {
  user: userProps;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<userProps>({} as userProps);
  const router = useRouter();

  const loadUser = (id: string) => {
    userServices.get(id).then((res) => {
      const { data } = res;
      setUser(data);
    });
  };

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {
      const response = await userServices.signIn({
        email,
        password,
      });
      const { data } = response;

      sessionStorage.setItem("@login/id", data.id);
      sessionStorage.setItem("@login/email", data.email);
      sessionStorage.setItem("@login/name", data.name);
      sessionStorage.setItem("@login/role", data.role_id);

      setUser(response.data);
      router.push("/");
    } catch (err) {
      console.log("catch signIn");
      console.log(err);
      //@ts-ignore
      alert(err.response.data.message);
    }
  }, []);

  const signOut = useCallback(() => {
    try {
      setUser({} as userProps);
      sessionStorage.removeItem("@login/id");
      sessionStorage.removeItem("@login/email");
      sessionStorage.removeItem("@login/name");
      sessionStorage.removeItem("@login/role");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadUser(sessionStorage.getItem("@login/id") ?? "");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { useAuth };
