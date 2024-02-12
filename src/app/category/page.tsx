"use client";
import Header from "@/components/header";
import { Input } from "@/components/input";
import { api } from "@/services/apiClient";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Category = () => {
  const [name, setName] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    if (name === "") {
      toast.error("Preencha o nome da categoria");
      return;
    }

    try {
      await api.post("/category", { name });
      toast.success("Categoria criada!");
    } catch (error) {
      console.log("Erro ao cadastrar: " + error);
    } finally {
      setName("");
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-3xl my-16 mx-auto py-0 px-8 flex justify-between flex-col">
        <h1 className="text-cta text-2xl font-bold">Cadastrar categorias</h1>
        <form className="flex flex-col my-4 mx-0" onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Digite o nome da categoria"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

export default Category;
