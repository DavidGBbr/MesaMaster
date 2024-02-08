"use client";
import { api } from "@/services/apiClient";
import { destroyCookie, setCookie } from "nookies";
import { PropsWithChildren, createContext, useState } from "react";
import toast from "react-hot-toast";

interface UserProps {
  id: string;
  name: string;
  email: string;
}

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export const signOut = () => {
  try {
    destroyCookie(undefined, "@nextauth.token");
    window.location.href == "/";
  } catch {
    console.log("Erro ao deslogar");
  }
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  const signIn = async ({ email, password }: SignInProps) => {
    try {
      const response = await api.post("/session", { email, password });
      const { id, name, token } = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      setUser({
        id,
        name,
        email,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      toast.success("Usuário logado!");
    } catch (error) {
      toast.error("Erro ao fazer login!");
      console.log("Erro ao acessar: " + error);
    }
  };

  const signUp = async ({ name, email, password }: SignUpProps) => {
    try {
      await api.post("/users", { name, email, password });
      toast.success("Usuário cadastrado!");
      window.location.href = "/";
    } catch (error) {
      toast.error("Erro ao cadastrar!");
      console.log("Erro ao cadastrar: " + error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
