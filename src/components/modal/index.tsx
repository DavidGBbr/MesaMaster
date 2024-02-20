import Modal from "react-modal";
import { OrderItemProps } from "@/app/dashboard/page";
import { FiX } from "react-icons/fi";

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
}

const ModalOrder = ({
  isOpen,
  onRequestClose,
  order,
  handleFinishOrder,
}: ModalOrderProps) => {
  const customStyles = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%,-50%)",
      backgroundColor: "#020617",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: "transparent", border: 0 }}
      >
        <FiX size={45} color="#f34748" />
      </button>

      <div className="w-80 sm:w-96 md:w-[620px] text-white">
        <h3 className="text-2xl my-4 mx-0 font-bold">Detalhes do pedido</h3>
        <span>
          Mesa: <strong>{order[0]?.order.table}</strong>
        </span>

        {order.map((item) => (
          <section className="flex flex-col my-4 mx-0">
            <span className="font-bold text-green-500">
              {item?.amount} - {item?.product.name}
            </span>
            <span className="mt-2 break-words">
              {item?.product.description}
            </span>
          </section>
        ))}
      </div>

      <button
        className="mt-6 bg-[rgba(0,0,0,40%)] border-none py-2 px-4 rounded-md text-red-500"
        onClick={() => {
          handleFinishOrder(order[0]?.order.id);
        }}
      >
        Concluir pedido
      </button>
    </Modal>
  );
};

export default ModalOrder;
