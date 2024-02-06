"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Verifica se os campos de e-mail e senha estão preenchidos
    if (email === "" || password === "") {
      alert("Preencha os campos");
      return;
    }

    // Exibe mensagem de carregamento enquanto o login está sendo processado
    setLoading(true);

    try {
      let data = {
        email,
        password,
      };

      await signIn(data);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro de login:", error.message);
      alert(
        "Ocorreu um erro durante o login. Por favor, tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="font-mono font-bold text-white text-7xl tracking-tight">
        Mesa<span className="text-cta">Master</span>
      </h1>
      <div className="mt-8 w-[90%] sm:w-[600px] flex items-center justify-center flex-col py-8 px-6">
        <form onSubmit={handleSubmit} className="w-[90%] flex flex-col">
          <Input
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button loading={loading} type="submit">
            Acessar
          </Button>
        </form>
        <Link href="/signup" className="mt-4 text-white cursor-pointer">
          Não possui uma conta? Cadastre-se
        </Link>
      </div>
    </main>
  );
}
