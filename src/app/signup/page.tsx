import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Link from "next/link";

export const metadata = {
  title: "Faça seu cadastro",
};

export default function SignUp() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="font-mono font-bold text-white text-7xl tracking-tight">
        Mesa<span className="text-cta">Master</span>
      </h1>
      <div className="mt-8 w-[90%] sm:w-[600px] flex items-center justify-center flex-col py-8 px-6">
        <form action="" className="w-[90%] flex flex-col">
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu email" />
          <Input placeholder="Digite sua senha" />
          <Button loading={false} type="submit">
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
