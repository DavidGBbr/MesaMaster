"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import toast from "react-hot-toast";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.error("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      let data = {
        name,
        email,
        password,
      };

      await signUp(data);

      setName("");
      setEmail("");
      setPassword("");
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
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Cadastrar
          </Button>
        </form>
        <Link href="/" className="mt-4 text-white cursor-pointer">
          Já possui uma conta? Faça login
        </Link>
      </div>
    </main>
  );
}
