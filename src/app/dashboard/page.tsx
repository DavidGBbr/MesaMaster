import Header from "@/components/header";
import { FiRefreshCcw } from "react-icons/fi";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="max-w-3xl my-16 mx-auto py-0 px-8 flex justify-between flex-col">
        <div className="flex flex-row">
          <h1 className="text-cta text-2xl font-bold">Últimos pedidos</h1>
          <button className="bg-transparent ml-4 border-none">
            <FiRefreshCcw size={25} color="#3fffa3" />
          </button>
        </div>

        <article className="flex flex-col my-4 mx-0">
          <section className="flex flex-row bg-slate-950 mb-4 items-center rounded-lg">
            <button className="h-14 border-none bg-transparent text-xl text-white flex items-center">
              <div className="w-2 bg-green-500 h-14 rounded-tl-lg rounded-bl-lg mr-4"></div>
              <span>Mesa 1</span>
            </button>
          </section>
        </article>
      </main>
    </>
  );
}
