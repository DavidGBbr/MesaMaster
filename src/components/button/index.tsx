import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

export const Button = ({ children, loading, ...rest }: ButtonProps) => {
  return (
    <button
      className={`max-w-xl bg-cta border-none p-2 text-white rounded-lg duration-200 hover:brightness-110 ${
        loading && "cursor-not-allowed"
      }`}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner color="#fff" size={16} className="animate-spin" />
      ) : (
        <a href="">{children}</a>
      )}
    </button>
  );
};
