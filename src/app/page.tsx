import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mesa Master - Faça seu login</title>
      </Head>
      <main className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="font-mono font-bold text-white text-7xl tracking-tight">
          Mesa<span className="text-cta">Master</span>
        </h1>
        <div className="mt-8 w-[90%] sm:w-[600px] flex items-center justify-center flex-col py-8 px-6">
          <form action="" className="w-[90%] flex flex-col">
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" />
            <Button loading={false} type="submit">
              Acessar
            </Button>
          </form>
          <a href="" className="mt-4 text-white cursor-pointer">
            Não possui uma conta? Cadastre-se
          </a>
        </div>
      </main>
    </>
  );
}
