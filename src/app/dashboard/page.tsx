"use client";
import Header from "@/components/header";
import ModalOrder from "@/components/modal";
import { api } from "@/services/apiClient";
import { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import Modal from "react-modal";

type OrderType = {
  id: string;
  table: string | number;
  status: boolean;
  draft: boolean;
  name: string | null;
};

export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  };
  order: OrderType;
};

export default function Dashboard() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      const response = await api.get("/orders");
      setOrders(response.data);
    };
    getOrders();
  }, []);

  const handleOpenModalView = async (id: string) => {
    const response = await api.get("/order/detail", {
      params: { order_id: id },
    });
    setModalItem(response.data.orders);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleFinishOrder = async (id: string) => {
    await api.patch("/order/finish", {
      order_id: id,
    });

    const response = await api.get("/orders");
    setOrders(response.data);
    setModalVisible(false);
  };

  const handleRefreshOrders = async () => {
    const response = await api.get("/orders");
    setOrders(response.data);
  };

  Modal.setAppElement("body");

  return (
    <>
      <Header />
      <main className="max-w-3xl my-16 mx-auto py-0 px-8 flex justify-between flex-col">
        <div className="flex flex-row">
          <h1 className="text-cta text-2xl font-bold">Últimos pedidos</h1>
          <button
            className="bg-transparent ml-4 border-none"
            onClick={handleRefreshOrders}
          >
            <FiRefreshCcw size={25} color="#3fffa3" />
          </button>
        </div>

        <article className="flex flex-col my-4 mx-0">
          {orders.length === 0 && (
            <span className="text-xl text-gray-600">
              Nenhum pedido aberto foi encontrado...
            </span>
          )}
          {orders?.map((order) => (
            <section
              key={order.id}
              className="flex flex-row bg-slate-950 mb-4 items-center rounded-lg"
            >
              <button
                className="h-14 border-none bg-transparent w-full text-xl text-white flex items-center"
                onClick={() => handleOpenModalView(order.id)}
              >
                <div className="w-2 bg-green-500 h-14 rounded-tl-lg rounded-bl-lg mr-4"></div>
                <span>Mesa {order.table}</span>
              </button>
            </section>
          ))}
        </article>
        {modalVisible && (
          <ModalOrder
            isOpen={modalVisible}
            onRequestClose={handleCloseModal}
            order={modalItem}
            handleFinishOrder={handleFinishOrder}
          />
        )}
      </main>
    </>
  );
}
