import React from "react";

interface LayoutButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const LayoutButton: React.FC<LayoutButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default LayoutButton;
