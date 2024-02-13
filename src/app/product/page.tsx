import Header from "@/components/header";
import { Input, TextArea } from "@/components/input";
import React from "react";

const Product = () => {
  return (
    <>
      <Header />

      <main className="max-w-3xl my-16 mx-auto py-0 px-8 flex justify-between flex-col">
        <h1 className="text-cta text-2xl font-bold">Novo produto</h1>
        <form className="flex flex-col my-4 mx-0">
          <select className="mb-4 h-10 rounded-lg bg-slate-950 text-white py-0 px-2 border-[1px] border-gray-600 placeholder:text-slate-300">
            <option>Acompanhamentos</option>
            <option>Porções</option>
          </select>

          <Input placeholder="Digite o nome do produto" />
          <Input placeholder="Preço do produto" />

          <TextArea placeholder="Descrição do seu produto..." />

          <button
            type="submit"
            className="bg-green-500 h-10 border-none rounded-md font-bold text-lg duration-300 hover:bg-green-400"
          >
            Cadastrar
          </button>
        </form>
      </main>
    </>
  );
};

export default Product;
