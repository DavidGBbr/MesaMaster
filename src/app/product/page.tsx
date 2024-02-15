"use client";
import Header from "@/components/header";
import { Input, TextArea } from "@/components/input";
import { api } from "@/services/apiClient";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";

interface Category {
  id: string;
  name: string;
}

const Product = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [categorySelected, setCategorySelected] = useState(0);

  useEffect(() => {
    const getCategories = async () => {
      const response = await api.get("/category");
      setCategories(response.data);
    };

    getCategories();
  }, []);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChangeCategory = (e) => {
    console.log("Categoria selecionada:", e.target.value);
    setCategorySelected(e.target.value);
  };
  return (
    <>
      <Header />

      <main className="max-w-3xl my-16 mx-auto py-0 px-8 flex justify-between flex-col">
        <h1 className="text-cta text-2xl font-bold">Novo produto</h1>
        <form className="flex flex-col my-4 mx-0">
          <label className="w-full h-72 bg-slate-950 mb-4 rounded-md flex justify-center items-center cursor-pointer">
            <span className="z-50 absolute opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-125">
              <FiUpload size={30} color="#fff" />
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleFile}
              />
            </span>
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt="Foto do produto"
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-md"
              />
            )}
          </label>

          <select
            className="mb-4 h-10 rounded-lg bg-slate-950 text-white py-0 px-2 border-[1px] border-gray-600 placeholder:text-slate-300"
            value={categorySelected}
            onChange={handleChangeCategory}
          >
            {categories.map((category, index) => (
              <option key={category.id} value={index}>
                {category.name}
              </option>
            ))}
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
