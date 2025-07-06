import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="px-6 py-2 md:px-8 md:py-3 border-2 border-[#E2D609] rounded-full hover:bg-[#E2D609] hover:text-black transition-colors duration-300 font-medium text-sm md:text-base"
    >
      {title}
    </button>
  );
};

export default Button;
